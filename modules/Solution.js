var sdkClient=null;
response=null;
var error;

function showEvents()
{
  var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
  var operationName = "showEvents";
  var data = {};
  var headers = {};	
  integrationObj.invokeOperation(operationName, headers, data, successCallBack1, failureCallBack1);
}

function successCallBack1(res){

  var obj=[];	
  for(var i=0 ; i<res.result.length;i++)
  {
    obj.push({"location":res.result[i].location,"name":res.result[i].name,/*"max_score":res.result[i].max_score,*/"description":res.result[i].description});
    //obj.push({"name":res.result[i].name});
  }

  frmHome.tabHome.tabMyEvent.segMyEvents.widgetDataMap = {"lblPlace":"location","lblEventName":"name"};
  frmHome.tabHome.tabMyEvent.segMyEvents.setData(obj);

  frmHome.tabHome.tabEvent.segEvents.widgetDataMap = {"lblEventName":"name","lblDescription":"description"};//"lblScore":"max_score"};
  frmHome.tabHome.tabEvent.segEvents.setData(obj);


}
function failureCallBack1(err){
  var error =res;
  //kony.print(JSON.stringify(error));
  alert(error);
}

function setData(res){
  var widgetMapping ={};
  widgetMapping["lblTest"] = "lat";
  frmHome.segEvents.widgetDataMap =  widgetMapping;
  // alert("data in seg"+JSON.stringify(frmHome.segEvents.data));
  alert(res);
  frmHome.segEvents.addAll(res);

}


function login()
{
  var oAuthObj = sdkClient.getIdentityService("MSLogin");
  var loginObj = oAuthObj.login({},function(res){
    var profile=oAuthObj.getProfile();
    kony.print("Identity " + JSON.stringify(profile));
    regForPush();
     frmHome.show(); 
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

