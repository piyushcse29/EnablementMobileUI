//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "EnablementGo",
    appName: "EnablementGo",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.30.100",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "EnablementGo",
    isturlbase: "https://mobilefabric-demo.konycloud.com/services",
    isMFApp: true,
    appKey: "6169c8047c0f328ffb432b748c97d5c",
    appSecret: "fac34e524c43d51188c0cad1bc150216",
    serviceUrl: "https://100003520.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "47be03c7-840b-44a6-a161-a29e8903bdbd",
        "baseId": "717988ae-0804-447f-b748-30f36085bfd1",
        "name": "EnablementGoTest",
        "selflink": "https://100003520.auth.konycloud.com/appconfig",
        "login": [{
            "type": "oauth2",
            "prov": "MSLogin",
            "url": "https://100003520.auth.konycloud.com",
            "alias": "MSLogin"
        }, {
            "type": "saml",
            "prov": "MsActiveDir",
            "url": "https://100003520.auth.konycloud.com",
            "alias": "MsActiveDir"
        }],
        "messagingsvc": {
            "appId": "47be03c7-840b-44a6-a161-a29e8903bdbd",
            "url": "https://mobilefabric-demo.messaging.konycloud.com/api/v1"
        },
        "integsvc": {
            "IntServ": "https://mobilefabric-demo.konycloud.com/services/IntServ",
            "IntServDummy": "https://mobilefabric-demo.konycloud.com/services/IntServDummy"
        },
        "reportingsvc": {
            "custom": "https://mobilefabric-demo.konycloud.com/services/CMS",
            "session": "https://mobilefabric-demo.konycloud.com/services/IST"
        },
        "services_meta": {
            "IntServ": {
                "version": "1.0",
                "url": "https://mobilefabric-demo.konycloud.com/services/IntServ",
                "type": "integsvc"
            },
            "IntServDummy": {
                "version": "1.0",
                "url": "https://mobilefabric-demo.konycloud.com/services/IntServDummy",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://mobilefabric-demo.konycloud.com/EnablementGo/MWServlet",
    secureurl: "https://mobilefabric-demo.konycloud.com/EnablementGo/MWServlet"
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
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_barcode"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
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