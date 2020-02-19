function submit(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];
    var maleAkanNames = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleAkannames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var myBirthday =document.getElementById (inputdate).Value; 
    var inputGender = document.getElementById (gender);
    var dateOfBirth = new Date(inputdate);
    var dayOfTheWeek = dateOfBirth.getDay();
    if (myBirthday === ""){
        document.getElementById("alert").innerHTML ="you didnt summit  the correct date";
        Snd('alert');
    }
    else{
        for(var i=0;i<inputGender.length;i++){
            if (inputdate[i].checked){
                if (inputdate[i].value === "Male"){
                    document.getElementById("alert").innerHTML =days[dayOfTheWeek]+maleAkanNames[dayOfTheWeek];
                   alert('alert');
                }
                else{
                    document.getElementById('alert').innerHTML=days[dayOfTheWeek]+femaleAkanNames[dayOfTheWeek];
                    alert('alert');
                }
                break;

            }
            else{
                document.getElementById('alert').innerHTML="Select gender to input message";
                a('alert');
            }

        }
    }
}
function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}