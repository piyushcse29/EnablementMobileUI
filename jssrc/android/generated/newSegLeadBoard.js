function initializenewSegLeadBoard() {
    flxLeaderMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxLeaderMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ec9778ae6f3e48"
    }, {}, {});
    flxLeaderMain.setDefaultUnit(kony.flex.DP);
    var flxSub = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxSub",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    flxSub.setDefaultUnit(kony.flex.DP);
    var flxLeaderImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxLeaderImage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "skin": "CopyslFbox09c2e67aba1ce47",
        "top": "0%",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxLeaderImage.setDefaultUnit(kony.flex.DP);
    var imgLeader = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLeader",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslImage0b0f509c5e79949",
        "src": "leader.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLeaderImage.add(imgLeader);
    var flxDetail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxDetail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "27%",
        "skin": "slFbox",
        "top": "0%",
        "width": "73%",
        "zIndex": 1
    }, {}, {});
    flxDetail.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel05abf30919dda46",
        "text": "Jennifer Ding Ding",
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
    var lblScoreName = new kony.ui.Label({
        "id": "lblScoreName",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0df0f3b5f2adf47",
        "text": "Total Score:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "47%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblId = new kony.ui.Label({
        "id": "lblId",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel03ea9f11607e84e",
        "text": "jennifer.ding@kony.com",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "67%",
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
        "left": "32%",
        "skin": "CopyslLabel0df0f3b5f2adf47",
        "text": "28",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "47%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDetail.add(lblName, lblScoreName, lblId, lblScore);
    flxSub.add(flxLeaderImage, flxDetail);
    flxLeaderMain.add(flxSub);
}