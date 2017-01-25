//Type your code here
function open(a) {
    function SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback() {}
    frmHome[a].isVisible="true";
    frmHome[a].animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "100%",
            "height": "100%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback
    });
   frmHome.flxHome.setEnabled(false);

} 
function close(a) {
    function SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback() {}
   frmHome.flxHome.setEnabled(true);
    frmHome[a].animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "10%",
            "height": "10%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback
    });
  frmHome[a].isVisible="false";
} 
