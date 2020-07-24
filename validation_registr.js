//alert("Hello world!");
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var tel_error = document.getElementById("tel_error");
var pass_error = document.getElementById("pass_error");


function validate() {
    var login = document.getElementById("login");
		var userName = document.getElementById("username");
		var userPassword = document.getElementById("Userpassword");
		var second_username= document.getElementById("second_username");
		var phoneNumber = document.getElementById("phoneNum");
		var email = document.getElementById("email");
    var confirmPass = document.getElementById("Userpassword2");

var tel_error = document.getElementById("tel_error");
var pass_error = document.getElementById("pass_error");
var cpass_error = document.getElementById("cpass_error");

		if(!login.value) {
			login.style.border = "1px solid red";
     // login.textContent = "Username must be at least 3 characters";
		login.focus();
    	return false;    
		}
    else if (login !==""){
        login.style.border = "1px solid white"
    }
    if (!userName.value) {
      userName.style.border = "1px solid red";
      userName.focus();
      return false;
    }
     else if (userName !==""){
        userName.style.border = "1px solid white"
    }

    if(!second_username.value) {
      second_username.style.border = "1px solid red";
      return false;
    }
    else if (second_username !==""){
        second_username.style.border = "1px solid white"
    }
    if(!phoneNumber.value) {
      phoneNumber.style.border = "1px solid red";
      tel_error.textContent = "Must be: XXX XXX XXXX";
      return false;
    }
    re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!re.test(phoneNumber.value)){
      alert("Error: it's not allowed phone number");
        phoneNumber.focus();
        return false;
    }
    else if (phoneNumber !==""){
      phoneNumber.style.border = "1px solid white"
      tel_error.textContent = null
    }
     if(!email.value) {
      email.style.border = "1px solid red";
      return false;
    }
    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!re.test(email.value)){
      alert("Error: it's not email adress");
        userPassword.focus();
        return false;
    }
    else if (email !==""){
        email.style.border = "1px solid white"
    }

		if (!userPassword.value) {

			userPassword.style.border = "1px solid red";
      pass_error.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
			return false;
		}
    if(userPassword.value.length < 8) {
        alert("Error: Password must contain at least 8 characters!");
        userPassword.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(userPassword.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        userPassword.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(userPassword.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        userPassword.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(userPassword.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        userPassword.focus();
        return false;
      }
    else if (userPassword !==""){
        userPassword.style.border = "1px solid white"
    }
    if (!confirmPass.value ) {
      confirmPass.style.border = "1px solid red";
      return false;
    }
    else if (confirmPass !==""){
        confirmPass.style.border = "1px solid white"
    }

    if(confirmPass.value != userPassword.value) 
    { 
      confirmPass.style.border = "1px solid red";
      cpass_error.textContent = "password not match";
       return false;
    }
   /* else if (confirmPass.v == userPassword){
      confirmPass.style.border = "1px solid white"
      return true;
    }
*/
    //return !(!isValidate);
		return true;
	}






  userName.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

  // When the user clicks outside of the password field, hide the message box
  userName.onblur = function() {
    document.getElementById("message").style.display = "none";
  }




var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

/*
function phonenumber(phoneNumber)
{
  var input = document.getElementById("phoneNum").value;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 // if(phoneno.value.match(input))
    if(phoneno.test(input))
     {
     return true;
   }
   else
     {
     alert("Not a valid Phone Number");
     return false;
     }
}
*/
/////////////////////////

phoneNumber.onkeyup = function() {
 // var input = document.getElementById("phoneNum").value;
  var numbers = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phoneNumber.value.match(numbers)) { 
 // if(numbers.test(input)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
}


//////////////////////////////////////////

/*
phoneNumber.onkeyup = function() {
// Validate numbers
 var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phoneNumber.value.match(phoneno)) {  
    phoneno.classList.remove("invalid");
    phoneno.classList.add("valid");
  } else {
    phoneno.classList.remove("valid");
    phoneno.classList.add("invalid");
  }
  
  // Validate length
  if(phoneNumberr.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
*/

//////////////////////////////////////////////////////////



function checkForm(form)
  {
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.pwd1.focus();
        return false;
      }
      if(form.pwd1.value == form.username.value) {
        alert("Error: Password must be different from Username!");
        form.pwd1.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.pwd1.focus();
        return false;
      }

    } 
    else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }

    alert("You entered a valid password: " + form.pwd1.value);
    return true;
  }




















userPassword.onkeyup = function() {

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

}