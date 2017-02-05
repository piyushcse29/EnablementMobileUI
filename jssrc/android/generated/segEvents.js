function initializesegEvents() {
    flxEv = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "33.50%",
        "id": "flxEv",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0c50320d01fb546"
    }, {}, {});
    flxEv.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3%",
        "skin": "CopyslFbox0075ffa25008f4f",
        "top": "8%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "19%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0534a696e63064d",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblEventName = new kony.ui.Label({
        "centerY": "50%",
        "height": "60%",
        "id": "lblEventName",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel00c79a2fc34c644",
        "text": "Kony Visualizer 8.2",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMax = new kony.ui.Label({
        "id": "lblMax",
        "isVisible": true,
        "left": "5%",
        "right": 0,
        "skin": "CopyslLabel0d1da0de6521a4d",
        "text": "Points:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "26%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblScore = new kony.ui.Label({
        "id": "lblScore",
        "isVisible": true,
        "left": "0.50%",
        "skin": "CopyslLabel0cea7f7f704e54e",
        "text": "80",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "26%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeader.add(lblEventName, lblMax, lblScore);
    var flxImg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "46%",
        "id": "flxImg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "93.50%",
        "zIndex": 1
    }, {}, {});
    flxImg.setDefaultUnit(kony.flex.DP);
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
    var lblEventID = new kony.ui.Label({
        "id": "lblEventID",
        "isVisible": false,
        "left": "124dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "94dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxImg.add(imgEvent, lblEventID);
    var flxBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "flxBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBottom.setDefaultUnit(kony.flex.DP);
    var DateCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "67%",
        "id": "DateCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3.30%",
        "skin": "CopyslFbox0fbb5a3080e1448",
        "top": "14%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    DateCont.setDefaultUnit(kony.flex.DP);
    var lblDay = new kony.ui.Label({
        "centerX": "51%",
        "id": "lblDay",
        "isVisible": true,
        "skin": "CopyslLabel083a9ddf112614a",
        "text": "22",
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
    var lblDate = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblDate",
        "isVisible": true,
        "skin": "CopyslLabel04bae3b83f1b444",
        "text": "Feb 17",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "51.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    DateCont.add(lblDay, lblDate);
    var StatusCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "StatusCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "width": "55%",
        "zIndex": 1
    }, {}, {});
    StatusCont.setDefaultUnit(kony.flex.DP);
    var lblUpcoming = new kony.ui.Label({
        "id": "lblUpcoming",
        "isVisible": true,
        "left": "7%",
        "skin": "CopyslLabel08e129f10543642",
        "text": "UPCOMING",
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
    var LocationCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "LocationCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "slFbox",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    LocationCont.setDefaultUnit(kony.flex.DP);
    var lblLocationName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocationName",
        "isVisible": true,
        "left": "7%",
        "skin": "locatELabel",
        "text": "Location : ",
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
    var lblLocation = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocation",
        "isVisible": true,
        "left": "0%",
        "skin": "locatELabel",
        "text": "Phoenix",
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
    LocationCont.add(lblLocationName, lblLocation);
    var TimeCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "TimeCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    TimeCont.setDefaultUnit(kony.flex.DP);
    var lblTimeName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTimeName",
        "isVisible": true,
        "left": "7%",
        "skin": "locatELabel",
        "text": "Time :   ",
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
    var lblTime = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTime",
        "isVisible": true,
        "left": "0%",
        "skin": "locatELabel",
        "text": "10 AM - 10 PM",
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
    TimeCont.add(lblTimeName, lblTime);
    StatusCont.add(lblUpcoming, LocationCont, TimeCont);
    var flxEnroll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "31%",
        "id": "flxEnroll",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.50%",
        "onClick": AS_FlexContainer_95998eaa8c64415e96a4f631adb6facc,
        "skin": "CopyslFbox0eabb42e7d3924b",
        "top": "33.50%",
        "width": "22.50%",
        "zIndex": 1
    }, {}, {});
    flxEnroll.setDefaultUnit(kony.flex.DP);
    var imgEnroll = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEnroll",
        "isVisible": false,
        "left": "0%",
        "skin": "slImage",
        "src": "enroll.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEnroll.add(imgEnroll);
    var ButtonEnroll = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "31%",
        "id": "ButtonEnroll",
        "isVisible": true,
        "left": "0.50%",
        "skin": "CopyslButtonGlossBlue0bacd52f84f9a4c",
        "text": "ENROLL",
        "top": "33.50%",
        "width": "22.50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBottom.add(DateCont, StatusCont, flxEnroll, ButtonEnroll);
    var flxDesc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxDesc",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0f308a024d4ba4c",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDesc.setDefaultUnit(kony.flex.DP);
    var lblDescription = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblDescription",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0b2c7c51b13a94b",
        "text": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDesc.add(lblDescription);
    var flxFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxFooter",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0189c3da42b3e4b",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFooter.setDefaultUnit(kony.flex.DP);
    var flxLike = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxLike",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "1%",
        "width": "33.30%",
        "zIndex": 1
    }, {}, {});
    flxLike.setDefaultUnit(kony.flex.DP);
    var imgLike = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLike",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "like.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLike.add(imgLike);
    var flxComment = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxComment",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33.30%",
        "onClick": AS_FlexContainer_484a8e6d76d44380a902f504992c5a18,
        "skin": "slFbox",
        "top": "0%",
        "width": "33.30%",
        "zIndex": 1
    }, {}, {});
    flxComment.setDefaultUnit(kony.flex.DP);
    var imgComment = new kony.ui.Image2({
        "height": "100%",
        "id": "imgComment",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "comment.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxComment.add(imgComment);
    flxFooter.add(flxLike, flxComment);
    var FlexContainer0a592a32577c646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlexContainer0a592a32577c646",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox025106665947545",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a592a32577c646.setDefaultUnit(kony.flex.DP);
    var lblOngoing = new kony.ui.Label({
        "id": "lblOngoing",
        "isVisible": true,
        "left": "40%",
        "skin": "CopyslLabel08e129f10543642",
        "text": "Ongoing",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCompleted = new kony.ui.Label({
        "id": "lblCompleted",
        "isVisible": true,
        "left": "70%",
        "skin": "CopyslLabel08e129f10543642",
        "text": "Completed",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblSeparator = new kony.ui.Label({
        "height": "2%",
        "id": "lblSeparator",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel034b3249d35f54a",
        "text": "k",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "67%",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0a592a32577c646.add(lblOngoing, lblCompleted, lblSeparator);
    flxMain.add(flxHeader, flxImg, flxBottom, flxDesc, flxFooter, FlexContainer0a592a32577c646);
    flxEv.add(flxMain);
}