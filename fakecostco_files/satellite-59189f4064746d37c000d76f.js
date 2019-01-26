// new reco display architecture

(function($, w) {

    window.merkle = window.merkle || {
        log: function(o) {
            merkle.h.push(o)
        },
        h: []
    };
    merkle.reco = merkle.reco || {};


    merkle.isInViewport = function(el) {
        // jquery object
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    merkle.visibilityListenerReg = false;
    merkle.visibilityTimerId = 0;

    merkle.checkVisibleTimer = function() {
        // wait for 1000ms after the last scroll message is received
        // before checking.
        if ( merkle.visibilityTimerId != 0 ) {
            // hasn't been long enough yet
            clearTimeout( merkle.visibilityTimerId );
        }
        merkle.visibilityTimerId = setTimeout( merkle.checkVisibleHandler, 1000 );
    }

    merkle.checkVisibleHandler = function() {
        var elements = $("[on-visible]"); // list of elements to trigger when they are visible 
        if ( elements.length == 0 ) {
            // all items are visible so we can stop listening
            $(window).off('DOMContentLoaded load resize scroll',  merkle.checkVisibleTimer );
            merkle.visibilityListenerReg = false;
            return;
        }
        $(elements).each( function() {
            if ( merkle.isInViewport(this) ) {
                $(this).trigger(  "firstVisible" );
                $(this).removeAttr( "on-visible" );
            }
        })
    }

    merkle.onFirstTimeVisible = function( selector, callback ) {
        if ( ! merkle.visibilityListenerReg ) {
            // starting watching for window scrolling
            $(window).on('DOMContentLoaded load resize scroll',  merkle.checkVisibleTimer );
            merkle.visibilityListenerReg = true;
        }
        $(selector).attr("on-visible", "true");
        $(selector).on("firstVisible", function (e) {
            // callback comes from closure
            callback.call( this, e );
        });
    }

    // custom initialization code
    merkle.reco.custominit = {
        treasureHunt: function(reco) {
            reco.cfg["criteria.title"] = '<a href="https://www.costco.com/CatalogSearch?dept=All&pageSize=96&keyword=whilesupplieslast">Treasure Hunt</a> Featured Items';
        },
        randomize: function(reco) {
            try {
                var ar = reco.rcmd;
                for ( var i = 0 ; i < reco.rcmd.length ; i++ ) {
                    reco.rcmd[i].order = Math.random();
                }
                reco.rcmd.sort( function(a, b) {
                    return a.order - b.order;
                });
            } catch(e){} // OK to fail
        },
        interleaveCats: function(reco) { 
            try {

                var seen = { }; // keep an integer for count of each category we've seen
                for ( var i = 0 ; i < reco.rcmd.length ; i++ ) {
                    var p = reco.rcmd[i];
                    p.order = ++seen[p.newCat]; // increment the number of times we've seen this cateegory
                    if ( isNaN(p.order) ) { // if it's the first time we get NaN...
                        p.order = seen[p.newCat] = 0; // ...so start at 0
                    }
                }
                reco.rcmd.sort( function(a, b) { // now sort objects array by the order it appeared within each category
                    return a.order - b.order;
                });

            } catch(e){} // OK to fail
        }
    }

    merkle.reco.displayResults = function(reco) {

        var options = {
            placementId: "mbox-recommend",
            slidesToShow: 6,
            responsiveSlidesToShow: 3,
            showPricePromo: false
        }

        _satellite.notify( JSON.stringify( reco.cfg, null, 4 ) );

        if (reco.options) {
            $.extend(options, reco.options);
        }

        var cin = options.cin; // custom init function
        if (typeof cin == "string" && cin != "") {
            var cins = cin.split(","); // can be csv
            for (var icin = 0; icin < cins.length; icin++) {
                var fn = merkle.reco.custominit[cins[icin]];
                if (typeof fn == "function") {
                    fn(reco);
                }
            }
        }

        var plaId = options.placementId;
        var plaSel = "#" + plaId;

        reco.rcmd = reco.rcmd.slice(0, 12);

        var title = reco.cfg["criteria.title"];
        if (pmcRecc.thisIsCAFr) {
            if (options.frt) { // french title
                title = options.frt;
            } else {
                var titleMap = {
                    "Similar Products": "Articles similaires",
                    "Recently Viewed Products": "Consulté(s) récemment",
                    "Complete The Look": "Complétez le style",
                    "Related Products": "Articles connexes",
                    "Members Also Considered": "Aussi considérés par les membres",
                    "Top Selling Products": "Articles les plus vendus",
                    "Ultimately Purchased": "Acheté(s) en définitive",
                    "Members Ultimately Purchased": "Acheté(s) en définitive par les membres"
                };
                if (titleMap[title] != undefined) {
                    title = titleMap[title];
                }
            }
        }

        var titleHtml = '<h3 style="padding-top:10px;margin-top:10px;border-top:1px solid #ddd;font-weight:bold">' + title + '</h3>'
        // title = '<a href="/CatalogSearch?dept=All&keyword=whilesupplieslast">Treasure Hunt</a> Featured Items';
        if (options.titleHtml != undefined) {
            titleHtml = options.titleHtml;
        }

        var c = $(plaSel);
        var f = [];

        $(c).hide();

        f.push(titleHtml);

        options.showPricePromo = false;
        try {
            options.showPricePromo = sessionStorage.getItem("merkle-show-pp") == "yes";
        } catch(e){}

        for (var i = 0; i < reco.rcmd.length; i++) {

            prod = reco.rcmd[i];
            if ( prod == undefined ) { // REVIEW: randomize?
                continue;
            }

            if (pmcRecc.thisIsCAFr) {
                prod.name = prod.frName;
                prod.merch_desc = prod.frMessage;
            }
            prod.ratingClip = 18 * prod.rating.trim();
            prod.reviews = prod.reviews.length ? prod.reviews.trim() : 0;

            // if there is no URL or name, skip it
            // this is particulary important in FR, in case there is no translation
            if (prod.linkURL.trim() == "" || prod.name.trim() == "")
                continue; // skip empty entry

            if ( options.showPricePromo ) { // use hooklogic style template
                prod.price = "$" + prod.price;

                function isUserMember() {
                    try {
                        if ( COSTCO.util.getMemberCookie ) {
                            var mi = COSTCO.util.getMemberCookie();
                            return mi.costcoMember == true;
                        }
                    } catch ( ex ) { };
                    return false;
                }

                // template uses: 
                // linkURL
                // imageURL
                // price
                // merch_desc
                // name
                // ratingClip
                // reviews
                // rating
                // reviews
                var t = prod;

                var o = '<div class="hl-product thumbnail"> <a href="' + t.linkURL + '" class="hl-anchor" style="position: absolute; height: inherit; width: inherit;" data-bi-sku="' + t.sku + '"></a>';
                o += '<img class="hl-image img-responsive" id="image' + i + '" alt="' + t.name + '" src="' + t.imageURL + '" /> <div class="caption"> <div class="hl-price-container">';

                if (options.fBadgeSponsored === true && prod.sponsored == "1") {
                    // modify the template with sponsored designation before promo message
                    o += '<p class="promo">Sponsored</p>';
                }

                if ( t.member_only == "True"  ) {
                    o += ' <p class="member-only"> <span class="co-c"></span>Member Only Item</p>'; // REVIEW: fench
                    if ( isUserMember() ) { 
                        o += ' <h3 class="hl-price price">' + t.price + "</h3> ";
                    }
                } else {
                     o += ' <h3 class="hl-price price">' + t.price + "</h3> ";
                }
                o += " </div> ";
                if ( t.merch_desc && t.merch_desc != "&nbsp;" ) {
                    o += ' <p class="promo">' + t.merch_desc + "</p> ";
                }
                o += ' <p class="description" id="description1"> <a href="' + t.linkURL + '" data-bi-sku="' + t.sku + '">' + t.name + '</a> </p> </div> <img style="display: none;" alt="" /> <div class="ratings"> <div class="stars"> <ul class="stars overlay" style="clip: rect(0,';
                t.rating = parseFloat( t.rating );
                if ( t.rating == NaN ) {
                    t.rating = 0;
                }
                o += t.rating > -1 ? Math.round(90 * t.rating / 5) : "0";
                o += 'px,20px,0);"> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> </ul> <ul class="stars underlay"> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> <li><span class="fi-star"></span></li> </ul> </div>';
                o += '<div class="ratings-number">(' + (t.reviews || 0) + ")</div> </div></div>";

                f.push(o);

            } else {
                prod.price = "";
                prod.merch_desc = "";

                var ht = COSTCO.util.tmpl("tmpl_product_tile", prod);
                ht = ht.replace('<a class="thumbnail', '<a class="thumbnail rrTile' )
                if (options.fBadgeSponsored === true && prod.sponsored == "1") {
                    // modify the template with sponsored designation before promo message
                    ht = ht.replace('<p class="promo"', '<p class="promo">Sponsored</p><p class="promo"');
                }
                ht = ht.replace( '<a ', '<a data-bi-sku="' + prod.sku + '" ' )
                f.push(ht);
            }
        }

        c.prepend(f.join(""));

        if ( options.showPricePromo ) {
            if ( $("#merkle-carousel-css").length == 0 ) {
                $("head").append('<style id="merkle-carousel-css" type="text/css">  .mkl-carousel { display:none } .mkl-carousel.slick-initialized { display:block }  </style>');
            }
            c.find(".hl-product").wrapAll('<div class="mkl-carousel feature-carousel" id="' + plaId + '-carousel" />');
        } else {
            c.find(".rrTile").wrapAll('<div class="mkl-carousel feature-carousel" id="' + plaId + '-carousel" />');
        }

        c.addClass("fixed-container product-list feature-carousel-container");
        COSTCO.util.carousel( plaSel + "-carousel", {
            dots: !0,
            arrows: !0,
            infinite: !1,
            slidesToShow: options.slidesToShow,
            slidesToScroll: options.slidesToShow,
            autoplay: !1,
            lazyLoad: "ondemand",
            responsive: [{
                breakpoint: 667,
                settings: {
                    slidesToShow: options.responsiveSlidesToShow,
                    slidesToScroll: options.responsiveSlidesToShow,
                    dots: !0,
                    infinite: !1,
                    arrows: !1
                }
            }]
        });
        COSTCO.util.display_member_prices();

        $(plaSel).css("display", 'block');

        // "mboxvalue": "",
        // "campaign.name": "US Home PUWYLO (COS-606)",
        // "campaign.id": "243804",
        // "campaign.recipe.name": "8578-25705-1",
        // "campaign.recipe.id": "1",
        // "offer.name": "us_home_puwylo_cos-606-8578-25705-1535135744614",
        // "offer.id": "509048",
        // "criteria.title": "Recently Viewed Products",
        // "algorithm.name": "Recently Viewed Products",
        // "algorithm.dayCount": "1"

        var $placement = $(plaSel);
        $placement.attr("data-bi-track", "reco");
        // $(plaSel).attr("data-reco-act", reco.cfg["campaign.name"] );
        // $(plaSel).attr("data-reco-exp", reco.cfg["algorithm.name"] );
        // use ID
        $placement.attr("data-reco-act", reco.cfg["campaign.id"] );
        $placement.attr("data-reco-exp", reco.cfg["offer.id"] );
        $placement.find("a").attr("data-reco-impression","yes");

        function fireImpressions( recodiv ) {
            console.log("firing impressions");
            try {
                var $elements = $(recodiv).find("a.slick-active[data-reco-impression]" );
                if ( $elements.length > 0 ) {
                    oPTM1.pmc().targetRecoImpression( recodiv, $elements );
                    $elements.removeAttr("data-reco-impression");
                }
            } catch( e ) { }
        }

        merkle.onFirstTimeVisible( plaSel, function(){ fireImpressions(this) } );
        $( plaSel + "-carousel" ).on("afterChange", function(){ fireImpressions( $(this).closest("[data-bi-track]") ) } );

        // $(window).trigger('resize'); // the div doesn't seem to always be in the correct layout until it is displayed

    }

    // loaded at top of page, we should be able to disable RR
    if (typeof rrData != "undefined") {
        // disable the RR results
        rrData.rrEnabled = false;
    }

    window.pmcRecc = {};

    pmcRecc.isStaging = function() {
        if (typeof localStorage.getItem('pmc_force_hostname') !== "string") {
            if (localStorage.getItem('sdsat_stagingLibrary') === "true") {
                return true;
            }
        }
        return !("www.costco.com|m.costco.com|www.costco.ca|m.costco.ca".indexOf(window.location.hostname) > -1);
    }

    pmcRecc.thisIsPDP = window.location.pathname.indexOf(".product.") > -1;
    pmcRecc.thisIsCategory = (typeof PageAnalyticsInfo == "object" && PageAnalyticsInfo.pageType == "Category")
    pmcRecc.thisIsCA = window.location.host.indexOf(".ca") > -1;
    pmcRecc.thisIsCAFr = false;

    pmcRecc.formatSlickSlide = function() {

        // review: previous calls of this function used two arguments, no longer needed

        var rd = $("#reccData");
        if (rd.length == 0)
            return;

        var title = $("#reccData").attr("data-criteria-title")

        if (title.toLowerCase().indexOf("richrelevance") > -1) {
            pmcRecc.showRichRelevance();
            return;
        }

        var c = $("#atr-placement");
        var f = [];

        $(c).hide();

        if (pmcRecc.thisIsCAFr) {
            var titleMap = {
                "Similar Products": "Articles similaires",
                "Recently Viewed Products": "Consulté(s) récemment",
                "Complete The Look": "Complétez le style",
                "Related Products": "Articles connexes",
                "Members Also Considered": "Aussi considérés par les membres",
                "Top Selling Products": "Articles les plus vendus",
                "Ultimately Purchased": "Acheté(s) en définitive",
                "Members Ultimately Purchased": "Acheté(s) en définitive par les membres"
            };
            if (titleMap[title] != undefined) {
                title = titleMap[title];
            }
        }

        f.push('<h3 style="padding-top:10px;margin-top:10px;border-top:1px solid #ddd;font-weight:bold">' + title + '</h3>');
        $("#mbox-recommend").css("border-bottom", "1px solid #ddd")

        $(rd).find("> div").each(function(i) {

            prod = {};
            prod.id = $(this).find(".reccId").html();
            if (pmcRecc.thisIsCAFr) {
                prod.name = $(this).find(".reccFrName").html();
                prod.msg = $(this).find(".reccFrMsg").html();
            } else {
                prod.name = $(this).find(".reccName").html();
                prod.msg = $(this).find(".reccMsg").html();
            }
            prod.pageUrl = $(this).find(".reccPageUrl").html();
            if (window.location.hostname.indexOf("m.costco") > -1) {
                prod.pageUrl = prod.pageUrl.replace("www.costco", "m.costco");
            } else {
                prod.pageUrl = prod.pageUrl.replace("m.costco", "www.costco"); // just in case
            }
            prod.pageUrl = prod.pageUrl; //.split('"').join("&quot;"); // escape quotation marks - cat sould already be encoded
            prod.thumbUrl = $(this).find(".reccThumbUrl").html();
            prod.memberOnly = $(this).find(".reccMemberOnly").html();
            prod.rating = $(this).find(".reccRating").html();
            prod.reviews = $(this).find(".reccReviews").html();

            // if there is no URL or name, skip it
            // this is particulary important in FR, in case there is no translation
            if (prod.pageUrl.trim() == "" || prod.name.trim() == "")
                return; // skip blank entries

            var linkURL = prod.pageUrl.trim();

            var g = $(COSTCO.util.tmpl("tmpl_product_tile", {
                linkURL: linkURL,
                imageURL: prod.thumbUrl,
                price: "",
                merch_desc: "", //prod.msg.trim(),
                name: prod.name.trim(),
                rating: prod.rating.trim(),
                ratingClip: 18 * prod.rating.trim(),
                reviews: prod.reviews.length ? prod.reviews.trim() : 0
            }));
            g.addClass("rrTile");
            f.push(g.prop("outerHTML"))

        })

        slidesToShow = 6;
        slidesToScroll = 6;
        responsiveSlidesToShow = 3;
        responseSlidesToScroll = 3;

        c.prepend(f.join(""));
        c.find(".rrTile").wrapAll('<div class="feature-carousel" id="atr-carousel" />');
        c.addClass("fixed-container product-list feature-carousel-container");

        COSTCO.util.carousel("#atr-carousel", {
            dots: !0,
            arrows: !0,
            infinite: !1,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            autoplay: !1,
            lazyLoad: "ondemand",
            responsive: [{
                breakpoint: 667,
                settings: {
                    slidesToShow: responsiveSlidesToShow,
                    slidesToScroll: responseSlidesToScroll,
                    dots: !0,
                    infinite: !1,
                    arrows: !1
                }
            }]
        });
        COSTCO.util.display_member_prices();

        $("#atr-placement").css("display", 'block');
        $(window).trigger('resize'); // the div doesn't seem to always be in the correct layout until it is displayed
    };

    pmcRecc.fixUpPDPOOS = function() {

        var t = $("#recoTitle").first().html(); // works even if there are two
        if (t.indexOf("$key.id") > -1) {
            var prodId = window.location.pathname.split(".product.")[1].split(".html")[0];
            t = "Item #" + prodId + " Not Found";
        }
        $("h1").first().html($("#recoTitle").html());
        $(".server-error").removeClass("server-error");
        // $("#main_content_wrapper").css("visibility", "visible");
    };

    pmcRecc.initRecos = function() {

        // fix up an error in the tile template
        var scriptTmpl = $("#tmpl_product_tile");
        var htmlTmpl = scriptTmpl.text();
        htmlTmpl = htmlTmpl.replace('onerror=\"this.onerror=\\\"\\\";this.src=\\\"\/wcsstore\/CostcoGLOBALSAS\/images\/unavailable_350.png\\\"\"',
            'onerror="this.onerror=&#39;&#39;;this.src=&#39;/wcsstore/CostcoGLOBALSAS/images/unavailable_350.png\&#39;"'
        );
        scriptTmpl.text(htmlTmpl);

        // in case it wasn't available on page load
        pmcRecc.thisIsCategory = (typeof PageAnalyticsInfo == "object" && PageAnalyticsInfo.pageType == "Category");
        var shoppedCategoryTop = "";
        var shoppedCategorySecondary = "";
        var shoppedCategoryFull = "";

        function linkTag(l) {
            l = l.replace("https://", "").replace("http://", "");
            var ich = l.indexOf("/");
            if (ich == -1)
                return "";
            l = l.slice(ich + 1);
            return l.replace(".html", "");
        }

        function getCategories() {

            var bc = $(".crumbs li a");
            var cats = [];
            $.each(bc, function(i) {
                if (i > 0)
                    cats.push(linkTag($(this).attr("href")));
            });
            if (pmcRecc.thisIsCategory) {
                cats.push(linkTag(window.location.pathname));
            }
            if (cats.length > 0)
                shoppedCategoryTop = cats[0];
            if (cats.length > 1)
                shoppedCategorySecondary = cats[1];
            shoppedCategoryFull = cats.join(":");
        }

        pmcRecc.thisIsCAFr = wcs.locale == 'fr_CA';

        function catAffinity() {
            function reExtract(s, re) {
                return s.match(re)[1]; // undefined if not found
            }
            var cat = "";
            var href = $("#crumbs_ul li:nth-child(3) a").attr("href");
            if (href != undefined)
                cat = reExtract(href, /[com|ca]\/(.*)\.html/);
            return cat ? cat : "";
        }

        // if ( typeof rrData != "undefined" ) {
        //   // hide the RR results
        //   // rrData.rrEnabled = 0;
        // }

        function transformRR(selector) {
            // if (selector == undefined) {
            //     selector = "#rr-placement:first"
            // }
            // wrap RR div and hide, the a/b test might display it later
            // $("#rr-placement:first").wrap('<div id="rr-wrapper" style="display:none"></div>'); // style="display:none"
            // $("#rr-wrapper").before('<div id="mbox-recommend"></div>');
            $("#rr-placement").before('<div id="mbox-recommend"></div>');
        }

        var cty = window.location.host.indexOf(".ca") > -1 ? "-ca" : "";

        // ZERO SEARCH RESULTS

        if (window.location.pathname == "/CatalogSearch") {

            if ($('#no-results-suggestions').length == 1) {
                $("#no-results-find-warehouse").after('<div id="mbox-recommend"></div>');

                // mboxDefine('mbox-recommend', 'mbox_recommend_zsr' + cty);
                // mboxUpdate("mbox_recommend_zsr" + cty);
                adobe.target.getOffer({
                    mbox: 'mbox_recommend_zsr' + cty,
                    success: function(response) {
                        if (response.length != 1)
                            return;
                        var reco = JSON.parse(response[0].content);

                        var rcmd = reco.rcmd;

                        reco.rcmd = reco.rcmd.slice(0, 12);
                        // reco.options = $.extend(reco.options || {}, {
                        //     titleHtml: '<h3 style="font-weight:bold">Recently Viewed Products</h3>'
                        // });

//                      $("#rr-placement").before('<div style="border-top:1px solid #ddd;margin-top:20px" id="mbox-recommend"></div>');
                        $("#no-results-find-warehouse").after('<div id="mbox-recommend"></div>');

                        merkle.reco.displayResults(reco);
                    },
                    error: function(status, error) {
                        console.error("get offer failed", JSON.stringify(error));
                    }
                });

                return;
            }
        }

        // PRODUCTION DESCRIPTION PAGE

        if (pmcRecc.thisIsPDP) { // product page
            var prodId = '';

            // // out of stock page or out of stock overlay
            // if ($(".server-error:visible").length == 1 || $('img[src*="OOS-overlay-en.png"]').length == 1) {

            //   // $("#main_content_wrapper").css("visibility", "hidden");

            //   prodId = window.location.pathname.split(".product.")[1].split(".html")[0];

            //   // window.location.href = "/CatalogSearch?keyword=" +  prodId + "&pageSize=96&oos=1" + prodId;
            //   // return;

            //   $("#main_content_wrapper").append('<div id="mbox-recommend"></div>');
            //   mboxDefine('mbox-recommend', 'mbox_recommend_no_inventory' + cty,
            //     'entity.id=' + prodId,
            //     'entity.inventory=' + 0
            //   );
            //   mboxUpdate("mbox_recommend_no_inventory" + cty);
            //   return;
            // }

            transformRR();

            var inventory = 1;

            if (typeof digitalData == "object") {
                prodId = digitalData.product[0].id;
            } else {
                prodId = window.location.pathname.split(".product.")[1].split(".html")[0];
                // probably an out of stock item...
                if ($("#not_found_body").length != 0 || $(".server-error:visible").length == 1 || $('img[src*="OOS-overlay-en.png"]').length == 1) {
                    // ...but abundant caution in case data layer is just broken but prod in stock
                    inventory = 0;
                }
            }

            // place collections mbox

            if (!pmcRecc.thisIsCA) {
                try {

                    pdpMboxName = "mboxPdpCollections";
                    // REVIEW: verify category
                    $(".col-md-4").prepend('<div id="mbox-recommend-collections"></div>');
                    // mboxDefine('mbox-recommend-collections', pdpMboxName, 'entity.id=' + prodId);
                    // mboxUpdate(pdpMboxName);

                    adobe.target.getOffer({
                        mbox: 'mboxPDPAccessories',
                        params: {
                            "entity.id": prodId
                        },
                        success: function(response) {
                            if (response.length != 1)
                                return;
                            var reco = JSON.parse(response[0].content);
                            var rcmd = reco.rcmd;
                            if (reco.rcmd.length < 4) {
                                return; // if less than 4 previously viewed products, don't show it
                            }

                            var title = recoData.recKey["collectionName"];
                            var collectionUrl = recoData.recKey["collectionUrl"];
                            var titleHtml = title;
                            if (collectionUrl.length > 0 ) {
                               titleHtml = '<h3 style="padding-top:10px;margin-top:10px;font-weight:bold">More From <a href="' + collectionUrl + '">' + title + '</a></h3>';
                            } else {
                              titleHtml = '<h3 style="padding-top:10px;margin-top:10px;font-weight:bold">More From ' + title + '</h3>';
                            }

                            reco.rcmd = reco.rcmd.slice(0, 10);
                            reco.options = $.extend(reco.options || {}, {
                                "placementId": "mbox-recommend-collections",
                                titleHtml: titleHtml
                            });
                            merkle.reco.displayResults(reco);
                        },
                        error: function(status, error) {
                            console.error("get offer failed", JSON.stringify(error));
                        }
                    });

                } catch (ex) {}
            }

            var pdpMboxName = 'mboxRecommendPDP' + cty;
            // if ( pmcRecc.isStaging() && cty == "" ) {
            //   // temporary-- use next version of PDP in staging
            //   pdpMboxName = 'mboxRecommendPDP-seq';
            // }

            // determine shopped categories from breadcrumbs
            getCategories();

            if (true) { // inventory == 0 || pmcRecc.thisIsCAFr || window.location.hostname.indexOf("m.costco") > -1 || pmcRecc.isStaging() ) {
                // don't report product data, just inventory
                // mboxDefine('mbox-recommend', pdpMboxName,
                //     'entity.id=' + prodId,
                //     'entity.inventory=' + inventory,
                //     'categoryId=' + catAffinity(),
                //     'user.categoryId=' + catAffinity(),
                //     'profile.shoppedCategoryTop=' + shoppedCategoryTop,
                //     'profile.shoppedCategorySecondary=' + shoppedCategorySecondary,
                //     'profile.shoppedCategoryFull=' + shoppedCategoryFull,
                //     'profile.shopped-' + shoppedCategoryTop + "=1",
                //     'profile.shopped-' + shoppedCategorySecondary + "=1",
                //     'profile.shoppedProdID=' + prodId
                // );
                // mboxUpdate(pdpMboxName);

                params = { 
                    'entity.id': prodId,
                    'entity.inventory': inventory,
                    // 'categoryId': catAffinity(),
                    // 'user.categoryId': catAffinity(),
                    'profile.shoppedCategoryTop': shoppedCategoryTop,
                    'profile.shoppedCategorySecondary': shoppedCategorySecondary,
                    'profile.shoppedCategoryFull': shoppedCategoryFull,
                    'profile.shoppedProdID': prodId
                }
                params[ 'profile.shopped-' + shoppedCategoryTop ] = "1";
                params[ 'profile.shopped-' + shoppedCategorySecondary ] = "1";

                adobe.target.getOffer({
                    mbox: pdpMboxName,
                    params: params,
                    success: function(response) {
                        if (response.length != 1)
                            return;
                        var reco = JSON.parse(response[0].content);
                        var rcmd = reco.rcmd;

                        if (reco.rcmd.length < 4) {
                            return; // if less than 4 previously viewed products, don't show it
                        }
                        merkle.reco.displayResults(reco);
                    },
                    error: function(status, error) {
                        console.error("get offer failed", JSON.stringify(error));
                    }
                });
            }

            // only show 2nd row on appliances pages
            try {
                var catref = $($('#crumbs_ul li a')[1]).attr("href");
                catref = catref.split(".com/")[1].replace(".html", "");
                if ("appliances|refrigerator-event|washer-dryer-event".indexOf(catref) > -1) {
                    pdpMboxName = "mboxRecommendPDP2ndRow";

                    $("#rr-placement").before('<div id="mbox-recommend-row2"></div>');
                    // mboxDefine('mbox-recommend-row2', pdpMboxName, 'entity.id=' + prodId);
                    // mboxUpdate(pdpMboxName);

                    adobe.target.getOffer({
                        mbox: pdpMboxName,
                        params: {
                            "entity.id": prodId
                        },
                        success: function(response) {
                            if (response.length != 1)
                                return;
                            var reco = JSON.parse(response[0].content);

                            $("")
                            reco.options = $.extend(reco.options || {}, {
                                "placementId": "mbox-recommend-row2"
                            });
                            merkle.reco.displayResults(reco);
                        },
                        error: function(status, error) {
                            console.error("get offer failed", JSON.stringify(error));
                        }
                    });

                }
            } catch (ex) {}

            // show accessories
            adobe.target.getOffer({
                mbox: 'mboxPDPAccessories',
                params: {
                    "entity.id": prodId,
                    "fields": "newCategory",
                    "recoCount": "50"
                },
                success: function(response) {
                    if (response.length != 1)
                        return;
                    var reco = JSON.parse(response[0].content);
                    var rcmd = reco.rcmd;
                    if (reco.rcmd.length < 4) {
                        return; // if less than 4 previously viewed products, don't show it
                    }
                    reco.rcmd = reco.rcmd.slice(0, 10);
                    reco.options = $.extend(reco.options || {}, {
                        "placementId": "mbox-reco-accessories",
                        "cin": "interleaveCats"
                    });
                    $("#product-vendor-content .col-xs-12").prepend('<div id="mbox-reco-accessories"></div>');
                    merkle.reco.displayResults(reco);
                },
                error: function(status, error) {
                    console.error("get offer failed", JSON.stringify(error));
                }
            });

            return;

            // send updated product data back to target
            // var thumbnailUrl = "", productName = "", pageUrl = "", categoryId = "", rating = "";
            // try {
            //   productName = digitalData.product[0].name;
            //   thumbnailUrl = products[0][0].img_url;
            //   pageUrl = $('link[rel="canonical"]').attr('href');
            //   categoryId = $('[name="categoryId"]').val() || "";
            //   rating = $('#header-bazaar-voice meta[itemProp="ratingValue"]').attr("content") || "";
            // } catch(ex) { }

            // mboxDefine('mbox-recommend', pdpMboxName,
            //   'entity.id=' + prodId,
            //   'entity.inventory=' + inventory,
            //   'entity.name=' + productName,
            //   'entity.pageUrl=' + pageUrl,
            //   'entity.thumbnailUrl=' + thumbnailUrl,
            //   'entity.categoryId=' + categoryId,
            //   'entity.rating=' + rating,
            //   'profile.shoppedCategoryTop=' + shoppedCategoryTop,
            //   'profile.shoppedCategorySecondary=' + shoppedCategorySecondary,
            //   'profile.shoppedCategoryFull=' + shoppedCategoryFull,
            //   'profile.shopped-' + shoppedCategoryTop + "=1",
            //   'profile.shopped-' + shoppedCategorySecondary + "=1",
            //   'profile.shoppedProdID=' + prodId
            // );
            // mboxUpdate(pdpMboxName);

            // return;
        }

        // mboxRecommendCategory
        if (typeof PageAnalyticsInfo == "object" && PageAnalyticsInfo.pageType == "Category") {

            transformRR();

            var categoryId = 0;
            try {
                categoryId = rrData.categoryId
            } catch (ex) {}

            getCategories();

            var defineArgs = [
                'mbox-recommend',
                'mboxRecommendCategory' + cty,
                'user.categoryId=' + catAffinity(),
                'categoryId=' + catAffinity(),
                // 'entity.categoryId=' + categoryId,
                'profile.shoppedCategoryTop=' + shoppedCategoryTop,
                'profile.shoppedCategorySecondary=' + shoppedCategorySecondary,
                'profile.shoppedCategoryFull=' + shoppedCategoryFull,
                'profile.shopped-' + shoppedCategoryTop + "=1"
            ];
            if (shoppedCategorySecondary.length > 0) {
                defineArgs.push('profile.shopped-' + shoppedCategorySecondary + "=1");
            }

            mboxDefine.apply(null, defineArgs);
            mboxUpdate("mboxRecommendCategory" + cty);
            return;
        }

        // CheckoutCartView

        if (window.location.pathname == "/CheckoutCartView") {
            var excludeProdIds = ""
            var mboxName = "mboxRecommendCart";
            if (digitalData.cart.products != undefined && digitalData.cart.products.length > 0) {
                for (var i = 0; i < digitalData.cart.products.length; i++) {
                    currentProd = digitalData.cart.products[i];
                    excludeProdIds += "," + currentProd.id
                }
            } //else if ( ! pmcRecc.thisIsCA ) {
            //mboxName = "mboxRecommendCartEmpty";
            //}
            excludeProdIds = excludeProdIds.slice(1); // remove first comma

            // transformRR();
            // mboxDefine('mbox-recommend', mboxName + cty); // any context we can provide?
            // mboxUpdate(mboxName + cty,
            //     'excludedIds=' + excludeProdIds
            // );
            adobe.target.getOffer({
                mbox: mboxName + cty,
                params: {
                    excludedIds: excludeIds
                },
                success: function(response) {
                    if (response.length != 1)
                        return;
                    var reco = JSON.parse(response[0].content);

                    var rcmd = reco.rcmd;

                    reco.rcmd = reco.rcmd.slice(0, 12);
                    reco.options = $.extend(reco.options || {}, {
                        title: 'Recently Viewed Products'
                    });

                    $("#rr-placement").before('<div style="margin-top:20px" id="mbox-recommend"></div>');
                    merkle.reco.displayResults(reco);
                },
                error: function(status, error) {
                    console.error("get offer failed", JSON.stringify(error));
                }
            });

            // SHOPPING CART - COMPLEMENTARY PRODUCTS

            try {

                var itemNum = "";
                var gp = 0;
                $.each(digitalData.cart.products, function(i, v) {
                    var p = Math.floor(parseFloat(this.price));
                    if (p > gp) {
                        gp = p;
                        itemNum = this.id;
                    }
                });
                if (itemNum.length > 0) {
                    $(".rich-relevance .col-xs-12").prepend('<div id="mbox-reco-complementary"></div>');
                    mboxDefine('mbox-reco-complementary',
                        'mbox-reco-complementary',
                        'entity.id=' + itemNum,
                        'excludedIds=' + excludeProdIds
                    );
                    mboxUpdate("mbox-reco-complementary");
                }
            } catch (failOK) {}

            return;
        }

        // CHECKOUT CONFIRMATION

        if (window.location.pathname == "/CheckoutConfirmationView") {

            try {
                var productPurchasedId = ""
                var orderTotal = 0

                var transactionID = digitalData.cart.transactionID;
                if (transactionID == undefined) {
                    // REVIEW: this is missing in the DDO so we're pulling it from RichRelevance data
                    transactionID = rrData.orderId;
                }

                for (var i = 0; i < digitalData.cart.products.length; i++) {
                    currentProd = digitalData.cart.products[i];
                    productPurchasedId += "," + currentProd.id
                    price = currentProd.price.replace(' ', '').replace(' ', '').replace(',', '.').replace('$', '') * 1;
                    orderTotal += price * currentProd.quantity;
                }
                productPurchasedId = productPurchasedId.substring(1); // remove first comma
                var evt = {
                    "mbox": "orderConfirmPage" + cty,
                    "params": {
                    }
                }

                // maintain array of recently purchased items
                var prodPurchIdArray = productPurchasedId.split(",");
                var lsPurchIds = localStorage.getItem("pmc-rpuids");
                if (lsPurchIds != undefined) {
                    // append previously purchased items to this order's items
                    prodPurchIdArray.push.apply(prodPurchIdArray, lsPurchIds.split(","));
                }
                // remember the list for exclusion 
                localStorage.setItem("pmc-rpuids", prodPurchIdArray.slice(0, 50).join(",")); // limit to 50 items

                _satellite.notify("Target Purchase Event: " + JSON.stringify(evt, undefined, 4));
                adobe.target.trackEvent(evt);
            } catch (ex) {
                console.error("merkle: could not fire Target Purchase")
            }

            if (!pmcRecc.thisIsCA) {
                $(".checkout.page").append('<div id="mbox-recommend"></div>');
                mboxDefine('mbox-recommend', 'mboxRecoOrderConfirm');
                mboxUpdate("mboxRecoOrderConfirm");
            }

            return;
        }
        if (window.location.pathname == "/" && !pmcRecc.thisIsCA ) { // US home page
            var excludeIds = localStorage.getItem("pmc-rpuids");
            if ( typeof excludeIds != "string" ) {
                excludeIds = "";
            }
            adobe.target.getOffer({
                mbox: 'mbox-home-pers',
                params: {
                    excludedIds: excludeIds
                },
                success: function(response) {
                    if (response.length != 1)
                        return;
                    var reco = JSON.parse(response[0].content);

                    var rcmd = reco.rcmd;

                    if (reco.rcmd.length < 4) {
                        return; // if less than 4 previously viewed products, don't show it
                    }
                    reco.rcmd = reco.rcmd.slice(0, 10);
                    reco.options = $.extend(reco.options || {}, {
                        titleHtml: '<h2>Pick Up Where You Left Off</h2>',
                        slidesToShow: 5,
                        showPricePromo: false
                    });

                    var $feat = $('[data-bi-placement="Home_SmallFenceRow1_ESpot_1"]').closest(".feature-tiles-container");
                    if ( $feat.length == 1 ) {
                        $feat.before('<div class="container-fluid fixed-container"><div class="feature-carousel-container"><div id="mbox-recommend" /></div></div>');
                        merkle.reco.displayResults(reco);
                    }
                },
                error: function(status, error) {
                    console.error("get offer failed", JSON.stringify(error));
                }
            });
        }


    }

    $(document).ready(pmcRecc.initRecos);
})($,window);

