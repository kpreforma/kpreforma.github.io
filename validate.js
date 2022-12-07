/* 
Full Name  : Kenneth Reforma
Student ID#: 144680212
Date Submitted: 2022-12-05

Authenticity Declaration:
I have done all the coding by myself and only copied the code that my
professor provided to complete my workshops and assignments.
*/

function validateName() {
    let item = document.getElementById("name");
    let error = document.getElementById("userNameError");
    let output = 0;
    if (item.value.length < 1) {
        error.innerHTML = "Name is required";
    } else {
        error.innerHTML = "";
        output = 1;
    }
    return output;
}

function validateEmail() {
    let regex1 = /@/;
    let regex2 = /\./;
    let item = document.getElementById("email");
    let error = document.getElementById("emailError");
    let output = 0;
    if (item.value.length < 1) {
        error.innerHTML = "Email is required";
    } else if (regex1.test(item.value) && regex2.test(item.value)){
        error.innerHTML = "";
        output = 1;
    } else {
        error.innerHTML = "Invalid format (@ and . required)";
    }
    return output;
}

function validateAddress() {
    let item = document.getElementById("addr");
    let error = document.getElementById("addrError");
    let output = 0;
    if (item.value.length < 1) {
        error.innerHTML = "Address is required";
    } else {
        error.innerHTML = "";
        output = 1;
    }
    return output;
}

function validateCity() {
    let item = document.getElementById("city");
    let error = document.getElementById("cityError");
    let output = 0;
    if (item.value.length < 1) {
        error.innerHTML = "City is required";
    } else {
        error.innerHTML = "";
        output = 1;
    }
    return output;
}

function validateProv() {
    let item = document.getElementById("province");
    let error = document.getElementById("provinceError");
    let output = 0;
    if (item.value.length < 1) {
        error.innerHTML = "Province is required";
    } else if (item.value !== "AB" && item.value !== "BC" && item.value !== "MB" && item.value !== "NB" && item.value !== "NL" && item.value !== "NT" && item.value !== "NS" && item.value !== "NU" && item.value !== "ON" && item.value !== "PE" && item.value !== "QC" && item.value !== "SK" && item.value !== "YT") {
        error.innerHTML = "Province is not correct";
        item.value = "";
    }
    else {
        error.innerHTML = "";
        output = 1;
    }
    return output;
}

function validatePostal() {
    let item = document.getElementById("postal");
    let error = document.getElementById("postalError");
    let regex = /[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]/;
    let output = 0;
    if (item.value.length < 1) {
        error.innerHTML = "Postal Code is required";
    } else if (!regex.test(item.value)) {
        error.innerHTML = "Postal Code format is not correct";
    }
    else {
        error.innerHTML = "";
        output = 1;
    }
    return output;
}

function validateTopic() {
    let output = 1;
    if (document.getElementById("others")){
        let item = document.getElementById("others");
        let error = document.getElementById("othersError");
        output = 0;
        if (item.value.length < 1) {
            error.innerHTML = "Custom topic is required";
        } else {
            error.innerHTML = "";
            output = 1;
        }
    }
    return output;
}

function validateMsg() {
    let item = document.getElementById("message");
    let error = document.getElementById("msgError");
    let output = 0;
    if (item.value.length < 1) {
        error.innerHTML = "Please fill-in your message";
    } else {
        error.innerHTML = "";
        output = 1;
    }
    return output;
}
