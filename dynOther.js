/* 
Full Name  : Kenneth Reforma
Student ID#: 144680212
Date Submitted: 2022-12-05

Authenticity Declaration:
I have done all the coding by myself and only copied the code that my
professor provided to complete my workshops and assignments.
*/

var tblContactMe = document.getElementById("tblContact");
var labelOthers = document.getElementById("lblTopic3");
var radioJob = document.getElementById("topic1");
var radioSchool = document.getElementById("topic2");
var radioOthers = document.getElementById("topic3");

function deleteRowOthers() {
    if (tblContactMe.getElementsByTagName("tr")[9].id === "textOthers") {
        tblContactMe.deleteRow(9);
        labelOthers.innerHTML = "&emsp;Others";
    }
}

function tester() {
    document.getElementById("provinceError").innerHTML = "test";
}

if (radioJob.addEventListener) {
    radioJob.addEventListener("change", deleteRowOthers);
}
if (radioSchool.addEventListener) {
    radioSchool.addEventListener("change", deleteRowOthers);
}
if (radioOthers.addEventListener) {
    radioOthers.addEventListener("change", function() {
        if (radioOthers.checked === true) {
            deleteRowOthers();
            let row = tblContactMe.insertRow(9);
            labelOthers.innerHTML = "&emsp;Others, kindly specify your topic below: ";
            row.id = "textOthers";
            for (i = 0; i < 5; ++i) {
                cell = row.insertCell(i);
            }
            let textBox = document.createElement("input");
            textBox.type = "text";
            textBox.id = "others";
            textBox.name = "others";
            let textBoxError = document.createElement("p");
            textBoxError.id = "othersError";
            textBoxError.className = "errorMsg";
            let rowOthers = tblContactMe.getElementsByTagName("tr")[9]
            let rowOthersText = rowOthers.getElementsByTagName("td")[3];
            rowOthersText.appendChild(textBox);
            let rowOthersTextError = rowOthers.getElementsByTagName("td")[4];
            rowOthersTextError.appendChild(textBoxError);
        }
    });
}
