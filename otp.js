var http=require("http")

var server=http.createServer((req,res)=>{
    // var a=""
    
    // for(i=0;i<=4;i++){
    //     var z=Math.floor(Math.random()*10);
    //     a=a+z
    // }

    function hii(b){
        
        for(i=0;i<=4;i++){
          a=Math.floor(Math.random()*10)
         b=b+a;
        }
       return b
        }
        var b=" "
       hii(b)

    
    res.write(hii(b))

    res.end();
   
})

var port=360;

server.listen(port,()=>{
    console.log("otp server:"+port);
})
