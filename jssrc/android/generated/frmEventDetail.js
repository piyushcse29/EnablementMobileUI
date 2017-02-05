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
        "skin": "CopyslFSbox02259c466840a45",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxEventPic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "29.81%",
        "id": "flxEventPic",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox0f0c22e46ae7047",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEventPic.setDefaultUnit(kony.flex.DP);
    var flxBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "16%",
        "id": "flxBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "onClick": AS_FlexContainer_40bae11f025742258a3fef2ca636957d,
        "skin": "CopyslFbox032615557e77347",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxBack.setDefaultUnit(kony.flex.DP);
    var imgBack = new kony.ui.Image2({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgBack",
        "isVisible": true,
        "left": "6%",
        "skin": "slImage",
        "src": "back_btn.png",
        "top": "0%",
        "width": "15dp",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BtnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "15dp",
        "id": "BtnBack",
        "isVisible": true,
        "left": "6%",
        "skin": "CopyslButtonGlossBlue05af6c63cd0374e",
        "width": "15dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "LblTitle",
        "isVisible": true,
        "left": "106%",
        "skin": "CopyslLabel04c792dce97d640",
        "text": "My Event Details",
        "textStyle": {
            "strikeThrough": false
        },
        "top": "1dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxBack.add(imgBack, BtnBack, LblTitle);
    var imgEvent = new kony.ui.Image2({
        "centerX": "50%",
        "height": "84%",
        "id": "imgEvent",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "carousel4.png",
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
        "isVisible": false,
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
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "67.50%",
        "horizontalScrollIndicator": true,
        "id": "flxEventDescription",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "20.50%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    flxEventDescription.setDefaultUnit(kony.flex.DP);
    var lblEventDescription = new kony.ui.Label({
        "id": "lblEventDescription",
        "isVisible": false,
        "left": "-1.85%",
        "skin": "CopyslLabel01ef66ed3e0e041",
        "text": "Event Description",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "56.06%",
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
        "isVisible": false,
        "left": "2.78%",
        "skin": "CopyslLabel0c4fdd2b5b7d84c",
        "text": "Timings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "27.27%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var DescriptionCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "DescriptionCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox062dd4e1035c049",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    DescriptionCont.setDefaultUnit(kony.flex.DP);
    var lblMyEventName = new kony.ui.Label({
        "id": "lblMyEventName",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel06b8b5a8243f541",
        "text": "Kony Visualizer 8.2",
        "textStyle": {
            "strikeThrough": false
        },
        "top": "2.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var LocationCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "LocationCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "6.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    LocationCont.setDefaultUnit(kony.flex.DP);
    var lblLocationName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocationName",
        "isVisible": true,
        "left": "4%",
        "skin": "lblDescriptionName",
        "text": "Location :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLocation = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocation",
        "isVisible": true,
        "left": "1%",
        "skin": "KeyLabel",
        "text": "Phoenix",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    LocationCont.add(lblLocationName, lblLocation);
    var TimingsCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "TimingsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "14%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    TimingsCont.setDefaultUnit(kony.flex.DP);
    var lblTimingName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTimingName",
        "isVisible": true,
        "left": "4%",
        "skin": "lblDescriptionName",
        "text": "Timing :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTimings = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTimings",
        "isVisible": true,
        "left": "1%",
        "skin": "KeyLabel",
        "text": "10AM - 2PM",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    TimingsCont.add(lblTimingName, lblTimings);
    var PointsCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "PointsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "20.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    PointsCont.setDefaultUnit(kony.flex.DP);
    var lblPointsName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPointsName",
        "isVisible": true,
        "left": "4%",
        "skin": "lblDescriptionName",
        "text": "Points :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPoints = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPoints",
        "isVisible": true,
        "left": "1%",
        "skin": "KeyLabel",
        "text": "80",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    PointsCont.add(lblPointsName, lblPoints);
    var ContDescription = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "ContDescription",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "29.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ContDescription.setDefaultUnit(kony.flex.DP);
    var lblDescriptionName = new kony.ui.Label({
        "id": "lblDescriptionName",
        "isVisible": true,
        "left": "12dp",
        "skin": "lblDescriptionName",
        "text": "Event Description :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtDescription = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "id": "txtDescription",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0ac7d0a57e6f648",
        "text": "The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. ",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 1, 0, 0],
        "paddingInPixel": false
    }, {});
    ContDescription.add(lblDescriptionName, txtDescription);
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
        "top": "55%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSchedule.setDefaultUnit(kony.flex.DP);
    var lblSchedule = new kony.ui.Label({
        "id": "lblSchedule",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel00f5738a0d4ee4b",
        "text": "Schedule :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ScheduleSeg = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "data": [{
            "CheckImg": "tickicn.png",
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "closeicn.png",
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 2",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 3",
            "lblTime": "10 AM - 2 PM"
        }],
        "groupCells": false,
        "id": "ScheduleSeg",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxMyEvent,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "12.50%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CheckImg": "CheckImg",
            "CkeckBox": "CkeckBox",
            "DateNTimeCont": "DateNTimeCont",
            "Label08b194af0dc3d41": "Label08b194af0dc3d41",
            "Linelbl": "Linelbl",
            "ScheduleCont": "ScheduleCont",
            "flxMyEvent": "flxMyEvent",
            "flxMyEventDetail": "flxMyEventDetail",
            "lblDate": "lblDate",
            "lblDateName": "lblDateName",
            "lblSep2": "lblSep2",
            "lblSeparater": "lblSeparater",
            "lblStageName": "lblStageName",
            "lblTime": "lblTime"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSchedule.add(lblSchedule, ScheduleSeg);
    DescriptionCont.add(lblMyEventName, LocationCont, TimingsCont, PointsCont, ContDescription, flxSchedule);
    flxEventDescription.add(lblEventDescription, lblTiming, DescriptionCont);
    var btnEnroll = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "5.80%",
        "id": "btnEnroll",
        "isVisible": true,
        "left": "0.00%",
        "skin": "CopyslButtonGlossBlue007fa73d91f9e4a",
        "text": "Done",
        "top": "91.60%",
        "width": "89%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMain.add(flxEventPic, flxEventDescription, btnEnroll);
    frmEventDetail.add(flxMain);
};

function frmEventDetailGlobals() {
    frmEventDetail = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEventDetail,
        "enabledForIdleTimeout": false,
        "id": "frmEventDetail",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0eed01202cd2f46"
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