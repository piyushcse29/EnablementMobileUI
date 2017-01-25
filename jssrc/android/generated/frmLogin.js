function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxImgBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxImgBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImgBack.setDefaultUnit(kony.flex.DP);
    var imgBack = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBack",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "eventsplash.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49.96%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox02eb611f9eefd49",
        "top": "30%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    flxLogin.setDefaultUnit(kony.flex.DP);
    var lblLogin = new kony.ui.Label({
        "centerX": "50.00%",
        "id": "lblLogin",
        "isVisible": true,
        "skin": "CopyslLabel0b98178ed7fe246",
        "text": "Login Here",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxOutlook = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxOutlook",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_19c1e2e1fc6d411fa7da94d9a9011f91,
        "skin": "CopyslFbox0e531eacfb7be44",
        "top": "30%",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxOutlook.setDefaultUnit(kony.flex.DP);
    var imgOutlook = new kony.ui.Image2({
        "height": "100%",
        "id": "imgOutlook",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "outlook.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOutlook.add(imgOutlook);
    flxLogin.add(lblLogin, flxOutlook);
    flxImgBack.add(imgBack, flxLogin);
    frmLogin.add(flxImgBack);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmLogin.info = {
        "kuid": "d8f7bd9b038e4a71ac3b501721ef3f0a"
    };
};