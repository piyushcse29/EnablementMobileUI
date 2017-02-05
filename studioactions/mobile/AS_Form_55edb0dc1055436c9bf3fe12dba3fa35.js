function AS_Form_55edb0dc1055436c9bf3fe12dba3fa35(eventobject) {
    if (kony.store.getItem("email") !== null) {
        kony.print("email " + kony.store.getItem("email"));
        frmHome.show();
    } else {
        frmLogin.show();
    }
}