
  var arrayOfUser = [];

var formID = document.getElementById("formID");
var sendButton = document.getElementById("sendButton");

formID.onsubmit=(e)=>{

}


sendButton.onclick=()=>{
    if(userPassword.value==userPasswordConfirm.value && userPassword.value||userPasswordConfirm.value !="" ){
    var usersObject = {
        fullName : firstName.value + " " +lasttName.value,
        // dateOfBirth : birthdayDate.value,
        mail : userEmail.value,
        password : userPassword.value
    };
    arrayOfUser.push(usersObject)
    console.log(arrayOfUser);}
    else alert("הסיסמאות לא תואמות")
}
