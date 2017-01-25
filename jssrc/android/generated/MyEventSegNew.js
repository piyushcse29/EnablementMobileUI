function initializeMyEventSegNew() {
    FlexContainer0c577657195b747 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "FlexContainer0c577657195b747",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ee8fe94471064d"
    }, {}, {});
    FlexContainer0c577657195b747.setDefaultUnit(kony.flex.DP);
    var FlexContainer038608931f4704b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "FlexContainer038608931f4704b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "6%",
        "skin": "CopyslFbox08954035fee9d4f",
        "top": "10%",
        "width": "88%",
        "zIndex": 1
    }, {}, {});
    FlexContainer038608931f4704b.setDefaultUnit(kony.flex.DP);
    var FlexContainer088575ed9a3ca42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "FlexContainer088575ed9a3ca42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "skin": "slFbox",
        "top": "10%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    FlexContainer088575ed9a3ca42.setDefaultUnit(kony.flex.DP);
    var Image0de095705a52b4a = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0de095705a52b4a",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "k.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer088575ed9a3ca42.add(Image0de095705a52b4a);
    var lblEventName = new kony.ui.Label({
        "height": "35%",
        "id": "lblEventName",
        "isVisible": true,
        "left": "40%",
        "skin": "CopyslLabel09d55376cd2b340",
        "text": "Event Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPlace = new kony.ui.Label({
        "id": "lblPlace",
        "isVisible": true,
        "left": "40%",
        "skin": "CopyslLabel0319b4d3931a248",
        "text": "Board Room: Phoenix",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "52%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer03fddf65ed89949 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "FlexContainer03fddf65ed89949",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40%",
        "skin": "CopyslFbox0efea5e27b0e043",
        "top": "70%",
        "width": "59%",
        "zIndex": 1
    }, {}, {});
    FlexContainer03fddf65ed89949.setDefaultUnit(kony.flex.DP);
    var lblTime = new kony.ui.Label({
        "id": "lblTime",
        "isVisible": true,
        "left": "19%",
        "skin": "CopyslLabel0110119abbb7b43",
        "text": "10 AM - 01 PM",
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
    var Image0715357f567144f = new kony.ui.Image2({
        "centerY": "50%",
        "height": "60%",
        "id": "Image0715357f567144f",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "option2.png",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer03fddf65ed89949.add(lblTime, Image0715357f567144f);
    FlexContainer038608931f4704b.add(FlexContainer088575ed9a3ca42, lblEventName, lblPlace, FlexContainer03fddf65ed89949);
    FlexContainer0c577657195b747.add(FlexContainer038608931f4704b);
}