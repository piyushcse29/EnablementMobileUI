//Type your code here
    //  positiveSelection();
function regForPush() {
    setReqCallBacks();
    registerWithReqService();
}

function setReqCallBacks() {
    kony.print('$# in setReqCallBacks');
    var deviceInfo = kony.os.deviceInfo();
    var deviceName = deviceInfo.name;
    if (deviceName == 'iPhone') {
        callbackiPhoneSetCallbacks();
    } else {
        setCallbacksForAndroid();
    }
}

function registerWithReqService() {
    kony.print('$# in setReqCallBacks');
    var deviceInfo = kony.os.deviceInfo();
    var deviceName = deviceInfo.name;
    if (deviceName == 'iPhone') {
        callbackiPhoneRegister();
    } else {
        registerToGCMAndSubscribeToKMS();
    }
}

function registerToGCMAndSubscribeToKMS() {
    kony.print('$# in registerToGCMAndSubscribeToKMS');
    var configToRegister = {
        senderid: KMSPROP.senderID
    };
    kony.push.register(configToRegister);
    //alert("Registration Done !!!");
}

function setCallbacksForAndroid() {
    kony.print('$# in setCallbacksForAndroid');
    kony.push.setCallbacks({
        onsuccessfulregistration: regSuccessAndroidCallback,
        onfailureregistration: regFailureAndroidCallback,
        onlinenotification: onlinePushNotificationAndroidCallback,
        offlinenotification: offlinePushNotificationAndroidCallback,
        onsuccessfulderegistration: unregSuccessAndroidCallback,
        onfailurederegistration: unregFailureAndroidCallback
    });
    //alert("setCallBack Done !!!");
}

function regSuccessAndroidCallback(regId) {
    kony.print('$# in regSuccessAndroidCallback');
    // alert("Registration Done !!! The registration id is"+regId);
    //var client = kony.sdk.getCurrentInstance();
    if (KNYMobileFabric === null) {
        alert("mbaas client is null");
        return;
    }
    var msgService = kony.sdk.getCurrentInstance().getMessagingService();
    var deviceid = kony.os.deviceInfo().deviceid;
    try {
        msgService.register("androidgcm", deviceid, regId, "mukulufid", msgServRegisterSuccessCallback, msgServRegisterFailureCallback);
    } catch (exception) {
        alert("Exception while invoking the regiter method of the messaging service");
    }
}

function msgServRegisterSuccessCallback(result) {
    kony.print('$# in msgServRegisterSuccessCallback');
    glob_ks_id = result.id;
    kony.store.setItem("glob_ks_id", glob_ks_id);
    //    frmCreateAccount.show();
    //alert("ks id:"+glob_ks_id);
    kony.print("Success invoking register method of the messaging service" + JSON.stringify(result));
}

function msgServRegisterFailureCallback(result) {
    kony.print('$# in msgServRegisterFailureCallback' + result);
    kony.print('$# in msgServRegisterFailureCallback' + JSON.stringify(result));
    alert("Failure invoking register method of the messaging service");
}

function regFailureAndroidCallback(errormsg) {
    kony.print('$# in regFailureAndroidCallback');
    kony.print("************ JS regFailureCallback() called *********");
    kony.print(errormsg);
    alert("Registration Failed ");
    alert("Error message: " + JSON.stringify(errormsg));
}

function onlinePushNotificationAndroidCallback(msg) {
    kony.print('$# in onlinePushNotificationAndroidCallback');
    processMessageAndroid(msg);
}

function offlinePushNotificationAndroidCallback(msg) {
    kony.print('$# in offlinePushNotificationAndroidCallback');
    processMessageAndroid(msg);
}

function processMessageAndroid(msg) {}
//********************* UNREGISTERING WITH GCM CLOUD AND UNSIBSCRIBING FROM KMS SERVER ******************/
function unregisterWithGCMandUnsubscribeWithKPNS() {
    kony.print('$# in unregisterWithGCMandUnsubscribeWithKPNS');
    var emptyObj = {};
    kony.push.deRegister(emptyObj);
}

function unregSuccessAndroidCallback() {
    kony.print('$# in unregSuccessAndroidCallback');
    kony.print("De-registerd from android GCM cloud");
    alert("De-registerd from android GCM cloud");
    var client = kony.sdk.getCurrentInstance();
    var msgService = client.getMessagingService();
    try {
        msgService.unregister(KMSUnregSuccessCalback, KMSUnregFailureCalback);
    } catch (exception) {
        alert("Exception while invoking the unregiter method of the messaging service");
        kony.print("Exception while invoking the unregiter method of the messaging service");
    }
}

function unregFailureAndroidCallback(errormsg) {
    kony.print('$# in unregFailureAndroidCallback');
    alert(" Unregistration Failed!!");
    //alert("Error message: "+JSON.stringify(errormsg));
    kony.print(errormsg);
}

function KMSUnregSuccessCalback() {
    kony.print('$# in KMSUnregSuccessCalback');
    kony.print("Unsubscribed from KMS Server");
    alert("Unsubscribed from KMS Server");
}

function KMSUnregFailureCalback() {
    kony.print("Unable to Unsubscribed from KMS Server");
    alert("Unable to Unsubscribed from KMS Server");
}

function positiveSelection() {
    //Defining basicConf parameter for alert
    var basicConf = {
        message: "Notifications may include alerts,\nsounds and icon badges.These can\nbe configured in settings.",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: '"EnablemetGo" Would Like to Send You\nPush Notifications',
        yesLabel: "OK",
        noLabel: "Don't Allow",
        "alertIcon": "conf.png",
        alertHandler: handle2
    };
    //Defining pspConf parameter for alert
    var pspConf = {};
    //Alert definition
    kony.ui.Alert(basicConf, pspConf);
    //var infoAlert = kony.ui.Alert(basicConf,pspConf);
    function handle2(response) {
        kony.print(JSON.stringify(response));
        if (response == "true") {
            //    frmHome.show();
        }
    }
}