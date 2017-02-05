var sdkClient=null;
response=null;
var event=[], session=[];	
var error;
var eventId;

function showeventsf()
{
  kony.print("myString");
  var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
  var operationName = "showEvents";
  var headers = {};	
  var params={};
  integrationObj.invokeOperation(operationName, headers, params, successCallBack1, failureCallBack1);
  function successCallBack1(res){
    kony.print("myString1");
    var obj=[];
    session=[];
    frmEventDetail.ScheduleSeg.removeAll();
    for(var i=0 ; i<res.result.length;i++)
    {
      obj.push({"location":res.result[i].location,"event_id":res.result[i].event_id,"name":res.result[i].name,"max_score":res.result[i].max_score,"description":res.result[i].description});
      event.push(res.result[i].event_id);
      session.push({"sessions":res.result[i].sessions});
    }

    frmHome.tabHome.tabMyEvent.segMyEvents.widgetDataMap = {"lblPlace":"location","lblEventName":"name"};
    frmHome.tabHome.tabMyEvent.segMyEvents.setData(obj);

    frmHome.tabHome.tabEvent.segEvents.widgetDataMap = {"lblLocation":"location","lblEventName":"name","lblDescription":"description","lblEventID":"event_id","lblScore":"max_score"};
    frmHome.tabHome.tabEvent.segEvents.setData(obj);
	}
  function failureCallBack1(err){
    var error =res;
    kony.print(JSON.stringify(error));
    alert(error);
  }
}
  function enroll()
  {
    var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
    var operationName = "enroll";
    var data = {
      "eventid":eventId,// the variable you will store the event name in
      "userid":email,// the variable you will store the id in
    };
    var headers = {};           
    integrationObj.invokeOperation(operationName, headers, data, successCallBack2, failureCallBack2);

  function successCallBack2(res){ 
    alert("success"+JSON.stringify(res));
  }
  function failureCallBack2(err){
    alert("error");
  }
}


function eventID()
{
  var row=frmHome.segEvents.selectedRowIndex[1]; 
  var i=" "+parseInt(row);
  var x=i.trim();
  eventId=arr[x];
  alert("event id "+eventId);
}

function eventDetail()
{
  frmEventDetail.lblMyEventName.text=frmHome.segEvents.selectedItems[0].name;
  frmEventDetail.lblLocation.text=frmHome.segEvents.selectedItems[0].location;
  frmEventDetail.lblPoints.text=frmHome.segEvents.selectedItems[0].max_score;
  frmEventDetail.txtDescription.text=frmHome.segEvents.selectedItems[0].description;
  var row=frmHome.segEvents.selectedRowIndex[1]; 
  var i=" "+parseInt(row);
  var x=i.trim();
  frmEventDetail.ScheduleSeg.widgetDataMap = {"lblStageName":"session_name"};
  frmEventDetail.ScheduleSeg.setData(session[x].sessions);
}

function login()
{
  var client = kony.sdk.getCurrentInstance();
  var oAuthObj = client.getIdentityService("MSLogin");
  var loginObj = oAuthObj.login({},function(res){
    var profile=oAuthObj.getProfile(false, function(profile) {
      email=profile.email;
      username=profile.firstname+" "+profile.lastname;
      kony.store.setItem("email", email);
      kony.store.setItem("username", username);
      kony.application.showLoadingScreen();
      regForPush();
    }, function(error) {
      kony.application.dismissLoadingScreen();
      alert("Error occured while fetching the profile.");
    });
    frmHome.flxHome.tabHome.lblName.text=username;
    frmHome.show();
    kony.application.dismissLoadingScreen();
  },function(err){
    alert("Login Failed"+err);
  });
}


function launchBarcodeCapture(){
  barcode.captureBarcode(barcodeCapCallback);
}

function barcodeCapCallback(barcodedata, androidScannedText){
  var platformName = kony.os.deviceInfo().name;
  if(kony.string.startsWith(platformName, "iphone", true)){
    frmHome.txtServicetag.text = (""+barcodedata.barcodestring).toUpperCase();
  }else if(kony.string.startsWith(platformName, "android", true)){
    alert(androidScannedText.toUpperCase());
  }

}

function logout(){
  kony.application.showLoadingScreen();
  kony.store.clear();
  var client = kony.sdk.getCurrentInstance();
  var oAuthObj = client.getIdentityService("MSLogin");
  oAuthObj.logout( 
    function(response) {      
      kony.print("Logout success" + JSON.stringify(response));
      frmLogin.show();
      kony.application.dismissLoadingScreen();
    }, function(error) {
      kony.application.dismissLoadingScreen();
      kony.print("Logout failure" + JSON.stringify(error));
    }
  );
}