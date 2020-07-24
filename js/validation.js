
var name_error = document.getElementById("name_error");
var pass_error = document.getElementById("pass_error");


function validate() {
		var userName = document.getElementById("username");
		var userPassword = document.getElementById("pass");

    var name_error = document.getElementById("name_error");
    var pass_error = document.getElementById("pass_error");

	
    if (!userName.value) {
      userName.style.border = "1px solid red";
      userName.focus();
      return false;
    }
     else if (userName !==""){
        userName.style.border = "1px solid white"
    }
		if (!userPassword.value) {
			userPassword.style.border = "1px solid red";
    //  pass_error.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
			return false;
		}
    else if (userPassword !==""){
        userPassword.style.border = "1px solid white"
    }
    
   /* else if (confirmPass.v == userPassword){
      confirmPass.style.border = "1px solid white"
      return true;
    }
*/
    //return !(!isValidate);
		return true;
	}
