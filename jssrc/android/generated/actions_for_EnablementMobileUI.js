//actions.js file 
function AS_AppEvents_457245f58d09465a86a236a5bed832b6(eventobject) {
    initializeApp();
}

function AS_Button_0aafcaa1058640858486496ac79e9c45(eventobject) {
    close("flxEnroll");
}

function AS_Button_14c7e7561ad64d9c9dd99165b7e13486(eventobject) {
    return launchBarcodeCapture.call(this);
}

function AS_Button_24d031c2b1794d8bb662a867d166046f(eventobject) {
    close("flxComment");
}

function AS_Button_49fbb61f80224be8b9cb49610fd529cf(eventobject) {
    close("flxEnroll");
}

function AS_Button_6d19984d331e46cf8d8e8a283e2f6445(eventobject) {
    return logout.call(this);
}

function AS_Button_961fcb8f12a7456abaa85b2a4035a5b1(eventobject) {
    close("flxComment");
}

function AS_Button_cdd402b9eaff4443b7b8b123201bd1d6(eventobject, context) {
    return enroll.call(this);
}

function AS_Button_e5dafde352d246b4b49e45d0dd19d7b3(eventobject) {
    close("flxEnroll");
}

function AS_FlexContainer_0268bf079e5c4840a7286b769cd9c7ed(eventobject) {
    login();
}

function AS_FlexContainer_40bae11f025742258a3fef2ca636957d(eventobject) {
    frmHome.show();
}

function AS_FlexContainer_484a8e6d76d44380a902f504992c5a18(eventobject, context) {
    open("flxComment");
}

function AS_FlexContainer_65dea0c939a348b685ca7229ddac24f6(eventobject) {
    frmHome.flxHome.flxHeader.isVisible = "false";
    frmHome.flxHome.flxSearch.isVisible = "true";
}

function AS_FlexContainer_7b0b6360174741f69e9b63f1252e2483(eventobject) {
    frmHome.show();
}

function AS_FlexContainer_95998eaa8c64415e96a4f631adb6facc(eventobject, context) {
    open("flxEnroll");
    eventID();
}

function AS_FlexContainer_d2c81a878d2a4992a5a216ae43403428(eventobject) {
    frmHome.flxHome.flxHeader.isVisible = "true";
    frmHome.flxHome.flxSearch.isVisible = "false";
}

function AS_FlexContainer_dc72f6949f0a431a94932ec13c98bdf1(eventobject, context) {
    open("flxEnroll");
    eventID();
}

function AS_FlexContainer_e717ee30f36845649141646bfeb68137(eventobject, context) {
    open("flxComment");
}

function AS_FlexContainer_ef5bcab785854b2daca86750c880a2ff(eventobject, context) {
    open("flxEnroll");
    eventID();
}

function AS_FlexContainer_f66434714ddb4351a709e691622b0ed1(eventobject) {
    frmHome.show();
}

function AS_Form_55edb0dc1055436c9bf3fe12dba3fa35(eventobject) {
    if (kony.store.getItem("email") !== null) {
        frmHome.show();
    } else {
        login();
    }
}

function AS_Form_bdc8eb1e017141c0bb152635da6a3591(eventobject) {}

function AS_Form_dc6f528118b243ccb769b948ce9e2b2a(eventobject) {
    kony.application.exit();
}

function AS_Segment_1df2f5cdad5e4ecfb29b0cd7c893ee95(eventobject, sectionNumber, rowNumber) {
    frmMyEventDetailed.show();
    eventDetail1();
}

function AS_Segment_d5fd7f01444645e7b56043acaa21d9f5(eventobject, sectionNumber, rowNumber) {
    frmEventDetail.show();
    eventDetail();
}

function AS_Tab_eb03912aca8e4555b895ded6685e1304(eventobject) {
    return showeventsf.call(this);
}

function AS_Tab_efc43ca2af1f42019d7fa618661da560(eventobject, x, y) {}