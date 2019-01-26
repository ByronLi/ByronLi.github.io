// #### FILE: oo_style.js
// #### FILE: oo_style.js
/*
/*
OnlineOpinion v5.9.12
Released: 07/18/2017. Compiled 07/05/2018 02:16:12 PM -0500
Branch: 5.9.12 35b5b2ad883c34f46ba08db42faadc591299a198
Components: Full
UMD: disabled
The following code is Copyright 1998-2018 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/
/* Define Paths to Image Assets */

var checkOOEngine = setInterval(function() {
    if(typeof OOo !== 'undefined') {
        clearInterval(checkOOEngine);
        if (typeof OOo !== 'undefined' && typeof OOo.releaseDetails !== 'object') { OOo.releaseDetails = []; }
        OOo.releaseDetails.push({
            author: 'KS',
            timeStamp: '810/2018, 10:20:37 AM',
            fileName: 'costco-us.js',
            fileVersion: '1.0',
            ticketNumber: 'VCS-5635',
            gitDiff: 'N/A'
        });
    }
},5000);

var
  pathToAssets = '//www.costco.com/wcsstore/CostcoUSBCCatalogAssetStore/styles/',
  bar_gif = pathToAssets + 'oo_bar_icon.gif',
  float_gif = pathToAssets + 'oo_float_icon.gif',
  loading_gif = pathToAssets + 'oo_loading.gif',
  tab_1_gif = pathToAssets + 'oo_tab_icon_1.gif',
  bar_gif_retina = pathToAssets + 'oo_bar_icon_retina.gif',
  float_gif_retina = pathToAssets + 'oo_float_icon_retina.gif',
  tab_1_gif_retina = pathToAssets + 'oo_tab_icon_1_retina.gif';

/* Create and Append Style Element */
var css = document.createElement("style");
css.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(css);

cssText = "\n#oo_invitation_company_logo img#oo_waypoint_company_logo img { max-height: 100%; max-width: 100%; height: auto; width: auto\9; /* ie8 */ }";

cssText += "\n#oo_feedback_fl_spacer { display: block; height: 1px; position: absolute; top: 0; width: 100px; }";

cssText += "\n.oo_feedback_float { width: 100px; height: 50px; overflow: hidden; font: 12px Tahoma, Arial, Helvetica, sans-serif; text-align: center; color: #252525; cursor: pointer; z-index: 999997; position: fixed; bottom: 5px; border: 1px solid #cccccc; border-radius: 9px; -moz-border-radius: 9px; -webkit-border-radius: 9px; right: 10px; -webkit-transition: -webkit-transform 0.3s ease; }";
cssText += "\n.oo_feedback_float .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n.oo_feedback_float .olUp { width: 100%; height: 100%; background: url(" + float_gif + ") center 10px no-repeat; text-align: center; padding: 31px 0 5px 0; position: relative; z-index: 2; filter: alpha(opacity=100); opacity: 1; transition: opacity .5s; -moz-transition: opacity .5s; -webkit-transition: opacity .5s; -o-transition: opacity .5s; }";
cssText += "\n.oo_feedback_float .olUp img { margin-bottom: 5px; }";
cssText += "\n.oo_feedback_float .oo_transparent { display: block; background: white; position: absolute; top: 0; left: 0; height: 100%; width: 100%; z-index: 1; opacity: 0.8; filter: alpha(opacity=80); border-radius: 8px; -moz-border-radius: 8px; -webkit-border-radius: 8px; }";
cssText += "\n.oo_feedback_float:hover .oo_transparent { opacity: 1.0; filter: alpha(opacity=100); }";
cssText += "\n.oo_feedback_float:hover .olUp { display: block; opacity: 0; filter: alpha(opacity=0); }";
cssText += "\n.oo_feedback_float .fbText { display: block; }";
cssText += "\n.oo_feedback_float .olOver { display: block; height: 100%; width: 100%; position: absolute; top: 0; left: 0; min-height: 50px; z-index: 2; opacity: 0; filter: alpha(opacity=0); transition: opacity .5s; -moz-transition: opacity .5s; -webkit-transition: opacity .5s; -o-transition: opacity .5s; }";
cssText += "\n.oo_feedback_float .olOver span { display: block; padding: 10px 5px; }";
cssText += "\n.oo_feedback_float:hover .olOver { opacity: 1.0; filter: alpha(opacity=100); top: 0; }";

cssText += "\n.oo_cc_wrapper { left: 0; padding: 0; position: fixed; text-align: center; top: 25px; width: 100%; z-index: 999999; }";
cssText += "\n.oo_cc_wrapper .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n.oo_cc_wrapper span { width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 1; }";
cssText += "\n.oo_cc_wrapper .iwrapper { background-color: white; margin: 0 auto; position: relative; width: 535px; z-index: 2; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); }";
cssText += "\n.oo_cc_wrapper iframe { position: relative; border: none; width: 100%; z-index: 4; }";
cssText += "\n.oo_cc_wrapper .oo_cc_close { position: absolute; display: block; right: 20px; top: 5px; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; text-align: center; z-index: 5; color: black; text-decoration: none; cursor: pointer; }";

cssText += "\n#oo_bar { padding: 10px 35px; cursor: pointer; color: white; border-top: 1px solid white; background-color: black; bottom: 0; display: block; font: 16px 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; left: 0; text-decoration: none; line-height: 16px; position: fixed; text-align: left; width: 100%; z-index: 999997; box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; }";
cssText += "\n#oo_bar span.icon { background-image: url(" + bar_gif + "); background-repeat: no-repeat; position: absolute; left: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_bar .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n#oo_bar:focus { outline: 3px solid #51ace9; }";

cssText += "\n.oo_bar { padding-bottom: 37px; }";

cssText += "\n#oo_tab { display: block; position: fixed; background: #356fa5; background: -webkit-linear-gradient(#356fa5, #3e80be); background: -o-linear-gradient(#356fa5, #3e80be); background: -moz-linear-gradient(#356fa5, #3e80be); background: linear-gradient(#356fa5 , #3e80be); color: #ffffff; border: 1px solid #cccccc; font-size: 15px; font-family: Arial; line-height: 15px; opacity: 1; z-index: 999995; cursor: pointer; text-decoration: none; -webkit-backface-visibility: hidden; backface-visibility: hidden; transform: rotate(-90deg); -ms-transform: rotate(-90deg) scale(1.02); -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); transition: all .5s ease; -moz-transition: all .5s ease; -webkit-transition: all .5s ease; -o-transition: all .5s ease; }";
cssText += "\n#oo_tab, #oo_tab div { -webkit-transform-style: preserve-3d; transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden; }";
cssText += "\n#oo_tab .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n#oo_tab.oo_tab_right { right: -8px; top: 33%; padding: 5px 14px 14px 14px; border-bottom: 0px; color: white; border-radius: 9px 9px 0px 0px; -moz-border-radius: 9px 9px 0px 0px; -webkit-border-radius: 9px 9px 0px 0px; transform-origin: 100% 100% 0; -webkit-transform-origin: 100% 100% 0; -ms-transform-origin: 100% 100% 0; }";
cssText += "\n#oo_tab.oo_tab_right:hover, #oo_tab.oo_tab_right:focus, #oo_tab.oo_tab_right:active { -ms-ransform: rotate(-90deg) scale(1.02) translateY(-5px); -webkit-transform: rotate(-90deg) translateY(-5px); -moz-transform: rotate(-90deg) translateY(-5px); }";
cssText += "\n#oo_tab.oo_tab_left { left: -12px; top: 62%; padding: 17px 12px 5px 13px; color: white; border-top: 0px; border-radius: 0px 0px 9px 9px; -moz-border-radius: 0px 0px 9px 9px; -webkit-border-radius: 0px 0px 9px 9px; transform-origin: 0 0; -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; }";
cssText += "\n#oo_tab.oo_tab_left:hover, #oo_tab.oo_tab_left:focus, #oo_tab.oo_tab_left:active {-ms-transform: rotate(-90deg) scale(1.02) translateY(5px); -webkit-transform: rotate(-90deg) translateY(5px); -moz-transform: rotate(-90deg) translateY(5px); }";
cssText += "\n#oo_tab img { transform: translateZ(0); -webkit-transform: translateZ(0); -ms-transform: translateZ(0); width: 9px; height: 9px; margin-right: 7px; margin-bottom: 1px; color: transparent; border: none; }";
cssText += "\n#oo_tab.oo_tab_left.oo_legacy { top: auto; right: auto; bottom: -5px; left: 20px; padding: 10px 10px 15px 10px; z-index: 999995; cursor: pointer; border-bottom: 0px; border-radius: 9px 9px 0 0; -moz-border-radius: 9px 9px 0 0; -webkit-border-radius: 9px 9px 0 0; transform: rotate(0deg); -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }";
cssText += "\n#oo_tab.oo_tab_right.oo_legacy { top: auto; bottom: -5px; right: 20px; padding: 10px 10px 15px 10px; z-index: 999995; cursor: pointer; border-bottom: 0px; transform: rotate(0deg); -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); }";
cssText += "\n#oo_tab.oo_legacy img { top: 12px !important; }";
cssText += "\n#oo_tab.oo_tab_right.oo_legacy:hover, #oo_tab.oo_tab_right.oo_legacy:focus, #oo_tab.oo_tab_right.oo_legacy:active { bottom: 0; }";
cssText += "\n#oo_tab.oo_tab_left.oo_legacy:hover, #oo_tab.oo_tab_left.oo_legacy:focus, #oo_tab.oo_tab_left.oo_legacy:active { bottom: 0; }";

cssText += "\n#oo_tab_1 { background-color: black; border: 1px solid #ffffff; display: block; position: fixed; top: 40%; padding: 10px 0px 10px 0px; width: 124px; z-index: 999995; cursor: pointer; text-decoration: none; text-align: left; font-family: 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; line-height: 16px; font-size: 16px; color: #fff; }";
cssText += "\n#oo_tab_1:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_tab_1 span.screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n#oo_tab_1.oo_tab_right_1 { right: -9px; transition: right 1.5s; -moz-transition: right 1.5s; -webkit-transition: right 1.5s; padding: 10px 0px 10px 35px; box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; width: 89px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1 span.icon { background-image: url(" + tab_1_gif + "); background-repeat: no-repeat; position: absolute; left: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1.small { right: -90px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1.small:hover { right: -9px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1 { left: -9px; transition: left 1.5s; -moz-transition: left 1.5s; -webkit-transition: left 1.5s; padding: 10px 0px 10px 15px; box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; width: 109px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1 span.icon { background-image: url(" + tab_1_gif + "); background-repeat: no-repeat; position: absolute; right: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1.small { left: -90px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1.small:hover { left: -9px; }";

