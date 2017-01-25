//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "TestTabs",
    appName: "TestTabs",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.30.100",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "TestTabs",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    secureurl: "https://10.10.30.100:443/TestTabs/MWServlet",
    url: "http://10.10.30.100:80/TestTabs/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeeventSeg();
    initializeMyEventSegNew();
    initializenewSegLeadBoard();
    initializesegEvents();
    frmEventDetailGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        preappinit: AS_AppEvents_457245f58d09465a86a236a5bed832b6,
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;