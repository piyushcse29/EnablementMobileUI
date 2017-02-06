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
        "centerX": "50%",
        "centerY": "3%",
        "clipBounds": true,
        "height": "6%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox05d1e1dad82814c",
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
        "isVisible": false,
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
        "isVisible": false,
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
    var lblTitle1 = new kony.ui.Label({
        "id": "lblTitle1",
        "isVisible": true,
        "left": "33.40%",
        "skin": "CopyslLabel0e1f2343ad3284b",
        "text": "Enablement",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTitle2 = new kony.ui.Label({
        "id": "lblTitle2",
        "isVisible": true,
        "left": "59.20%",
        "skin": "CopyslLabel03da67889c87c44",
        "text": "GO",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var SearchCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17dp",
        "id": "SearchCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "73.30%",
        "skin": "slFbox",
        "top": "32.20%",
        "width": "17dp",
        "zIndex": 1
    }, {}, {});
    SearchCont.setDefaultUnit(kony.flex.DP);
    var SearchImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "SearchImg",
        "isVisible": true,
        "skin": "slImage",
        "src": "search_icon.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BtnSearch = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "BtnSearch",
        "isVisible": true,
        "skin": "CopyslButtonGlossBlue0f280a71a262d4b",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    SearchCont.add(SearchImg, BtnSearch);
    var ScanCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "18dp",
        "id": "ScanCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "81.9%",
        "skin": "slFbox",
        "top": "31.70%",
        "width": "19dp",
        "zIndex": 1
    }, {}, {});
    ScanCont.setDefaultUnit(kony.flex.DP);
    var ScanImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "ScanImg",
        "isVisible": true,
        "skin": "slImage",
        "src": "scan_icn.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BtnScan = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "BtnScan",
        "isVisible": true,
        "onClick": AS_Button_14c7e7561ad64d9c9dd99165b7e13486,
        "skin": "CopyslButtonGlossBlue0f280a71a262d4b",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ScanCont.add(ScanImg, BtnScan);
    var LogoutCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "LogoutCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "90.80%",
        "skin": "slFbox",
        "top": "29.80%",
        "width": "20dp",
        "zIndex": 1
    }, {}, {});
    LogoutCont.setDefaultUnit(kony.flex.DP);
    var LogoutImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "LogoutImg",
        "isVisible": true,
        "skin": "slImage",
        "src": "logout_icon.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BtnLogout = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "BtnLogout",
        "isVisible": true,
        "onClick": AS_Button_6d19984d331e46cf8d8e8a283e2f6445,
        "skin": "CopyslButtonGlossBlue0f280a71a262d4b",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    LogoutCont.add(LogoutImg, BtnLogout);
    flxHeader.add(flxsrch, imgLogo, lblTitle1, lblTitle2, SearchCont, ScanCont, LogoutCont);
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
        "activeSkin": "customNewActive",
        "activeTabs": [0],
        "centerX": "50.12%",
        "centerY": "52.98%",
        "height": "94%",
        "id": "tabHome",
        "inactiveSkin": "customNewInactive",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "maxHeight": "100px",
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
        "onTouchStart": AS_Tab_efc43ca2af1f42019d7fa618661da560,
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
    var IdentityCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "38.60%",
        "id": "IdentityCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox00f9eaca5ece64b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    IdentityCont.setDefaultUnit(kony.flex.DP);
    var TotalPointsCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "TotalPointsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3.20%",
        "skin": "slFbox",
        "top": "67.50%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    TotalPointsCont.setDefaultUnit(kony.flex.DP);
    var lblTotalPointsName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTotalPointsName",
        "isVisible": true,
        "left": "7%",
        "skin": "CopyslLabel01070873a9e4f42",
        "text": "Total Points ",
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
    var lblTotalPoints = new kony.ui.Label({
        "centerY": "45%",
        "id": "lblTotalPoints",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel05790fdbdaa3046",
        "text": "125",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    TotalPointsCont.add(lblTotalPointsName, lblTotalPoints);
    var RankCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "RankCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "82%",
        "skin": "slFbox",
        "top": "67.50%",
        "width": "13%",
        "zIndex": 1
    }, {}, {});
    RankCont.setDefaultUnit(kony.flex.DP);
    var lblRankName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblRankName",
        "isVisible": true,
        "left": "7%",
        "skin": "CopyslLabel01070873a9e4f42",
        "text": "Rank ",
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
    var lblRank = new kony.ui.Label({
        "centerY": "45%",
        "id": "lblRank",
        "isVisible": true,
        "left": "8%",
        "skin": "CopyslLabel05790fdbdaa3046",
        "text": "5",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    RankCont.add(lblRankName, lblRank);
    var ImageCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "31%",
        "clipBounds": true,
        "height": "44%",
        "id": "ImageCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "130%",
        "skin": "CopyslFbox0d370c608955240",
        "top": "17dp",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    ImageCont.setDefaultUnit(kony.flex.DP);
    var IdentityImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "IdentityImg",
        "isVisible": true,
        "skin": "slImage",
        "src": "image4.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ImageCont.add(IdentityImg);
    var lblName = new kony.ui.Label({
        "centerX": "50.50%",
        "id": "lblName",
        "isVisible": true,
        "skin": "CopyslLabel0a94b25fe7d8e4b",
        "text": "Kunal",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "52.70%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    IdentityCont.add(TotalPointsCont, RankCont, ImageCont, lblName);
    var segMyEvents = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "Image0715357f567144f": "rankshape.png",
            "RankImg": "rankshape.png",
            "lblEventName": "Event Name",
            "lblLine": "",
            "lblPlace": "Board Room: Phoenix",
            "lblPlaceName": "10 AM - 01 PM",
            "lblPoints": "30",
            "lblPointsName": "Points:",
            "lblRank": "3",
            "lblRankName": "Rank",
            "lblTime": "10 AM - 01 PM",
            "lblTimeName": "10 AM - 01 PM"
        }, {
            "Image0715357f567144f": "rankshape.png",
            "RankImg": "rankshape.png",
            "lblEventName": "Event Name",
            "lblLine": "",
            "lblPlace": "Board Room: Phoenix",
            "lblPlaceName": "10 AM - 01 PM",
            "lblPoints": "30",
            "lblPointsName": "Points:",
            "lblRank": "3",
            "lblRankName": "Rank",
            "lblTime": "10 AM - 01 PM",
            "lblTimeName": "10 AM - 01 PM"
        }, {
            "Image0715357f567144f": "rankshape.png",
            "RankImg": "rankshape.png",
            "lblEventName": "Event Name",
            "lblLine": "",
            "lblPlace": "Board Room: Phoenix",
            "lblPlaceName": "10 AM - 01 PM",
            "lblPoints": "30",
            "lblPointsName": "Points:",
            "lblRank": "3",
            "lblRankName": "Rank",
            "lblTime": "10 AM - 01 PM",
            "lblTimeName": "10 AM - 01 PM"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segMyEvents",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": AS_Segment_1df2f5cdad5e4ecfb29b0cd7c893ee95,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0ba2f20fe8da642",
        "rowTemplate": EventMainCont,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "31.70%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CardCont": "CardCont",
            "EventMainCont": "EventMainCont",
            "Image0715357f567144f": "Image0715357f567144f",
            "LocationCont": "LocationCont",
            "PointsCont": "PointsCont",
            "RankCont": "RankCont",
            "RankImg": "RankImg",
            "TimeCont": "TimeCont",
            "lblEventName": "lblEventName",
            "lblLine": "lblLine",
            "lblPlace": "lblPlace",
            "lblPlaceName": "lblPlaceName",
            "lblPoints": "lblPoints",
            "lblPointsName": "lblPointsName",
            "lblRank": "lblRank",
            "lblRankName": "lblRankName",
            "lblTime": "lblTime",
            "lblTimeName": "lblTimeName"
        },
        "width": "100%",
        "zIndex": 5
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabMyEvent.add(IdentityCont, segMyEvents);
    tabHome.addTab("tabMyEvent", "My Event", null, tabMyEvent, null);
    var tabEvent = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabEvent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onInit": AS_Tab_eb03912aca8e4555b895ded6685e1304,
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
            "ButtonEnroll": "ENROLL",
            "imgComment": "comment.png",
            "imgEnroll": "enroll.png",
            "imgEvent": "carousel1.png",
            "imgLike": "like.png",
            "lblCompleted": "Completed",
            "lblDate": "Jan 17",
            "lblDay": "22",
            "lblDescription": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
            "lblEventID": "Label",
            "lblEventName": "Scavenger Hunt",
            "lblLocation": "Phoenix",
            "lblLocationName": "Location :",
            "lblMax": "Points",
            "lblOngoing": "Ongoing",
            "lblScore": "80",
            "lblSeparator": "k",
            "lblTime": "10 AM - 10 PM",
            "lblTimeName": "Time :",
            "lblUpcoming": "Upcoming"
        }, {
            "ButtonEnroll": "ENROLL",
            "imgComment": "comment.png",
            "imgEnroll": "enroll.png",
            "imgEvent": "carousel4.png",
            "imgLike": "like.png",
            "lblCompleted": "Completed",
            "lblDate": "Jan 17",
            "lblDay": "22",
            "lblDescription": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
            "lblEventID": "Label",
            "lblEventName": "Scavenger Hunt",
            "lblLocation": "Phoenix",
            "lblLocationName": "Location :",
            "lblMax": "Points",
            "lblOngoing": "Ongoing",
            "lblScore": "80",
            "lblSeparator": "k",
            "lblTime": "10 AM - 10 PM",
            "lblTimeName": "Time :",
            "lblUpcoming": "Upcoming"
        }, {
            "ButtonEnroll": "ENROLL",
            "imgComment": "comment.png",
            "imgEnroll": "enroll.png",
            "imgEvent": "carousel3.png",
            "imgLike": "like.png",
            "lblCompleted": "Completed",
            "lblDate": "Jan17",
            "lblDay": "22",
            "lblDescription": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
            "lblEventID": "Label",
            "lblEventName": "Scavenger Hunt",
            "lblLocation": "Phoenix",
            "lblLocationName": "Location :",
            "lblMax": "Points",
            "lblOngoing": "Ongoing",
            "lblScore": "80",
            "lblSeparator": "k",
            "lblTime": "10 AM - 10 PM",
            "lblTimeName": "Time :",
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
            "ButtonEnroll": "ButtonEnroll",
            "DateCont": "DateCont",
            "FlexContainer0a592a32577c646": "FlexContainer0a592a32577c646",
            "LocationCont": "LocationCont",
            "StatusCont": "StatusCont",
            "TimeCont": "TimeCont",
            "flxBottom": "flxBottom",
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
            "lblDay": "lblDay",
            "lblDescription": "lblDescription",
            "lblEventID": "lblEventID",
            "lblEventName": "lblEventName",
            "lblLocation": "lblLocation",
            "lblLocationName": "lblLocationName",
            "lblMax": "lblMax",
            "lblOngoing": "lblOngoing",
            "lblScore": "lblScore",
            "lblSeparator": "lblSeparator",
            "lblTime": "lblTime",
            "lblTimeName": "lblTimeName",
            "lblUpcoming": "lblUpcoming"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabEvent.add(segEvents);
    tabHome.addTab("tabEvent", "Events", null, tabEvent, AS_Tab_eb03912aca8e4555b895ded6685e1304);
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
    var btnEnrollYes = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "20%",
        "id": "btnEnrollYes",
        "isVisible": true,
        "left": "20%",
        "onClick": AS_Button_0aafcaa1058640858486496ac79e9c45,
        "skin": "CopyslButtonGlossBlue0e1b8b2daf18046",
        "text": "Yes",
        "top": "70%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblQuote = new kony.ui.Label({
        "id": "lblQuote",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslLabel0aa574c95ed7648",
        "text": "Are you sure you want to enroll ?",
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
    var CopybtnEnrollYes0e944663eba9c4d = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "20%",
        "id": "CopybtnEnrollYes0e944663eba9c4d",
        "isVisible": true,
        "left": "60%",
        "onClick": AS_Button_49fbb61f80224be8b9cb49610fd529cf,
        "skin": "CopyslButtonGlossBlue0e1b8b2daf18046",
        "text": "No",
        "top": "70%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEnroll.add(btnEnrollYes, lblQuote, CopybtnEnrollYes0e944663eba9c4d);
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
        "onDeviceBack": AS_Form_dc6f528118b243ccb769b948ce9e2b2a,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmHome.info = {
        "kuid": "0fa8fdfd25844c4082011f1911a46f02"
    };
};