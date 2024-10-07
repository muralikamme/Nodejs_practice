function otp(n){
    var otp=" " 
    for(i=0;i<n;i++){
      a=Math.floor(Math.random()*10)
     otp=otp+a;
    }
   return otp
    }

    
  module.exports={
    otp
  }  

