var glob_ks_id;
var email;
var username;
KMSPROP = {
    kmsServerUrl: "https://mobilefabric-demo.messaging.konycloud.com",
    senderID: "510396346140", // applicable for android only- clientID generated in google console
    appId: "47be03c7-840b-44a6-a161-a29e8903bdbd"
};

function initializeApp() {
    try {
        var key = "6169c8047c0f328ffb432b748c97d5c";
        var secret = "fac34e524c43d51188c0cad1bc150216";
        var surl = "https://100003520.auth.konycloud.com/appconfig";
        sdkClient = new kony.sdk();
        sdkClient.init(key, secret, surl, function(response) {
            //  login();
            showeventsf();
        }, function(err) {
            alert("client init error " + JSON.stringify(err));
        });
    } catch (e) {
        alert(e);
    }
}