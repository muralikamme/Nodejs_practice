
// Importing the HTTP module to create an HTTP server
var http = require("http");

// Importing the custom OTP module for generating OTPs
var { otp } = require("./OTP-1");

// Importing the custom query module for converting query parameters from string to object
var { query } = require("./qurey");

// Importing the URL module to work with URLs sent by the client
var url = require("url");

// Creating the server using the HTTP module's http.createServer method
var server = http.createServer((req, res) => {

    // Logging the request URL sent by the client, e.g., "/path?queryparams"
    console.log(req.url);

    // Parsing the query parameters using the url.parse method, 
    // which converts the URL string into an object format
    var parsed = url.parse(req.url, false);

    // Logging the parsed URL object
    console.log(parsed);

    // Splitting the query parameters string (parsed.query) into an array
    var arr = parsed.query.split("&");

    // Using the custom query module to convert the query string array into an object
    var q = query(arr);
    console.log(q);

    // Logging the 'count' value from the query object to analyze the request
    console.log(q.count);

    // Sending the generated OTP as the response to the client using res.write() method
    res.write(otp(q.count));

    // Ending the server response with res.end() method
    res.end();
});

// Creating a server on a specific port and listening for client requests
var port = 290;
server.listen(port, () => {
    console.log("connecting:" + port);
});













































































































//  //create a http server use http module

// var http=require("http")


// //otp module get from user-define otp module   

// var {otp}=require("./OTP-1");


// //query module ==>  for converting query prams  string to object 
// var {query}=require("./qurey")

// // url module get the url from client side 

// var url=require("url");

// // const {count}=require("console");


// // create a server using http module => http module method http.createserever

// var server=http.createServer((req,res)=>{

//  // console a req.url from server you get a   "/path?qureyparams"
//   console.log(req.url)

//   //divide the qurey parm using "URL.PARSE(REQ.URL)" method output you will get   in the form of OBJECT  

//     var parsed=url.parse(req.url,false)

//     console.log(parsed)

//     // you will take your needed information if you info is query use user-define qurey module that convert data arr to object 
  
//   var  arr=parsed.query.split("&")

// // query module convert  Data  string  into object
//  var q=query(arr)
//  console.log(q)

//  // analyse request give the response  to client  what they have
//  console.log(q.count);


//  // give the response to client using res.write() method 
//   res.write(otp(q.count))

// //stop the server using res.end()
//   res.end()

  
  

  
// })
  



  
//  // port creation part  
    
// var port=290;
// server.listen(port,()=>{
//     console.log("connecting:"+port);
// })