/*const express = require('express');
const app = express();

app.use((req, res, next)=> {
	res.status(200).json({
		message: 'it worsk !'
	});
});

module.export = app;
*/
//=========================
/*
const http = require('http');


const server = http.createServer((req, res) => {
	if(req.url === '/'){
		res.write("dffff");
		res.end();
	}

	if(req.url === '/api/'){
		res.write(JSON.stringify([1,2,3]));
		res.end();
	}
});

server.listen(8080);
*/
const MongoClient = require("BooksDb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
      
    const db = client.db("usersdb");
    const collection = db.collection("users");
    let user = {name: "Tom", age: 23};
    collection.insertOne(user, function(err, result){
          
        if(err){ 
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
});