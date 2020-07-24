
var name_error = document.getElementById("name_error");
var author_error = document.getElementById("pass_error");
var isbn_error = document.getElementById("isbn_error");
var language_error = document.getElementById("pass_error");

function validate() {

		var bookTitle = document.getElementById("bookName");
		var author = document.getElementById("autor");
    var isbn = document.getElementById("isbn");
    var datawydania = document.getElementById("dataWydania");
    var language= document.getElementById("language");
    //var opis = document.getElementById("pass");

		var isbn_error = document.getElementById("isbn_error");
    /*
    var name_error = document.getElementById("name_error");
    var author_error = document.getElementById("pass_error");
    var isbn_error = document.getElementById("name_error");
    var language_error = document.getElementById("pass_error");
	*/

    if (!bookTitle.value) {
      bookTitle.style.border = "1px solid red";
      bookTitle.focus();
      return false;
    }
     else if (bookTitle !==""){
        bookTitle.style.border = "1px solid white"
    }
		if (!author.value) {
			author.style.border = "1px solid red";
    //  pass_error.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
			return false;
		}
    else if (author !==""){
        author.style.border = "1px solid white"
    }
     if (!isbn.value) {
      isbn.style.border = "1px solid red";
      isbn_error = "Оnly numbers are allowed";
      return false;
    }
    else if (isbn !==""){
        isbn.style.border = "1px solid white"
    }
     if (!datawydania.value) {
      datawydania.style.border = "1px solid red";
      return false;
    }
    else if (datawydania !==""){
        datawydania.style.border = "1px solid white"
    }
    if (!language.value) {
      language.style.border = "1px solid red";
      return false;
    }
    else if (language !==""){
        language.style.border = "1px solid white";
    }

    
		return true;
	}
