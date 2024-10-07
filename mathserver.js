
var http = require("http"); // Importing the 'http' module to create an HTTP server

var {mathss} = require("./maths"); // Importing 'mathss' function from the user-defined 'maths' module

var url = require("url"); // Importing 'url' module to parse the request URL

var qurey = require("./qurey"); // Importing the user-defined 'qurey' module for converting query params

// Creating the server using the 'http.createServer' method
var server = http.createServer((req, res) => {
  console.log(req.url); // Logs the URL requested by the client

  var parsed = url.parse(req.url, false); // Parsing the URL to extract path and query string
  console.log(parsed); // Logs the parsed URL object
  
  var arr = parsed.query.split("&"); // Splits the query string into an array of key-value pairs
  // console.log(a)

  var q = qurey.query(arr); // Converts the query string array into an object with key-value pairs
  console.log(q); // Logs the object with query parameters
  
  var a=parseInt(q.a)
  var b=parseInt(q.b)
  console.log(a,b, q.operator); // Logs the individual query parameters a, b, and operator
  

  
  // Uses the 'mathss' function and converts the result into a JSON string before sending it in the response
  res.write(JSON.stringify((mathss(a, b, q.operator))));

  res.end(); // Ends the response process
});

// Define the port to listen for incoming requests
var port = 100;
server.listen(port, () => {
  console.log("mathserverport:" + port); // Logs the server port number once the server starts listening
});






















































// var http=require("http");

// var {mathss}=require("./maths")




// var url=require("url")


// var qurey=require("./qurey")


// var server=http.createServer((req,res)=>{
// console.log(req.url)

// var parsed=url.parse(req.url,false)
// console.log(parsed);

// var arr=parsed.query.split("&")
// // console.log(a)

//  var q=qurey.query(arr)
//  console.log(q);
 

//  console.log(q.a,q.b,q.operator)
 
// //  a=parseInt(q.a)
// //  b=parseInt(q.b)
// //  c=q.operator
   
   
//     res.write(JSON.stringify(mathss(q.a,q.b,q.operator)))

//   res.end()
// })

// var port=9990;
// server.listen(port,()=>{
//     console.log("mathserverport:"  +port);
// })