var sdkClient=null;
response=null;
var error;
function initializeApp()
{
  try {
    var key="41d4b94bc7d0b07194152dc6b24267be";
  	var secret="7fe9ef21224bca50b3fc58541ce74b3b";
  	var surl="https://100003520.auth.konycloud.com/appconfig";
  	sdkClient=new kony.sdk();
  	sdkClient.init(key,secret,surl,function(response){
    alert("init success");
      //getData();
    showeventsf();
     // showsessionsfunct();
     // showSessionsfunction();
    },function(err){
      alert("client init error "+JSON.stringify(err));
    });
  } catch(e) {
    alert(e);
  }
}
  	

function showeventsf()
  	{
    var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
  	var operationName = "showEvents";
	var data = {};
    var headers = {};	
    integrationObj.invokeOperation(operationName, headers, data, successCallBack1, failureCallBack1);
    }

function successCallBack1(res){
  
   //alert("success"+JSON.stringify(res));
 // var myObj = JSON.parse(res);	
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


// function showsessionsfunct()
//   	{
//     var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
//   	var operationName = "showSessions1";
// 	var data = {};
//     var headers = {};	
//     integrationObj.invokeOperation(operationName, headers, data, successCallBack2, failureCallBack2);
//     }

// function successCallBack2(res){
//   alert("in success");
//    // alert("success"+JSON.stringify((res["result"][0]).coord));
//     response=res.result[0].sessions[0].session_name;
//     alert(res.result[0].sessions.length); 
//   setData(res);
// }

// function failureCallBack2(err){
//       var error =res;
//   //kony.print(JSON.stringify(error));
//   alert(error);
// }

// function setData(res){
//      var data1=[];
// for(var i=0;i<res.result[0].sessions.length;i++){
// var obj={
// “lblEventName”:(res.result[0].sessions[i]).session_name,
// }
// Data1.push(obj);
// }
// frmHome.flxHome.tabHome.segEvents.setData(data1); 
     
//     }



// function showSessionsfunction()
//   	{
//     var integrationObj = sdkClient.getIntegrationService("IntServ");
//   	var operationName = "showSession2";
// 	var data = {};
//     var headers = {};	
//     integrationObj.invokeOperation(operationName, headers, data, successCallBack3, failureCallBack3);
//     }


// function successCallBack3(res){
//     alert("success"+JSON.stringify((res["result"][0]).coord));
//     response=(res["result"][0]).coord.lon;
//     alert(res.coord.lon); 
// }

// function failureCallBack3(err){
//       var error =res;
//   //kony.print(JSON.stringify(error));
//   alert(error);
// }

function login()
{
  var oAuthObj = sdkClient.getIdentityService("MSLogin");
  var loginObj = oAuthObj.login({},function(res)
                               {
   alert("Login Success"+res);
    alert("Login Successful");
   frmHome.show();
  },function(err)
                               {
    alert("Login Failed"+err);
  });
}