cssText += "\n#oo_container { position: fixed; height: 100%; width: 100%; top: 0; left: 0; z-index: 999999; }";

cssText += "\n#oo_invitation_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5% auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";
cssText += "\n#oo_invitation_prompt #oo_invitation_company_logo { width: 100%; height: 120px; background: black; }";
cssText += "\n#oo_invitation_prompt #oo_invitation_company_logo img { height: 100%; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content { width: 80%; padding: 40px 10% 20px 10%; box-shadow: inset 0px 0px 0px 1px #ccc; -webkit-box-shadow: inset 0px 0px 0px 1px #ccc; -moz-box-shadow: inset 0px 0px 0px 1px #ccc; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content p { color: black; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content p.prompt_button a { text-align: center; color: white; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 0; display: block; height: 25px; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a { cursor: pointer; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a#oo_launch_prompt { background: #cb352d; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a#oo_no_thanks { background: #707070; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_invitation_brand_logo { text-align: center; border-top: 1px solid #ccc; line-height: 1.5em; margin: 20px 0 0 0; padding: 20px 0 0 0; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_invitation_brand_logo img { height: 25px; width: 146px; border: 0px; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_invitation_brand_logo a { display: block; height: 25px; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt { font-family: 'Zapf Dingbats'; position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: white; text-decoration: none; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt:focus { outline: none; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt:focus span { outline: 3px solid #51ace9; }";
cssText += "\n#oo_invitation_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

/* Android, iPhone 6 ----------- */
cssText += "\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_invitation_prompt { width: 90%; }";
cssText += "\n#oo_invitation_prompt #oo_invitation_company_logo { height: 80px; } }";
/* iPhone 5, 4 ----------- */
cssText += "\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_prompt { width: 90%; height: 90%; overflow-y: scroll; overflow-x: hidden; }";
cssText += "\n#oo_invitation_prompt #oo_invitation_company_logo { height: 80px; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content { padding: 20px 10% 20px 10%; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_invite_brand_logo { margin: 0 0 0 0; } }";
/* iPhone 4 only ----------- */
cssText += "\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_promp #oo_close_prompt { right: -70px; } }";
cssText += "\n#oo_waypoint_container { position: fixed; height: 100%; width: 100%; top: 0; left: 0; z-index: 999999; }";

