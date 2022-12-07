/* 
Full Name  : Kenneth Reforma
Student ID#: 144680212
Date Submitted: 2022-12-05

Authenticity Declaration:
I have done all the coding by myself and only copied the code that my
professor provided to complete my workshops and assignments.
*/

var radioOthers = document.getElementById("topic1");
var buttonSubmit = document.getElementById("btnSubmit");
var chkbxConfirm = document.getElementById("confirm");
var errorConfirm = document.getElementById("confirmError");
var form = document.getElementById("form1");

form.onsubmit = function() {
    let results = 0;
    results+=validateName()
    results+=validateEmail();
    results+=validateAddress();
    results+=validateCity();
    results+=validateProv();
    results+=validatePostal();
    results+=validateTopic();
    results+=validateMsg();
    return (results >= 8 ? true : false);
};

var btnContact = document.getElementById("scrollToContact");
var focusItem = document.getElementById("sectionContact");
if (btnContact.addEventListener) {
    btnContact.addEventListener("click", function() {
        focusItem.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
          })
    });
}

if (chkbxConfirm.addEventListener){
    chkbxConfirm.addEventListener("click", function() {
        if (chkbxConfirm.checked === true) {
            buttonSubmit.disabled = false;
        } else {
            buttonSubmit.disabled = true;
        }
    });
}

var clear = document.getElementById("btnClear");
if (clear.addEventListener) {
    clear.addEventListener("click", clearAll);
}

function clearAll() {
    document.getElementById("name").value = "";
    document.getElementById("userNameError").innerHTML = "";
    document.getElementById("email").value = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("addr").value = "";
    document.getElementById("addrError").innerHTML = "";
    document.getElementById("city").value = "";
    document.getElementById("cityError").innerHTML = "";
    document.getElementById("province").value = "ON";
    document.getElementById("provinceError").innerHTML = "";
    document.getElementById("postal").value = "";
    document.getElementById("postalError").innerHTML = "";
    document.getElementById("message").value = "";
    document.getElementById("msgError").innerHTML = "";
    chkbxConfirm.checked = false;
}
