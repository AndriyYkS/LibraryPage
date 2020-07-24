
function validate() {
		var bookName = document.getElementById("bookName");
		var bookAutor = document.getElementById("autor");
		var isbnNumber = document.getElementById("isbn");
		var DataWydania = document.getElementById("dataWydania");
		var Language = document.getElementById("language");
		var BookOpis = document.getElementById("msg");


		if(!bookName.value) {
			userName.style.border = "1px solid red";
			return false;
		}

		if(!autor.value) {
			userPassword.style.border = "1px solid red";
			return false;
		}


		return true;
	}









bookName.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
bookName.onblur = function() {
  document.getElementById("message").style.display = "none";
}


isbnNumber.onkeyup = function() {
// Validate numbers
 var numbers = /[0-9]/g;
  if(isbnNumber.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(isbnNumber.value.length >= 5) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}