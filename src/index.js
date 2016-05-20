function checkPassword(input) {
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('Passwords must be the same');
    } else {
        input.setCustomValidity('');
    }
    checkInputValidation(input)
}

function checkPassword2(input) {
    var password2Input = document.getElementById('repeatPassword');
    if (input.value != password2Input.value) {
        password2Input.setCustomValidity('Passwords must be the same');
    } else {
        input.setCustomValidity('');
    }
    checkInputValidation(input)
    checkInputValidation(password2Input)
}

function checkInputValidation(input) {
    if (input.checkValidity()) {
        document.getElementById(input.id + 'Star').style.visibility = "hidden";
    } else {
        document.getElementById(input.id + 'Star').style.visibility = "visible";
    }
}

function validateAllInputs() {
    var validationInfo = document.getElementById('validationInfo');
    validationInfo.innerHTML = "";
    validationInfo.style.visibility = "hidden";

    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var dateOfBirth = document.getElementById('dateOfBirth');
    var password = document.getElementById('password');
    var repeatPassword = document.getElementById('repeatPassword');
    var description = document.getElementById('description');

    var validationInfoArray = [];
    if (!firstName.checkValidity()) {
        validationInfoArray.push("<p> - First name is should has</p>")
    }
    if (!lastName.checkValidity()) {
        validationInfoArray.push("<p> - Last name is should has</p>")
    }
    if (!email.checkValidity()) {
        validationInfoArray.push("<p> - Email is not valid</p>")
    }
    if (!dateOfBirth.checkValidity()) {
        validationInfoArray.push("<p> - Date of birth is not valid</p>")
    }
    if (!password.checkValidity()) {
        validationInfoArray.push("<p> - Password is not valid</p>")
    }
    if (!repeatPassword.checkValidity()) {
        validationInfoArray.push("<p> - Repeated password is not valid</p>")
    }
    if (!description.checkValidity()) {
        validationInfoArray.push("<p> - Description is not valid</p>")
    }

    if (validationInfoArray.length > 0) {
        validationInfo.style.visibility = "visible";
        validationInfoArray.forEach(function (message) {
            validationInfo.innerHTML += message;
        })
    } else {
        alert("Successfully sent")
    }
}

var tableLabel = "Label";
var tableInput = "Input";
var key = "key";
var value = "value";

function addTuple() {
    var keyInput = document.getElementById("key");
    var valueInput = document.getElementById("value");
    var editableTable = document.getElementById("editableTable");
    var tableTupleLength = document.querySelectorAll('#editableTable tr').length;
    var color = "#fff";
    if (tableTupleLength % 2 == 0) {
        color = "#eee";
    }
    var elementId = "tuple" + tableTupleLength;
    editableTable.innerHTML +=
        "<tr id=" + elementId + " style=\"background-color: " + color + "\"><td>" +
        "<label id='" + elementId + tableLabel + key + "'>" + keyInput.value + "</label>" +
        "<input style='visibility: hidden;' value='" + keyInput.value + "' type='text' id='" + elementId + tableInput + key + "'>" +
        "</td><td>" +
        "<label id='" + elementId + tableLabel + value + "'>" + valueInput.value + "</label>" +
        "<input style='visibility: hidden;' value='" + valueInput.value + "' type='text' id='" + elementId + tableInput + value + "'>" +
        "</td>" +
        "<td><input type='button' value='Delete' onclick=\"deleteTuple('" + elementId + "')\"></td> " +
        "<td><input type='button' value='Edit' onclick=\"editTuple('" + elementId + "')\"></td></tr>"
}

function deleteTuple(id) {
    document.getElementById(id).remove();
}

function editTuple(id) {
    var tableInputKey = document.getElementById(id + tableInput + key);
    var tableLabelKey = document.getElementById(id + tableLabel + key);
    var tableInputValue = document.getElementById(id + tableInput + value);
    var tableLabelValue = document.getElementById(id + tableLabel + value);

    if (tableInputValue.style.visibility == "hidden") {
        tableInputKey.style.visibility = "visible";
        tableInputValue.style.visibility = "visible";
        tableLabelKey.style.visibility = "hidden";
        tableLabelValue.style.visibility = "hidden";
    } else {
        tableInputKey.style.visibility = "hidden";
        tableInputValue.style.visibility = "hidden";
        tableLabelKey.style.visibility = "visible";
        tableLabelValue.style.visibility = "visible";

        tableLabelKey.textContent = tableInputKey.value;
        tableLabelValue.textContent = tableInputValue.value;
    }
}

function init() {
    document.onreadystatechange = function () {
        var state = document.readyState
        if (state == 'complete') {
            document.getElementById('validationInfo').style.visibility = "hidden";
        }
    }
}

init()