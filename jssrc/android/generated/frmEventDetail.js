function addWidgetsfrmEventDetail() {
    frmEventDetail.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxEventPic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "flxEventPic",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0f0c22e46ae7047",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEventPic.setDefaultUnit(kony.flex.DP);
    var flxBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "onClick": AS_FlexContainer_40bae11f025742258a3fef2ca636957d,
        "skin": "CopyslFbox032615557e77347",
        "top": "3%",
        "width": "12%",
        "zIndex": 2
    }, {}, {});
    flxBack.setDefaultUnit(kony.flex.DP);
    var imgBack = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBack",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "backblack.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBack.add(imgBack);
    var imgEvent = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEvent",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "bck.PNG",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblEventName = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "55%",
        "height": "20%",
        "id": "lblEventName",
        "isVisible": true,
        "skin": "CopyslLabel07a4c0e33e63d44",
        "text": "Scavenger hunt",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxEventPic.add(flxBack, imgEvent, lblEventName);
    var flxEventDescription = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "flxEventDescription",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "35%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEventDescription.setDefaultUnit(kony.flex.DP);
    var lblEventDescription = new kony.ui.Label({
        "id": "lblEventDescription",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel01ef66ed3e0e041",
        "text": "Event Descriptiion",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTiming = new kony.ui.Label({
        "id": "lblTiming",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c4fdd2b5b7d84c",
        "text": "Timings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxEventDescription.add(lblEventDescription, lblTiming);
    var flxSchedule = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "flxSchedule",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "70%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSchedule.setDefaultUnit(kony.flex.DP);
    var lblSchedule = new kony.ui.Label({
        "id": "lblSchedule",
        "isVisible": true,
        "left": "-0.03%",
        "skin": "CopyslLabel00f5738a0d4ee4b",
        "text": "Schedule",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0.00%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSchedule.add(lblSchedule);
    var btnEnroll = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "btnEnroll",
        "isVisible": true,
        "left": "0.00%",
        "skin": "CopyslButtonGlossBlue007fa73d91f9e4a",
        "text": "Enroll",
        "top": "105%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMain.add(flxEventPic, flxEventDescription, flxSchedule, btnEnroll);
    frmEventDetail.add(flxMain);
};

function frmEventDetailGlobals() {
    frmEventDetail = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEventDetail,
        "enabledForIdleTimeout": false,
        "id": "frmEventDetail",
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
    frmEventDetail.info = {
        "kuid": "f8679ca865b447e7bae30b04c5c74eba"
    };
};