function query(arr){
  var  obj={}
    for(i=0;i<arr.length;i++){
        // console.log(o[i])
    
        let splitarr=arr[i].split('=')
        Key=splitarr[0]
        value=splitarr[1]
    
        obj[Key]=value
    
    
    
      }
      return obj
    }
    module.exports={
        query

    }
      