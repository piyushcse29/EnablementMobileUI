//actions.js file 
function AS_AppEvents_457245f58d09465a86a236a5bed832b6(eventobject) {
    initializeApp();
}

function AS_Button_0aafcaa1058640858486496ac79e9c45(eventobject) {
    close("flxEnroll");
}

function AS_Button_24d031c2b1794d8bb662a867d166046f(eventobject) {
    close("flxComment");
}

function AS_Button_961fcb8f12a7456abaa85b2a4035a5b1(eventobject) {
    close("flxComment");
}

function AS_Button_e5dafde352d246b4b49e45d0dd19d7b3(eventobject) {
    close("flxEnroll");
}

function AS_FlexContainer_19c1e2e1fc6d411fa7da94d9a9011f91(eventobject) {
    return login.call(this);
}

function AS_FlexContainer_40bae11f025742258a3fef2ca636957d(eventobject) {
    frmHome.show();
}

function AS_FlexContainer_583690d813114c329edd951fea1992ec(eventobject, context) {
    open("flxComment");
}

function AS_FlexContainer_65dea0c939a348b685ca7229ddac24f6(eventobject) {
    frmHome.flxHome.flxHeader.isVisible = "false";
    frmHome.flxHome.flxSearch.isVisible = "true";
}

function AS_FlexContainer_8c6fe5a62b274d24b5315149600bd85b(eventobject, context) {
    open("flxEnroll");
}

function AS_FlexContainer_d2c81a878d2a4992a5a216ae43403428(eventobject) {
    frmHome.flxHome.flxHeader.isVisible = "true";
    frmHome.flxHome.flxSearch.isVisible = "false";
}

function AS_FlexContainer_d6c96089f1a84aee8d183065ecee1fed(eventobject, context) {
    open("flxEnroll");
}

function AS_FlexContainer_e17eae680e9d4cefae1b6e30806551b9(eventobject, context) {
    open("flxComment");
}

function AS_Form_bdc8eb1e017141c0bb152635da6a3591(eventobject) {}

function AS_Segment_d5fd7f01444645e7b56043acaa21d9f5(eventobject, sectionNumber, rowNumber) {
    frmEventDetail.show();
}