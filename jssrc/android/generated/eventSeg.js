function initializeeventSeg() {
    flxOut = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "flxOut",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    flxOut.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox05c7e5204d7ca40",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox08bbf3addce9844",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblEventName = new kony.ui.Label({
        "height": "60%",
        "id": "lblEventName",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0744f3e5626e640",
        "text": "Event Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblEventStatus = new kony.ui.Label({
        "height": "40%",
        "id": "lblEventStatus",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0744f3e5626e640",
        "text": "Event Status",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxPoints = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPoints",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "80%",
        "skin": "slFbox",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxPoints.setDefaultUnit(kony.flex.DP);
    var imgPoints = new kony.ui.Image2({
        "height": "100%",
        "id": "imgPoints",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "points.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPoints.add(imgPoints);
    flxHeader.add(lblEventName, lblEventStatus, flxPoints);
    var flxFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox099be5b4588c047",
        "top": "80%",
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
        "skin": "CopyslFbox03c23d1ca871946",
        "top": "0%",
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
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
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
        "onClick": AS_FlexContainer_e17eae680e9d4cefae1b6e30806551b9,
        "skin": "CopyslFbox0dd809042fc1c43",
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
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
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
        "onClick": AS_FlexContainer_8c6fe5a62b274d24b5315149600bd85b,
        "skin": "CopyslFbox0758c8a119cab4b",
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
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEnroll.add(imgEnroll);
    flxFooter.add(flxLike, flxComment, flxEnroll);
    var flxEventImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "flxEventImage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEventImage.setDefaultUnit(kony.flex.DP);
    var imgEvent = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEvent",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEventImage.add(imgEvent);
    flxMain.add(flxHeader, flxFooter, flxEventImage);
    flxOut.add(flxMain);
}