document.getElementById('form').addEventListener('submit', (e)=>{
	//console.log("clicked");
	let bookName = document.getElementById("bookName").value;
	let bookAutor = document.getElementById("autor").value;
	let isbnNumber = document.getElementById("isbn").value;
	let DataWydania = document.getElementById("dataWydania").value;
	let Language = document.getElementById("language").value;
	let BookOpis = document.getElementById("msg").value;
	createBook(bookName, bookAutor, isbnNumber, DataWydania, Language, BookOpis);
	e.preventDefault();
});

var booksArr = [];

function createBook(bookName, bookAutor, isbnNumber, DataWydania, Language, BookOpis){
	var book = {
		bookName:bookName,
		bookAutor:bookAutor,
		isbnNumber:isbnNumber,
		DataWydania:DataWydania, 
		Language:Language, 
		BookOpis:BookOpis
	}
	booksArr.push(book);
	readBook();
	//console.log(books);
	document.getElementById('form').reset();
}

function readBook(){
	var bookhtml = document.getElementById('book');
	bookhtml.innerHTML = '';
	for (var i = 0; i < booksArr.length; i++) {
		bookhtml.innerHTML += `<div class="black"><p>Title: ${booksArr[i].bookName}</p>
		 <p>Author: ${booksArr[i].bookAutor}</p>
		 <p>isbn: ${booksArr[i].isbnNumber}</p>
		 <p>Data Wydania: ${booksArr[i].DataWydania}</p>
		 <p>Language: ${booksArr[i].Language}</p>
		 <p>Book Opis: ${booksArr[i].BookOpis}</p>
		 <button class="edit" onClick="editBook('${i}')">Edit</button>
		 <button class="remove" onClick="deleteBook('${i}')">Delete</button>`
	}
}

function deleteBook(i){
	booksArr.splice(i,1);
	readBook();
	console.log(booksArr);
}

function editBook(index){
	var bookhtml = document.getElementById('book');
	bookhtml.innerHTML = '';
	for (var i = 0; i < booksArr.length; i++) {
		if(i == index){
			bookhtml.innerHTML += `<div class="red">
			Title: <input id="inputName" required type="text" placeholder="${booksArr[i].bookName}">
			<br><br>
			Author: <input id="inputAuthor" required type="text" placeholder="${booksArr[i].bookAutor}">
			<br><br>
			isbnNumber: <input id="inputisbnNumber" required type="text" placeholder="${booksArr[i].isbnNumber}">
			<br><br>
			Data Wydania: <input id="inputDataWydania" required type="text" placeholder="${booksArr[i].DataWydania}">
			<br><br>
			language: <input id="inputLanguage" required type="text" placeholder="${booksArr[i].Language}">
			<br><br>
			Opis: <input id="inputBookOpis" required type="text" placeholder="${booksArr[i].BookOpis}">
			<br><br>
			<button  class="edit" onClick="updateBook('${i}')">Edit</button>
		   <button class="remove" onClick="readBook('${i}')">Cancel</button>`
			
		}else{
			bookhtml.innerHTML += `<div class="black"><p>Title: ${booksArr[i].bookName}</p>
		 <p>Author: ${booksArr[i].bookAutor}</p>
		 <p>isbn: ${booksArr[i].isbnNumber}</p>
		 <p>Data Wydania: ${booksArr[i].DataWydania}</p>
		 <p>Language: ${booksArr[i].Language}</p>
		 <p>Book Opis: ${booksArr[i].BookOpis}</p>
		 <button disabled class="edit" onClick="editBook('${i}')">Edit</button>
		 <button disabled class="remove" onClick="deleteBook('${i}')">Delete</button>`
		}
	}
}

function updateBook(index){
	var updateName = document.getElementById('inputName').value;
	var updateAuthor = document.getElementById('inputAuthor').value;
	var updateIsbn = document.getElementById('inputisbnNumber').value;
	var updateData = document.getElementById('inputDataWydania').value;
	var updateLanguage = document.getElementById('inputLanguage').value;
	var updateOpis = document.getElementById('inputBookOpis').value;
	if (updateName == '' || updateIsbn =='' || updateIsbn =='' || updateData=='' || updateAuthor=='' || updateLanguage=='') {
		alert("Incomplete")
	}else{
		booksArr[index].updateName;
		booksArr[index].updateAuthor;
		booksArr[index].updateIsbn;
		booksArr[index].updateData;
		booksArr[index].updateLanguage;
		booksArr[index].updateOpis;
		readBook();
	}
}