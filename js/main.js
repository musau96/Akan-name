function output() {
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1;
    var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girl = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("gender").checked) {
        var gender = 'male';
    }
    else {
        var gender = 'female';
    }
    if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
        alert("INVALID MONTH");
    }
    else if (dd < 1 || dd > 31) {
        alert("INVALID DAY");
    }
    else if (Math.ceil(result) == 1 && gender === 'male'); {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Monday and your akan name is " + boy[1]);
    }
    if (Math.ceil(result) == 2 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Tuesday and your akan name is " + boy[2]);
    }
    else if (Math.ceil(result) == 3 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Wednesday and your akan name is " + boy[3]);
    }
    else if (Math.ceil(result) == 4 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Thursday and your akan name is " + boy[4]);
    }
    else if (Math.ceil(result) == 5 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Friday and your akan name is " + boy[5]);
    }
    else if (Math.ceil(result) == 6 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Saturday and your akan name is " + boy[6]);
    }
    else if (Math.ceil(result) == 0 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Sunday and your akan name is " + boy[0]);
    }
    else if (Math.ceil(result) == 1 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on monday and your akan name is " + girl[1]);
    }
    else if (Math.ceil(result) == 2 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Tuesday and your akan name is " + girl[2]);
    }
    else if (Math.ceil(result) == 3 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Wednesday and your akan name is " + girl[3]);
    }
    else if (Math.ceil(result) == 4 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Thursday and your akan name is " + girl[4]);
    }
    else if (Math.ceil(result) == 5 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were were born on Friday and your akan name is " + girl[5]);
    }
    else if (Math.ceil(result) == 6 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Saturday and akan name is " + girl[6]);
    }
    else if (Math.ceil(result) == 0 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Hello,you were born on Sunday and your akan name is " + girl[0]);
    }
    else {
        alert("Insert Your valid date of birth");
    }
}

//bugs may limit the functionality of code