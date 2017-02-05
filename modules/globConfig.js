var glob_ks_id;
var email;
var username;

KMSPROP = {		
		kmsServerUrl:"https://mobilefabric-demo.messaging.konycloud.com",
        senderID :"510396346140", // applicable for android only- clientID generated in google console
        appId:"47be03c7-840b-44a6-a161-a29e8903bdbd" 
};


function initializeApp()
{
  try {
    var key="41d4b94bc7d0b07194152dc6b24267be";
    var secret="7fe9ef21224bca50b3fc58541ce74b3b";
    var surl="https://100003520.auth.konycloud.com/appconfig";
    sdkClient=new kony.sdk();
    sdkClient.init(key,secret,surl,function(response){
      login();
      showeventsf();
    },function(err){
      alert("client init error "+JSON.stringify(err));
    });
  } catch(e) {
    alert(e);
  }
}
