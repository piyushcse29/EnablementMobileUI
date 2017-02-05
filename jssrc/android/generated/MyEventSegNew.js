function initializeMyEventSegNew() {
    EventMainCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13.50%",
        "id": "EventMainCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ee8fe94471064d"
    }, {}, {});
    EventMainCont.setDefaultUnit(kony.flex.DP);
    var CardCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "93%",
        "id": "CardCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox08954035fee9d4f",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CardCont.setDefaultUnit(kony.flex.DP);
    var lblEventName = new kony.ui.Label({
        "id": "lblEventName",
        "isVisible": true,
        "left": "3.20%",
        "skin": "CopyslLabel09d55376cd2b340",
        "text": "Kony Visualizer 8.2",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9%",
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
        "clipBounds": true,
        "height": "20%",
        "id": "LocationCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "CopyslFbox0efea5e27b0e043",
        "top": "67%",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    LocationCont.setDefaultUnit(kony.flex.DP);
    var lblPlaceName = new kony.ui.Label({
        "id": "lblPlaceName",
        "isVisible": true,
        "left": "13%",
        "skin": "LocationMyELabel",
        "text": "Location:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
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
        "left": "3%",
        "skin": "LocationMyELabel",
        "text": "Phoenix",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    LocationCont.add(lblPlaceName, lblPlace);
    var lblLine = new kony.ui.Label({
        "height": "12%",
        "id": "lblLine",
        "isVisible": true,
        "left": "28.50%",
        "skin": "CopyslLabel0649535e8151145",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "70%",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var TimeCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "TimeCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "30%",
        "skin": "CopyslFbox0efea5e27b0e043",
        "top": "67%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    TimeCont.setDefaultUnit(kony.flex.DP);
    var lblTimeName = new kony.ui.Label({
        "id": "lblTimeName",
        "isVisible": true,
        "left": "2%",
        "skin": "LocationMyELabel",
        "text": "Time:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6.50%",
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
        "id": "lblTime",
        "isVisible": true,
        "left": "2.50%",
        "skin": "LocationMyELabel",
        "text": "10AM - 3PM",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6.50%",
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
        "isVisible": false,
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
    TimeCont.add(lblTimeName, lblTime, Image0715357f567144f);
    var RankCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "RankCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "83.60%",
        "skin": "CopyslFbox0caeaa61c60a34a",
        "top": "18%",
        "width": "13%",
        "zIndex": 1
    }, {}, {});
    RankCont.setDefaultUnit(kony.flex.DP);
    var RankImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "RankImg",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "rankshape.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblRank = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblRank",
        "isVisible": true,
        "skin": "CopyslLabel038d6510007dd47",
        "text": "3",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblRankName = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblRankName",
        "isVisible": true,
        "skin": "CopyslLabel006f880f390f848",
        "text": "Rank",
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
    RankCont.add(RankImg, lblRank, lblRankName);
    var PointsCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "18%",
        "id": "PointsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "43.50%",
        "zIndex": 1
    }, {}, {});
    PointsCont.setDefaultUnit(kony.flex.DP);
    var lblPointsName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPointsName",
        "isVisible": true,
        "left": "3.50%",
        "skin": "PointsMELabe",
        "text": "Points:",
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
        "skin": "PointsMELabe",
        "text": "30",
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
    CardCont.add(lblEventName, LocationCont, lblLine, TimeCont, RankCont, PointsCont);
    EventMainCont.add(CardCont);
}