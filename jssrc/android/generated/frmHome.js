function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxHome = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHome",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox026fd8f70965149",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHome.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox05d1e1dad82814c",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var flxsrch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "85%",
        "id": "flxsrch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "86%",
        "onClick": AS_FlexContainer_65dea0c939a348b685ca7229ddac24f6,
        "skin": "slFbox",
        "top": "0%",
        "width": "14%",
        "zIndex": 1
    }, {}, {});
    flxsrch.setDefaultUnit(kony.flex.DP);
    var imgSrc = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "imgSrc",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "sh.png",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxsrch.add(imgSrc);
    var imgLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "appname.png",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeader.add(flxsrch, imgLogo);
    var flxSearch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "10%",
        "id": "flxSearch",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0bf90cafcf2ba43",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearch.setDefaultUnit(kony.flex.DP);
    var txtEnter = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "60%",
        "id": "txtEnter",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": "Enter text to search",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0d8371afaae2c43",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "18%",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxsrc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "85%",
        "id": "flxsrc",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "86%",
        "onClick": AS_FlexContainer_d2c81a878d2a4992a5a216ae43403428,
        "skin": "CopyslFbox0e986e473f65241",
        "top": "0%",
        "width": "14%",
        "zIndex": 1
    }, {}, {});
    flxsrc.setDefaultUnit(kony.flex.DP);
    var imgCopySearch = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "imgCopySearch",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "sh.png",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxsrc.add(imgCopySearch);
    flxSearch.add(txtEnter, flxsrc);
    var tabHome = new kony.ui.TabPane({
        "activeSkin": "MyCustom",
        "activeTabs": [0],
        "height": "90%",
        "id": "tabHome",
        "inactiveSkin": "MyInactive",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "left": "-0.03%",
        "maxHeight": "100px",
        "top": "9.98%",
        "viewConfig": {
            "collapsibleViewConfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "collapsibleviewconfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "tabViewConfig": {
                "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                "image1": "tableftarrow.png",
                "image2": "tabrightarrow.png"
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
        "width": "100%",
        "zIndex": 1
    }, {
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tabHeaderHeight": 64
    });
    var tabMyEvent = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabMyEvent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab02ac065d26d144e",
        "tabName": "My Event",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabMyEvent.setDefaultUnit(kony.flex.DP);
    var segMyEvents = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "Image0715357f567144f": "option2.png",
            "Image0de095705a52b4a": "k.png",
            "lblEventName": "Event Name",
            "lblPlace": "Board Room: Phoenix",
            "lblTime": "10 AM - 01 PM"
        }, {
            "Image0715357f567144f": "option2.png",
            "Image0de095705a52b4a": "k.png",
            "lblEventName": "Event Name",
            "lblPlace": "Board Room: Phoenix",
            "lblTime": "10 AM - 01 PM"
        }, {
            "Image0715357f567144f": "option2.png",
            "Image0de095705a52b4a": "k.png",
            "lblEventName": "Event Name",
            "lblPlace": "Board Room: Phoenix",
            "lblTime": "10 AM - 01 PM"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segMyEvents",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0ba2f20fe8da642",
        "rowTemplate": FlexContainer0c577657195b747,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer038608931f4704b": "FlexContainer038608931f4704b",
            "FlexContainer03fddf65ed89949": "FlexContainer03fddf65ed89949",
            "FlexContainer088575ed9a3ca42": "FlexContainer088575ed9a3ca42",
            "FlexContainer0c577657195b747": "FlexContainer0c577657195b747",
            "Image0715357f567144f": "Image0715357f567144f",
            "Image0de095705a52b4a": "Image0de095705a52b4a",
            "lblEventName": "lblEventName",
            "lblPlace": "lblPlace",
            "lblTime": "lblTime"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabMyEvent.add(segMyEvents);
    tabHome.addTab("tabMyEvent", "My Event", null, tabMyEvent, null);
    var tabEvent = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabEvent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab0c346844174d043",
        "tabName": "Events",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabEvent.setDefaultUnit(kony.flex.DP);
    var segEvents = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgComment": "comment.png",
            "imgEnroll": "enroll.png",
            "imgEvent": "bck.PNG",
            "imgLike": "like.png",
            "lblCompleted": "Completed",
            "lblDate": "January 16, 2017",
            "lblDescription": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
            "lblEventName": "Scavenger Hunt",
            "lblMax": "Max Score",
            "lblOngoing": "Ongoing",
            "lblScore": "80",
            "lblSeparator": "k",
            "lblTest": "Label",
            "lblUpcoming": "Upcoming"
        }, {
            "imgComment": "comment.png",
            "imgEnroll": "enroll.png",
            "imgEvent": "bck.PNG",
            "imgLike": "like.png",
            "lblCompleted": "Completed",
            "lblDate": "January 16, 2017",
            "lblDescription": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
            "lblEventName": "Scavenger Hunt",
            "lblMax": "Max Score",
            "lblOngoing": "Ongoing",
            "lblScore": "80",
            "lblSeparator": "k",
            "lblTest": "Label",
            "lblUpcoming": "Upcoming"
        }, {
            "imgComment": "comment.png",
            "imgEnroll": "enroll.png",
            "imgEvent": "bck.PNG",
            "imgLike": "like.png",
            "lblCompleted": "Completed",
            "lblDate": "January 16, 2017",
            "lblDescription": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
            "lblEventName": "Scavenger Hunt",
            "lblMax": "Max Score",
            "lblOngoing": "Ongoing",
            "lblScore": "80",
            "lblSeparator": "k",
            "lblTest": "Label",
            "lblUpcoming": "Upcoming"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segEvents",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_d5fd7f01444645e7b56043acaa21d9f5,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg04aeeb9ac170741",
        "rowTemplate": flxEv,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0a592a32577c646": "FlexContainer0a592a32577c646",
            "flxComment": "flxComment",
            "flxDesc": "flxDesc",
            "flxEnroll": "flxEnroll",
            "flxEv": "flxEv",
            "flxFooter": "flxFooter",
            "flxHeader": "flxHeader",
            "flxImg": "flxImg",
            "flxLike": "flxLike",
            "flxMain": "flxMain",
            "imgComment": "imgComment",
            "imgEnroll": "imgEnroll",
            "imgEvent": "imgEvent",
            "imgLike": "imgLike",
            "lblCompleted": "lblCompleted",
            "lblDate": "lblDate",
            "lblDescription": "lblDescription",
            "lblEventName": "lblEventName",
            "lblMax": "lblMax",
            "lblOngoing": "lblOngoing",
            "lblScore": "lblScore",
            "lblSeparator": "lblSeparator",
            "lblTest": "lblTest",
            "lblUpcoming": "lblUpcoming"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabEvent.add(segEvents);
    tabHome.addTab("tabEvent", "Events", null, tabEvent, null);
    var tabLeadership = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabLeadership",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "slTab",
        "tabName": "Leader Board",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabLeadership.setDefaultUnit(kony.flex.DP);
    var segLeadership = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "imgLeader": "leader.png",
            "lblId": "jennifer.ding@kony.com",
            "lblName": "Jennifer Ding Ding",
            "lblScore": "28",
            "lblScoreName": "Total Score:"
        }, {
            "imgLeader": "leader.png",
            "lblId": "jennifer.ding@kony.com",
            "lblName": "Jennifer Ding Ding",
            "lblScore": "28",
            "lblScoreName": "Total Score:"
        }, {
            "imgLeader": "leader.png",
            "lblId": "jennifer.ding@kony.com",
            "lblName": "Jennifer Ding Ding",
            "lblScore": "28",
            "lblScoreName": "Total Score:"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segLeadership",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxLeaderMain,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxDetail": "flxDetail",
            "flxLeaderImage": "flxLeaderImage",
            "flxLeaderMain": "flxLeaderMain",
            "flxSub": "flxSub",
            "imgLeader": "imgLeader",
            "lblId": "lblId",
            "lblName": "lblName",
            "lblScore": "lblScore",
            "lblScoreName": "lblScoreName"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabLeadership.add(segLeadership);
    tabHome.addTab("tabLeadership", "Leader Board", null, tabLeadership, null);
    flxHome.add(flxHeader, flxSearch, tabHome);
    var flxComment = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxComment",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0e461b72d038047",
        "top": "0%",
        "width": "10%",
        "zIndex": 3
    }, {}, {});
    flxComment.setDefaultUnit(kony.flex.DP);
    var btnClose = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "btnClose",
        "isVisible": true,
        "onClick": AS_Button_24d031c2b1794d8bb662a867d166046f,
        "skin": "CopyslButtonGlossBlue0377ee6b69ae04e",
        "text": "Done",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxComment.add(btnClose);
    var flxEnroll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxEnroll",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0688100cdd3584e",
        "top": "0%",
        "width": "10%",
        "zIndex": 3
    }, {}, {});
    flxEnroll.setDefaultUnit(kony.flex.DP);
    var btnEnrollDone = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "btnEnrollDone",
        "isVisible": true,
        "onClick": AS_Button_0aafcaa1058640858486496ac79e9c45,
        "skin": "CopyslButtonGlossBlue0e1b8b2daf18046",
        "text": "Back",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEnroll.add(btnEnrollDone);
    frmHome.add(flxHome, flxComment, flxEnroll);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_bdc8eb1e017141c0bb152635da6a3591,
        "skin": "CopyslForm07c7738b122f246"
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
    frmHome.info = {
        "kuid": "0fa8fdfd25844c4082011f1911a46f02"
    };
};