cssText += "\n#oo_waypoint_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5% auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_company_logo { width: 100%; height: 120px; background: white; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_company_logo img { height: 100%; display: block; margin: 0 auto;}";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content { width: auto; padding: 30px 10% 20px 10%; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a { cursor: pointer; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content p { color: black; font: 1em/1.5em Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; text-align: center; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content p#oo_waypoint_message { font-size: 1.2em; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon { cursor: pointer; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 90px; display: block; height: 50px; color: white; margin-bottom: 20px; background-color: #0073a6; text-align: left; background-repeat: no-repeat; background-position: left center; background-size: 70px 50px; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon.last { margin-bottom: 0; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_waypoint_brand_logo { line-height: 1.5em; margin: 10px 0 0 0; padding: 20px 0 0 0; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_waypoint_brand_logo img { height: 25px; width: 146px; border: 0px; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_waypoint_brand_logo a { display: block; height: 25px; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_close_prompt { font-family: 'Zapf Dingbats'; position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: black; text-decoration: none; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_close_prompt:focus { outline: none; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_close_prompt:focus span { outline: 3px solid #51ace9; }";
cssText += "\n#oo_waypoint_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

/* Android, iPhone 6 ----------- */
cssText += "\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_waypoint_prompt { width: 90%; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_company_logo { height: 80px; } }";
/* iPhone 5, 4 ----------- */
cssText += "\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_waypoint_prompt { width: 90%; height: 90%; overflow-y: scroll; overflow-x: hidden; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_company_logo { height: 80px; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content { padding: 20px 10% 20px 10%; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_waypoint_brand_logo { margin: 0 0 0 0; } }";
/* iPhone 4 only ----------- */
cssText += "\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_waypoint_promp #oo_waypoint_close_prompt { right: -70px; } }";
cssText += "\n#oo_entry_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5% auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";
cssText += "\n#oo_entry_prompt #oo_entry_company_logo { width: 100%; height: 120px; background: black; }";
cssText += "\n#oo_entry_prompt #oo_entry_company_logo img { height: 100%; }";
cssText += "\n#oo_entry_prompt #oo_entry_content { width: 80%; padding: 40px 10% 20px 10%; box-shadow: inset 0px 0px 0px 1px #ccc; -webkit-box-shadow: inset 0px 0px 0px 1px #ccc; -moz-box-shadow: inset 0px 0px 0px 1px #ccc; }";
cssText += "\n#oo_entry_prompt #oo_entry_content p { color: black; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; }";
cssText += "\n#oo_entry_prompt #oo_entry_content p.entry_prompt_button a { text-align: center; color: white; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 0; display: block; height: 25px; }";
cssText += "\n#oo_entry_prompt #oo_entry_content a { cursor: pointer; }";
cssText += "\n#oo_entry_prompt #oo_entry_content a:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_entry_prompt #oo_entry_content a#oo_launch_entry_prompt { background: #cb352d; }";
cssText += "\n#oo_entry_prompt #oo_entry_content a#oo_entry_no_thanks { background: #707070; }";
cssText += "\n#oo_entry_prompt #oo_entry_content #ol_entry_brand_logo { text-align: center; border-top: 1px solid #ccc; line-height: 1.5em; margin: 20px 0 0 0; padding: 20px 0 0 0; }";
cssText += "\n#oo_entry_prompt #oo_entry_content #ol_entry_brand_logo img { height: 25px; width: 146px; border: 0px; }";
cssText += "\n#oo_entry_prompt #oo_entry_content #ol_entry_brand_logo a { display: block; height: 25px; }";
cssText += "\n#oo_entry_prompt #oo_entry_close_prompt { font-family: 'Zapf Dingbats'; position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: white; text-decoration: none; }";
cssText += "\n#oo_entry_prompt #oo_entry_close_prompt:focus { outline: none; }";
cssText += "\n#oo_entry_prompt #oo_entry_close_prompt:focus span { outline: 3px solid #51ace9; }";
cssText += "\n#oo_entry_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

/* Android, iPhone 6 ----------- */
cssText += "\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_entry_prompt { width: 90%; }";
cssText += "\n#oo_entry_prompt #oo_entry_company_logo { height: 80px; } }";
/* iPhone 5, 4 ----------- */
cssText += "\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_entry_prompt { width: 90%; height: 90%; overflow-y: scroll; overflow-x: hidden; }";
cssText += "\n#oo_entry_prompt #oo_entry_company_logo { height: 80px; }";
cssText += "\n#oo_entry_prompt #oo_entry_content { padding: 20px 10% 20px 10%; }";
cssText += "\n#oo_entry_prompt #oo_entry_content #ol_entry_brand_logo { margin: 0 0 0 0; } }";
/* iPhone 4 only ----------- */
cssText += "\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_entry_promp #oo_entry_close_prompt { right: -70px; } }";
cssText += "\n#oo_overlay, #oo_invitation_overlay, #oo_waypoint_overlay, #oo_entry_overlay { background: white url(" + loading_gif + ") 50% 80px no-repeat; display: block; height: 1000%; left: 0; position: fixed; top: 0; width: 100%; z-index: 999998; opacity: 0.5; filter: alpha(opacity=50); }";
cssText += "\n#oo_overlay.no_loading, #oo_invitation_overlay.no_loading, #oo_waypoint_overlay.no_loading, #oo_entry_overlay.no_loading { background: white; opacity: 0.5; filter: alpha(opacity=50); }";

/* cursor: pointer must be set for iOS to detect click events on the cssText += "\n#oo_waypoint_overlay */
cssText += "\n@media screen and (max-width: 767px) { #oo_waypoint_overlay { cursor: pointer; } }";
cssText += "\n#oo_overlay.no_loading, #oo_invitation_overlay.no_loading, #oo_waypoint_overlay.no_loading, #oo_entry_overlay.no_loading { background: white; opacity: 0.5; filter: alpha(opacity=50); }";

/* IE8 set close prompt icon font size to px instead of em to avoid visual glitch  */
cssText += "\n@media all\0 { #oo_waypoint_prompt #oo_close_prompt, #oo_invitation_prompt #oo_close_prompt, .oo_cc_wrapper .oo_cc_close, #oo_entry_prompt #oo_entry_close_prompt { font-size: 20px; line-height: 20px; top: 8px; } }";
cssText += "\n@media print { #oo_bar, .oo_feedback_float, #oo_tab { display: none; } }";
/* CSS for high-resolution retina devices */
cssText += "\n@media only screen and (-Webkit-min-device-pixel-ratio: 1.5), only screen and (-moz-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3 / 2), only screen and (min-device-pixel-ratio: 1.5) { n.oo_feedback_float .olUp { background: url(" + float_gif_retina + ") center 10px no-repeat; background-size: 20%; }";
cssText += "\n#oo_tab_1 span.icon { background-image: url(" + tab_1_gif_retina + ") !important; background-size: 100%; } }";

/* Detect if browser is IE */
if (navigator.appName && navigator.appName == 'Microsoft Internet Explorer'){
  css.styleSheet.cssText = cssText;
}else{
  css.innerHTML = cssText;
}

// #### FILE END: o_style.js

// #### FILE END: o_style.js

// #### FILE: oo_engine.min.js
/*   OnlineOpinion v5.9.12 Released: 07/18/2017. Compiled 03/02/2018 09:12:43 AM -0600 Branch: 5.9.12 f7d66ffe023bc5080f8fa0c3cc695790c21ae292 Components: Full UMD: disabled The following code is Copyright 1998-2018 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com    */(function(b,a){if(('disabled'==='enabled')&&(typeof define==='function')&&define.amd){define([],a)}else{b.OOo=a()}}(this,function(){window.OOo={__detectBrowser:function(b){var a=Object.prototype.toString.call(window.opera)==='[object Opera]',c=b.indexOf('MSIE ')>-1||b.indexOf('Trident/')>-1,d={IE:!!c,MSEdge:b.indexOf('Edge/')>-1,Opera:a,WebKit:b.indexOf('AppleWebKit/')>-1,Chrome:b.indexOf('Chrome')>-1&&b.indexOf('Edge/')===-1,Gecko:b.indexOf('Gecko')>-1&&b.indexOf('KHTML')===-1,MobileSafari:/Apple.*Mobile.*Safari/.test(b),iOs:b.indexOf('iPad')>-1||b.indexOf('iPhone')>-1||b.indexOf('iPod')>-1,iOS67:b.search(/OS 6(.*)|7(.*) like Mac OS/i)>-1,BlackBerry:b.indexOf('BlackBerry')>-1,Fennec:b.indexOf('Fennec')>-1,IEMobile:b.indexOf('IEMobile')>-1,WindowsPhone:b.toLowerCase().indexOf('windows phone')>-1,WindowsTablet:b.toLowerCase().indexOf('windows nt')>-1&&b.toLowerCase().indexOf('touch')>-1,OperaMobile:b.search(/Opera (?:Mobi|Mini)/)>-1,Kindle:b.search(/[ ](Kindle|Silk)/)>-1,isChromeIOS:/crios/i.test(b),ua:b,Android:/Android/.test(b),facebookWebview:/FBAV/.test(b),googleWebview:/GSA/.test(b),AndroidChromiumWebview:/Chrome\/.* Mobile/.test(b),iOsWebview:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/.test(b)},f=false;d.isMobile=(d.MobileSafari||d.BlackBerry||d.Fennec||d.IEMobile||d.OperaMobile||d.Kindle||d.iOs||d.Android||d.WindowsPhone||d.WindowsTablet||d.AndroidChromiumWebview||d.iOsWebview||d.facebookWebview||d.googleWebview);d.isMobileNonIOS=(d.isMobile&&!d.iOs);return d}};OOo.Browser=OOo.__detectBrowser(navigator.userAgent);OOo.Cache={};OOo.instanceCount=0;OOo.K=function(){};var O=O||OOo;(function(){function A(b){return document.getElementById(b)}function B(b,a){var c;for(c in a){if(a.hasOwnProperty(c)){b[c]=a[c]}}return b}function y(b,a,c,d){if(b.addEventListener){b.addEventListener(a,c,d)}else if(b.attachEvent){b.attachEvent('on'+a,c)}}function v(b,a,c,d){if(b.removeEventListener){b.removeEventListener(a,c,d)}else if(b.detachEvent){b.detachEvent('on'+a,c)}}function D(b){var a=[],c;for(c in b){if(b.hasOwnProperty(c)){a.push(c+'='+(encodeURIComponent(b[c])||''))}}return a.join('&')}function C(b){var a=D(b.metrics),c=(typeof b.tealeafId!=='undefined'?E(b.tealeafId):undefined)+'|'+(typeof b.clickTalePID!=='undefined'?E(b.clickTalePID):undefined)+'/'+(typeof b.clickTaleUID!=='undefined'?E(b.clickTaleUID):undefined)+'/'+(typeof b.clickTaleSID!=='undefined'?E(b.clickTaleSID):undefined);a+='&custom_var='+OOo.createLegacyVars(b.legacyVariables,c);if(b.metrics.type==='OnPage'){a+='|iframe'}if(b.asm){a+='&asm=2'}a+="&_"+'rev=2';if(b.customVariables){a+='&customVars='+encodeURIComponent(OOo.serialize(b.customVariables))}return a}function G(b,a){var c=b.referrerRewrite;b.metrics.referer=location.href;b.metrics.prev=encodeURIComponent(document.referrer);if(c){b.metrics.referer=OOo.referrerRewrite(c)}if(b.constructCommentCardUrl){var d='https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(b.commentCardUrl){d=b.commentCardUrl}d+=('?'+C(b));return d}else{var f=document,j=f.createElement('form'),k=f.createElement('input');j.style.display='none';j.method='post';j.target=a||'OnlineOpinion';j.action='https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(b.commentCardUrl){j.action=b.commentCardUrl}k.name='params';k.value=C(b);j.appendChild(k);f.body.appendChild(j);return j}}function w(){return{width:screen.width,height:screen.height,referer:location.href,prev:document.referrer,time1:(new Date()).getTime(),time2:null,currentURL:location.href,ocodeVersion:'5.9.12'}}function I(b){var a='';if(b&&b.search('://')>-1){var c=b.split('/');for(var d=3;d<c.length;d++){a+="/";a+=c[d]}}return a}function E(b){return String(b).replace(/[\/&<>"' ]/g,'')}function J(b,a){b=b||{};if(typeof b==='string'){return a+'|'+E(b)}return b.override?E(b.vars):a+(b.vars?'|'+E(b.vars):'')}function K(b,a){if(!a){a=location}if(typeof b==="string")return b;return b.searchPattern?a.href.replace(b.searchPattern,b.replacePattern):b.replacePattern}function L(b){'use strict';var a,c=false,d=document.getElementsByTagName('meta');if(d!=='undefined'){for(a=0;a<d.length;a+=1){if(d[a].getAttribute('name')===b){c=true}}}return c}var M=(function(){if(navigator.appName==="Microsoft Internet Explorer"&&navigator.userAgent.search("MSIE 6")!==-1){return true}var b=document.body,a,c;if(document.createElement&&b&&b.appendChild&&b.removeChild){a=document.createElement('iframe');c=false;a.setAttribute('name','oo_test');a.style.display='none';b.appendChild(a);c=!!!document.getElementsByName('oo_test')[0];b.removeChild(a);return c}else{return null}}());function N(b,a){var c=b||window.event,d=OOo.$('oo_waypoint_content'),f=OOo.$('oo_waypoint_company_logo'),j=OOo.$('oo_waypoint_close_prompt'),k=c.target;if(c.srcElement&&!c.target){k=c.srcElement}if(c.preventDefault&&c.stopPropagation){c.preventDefault();c.stopPropagation()}else{c.returnValue=false}if((k!==d&&!d.contains(k))&&(k!==f&&!f.contains(k))||(k.className==='waypoint_icon'||k.className==='waypoint_icon last')){var h=OOo.$('oo_waypoint_container'),n=h.parentNode;n.removeChild(h)}if(a){a.focus()}}function F(){var b=this.options;var a="<div id='oo_waypoint_prompt' role='dialogue' aria-describedby='oo_waypoint_message'><div id='oo_waypoint_company_logo'></div><div id='oo_waypoint_content'><p id='oo_waypoint_message'>Select a category</p><p id='waypoint_icons'></p><p id='ol_waypoint_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_waypoint_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialogue</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_waypoint_prompt #oo_waypoint_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";if(typeof b.wpmarkup!=='undefined'){a=b.wpmarkup}var c=OOo.$('oo_waypoint_prompt');if(c){var d=OOo.$('oo_waypoint_container');this.showWaypoint(d);return}this.showWaypoint(a)}function P(d){var f=document,j=0,k=typeof d==='string'?f.createElement('div'):d,h=f.createElement('div'),n,l,o,g,m=this.options,p=m.categories,r,t,q=f.activeElement,z;h.id='oo_waypoint_overlay';k.id='oo_waypoint_container';k.style.visibility='hidden';if(typeof d==='string'){k.innerHTML=d;f.body.appendChild(k)}k.appendChild(h);if(m.companyLogo&&m.companySlogan){n=new Image();n.src=m.companyLogo;n.alt=m.companySlogan;OOo.$('oo_waypoint_company_logo').appendChild(n);OOo.$('oo_waypoint_prompt').setAttribute('aria-label',m.companySlogan)}o=new Image();o.src=m.pathToAssets+'oo_opinionlab_logo.png';o.alt='powered by OpinionLab';OOo.$('ol_waypoint_brand_logo').children[0].appendChild(o);r=OOo.$('oo_waypoint_close_prompt');for(var u in p){if(p.hasOwnProperty(u)){var s=document.createElement('a'),x=m.categories[u].icon,H=m.categories[u].buttonText;s.className='waypoint_icon';s.href='#';s.innerHTML=H+'<span class="screen_reader">This will open a new window</span>';if(x&&f.addEventListener){s.style.backgroundImage='url('+m.pathToAssets+x+')'}if(typeof m.categories[u].oCode==='string'){OOo.addEventListener(s,'click',(function(c){return function(b){var a=b||window.event;window.open(m.categories[c].oCode,'_0','scrollbars=yes,location=yes,menubar=yes,resizable=yes');OOo.hideWaypoint(a,q)}})(u),false);s.onkeydown=(function(c){return function(b){var a=b||window.event;if(a.keyCode!==13){return}window.open(m.categories[c].oCode,'_0','scrollbars=yes,location=yes,menubar=yes,resizable=yes');OOo.hideWaypoint(a,q)}})(u)}else{OOo.addEventListener(s,'click',(function(c){return function(b){var a=b||window.event;OOo.Waypoint[c].show(a);OOo.hideWaypoint(a,q)}})(u),false);s.onkeydown=(function(c){return function(b){var a=b||window.event;if(a.keyCode!==13){return}OOo.Waypoint[c].show(a);OOo.hideWaypoint(a,q)}})(u)}j++;OOo.$('waypoint_icons').appendChild(s)}}OOo.addEventListener(k,'click',function(b){var a=b||window.event;OOo.hideWaypoint(a,q)},false);g=OOo.$('waypoint_icons').children;t=g[0];t.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(a.shiftKey){r.focus();return false}}};r.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}OOo.hideWaypoint(a,q)};r.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(!a.shiftKey){t.focus();return false}}};g[j-1].className='waypoint_icon last';k.style.visibility='visible';k.style.display='block';h.className='no_loading';if(m.linkFocus===true){t.focus()}}function Q(b,a){var c=b||window.event;if(c.preventDefault&&c.stopPropagation){c.preventDefault();c.stopPropagation()}else{c.returnValue=false}OOo.$('oo_container').style.display='none';if(a){a.focus()}}function R(){var b="<div id='oo_invitation_prompt' role='dialog' aria-describedby='oo_invite_message'><div id='oo_invitation_company_logo'></div><div id='oo_invite_content'><p id='oo_invite_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='prompt_button'><a href='#' id='oo_launch_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='prompt_button'><a href='#' id='oo_no_thanks'>No Thanks</a></p><p id='ol_invitation_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_invitation_prompt #oo_invite_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";var a=this.options;if(typeof a.inviteMarkup!=='undefined'){b=a.inviteMarkup}else if(typeof a.events.prompt.promptMarkup){b=a.events.prompt.promptMarkup}var c=OOo.$('oo_invitation_prompt');if(c){var d=OOo.$('oo_container');this.showPrompt(d);return}this.showPrompt(b)}function S(c,d){var f=document,j=typeof c==='string'?f.createElement('div'):c,k=f.createElement('div'),h,n,l,o,g=this.options,m,p,r,t,q=f.activeElement;k.id='oo_invitation_overlay';j.id='oo_container';j.style.visibility='hidden';if(typeof c==='string'){j.innerHTML=c;f.body.appendChild(j)}j.appendChild(k);m=OOo.$('oo_launch_prompt');p=OOo.$('oo_no_thanks');r=OOo.$('oo_close_prompt');t=OOo.$('oo_invitation_company_logo');if(g.companyLogo&&g.companySlogan){h=new Image();h.src=g.companyLogo;h.alt=g.companySlogan;t.appendChild(h);OOo.$('oo_invitation_prompt').setAttribute('aria-label',g.companySlogan)}else if(g.events.prompt.companyLogo&&g.events.prompt.companySlogan){h=new Image();h.src=g.events.prompt.companyLogo;h.alt=g.events.prompt.companySlogan;t.appendChild(h);OOo.$('oo_invitation_prompt').setAttribute('aria-label',g.events.prompt.companySlogan)}l=new Image();l.src=g.pathToAssets+'oo_opinionlab_logo.png';l.alt='powered by OpinionLab';OOo.$('ol_invitation_brand_logo').children[0].appendChild(l);if(g.callBacks){if(typeof g.callBacks.prompt==='function'){g.callBacks.prompt()}if(typeof g.callBacks.yesClick==='function'){OOo.addEventListener(m,'click',function(){g.callBacks.yesClick()},false)}if(typeof g.callBacks.noClick==='function'){OOo.addEventListener(p,'click',function(){g.callBacks.noClick()},false)}if(typeof g.callBacks.closeClick==='function'){OOo.addEventListener(r,'click',function(){g.callBacks.closeClick()},false)}}OOo.addEventListener(m,'click',d.bind(this),false);OOo.addEventListener(p,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);OOo.addEventListener(r,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);m.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}d.bind(this)}.bind(this);m.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(a.shiftKey){r.focus();return false}}};p.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}OOo.hidePrompt(a,q)};r.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}OOo.hidePrompt(a,q)};r.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(!a.shiftKey){m.focus();return false}}};j.style.visibility='visible';j.style.display='block';k.className='no_loading';q.blur();m.focus()}function T(){var b="<div id='oo_entry_prompt' role='dialog' aria-describedby='oo_entry_message'><div id='oo_entry_company_logo'></div><div id='oo_entry_content'><p id='oo_entry_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='entry_prompt_button'><a href='#' id='oo_launch_entry_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='entry_prompt_button'><a href='#' id='oo_entry_no_thanks'>No Thanks</a></p><p id='ol_entry_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_entry_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_entry_prompt #oo_entry_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";var a=this.options;if(typeof a.events.prompt.promptMarkup){b=a.events.prompt.promptMarkup}var c=OOo.$('oo_entry_prompt');if(c){var d=OOo.$('oo_container');this.showEntryPrompt(d);return}this.showEntryPrompt(b)}function U(c,d){var f=document,j=typeof c==='string'?f.createElement('div'):c,k=f.createElement('div'),h,n,l,o,g=this.options,m,p,r,t,q=f.activeElement;k.id='oo_entry_overlay';j.id='oo_container';j.style.visibility='hidden';if(typeof c==='string'){j.innerHTML=c;f.body.appendChild(j)}j.appendChild(k);m=OOo.$('oo_launch_entry_prompt');p=OOo.$('oo_entry_no_thanks');r=OOo.$('oo_entry_close_prompt');t=OOo.$('oo_entry_company_logo');if(g.companyLogo&&g.companySlogan){h=new Image();h.src=g.companyLogo;h.alt=g.companySlogan;t.appendChild(h);OOo.$('oo_entry_prompt').setAttribute('aria-label',g.companySlogan)}else if(g.events.prompt.companyLogo&&g.events.prompt.companySlogan){h=new Image();h.src=g.events.prompt.companyLogo;h.alt=g.events.prompt.companySlogan;t.appendChild(h);OOo.$('oo_entry_prompt').setAttribute('aria-label',g.events.prompt.companySlogan)}l=new Image();l.src=g.pathToAssets+'oo_opinionlab_logo.png';l.alt='powered by OpinionLab';OOo.$('ol_entry_brand_logo').children[0].appendChild(l);OOo.addEventListener(m,'click',d.bind(this),false);OOo.addEventListener(p,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);OOo.addEventListener(r,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);m.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}d.bind(this)}.bind(this);m.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(a.shiftKey){r.focus();return false}}};p.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}OOo.hidePrompt(a,q)};r.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}OOo.hidePrompt(a,q)};r.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(!a.shiftKey){m.focus();return false}}};j.style.visibility='visible';j.style.display='block';k.className='no_loading';q.blur();m.focus()}var V=function(b,a,c,d){var f="width="+c;var j="height="+d;var k=window.open(b,a,f,j);var h=window.setInterval(function(){if(k.closed!==false){window.clearInterval(h);OOo.oo_feedback.launchOOPopup()}},200)};var W=function(){return/MSIE\s/.test(navigator.userAgent)&&parseFloat(navigator.appVersion.split("MSIE")[1])<10};B(OOo,{extend:B,toQueryString:D,addEventListener:y,$:A,appendOOForm:G,removeEventListener:v,createMetrics:w,truncateMetric:I,createLegacyVars:J,DYNAMIC_FRAME_NAME_IS_BUGGY:M,getFormParams:C,referrerRewrite:K,hidePrompt:Q,getPrompt:R,showPrompt:S,hideWaypoint:N,getWaypoint:F,showWaypoint:P,getEntryPrompt:T,showEntryPrompt:U,exitChat:V,checkIfIE9orBelow:W})}());(function(){function j(b){if(!b){return null}switch(typeof b){case'number':case'boolean':case'function':return b;case'string':return'\"'+b+'\"';case'object':var a,c,d,f;if(b.constructor===Array||typeof b.callee!=='undefined'){a='[';d=b.length;for(c=0;c<d-1;c+=1){a+=j(b[c])+','}a+=j(b[c])+']'}else{a='{';for(f in b){if(b.hasOwnProperty(f)){a+=f+':'+j(b[f])+','}}a=a.replace(/\,$/,'')+'}'}return a;default:return null}}OOo.extend(OOo,{serialize:j})}());(function(){function f(b,a,c){var d;if(b.search(a[0])!==-1){OOo.createCookieOrStorage(this.options,c,0);return false}else if(OOo.readCookieOrStorage(this.storage,c)){d=parseInt(OOo.readCookieOrStorage(this.options,c),10);if((b.search(a[d+1])!==-1)&&(d+1!==a.length-1)){OOo.createCookieOrStorage(this.options,c,d+1);return false}else if(b.search(a[d])!==-1){return false}else if(d+1===a.length-1&&b.search(a.pop())!==-1){OOo.eraseCookieOrStorage(this.options,c);return true}else{OOo.eraseCookieOrStorage(this.options,c);return false}}else{return false}}OOo.extend(OOo,{checkTunnel:f})}());(function(){SHA256={};SHA256.K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];SHA256.Uint8Array=function(b){if(typeof Uint8Array!=='undefined'){return new Uint8Array(b)}else{return new Array(b)}};SHA256.Int32Array=function(b){if(typeof Int32Array!=='undefined'){return new Int32Array(b)}else{return new Array(b)}};SHA256.setArray=function(b,a){if(typeof Uint8Array!=='undefined'){b.set(a)}else{for(var c=0;c<a.length;c++){b[c]=a[c]}for(c=a.length;c<b.length;c++){b[c]=0}}};SHA256.digest=function(b){var a=0x6a09e667;var c=0xbb67ae85;var d=0x3c6ef372;var f=0xa54ff53a;var j=0x510e527f;var k=0x9b05688c;var h=0x1f83d9ab;var n=0x5be0cd19;var l=SHA256.K;if(typeof b=='string'){var o=unescape(encodeURIComponent(b));b=SHA256.Uint8Array(o.length);for(var g=0;g<o.length;g++){b[g]=o.charCodeAt(g)&0xff}}var m=b.length;var p=Math.floor((m+72)/64)*64;var r=p/4;var t=m*8;var q=SHA256.Uint8Array(p);SHA256.setArray(q,b);q[m]=0x80;q[p-4]=t>>>24;q[p-3]=(t>>>16)&0xff;q[p-2]=(t>>>8)&0xff;q[p-1]=t&0xff;var z=SHA256.Int32Array(r);var u=0;for(g=0;g<z.length;g++){var s=q[u]<<24;s|=q[u+1]<<16;s|=q[u+2]<<8;s|=q[u+3];z[g]=s;u+=4}var x=SHA256.Int32Array(64);for(var H=0;H<r;H+=16){for(g=0;g<16;g++){x[g]=z[H+g]}for(g=16;g<64;g++){var A=x[g-15];var B=(A>>>7)|(A<<25);B^=(A>>>18)|(A<<14);B^=(A>>>3);A=x[g-2];var y=(A>>>17)|(A<<15);y^=(A>>>19)|(A<<13);y^=(A>>>10);x[g]=(x[g-16]+B+x[g-7]+y)&0xffffffff}var v=a;var D=c;var C=d;var G=f;var w=j;var I=k;var E=h;var J=n;for(g=0;g<64;g++){y=(w>>>6)|(w<<26);y^=(w>>>11)|(w<<21);y^=(w>>>25)|(w<<7);var K=(w&I)^(~w&E);var L=(J+y+K+l[g]+x[g])&0xffffffff;B=(v>>>2)|(v<<30);B^=(v>>>13)|(v<<19);B^=(v>>>22)|(v<<10);var M=(v&D)^(v&C)^(D&C);var N=(B+M)&0xffffffff;J=E;E=I;I=w;w=(G+L)&0xffffffff;G=C;C=D;D=v;v=(L+N)&0xffffffff}a=(a+v)&0xffffffff;c=(c+D)&0xffffffff;d=(d+C)&0xffffffff;f=(f+G)&0xffffffff;j=(j+w)&0xffffffff;k=(k+I)&0xffffffff;h=(h+E)&0xffffffff;n=(n+J)&0xffffffff}var F=SHA256.Uint8Array(32);for(g=0;g<4;g++){F[g]=(a>>>(8*(3-g)))&0xff;F[g+4]=(c>>>(8*(3-g)))&0xff;F[g+8]=(d>>>(8*(3-g)))&0xff;F[g+12]=(f>>>(8*(3-g)))&0xff;F[g+16]=(j>>>(8*(3-g)))&0xff;F[g+20]=(k>>>(8*(3-g)))&0xff;F[g+24]=(h>>>(8*(3-g)))&0xff;F[g+28]=(n>>>(8*(3-g)))&0xff}return F};SHA256.hash=function(b){var a=SHA256.digest(b);var c='';for(i=0;i<a.length;i++){var d='0'+a[i].toString(16);c+=d.length>2?d.substring(1):d}return c};OOo.extend(OOo,{sha256:SHA256.hash})}());(function(){function h(b,a){if(!a){a=location}var c=b.cookieName||'oo_abandon',d=OOo.readCookieOrStorage(this.options,c),f=b.startPage,j=b.endPage,k=b.middle;if(!d){if(a.pathname.indexOf(f)!==-1){OOo.createCookieOrStorage(this.options,c)}return false}else if(a.pathname.indexOf(j)!==-1){OOo.eraseCookieOrStorage(this.options,c);return false}else if(a.pathname.search(k)!==-1){return false}else{OOo.eraseCookieOrStorage(this.options,c);return true}}OOo.extend(OOo,{checkAbandonment:h})}());(function(){function d(b){var a,c;for(a=b.length-1;a>=0;a-=1){if(b[a].read){c=OOo.readCookieOrStorage(this.options,b[a].name);if(!!c&&c===b[a].value){return true}else if(typeof b[a].value==='undefined'&&!!OOo.readCookieOrStorage(this.options,b[a].name)){return true}}}return false}function f(b){var a;for(a=b.length-1;a>=0;a-=1){if(b[a].set){OOo.createCookieOrStorage(this.options,b[a].name,b[a].value,b[a].expiration)}}}OOo.extend(OOo,{checkThirdPartyCookies:d,setThirdPartyCookies:f})}());OOo.extend(Function.prototype,(function(){if(typeof Function.prototype.bind!=="undefined"){return}var f=Array.prototype.slice;function j(b,a){var c=b.length,d=a.length;while(d){d-=1;b[c+d]=a[d]}return b}function k(b,a){b=f.call(b,0);return j(b,a)}function h(a){if(arguments.length<2&&typeof a==="undefined"){return this}var c=this,d=f.call(arguments,1);return function(){var b=k(d,arguments);return c.apply(a,b)}}return{bind:h}}()));(function(){function k(b){if(!b){b=location}var a;if(b.host.search(/\.[a-z]+/)!==-1){a=b.host.split('.').reverse();if(a.length>3){return b.host}a='.'+a[1]+'.'+a[0]}else{a=b.host}return a}function h(b,a,c,d){var f='',j='';if(c){f=new Date();f.setTime(f.getTime()+(c*1000));j="; expires="+f.toGMTString()}if(d){document.cookie=b+"="+a+j+"; path=/; domain="+d+";"}else if(location.host!==k()){document.cookie=b+"="+a+j+"; path=/; domain="+k()+";"}else{document.cookie=b+"="+a+j+"; path=/;"}}function n(b){var a=b+"=",c=document.cookie.split(';'),d,f;for(f=0;f<c.length;f+=1){d=c[f];while(d.charAt(0)===' '){d=d.substring(1,d.length)}if(d.indexOf(a)===0){return d.substring(a.length,d.length)}}return null}function l(b){h(b,"",-1)}function o(b,a,c,d,f){var a=a||'',c=c||'',d=d||0;b.useBrowserStorage?(OOo.createBrowserStorageItem(a,c,d)):(OOo.createCookie(a,c,d,f))}function g(b,a){return b.useBrowserStorage?(OOo.readBrowserStorageItem(a)):(OOo.readCookie(a))}function m(b,a){b.useBrowserStorage?(OOo.eraseLocalStorageItem(a)):(OOo.eraseCookie(a))}function p(){var b="oo_test";try{localStorage.setItem(b,b);localStorage.removeItem(b);return true}catch(e){return false}}function r(){var b="oo_test";try{sessionStorage.setItem(b,b);sessionStorage.removeItem(b);return true}catch(e){return false}}function t(b,a,c){var d=(new Date()).getTime(),c=c||0;if(r&&(typeof c==="undefined"||c===0)){sessionStorage.setItem(b,JSON.stringify({oo_val:a,dateSet:d}));return}else{if(p){localStorage.setItem(b,JSON.stringify({oo_val:a,dateSet:d,dateExpire:(c*1000)}))}}}function q(b){var a=JSON.parse(sessionStorage.getItem(b)),c=JSON.parse(localStorage.getItem(b));if(a&&a.oo_val){return a.oo_val}else if(c&&((new Date()).getTime()>=(c.dateSet+c.dateExpire))){localStorage.removeItem(b);return null}else{if(c&&c.oo_val){return c.oo_val}else{return null}}}function z(b){if(p){if(localStorage.getItem(b)){localStorage.removeItem(b)}}}OOo.extend(OOo,{getCookieDomain:k,createCookie:h,readCookie:n,eraseCookie:l,createBrowserStorageItem:t,readBrowserStorageItem:q,eraseLocalStorageItem:z,createCookieOrStorage:o,readCookieOrStorage:g,eraseCookieOrStorage:m})}());OOo.Ocode=function(b){var a=OOo.Browser,c,d;if(b.disableMobile&&a.isMobile){return}if(b.disableNoniOS&&a.isMobileNonIOS){return}OOo.instanceCount+=1;this.options={tealeafCookieName:'TLTSID'};OOo.extend(this.options,b);c=this.options;c.metrics=OOo.createMetrics();this.frameName=c.onPageCard?'OnlineOpinion'+OOo.instanceCount:'OnlineOpinion';if(c.cookie&&OOo.Ocode.matchUrl.call(this,c.cookie,location)){return}if(c.thirdPartyCookies&&OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}if(c.abandonment&&!OOo.checkAbandonment(c.abandonment)){return}if(c.tunnel&&!OOo.checkTunnel(location.pathname,c.tunnel.path,c.tunnel.cookieName)){return}if(c.events&&c.events.onSingleClick){this.singProbability=Math.random()<1-c.events.onSingleClick/100}c.tealeafId=OOo.readCookieOrStorage(c,c.tealeafCookieName)||OOo.readCookieOrStorage(c,c.sessionCookieName);if(c.events){this.setupEvents();if(c.events.disableLinks||c.events.disableFormElements){this.setupDisableElements()}}if(c.floating){this.floating()}else if(c.bar){this.bar()}else if(c.tab){this.tab()}};OOo.Ocode.prototype={show:function(f,j){var k=f||window.event;if(j!=='exit'&&j!=='entry'&&j!=='onSingleClick'){if(k.preventDefault&&k.stopPropagation){k.preventDefault();k.stopPropagation()}else{k.returnValue=false}}if(this.onPageCardVisible){return}var h=this.options,n;if(h.events&&h.events.prompt){if(h.cookie)OOo.eraseCookieOrStorage(h,h.cookie.name||'oo_r');OOo.hidePrompt(k)}if(this.interruptShow){return}if(!this.floatingLogo&&h.cookie&&OOo.Ocode.matchUrl.call(this,h.cookie)){return}if(!h.floating&&h.events&&this.singProbability){return}if(h.events&&h.events.onSingleClick){this.singProbability=true}if(h.cookie){OOo.Ocode.tagUrl.call(this,h.cookie)}if(h.thirdPartyCookies){if(OOo.checkThirdPartyCookies(h.thirdPartyCookies)){return}OOo.setThirdPartyCookies(h.thirdPartyCookies)}if(this.floatingLogo){this.floatingLogo.children[0].blur()}if(this.floatingLogo&&h.disappearOnClick){this.floatingLogo.style.display='none'}if(typeof window.ClickTale==='function'){if(!h.clickTalePID){h.clickTalePID=window.ClickTaleGetPID()||null}h.clickTaleUID=window.ClickTaleGetUID()||null;h.clickTaleSID=window.ClickTaleGetSID()||null;var l=function(b){if(b.origin==='https://secure.opinionlab.com'){if(typeof window.ClickTaleEvent==='function'&&b.data!==''){var a=JSON.parse(b.data),c=window.ClickTaleEvent;for(var d in a){c(d+':'+a[d])}}}};OOo.addEventListener(window,'message',l,false)}if(h.onPageCard&&!OOo.Browser.isMobile){this.setupOnPageCC()}else{this.launchOOPopup()}n=h.floating||h.tab||h.bar;if(n&&typeof n.onClickCallback==='function'){n.onClickCallback()}}};OOo.extend(OOo.Ocode,{tagUrl:function(b,a){if(!a){a=location}var c=b.name||'oo_r',d=b.type==='page'?a.href:a.hostname,f=OOo.readCookieOrStorage(this.options,c)||'';if(OOo.Ocode.matchUrl.call(this,b,a)){return}OOo.createCookieOrStorage(this.options,c,f+OOo.sha256(d),b.expiration,b.domain)},matchUrl:function(b,a){if(!a){a=location}var c=OOo.readCookieOrStorage(this.options,b.name||'oo_r'),d;if(!c){return false}d=b.type==='page'?a.href:a.hostname;return c.search(OOo.sha256(d))!==-1}});(function(){var n=0;function l(){var b=this.options,a=b.newWindowSize||[545,325],c=[parseInt((b.metrics.height-a[1])/2,10),parseInt((b.metrics.width-a[0])/2,10)],d,f,j='resizable=yes,location=no,status=no,scrollbars=1,width='+a[0]+',height='+a[1]+',top='+c[0]+',left='+c[1],k='OnlineOpinion',h;if(b.newWindow){k=k+(n++)}b.metrics.time2=(new Date()).getTime();b.metrics.type='Popup';if(OOo.Browser.isChromeIOS){k='_0'}if(b.constructCommentCardUrl){h=OOo.appendOOForm(b,k);f=window.open(h,k,j)}else{d=OOo.appendOOForm(b,k);var h='https://secure.opinionlab.com/ccc01/comment_card_d.asp?'+d.children[0].value;if(b.commentCardUrl){h=b.commentCardUrl+'?'+d.children[0].value}if((OOo.Browser.isMobile&&OOo.Browser.ua.search('Android')!==-1)||!OOo.Browser.isMobile){f=window.open(h,k,j);d.submit()}else{f=window.open('',k,j);if(f.location.href==='about:blank'){f.location.href=h}else{f.close();f=window.open(h,k,j)}if(f&&!OOo.Browser.isChromeIOS){d.submit()}}}}OOo.extend(OOo.Ocode.prototype,{launchOOPopup:l})}());(function(){function g(){var c=this.options.events,d=[false,false],f=['onExit','onEntry'],j='beforeunload',k,h,n,l,o;if(OOo.Browser.Opera){j='unload'}if(OOo.Browser.iOs){j='pagehide'}if(c.prompt){OOo.extend(this.options,{promptMarkup:c.prompt.promptMarkup,neverShowAgainButton:false,pathToAssets:c.prompt.pathToAssets})}for(n=f.length-1;n>=0;n-=1){k=f[n];if(c[k]instanceof Array){l=c[k];o=l.length;while(o&&!d[n]){o-=1;if(window.location.href.search(l[o].url)!==-1&&Math.random()>=1-l[o].p/100){d[n]=true}}}else if(c[k]&&Math.random()>=1-c[k]/100){d[n]=true}}if(d[0]){OOo.addEventListener(window,j,function(b){var a=b||window.event;this.show(a,'exit')}.bind(this),false)}if(d[1]){if(c.delayEntry){window.setTimeout(function(b){var a=b||window.event;if(c.prompt){this.getEntryPrompt()}else{this.show(a,'entry')}}.bind(this),c.delayEntry*1000)}else{if(c.prompt){this.getEntryPrompt()}else{(function(b){var a=b||window.event;this.show(a,'entry')}).bind(this)()}}}}function m(b){var a=b||window.event,c=b.target||b.srcElement,d=this.options.events,f=c.parentNode,j=5,k=0;while(f&&(c.nodeName!=='A'||c.nodeName!=='INPUT')&&k!==j){if(f.nodeName==='A'){c=f}f=f.parentNode;k+=1}if(d.disableFormElements&&(c.tagName==="INPUT"||c.tagName==="BUTTON")&&(c.type==='submit'||c.type==='image'||c.type==='reset'||c.type==='button')){this.interruptShow=true}if(d.disableLinks&&(c.nodeName==='A'||c.nodeName==='AREA')&&c.href.substr(0,4)==='http'&&c.href.search(d.disableLinks)!==-1){this.interruptShow=true}}function p(b){this.interruptShow=true}function r(){OOo.addEventListener(document.body,'mousedown',m.bind(this));if(!this.options.events.disableFormElements){return}var b=document.getElementsByTagName('form'),a;for(a=b.length-1;a>=0;a-=1){OOo.addEventListener(b[a],'submit',p.bind(this))}}OOo.extend(OOo.Ocode.prototype,{setupEvents:g,setupDisableElements:r,getEntryPrompt:function(){OOo.getEntryPrompt.call(this)},showEntryPrompt:function(b){if(this.options.cookie){OOo.Ocode.tagUrl.call(this,this.options.cookie)}OOo.showEntryPrompt.call(this,b,this.show)}})}());OOo.extend(OOo.Ocode.prototype,{floating:function(){var d=document,f=this.floatingLogo=document.createElement('div'),j=d.createElement('div'),k=d.createElement('div'),h=d.createElement('div'),n=d.createElement('span'),l=this.options.floating,o=OOo.$(l.contentId),g='10px',m=l.id,p=d.createElement('span'),r,t,q,z,u,s,x,H,A=this.options.mobileTouches||2,B=0;function y(b){return b.offsetLeft+b.offsetWidth}function v(b){z.style.left=y(o)+'px'}p.innerHTML="Screen reader users: Please switch to forms mode for this link.";p.className="screen_reader";if(m){f.id=m}f.className='oo_feedback_float';k.className='oo_transparent';j.className='olUp';h.className='olOver';j.tabIndex=0;j.onkeyup=function(b){r=b||window.event;if(r.keyCode!==13){return}this.show(r)}.bind(this);j.innerHTML=l.caption||'Feedback';f.appendChild(p);f.appendChild(j);n.innerHTML=l.hoverCaption||'Click here to<br>rate this page';h.appendChild(n);f.appendChild(h);f.appendChild(k);function D(b){var a=d.documentElement.scrollTop||d.body.scrollTop,c=d.documentElement.clientHeight||document.body.clientHeight;f.style.top=(a+c-(x||0)-10)+'px'}if(l.position&&l.position.search(/Content/)&&o){z=this.spacer=d.createElement('div');u=OOo.Browser.WebKit?d.body:d.documentElement;z.id='oo_feedback_fl_spacer';z.style.left=y(o)+'px';d.body.appendChild(z);switch(l.position){case'rightOfContent':s=function(b){f.style.left=(y(o)-u.scrollLeft)+'px'};break;case'fixedPreserveContent':s=function(b){var a=OOo.Browser.IE?d.body.clientWidth:window.innerWidth,c=u.scrollLeft;if(a<=y(o)+f.offsetWidth+parseInt(g,10)){f.style.left=(y(o)-c)+'px'}else{f.style.left='';f.style.right=g}};break;case'fixedContentMax':s=function(b){var a=OOo.Browser.IE?d.body.clientWidth:window.innerWidth;if(a<=y(o)+f.offsetWidth+parseInt(g,10)){f.style.left='';f.style.right=g}else{f.style.left=(y(o)-u.scrollLeft)+'px';f.style.right=''}};break}window.setTimeout(s,0);OOo.addEventListener(window,'scroll',s,false);OOo.addEventListener(window,'resize',s,false);OOo.addEventListener(window,'resize',v,false)}else{f.style.right=g}if(!this.options.disableShow===true){f.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}this.show(a)}.bind(this);if(OOo.Browser.isMobile){if('ontouchstart'in window){f.ontouchstart=function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}B++}.bind(this);f.ontouchend=function(b){var a=b||window.event;if(B>=A){this.show(a);B=0}}.bind(this)}else{f.onclick=function(b){var a=b||window.event;this.show(a)}.bind(this)}}else{f.onclick=function(b){var a=b||window.event;this.show(a)}.bind(this)}}else{OOo.appendWaypointMobile(f,A)}d.body.appendChild(f)},removeFloatingLogo:function(){document.body.removeChild(this.floatingLogo);if(this.spacer){document.body.removeChild(this.spacer)}}});OOo.extend(OOo.Ocode.prototype,{bar:function(){var d=document,f=this.floatingLogo=d.createElement('a'),j,k,h,n=d.documentElement.scrollTop||d.body.scrollTop,l=d.createElement('span'),o=this.options,g=this.options.mobileTouches||2,m=0,p=d.createElement('span');function r(b){var a=0,c=0;if(b.offsetParent){do{a+=b.offsetLeft;c+=b.offsetTop}while(b==b.offsetParent);return[a,c]}}function t(b){var a=document.activeElement,c;if(!a)return;c=r(a);if(!c)return;if(c[1]+a.clientHeight>(window.innerHeight||document.body.clientHeight)+(window.pageYOffset||document.body.scrollTop)-f.clientHeight){if(navigator.appVersion.indexOf("MSIE 7.")!==-1){window.scrollBy(0,0)}else{window.scrollBy(0,a.clientHeight+20)}}}l.innerHTML='Launches comment card in new window';l.className='screen_reader';p.className='icon';this.reflowBar=OOo.K;f.id='oo_bar';f.href='#';f.innerHTML=o.bar.caption||'Feedback';f.appendChild(l);f.appendChild(p);if(typeof o.tabIndex==='number'){f.tabIndex=o.tabIndex}else{f.tabIndex=0}if(!this.options.disableShow===true){if(OOo.Browser.isMobile){if('ontouchstart'in window){f.ontouchstart=function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}m++}.bind(this);f.ontouchend=function(b){var a=b||window.event;if(m>=g){this.show(a);m=0}}.bind(this)}else{f.onclick=function(b){var a=b||window.event;this.show(a)}.bind(this)}}else{f.onclick=function(b){var a=b||window.event;this.show(a)}.bind(this)}}else{OOo.appendWaypointMobile(f,g)}document.body.className+=document.body.className<1?'oo_bar':' oo_bar';document.body.appendChild(f);OOo.addEventListener(document.body,'keyup',t,false)}});OOo.extend(OOo.Ocode.prototype,{tab:function(){var c=document,d=this.floatingLogo=c.createElement('div'),f=c.createElement('span'),j=c.createElement('div'),k=c.createElement('span'),h=this.options.tab,n=c.createElement('a'),l='Feedback',o=h.tabType,g='right',m=this.options.mobileTouches||2,p=0,r=false,t=OOo.readCookieOrStorage(h,'oo_tab_extend'),q=2592000;switch(o){case 1:var z=c.createElement('span');d=this.floatingLogo=c.createElement('a');f=c.createElement('span');d.href='#';d.id='oo_tab_'+o;if(h.position){g=h.position}if(h.extendEveryPage){r=h.extendEveryPage}if(h.extendExpiration){q=h.extendExpiration}d.className=tabClass='oo_tab_'+g+'_'+o;f.className='screen_reader';z.className='icon';if(typeof h.tabIndex==='number'){d.tabIndex=h.tabIndex}else{d.tabIndex=0}if(h.verbiage){l=h.verbiage}d.innerHTML=l;f.innerHTML='Launches comment card in new window';d.appendChild(f);d.appendChild(z);if(r){setTimeout(function(){d.className+=' small'},2500)}else{if(t==='prevent'){d.className+=' small'}else{var u;if(h.cookie&&h.cookie.domain){u=h.cookie.domain}else{u=OOo.getCookieDomain()}OOo.createCookieOrStorage(h,'oo_tab_extend','prevent',q,u);setTimeout(function(){d.className+=' small'},2500)}}break;default:d=this.floatingLogo=c.createElement('a');d.id='oo_tab';d.className='oo_tab_'+(h.position||g);d.href='#';if(!document.addEventListener||OOo.checkIfIE9orBelow()){d.className+=' oo_legacy'}if(h.wcagBasePath){d.className+=' wcag'}var s=document.createElement('img');if(h.iconPath){s.setAttribute('src',h.iconPath)}else{s.setAttribute('src','/onlineopinionV5/oo_tab_icon_retina.gif')}s.setAttribute('alt','');if(h.verbiage){l=h.verbiage}var x=document.createElement("textarea");x.innerHTML=l;l=x.value;var H=document.createTextNode(l);d.appendChild(s);d.appendChild(H);if(f){f.className='screen_reader';f.innerHTML=' Will open a new window';d.appendChild(f)}}if(!this.options.disableShow===true){if(OOo.Browser.isMobile){if('ontouchstart'in window){d.ontouchstart=function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}p++}.bind(this);d.ontouchend=function(b){var a=b||window.event;if(p>=m){this.show(a);p=0}}.bind(this)}else{d.onclick=function(b){var a=b||window.event;this.show(a)}.bind(this)}}else{d.onclick=function(b){var a=b||window.event;this.show(a)}.bind(this)}}else{OOo.appendWaypointMobile(d,m)}c.body.appendChild(d)}});OOo.extend(OOo.Ocode.prototype,{setupOnPageCC:function(){var f=document,j=OOo.Cache.overlay||f.createElement('div'),k=this.wrapper=f.createElement('div'),h=f.createElement('a'),n=f.createElement('div'),l=f.createElement('span'),o=this.frameName,g=f.createElement(OOo.DYNAMIC_FRAME_NAME_IS_BUGGY?'<iframe name="'+o+'">':'iframe'),m=f.createDocumentFragment(),p=this.options,r=p.onPageCard,t='https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',q,z,u,s=false,x=this,H,A,B,y,v,D,C,G=f.createElement('span');function w(b){if(b&&b.preventDefault){b.preventDefault()}document.body.focus();g.tabIndex=-1;g.title="empty";g['aria-hidden']='true';j.style.display='none';j.className='';f.body.removeChild(k);if(window.postMessage){OOo.removeEventListener(window,'message',v)}else{window.clearInterval(z)}s=false;x.onPageCardVisible=false;return false}v=OOo.Ocode.postMessageHandler(function(b){var a=parseInt(b,10),c,d;if(a>0){if(s){return}s=true;c=window.innerHeight||f.documentElement.clientHeight||f.body.clientHeight;d=a;C=k.offsetTop;if(d+C>c){d=c-40-C}g.style.width='565px';n.style.width='565px';g.style.height=d+'px';k.style.visibility='visible';if(l.clientHeight<20){l.style.height=k.offsetHeight+'px'}j.className="no_loading";x.onPageCardVisible=true;q&&f.body.removeChild(q)}else if(b==='submitted'){w()}if(OOo.Browser.IE&&f.compatMode==="BackCompat"){window.scrollTo(0,0)}},x.options.commentCardUrl);p.metrics.type='OnPage';OOo.Cache.overlay=j;j.id='oo_overlay';j.style.display='block';j.className='';n.className='iwrapper';k.className='oo_cc_wrapper';k.setAttribute('role','alert');k.setAttribute('aria-describedby','comment_card_description');G.className='screen_reader';G.id='comment_card_description';G.innerHTML='Please leave your feedback in the comment card you just activated';k.appendChild(G);h.className='oo_cc_close';h.innerHTML='<span class="screen_reader">Close dialog</span><span aria-hidden="true">&#10006;</span>';h.title=p.closeTitle?p.closeTitle:'Close dialog';if(!f.addEventListener){n.style.outline='1px solid #cdcdcd'}k.style.visibility='hidden';h.tabIndex=0;h.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}w()};if(OOo.Browser.IE){g.frameBorder='0';if(!window.XMLHttpRequest||f.compatMode==="BackCompat"){D=Math.max(f.documentElement.clientWidth,f.body.offsetWidth);j.style.position='absolute';j.style.width=f.compatMode==="BackCompat"?(D-21)+'px':D+'px';j.style.height=Math.max(f.documentElement.clientHeight,f.body.offsetHeight)+'px';k.style.position='absolute';OOo.addEventListener(window,'scroll',function(){j.style.top=(f.body.scrollTop+document.body.clientHeight-j.clientHeight)+'px';k.style.top=(f.body.scrollTop+C+25)+'px'})}}OOo.addEventListener(h,'click',w);if(r.closeWithOverlay&&!OOo.Browser.isMobile){k.appendChild(l);l.onclick=w;j.onclick=w}g.src=' ';g.name=o;g.title='Comment Card';n.appendChild(h);n.appendChild(g);k.appendChild(n);m.appendChild(k);m.appendChild(j);f.body.appendChild(m);if(window.postMessage){OOo.addEventListener(window,"message",v)}else{z=setInterval(v,500)}p.metrics.time2=(new Date()).getTime();if(p.constructCommentCardUrl){g.setAttribute('src',OOo.appendOOForm(p,o))}else{q=OOo.appendOOForm(p,o);q.submit()}}});OOo.extend(OOo.Ocode,{postMessageHandler:function(d,f,j){return function(b){var a='https://secure.opinionlab.com',c;if(!j){j=location}if((b&&!(b.origin===a||b.origin.indexOf(f)!==0))||(!b&&j.hash.search('OL=')===-1)){return false}c=b?b.data:j.hash.split('=').pop();if(!b&&location.hash){location.hash=''}d(c);return c}}});OOo.Invitation=function(b){this.options={tunnelCookie:'oo_inv_tunnel',repromptTime:604800,responseRate:50,useBrowserStorage:false,repromptCookie:'oo_inv_reprompt',promptMarkup:'oo_inv_prompt.html',promptStyles:'oo_inverstitial_style.css',percentageCookie:'oo_inv_percent',pagesHitCookie:'oo_inv_hit',cookieDomain:'',popupType:'popunder',promptDelay:0,neverShowAgainButton:false,loadPopupInBackground:false,truncatePrevCurrentMetrics:false,disablePrevCurrentMetrics:false,tealeafCookieName:'TLTSID',monitorWindow:'oo_inv_monitor.html',companySlogan:'We value your opinion',beforePrompt:OOo.K,callBacks:{prompt:'',yesClick:'',noClick:'',closeClick:''},inviteMarkup:"<div id='oo_invitation_prompt' role='dialog' aria-describedby='oo_invite_message'><div id='oo_invitation_company_logo'></div><div id='oo_invite_content'><p id='oo_invite_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='prompt_button'><a href='#' id='oo_launch_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='prompt_button'><a href='#' id='oo_no_thanks'>No Thanks</a></p><p id='ol_invitation_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>x</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_invitation_prompt #oo_invite_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->",};this.popupShown=false;OOo.extend(this.options,b);var a=this.options,c=parseInt(OOo.readCookieOrStorage(a,a.pagesHitCookie),10)||0;OOo.Invitation.friendlyDomains=a.friendlyDomains||null;var d={weight:Number(OOo.readCookieOrStorage(a,'oo_OODynamicRewrite_weight')),searchPattern:OOo.readCookieOrStorage(a,'oo_OODynamicRewrite_searchPattern'),replacePattern:OOo.readCookieOrStorage(a,'oo_OODynamicRewrite_replacePattern')};OOo.eraseCookieOrStorage(a,'oo_OODynamicRewrite_weight');OOo.eraseCookieOrStorage(a,'oo_OODynamicRewrite_searchPattern');OOo.eraseCookieOrStorage(a,'oo_OODynamicRewrite_replacePattern');if(!window.OOoDynamicRewrite||window.OOoDynamicRewrite.weight<d.weight){window.OOoDynamicRewrite=d}if(window.OOoDynamicRewrite&&('number'===typeof window.OOoDynamicRewrite.weight)&&!isNaN(window.OOoDynamicRewrite.weight)){OOo.createCookieOrStorage(a,'oo_OODynamicRewrite_weight',window.OOoDynamicRewrite.weight,'',a.cookieDomain);if(window.OOoDynamicRewrite.searchPattern){OOo.createCookieOrStorage(a,'oo_OODynamicRewrite_searchPattern',window.OOoDynamicRewrite.searchPattern,'',a.cookieDomain)}if(window.OOoDynamicRewrite.replacePattern){OOo.createCookieOrStorage(a,'oo_OODynamicRewrite_replacePattern',window.OOoDynamicRewrite.replacePattern,'',a.cookieDomain)}}if(location.search.search('evs')!==-1||OOo.readCookieOrStorage(a,'oo_evs_friendly')==='yes'){OOo.eraseCookieOrStorage(a,'oo_evs_friendly');a.loadPopupInBackground=true;this.launchPopup();OOo.createCookieOrStorage(a,a.repromptCookie,1,a.repromptTime===-1?0:a.repromptTime,a.cookieDomain)}setTimeout(function(){if(!window.oo_inv_monitor){return}if(a.area&&location.href.search(a.area)===-1){this.options.popupType='popup';this.launchPopup()}else if(a.goal&&location.href.search(a.goal)!==-1){window.oo_inv_monitor.close()}}.bind(this),1600);if(OOo.readCookieOrStorage(a,a.repromptCookie)){return}if(a.thirdPartyCookies&&OOo.checkThirdPartyCookies(a.thirdPartyCookies)){return}if(!OOo.readCookieOrStorage(a,a.percentageCookie)){OOo.createCookieOrStorage(a,a.percentageCookie,(Math.random()>1-(a.responseRate/100))?"1":"0",'',a.cookieDomain)}if(typeof a.promptTrigger!=='undefined'){if(a.promptTrigger instanceof RegExp){if(!window.location.href.match(a.promptTrigger)){return}}else if(a.promptTrigger instanceof Array){if(!OOo.checkTunnel(location.pathname,a.promptTrigger,a.tunnelCookie)){return}}}c+=1;OOo.createCookieOrStorage(a,a.pagesHitCookie,c,'',a.cookieDomain);if(a.pagesHit&&c<a.pagesHit){return}OOo.eraseCookieOrStorage(a,a.tunnelCookie);if(OOo.readCookieOrStorage(a,a.percentageCookie)==='1'){window.setTimeout(function(){OOo.createCookieOrStorage(a,a.repromptCookie,1,a.repromptTime,a.cookieDomain);this.options.beforePrompt();this.getPrompt()}.bind(this),a.promptDelay*1000)}};OOo.Invitation.notifyFriendlyLocationChange=function(b){if(window.oo_inv_monitor){OOo.createCookieOrStorage(opt,'oo_evs_friendly','yes','',opt.cookieDomain)}};OOo.Invitation.prototype={getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(b){OOo.showPrompt.call(this,b,this.launchPopup)},launchPopup:function(b){if(this.popupShown){return}this.popupShown=true;var a=b||window.event;if(typeof a!=='undefined'){if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}}var c=this.options,d=window.location.href,f=c.popupType==='popup'?'https://secure.opinionlab.com/ccc01/comment_card.asp?':c.pathToAssets+c.monitorWindow+'?time1='+(new Date()).getTime()+'&',j,k=[],h=c.asm?[555,500]:(OOo.Browser.Chrome?[400,400]:[400,350]),n,l=OOo.createMetrics(),o=OOo.readCookieOrStorage(c,c.tealeafCookieName),g;if(c.clickTalePID&&window.ClickTaleGetUID&&window.ClickTaleGetSID||window.ClickTaleGetPID&&window.ClickTaleGetUID&&window.ClickTaleGetSID){o+='|'+[c.clickTalePID||window.ClickTaleGetPID(),window.ClickTaleGetUID(),window.ClickTaleGetSID()].join('/')}h=c.newWindowSize||h;g='scrollbars=1,resizable=1,location=no,status=no,width='+h[0]+',height='+h[1];if(c.referrerRewrite){l.referer=OOo.referrerRewrite(c.referrerRewrite)}if(c.truncatePrevCurrentMetrics){l.prev=OOo.truncateMetric(l.prev);l.currentURL=OOo.truncateMetric(l.currentURL)}if(c.disablePrevCurrentMetrics){l.prev='';l.currentURL=''}if(c.thirdPartyCookies){OOo.setThirdPartyCookies(c.thirdPartyCookies)}j=OOo.toQueryString(l)+'&type=Invitation';if(c.customVariables){j+='&customVars='+encodeURIComponent(OOo.serialize(c.customVariables))}j+='&custom_var='+OOo.createLegacyVars(c.legacyVariables,o);if(c.asm){j+='&asm=2';g+=',scrollbars=1'}f+=j;if(f.match(/\?/g).length===2)f=f.replace(/\?([^?]*)$/,'&$1');this.popup=n=window.open(f,'OnlineOpinionInvitation',g);if(!c.loadPopupInBackground&&OOo.$('oo_container')){OOo.hidePrompt(a)}},killPrompt:function(b){var a=b||window.event;if(this.options.callBacks&&typeof this.options.callBacks.noClick==='function'){this.options.callBacks.noClick()}OOo.createCookieOrStorage(this.options,this.options.repromptCookie,1,157680000,opt.cookieDomain);OOo.hidePrompt(a)}};OOo.extend(OOo.Invitation,{navigateToFriendlyDomain:function(b){location.href=b}});OOo.Waypoint=function(b){var a=OOo.Browser;if(b.disableMobile&&a.isMobile){return}if(b.disableNoniOS&&a.isMobileNonIOS){return}this.options={pathToAssets:'/onlineopinionV5/',waypointMarkup:'oo_waypoint.html',companySlogan:'Give us feedback',companyLogo:'waypoint_logo.png',linkFocus:true,categories:{website:{tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Website'},store:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://store.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Store'},product:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://product.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Product'},other:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://other.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Other'}},wpmarkup:"<div id='oo_waypoint_prompt' role='dialogue' aria-describedby='oo_waypoint_message'><div id='oo_waypoint_company_logo'></div><div id='oo_waypoint_content'><p id='oo_waypoint_message'>Select a category</p><p id='waypoint_icons'></p><p id='ol_waypoint_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_waypoint_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialogue</div><span aria-hidden='true'>x</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_waypoint_prompt #oo_waypoint_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->"};OOo.extend(this.options,b);var c=this.options,d=c.categories;for(var f in d){if(d.hasOwnProperty(f)){if(typeof c.categories[f].oCode==='object'){var j={};j[f]=new OOo.Ocode(d[f].oCode);OOo.extend(OOo.Waypoint,j)}}}OOo.extend(OOo.Waypoint,{getWaypoint:function(){this.getWaypoint()}.bind(this)})};OOo.Waypoint.prototype={getWaypoint:function(){OOo.getWaypoint.call(this)},showWaypoint:function(b){OOo.showWaypoint.call(this,b)},killWaypoint:function(b){var a=b||window.event;OOo.hideWaypoint(a)}};OOo.extend(OOo,{appendWaypoint:function(c){var d=OOo.$(c);if(!!d){if(!OOo.Browser.isMobile){OOo.addEventListener(d,'click',function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}OOo.Waypoint.getWaypoint()},false);OOo.addEventListener(d,'keydown',function(b){var a=b||window.event;if(a.keyCode!==13){return}if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}OOo.Waypoint.getWaypoint()},false)}}}});OOo.extend(OOo,{appendWaypointMobile:function(c,d){var f=0;var j=d||2;if(typeof c==="string")var c=OOo.$(c);if(!!c){if(OOo.Browser.isMobile){if("ontouchstart"in window&&"ontouchend"in window&&"ontouchmove"in window){OOo.addEventListener(c,"touchstart",function(b){f++},false);OOo.addEventListener(c,"touchend",function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation();if(f>=j){OOo.Waypoint.getWaypoint();f=0}}else{a.returnValue=false}},false);OOo.addEventListener(c,"touchmove",function(b){f=0},false)}else{OOo.addEventListener(c,"click",function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}OOo.Waypoint.getWaypoint()},false)}}}}});return OOo}));
// #### FILE END: oo_engine.min.js




// #### FILE: oo_conf_waypoint.js
/*
OnlineOpinion v5.9.12
Released: 07/18/2017. Compiled 07/05/2018 02:16:12 PM -0500
Branch: 5.9.12 35b5b2ad883c34f46ba08db42faadc591299a198
Components: Full
UMD: disabled
The following code is Copyright 1998-2018 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/
/* global window, OOo */
/* [+] Tab configuration */

var cv = {
    sid: 'costco',
    raduis: 20,
    clickTaleReplayLink: '',
    clickTaleUID: '',
    clickTaleGUID: '',
    clickTalePartition: '',
    clickTaleNotAvailableOnPageWhereOLClicked: 'true',
    clickTaleNeverAvailableOnSite: 'true',
    s_vi: OOo.readCookie('s_vi')
};

var oo_catCheck = document.querySelector('#left_nav div h2'),
    oo_rp = '',
    l = window.location.href,
    home = 'http://www.costco.com/',
    testHome = 'http://www-vqa2.costco.com/';

if (oo_catCheck !== null) {
    if (oo_catCheck.innerHTML === 'Category') {
        oo_rp = '.category';
    }
} else if (l === home || l === testHome) {
    oo_rp = 'homepage';
}

OOo.oo_waypoint = new OOo.Waypoint({
    pathToAssets: pathToAssets,
    companySlogan: 'Give us feedback',
    companyLogo: pathToAssets + 'waypoint_logo.png',
    categories: {
        website: {
            oCode: {
                referrerRewrite: {
                    replacePattern: window.location.href + oo_rp
                },
                customVariables: cv
            },
            icon: 'icon_web.png',
            buttonText: 'Website'
        },
        store: {
            oCode: {
                commentCardUrl: 'https://location.opinionlab.com',
                referrerRewrite: 'https://warehouse.costco.com',
                customVariables: cv
            },
            icon: 'icon_store.png',
            buttonText: 'Warehouse'
        }
    },
    disableMobile: false,
    disableNoniOS: false
});

if (window === window.top) {

    OOo.oo_tab = new OOo.Ocode({
        tab: {
            position: 'right',
            title: 'Feedback',
            iconPath: pathToAssets,
            verbiage: 'Feedback',
            iconPath: pathToAssets + 'oo_tab_icon_retina.gif'
        },
        disableShow: true
    });

    OOo.appendWaypoint('oo_tab');
}

OOo.appendWaypoint('oo-feedback');
OOo.appendWaypoint('opinionLabFooterLink');
OOo.appendWaypointMobile('opinionLabFooterLink', 1);

// #### FILE END: oo_conf_waypoint.js

      $("#oo_tab").attr('data-oo-display-value', $("#oo_tab").css('display') );
      ooResize();
      // $("#oo_tab").on("click", function(event) { oPTM1.olFeedbackClick(event) } )
      // $("#opinionLabFooterLink").on("click", function(event) { oPTM1.olFeedbackClick(event) } )
      $(window).on("resize", function() { ooResize() });

    


    function ooResize() {
        if ( COSTCO.util.getScreenType().indexOf('DESKTOP') > -1 ) {
            $("#oo_tab").css('display', $("#oo_tab").attr('data-oo-display-value') );
        } else {
            $("#oo_tab").css('display', 'none' );
        }
    }

    OOo.oo_warehouse = new OOo.Ocode({
        referrerRewrite: {
            searchPattern: /:\/\/[^\/]*/,
            replacePattern: '://locationpage.link.costco.com'
        }
    });
    OOo.oo_launch = function(e, feedback){
      var evt = e || window.event;
      OOo[feedback].show(evt);
    };

    /* Start ClickTale Session Capture */
//Async doOnlyWhen Loop for up to 10 seconds
var doOnlyWhen = function(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (--times < 0) {
        if (typeof failHandler === 'function') {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }
    setTimeout(function() {
        doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
};
 
//Set Clicktale Custom Vars for OL
var clicktaleCheckLocalStorage = function() {
    return window.localStorage && localStorage.getItem('CTrecordingLink') !== null && localStorage.getItem('CTuserID') !== null && localStorage.getItem('CTpartition') !== null && localStorage.getItem('CTguid') !== null;
};
 
var clicktaleSetCustomVars = function() {
    cv.clickTaleReplayLink = localStorage.getItem('CTrecordingLink');
    cv.clickTaleUID = localStorage.getItem('CTuserID');
    cv.clickTalePartition = localStorage.getItem('CTpartition');
    cv.clickTaleGUID = localStorage.getItem('CTguid');
 
    if (window.clickTaleNotAvailableOnPageWhereOLClicked) {
        cv.clickTaleNotAvailableOnPageWhereOLClicked = 'true';
    }
    else {
        cv.clickTaleNotAvailableOnPageWhereOLClicked = 'false';
    }
 
    if (window.clickTaleNeverAvailableOnSite) {
        cv.clickTaleNeverAvailableOnSite = 'true';
    }
    else {
        cv.clickTaleNeverAvailableOnSite = 'false';
    }
};
 
if (window.ClickTaleIsRecording && ClickTaleIsRecording()) {
    cv.clickTaleNotAvailableOnPageWhereOLClicked = 'false';
}
 
if (clicktaleCheckLocalStorage()) {
    cv.clickTaleNeverAvailableOnSite = 'false';
    clicktaleSetCustomVars();
}
 
var clickTaleNotAvailable = function() {
    window.clickTaleNotAvailableOnPageWhereOLClicked = true;
 
    if (clicktaleCheckLocalStorage()){
        window.clickTaleNeverAvailableOnSite = false;
        clicktaleSetCustomVars();
    }
    else {
        window.clickTaleNeverAvailableOnSite = true;
        clicktaleSetCustomVars();
    }
};
 
//Check for Clicktale Recording Link
var clicktaleCheckForCTlink = function() {
    return clicktaleCheckLocalStorage() && window.ClickTaleIsRecording && ClickTaleIsRecording();
};
 
//Async loop for up to 10 seconds
doOnlyWhen(clicktaleSetCustomVars, clicktaleCheckForCTlink, 100, 50, clickTaleNotAvailable);
/* End ClickTale Session Capture */

