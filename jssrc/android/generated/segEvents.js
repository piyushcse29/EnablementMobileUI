function initializesegEvents() {
    flxEv = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxEv",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0c50320d01fb546"
    }, {}, {});
    flxEv.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "94%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "CopyslFbox0075ffa25008f4f",
        "top": "3%",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0534a696e63064d",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblEventName = new kony.ui.Label({
        "height": "60%",
        "id": "lblEventName",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel00c79a2fc34c644",
        "text": "Scavenger Hunt",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDate = new kony.ui.Label({
        "id": "lblDate",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel04bae3b83f1b444",
        "text": "January 16, 2017",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
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
        "left": "79%",
        "skin": "CopyslLabel0d1da0de6521a4d",
        "text": "Max Score",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "25%",
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
        "left": "85%",
        "skin": "CopyslLabel0cea7f7f704e54e",
        "text": "80",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeader.add(lblEventName, lblDate, lblMax, lblScore);
    var flxDesc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxDesc",
        "isVisible": true,
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
        "isVisible": true,
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
        "onClick": AS_FlexContainer_583690d813114c329edd951fea1992ec,
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
    var flxEnroll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxEnroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66.60%",
        "onClick": AS_FlexContainer_d6c96089f1a84aee8d183065ecee1fed,
        "skin": "slFbox",
        "top": "0%",
        "width": "33.40%",
        "zIndex": 1
    }, {}, {});
    flxEnroll.setDefaultUnit(kony.flex.DP);
    var imgEnroll = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEnroll",
        "isVisible": true,
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
    flxFooter.add(flxLike, flxComment, flxEnroll);
    var flxImg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxImg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "30%",
        "width": "100%",
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
    var lblTest = new kony.ui.Label({
        "id": "lblTest",
        "isVisible": true,
        "left": "123dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "63dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxImg.add(imgEvent, lblTest);
    var FlexContainer0a592a32577c646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlexContainer0a592a32577c646",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox025106665947545",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a592a32577c646.setDefaultUnit(kony.flex.DP);
    var lblUpcoming = new kony.ui.Label({
        "id": "lblUpcoming",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel08e129f10543642",
        "text": "Upcoming",
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
    FlexContainer0a592a32577c646.add(lblUpcoming, lblOngoing, lblCompleted, lblSeparator);
    flxMain.add(flxHeader, flxDesc, flxFooter, flxImg, FlexContainer0a592a32577c646);
    flxEv.add(flxMain);
}