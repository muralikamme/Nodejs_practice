// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// function multi (a,b){
//     return a*b
// }

// function div (a,b){
//     return a/b
// }

// function mod(a,b){
//     return a%b
// }

// module.exports={
//     add,sub,multi,div,mod
// }

// var a={
//     add:function (a,b){
//         return a+b
//     },
//     sub:function(a,b){
//         return a-b
//     },
//     multi: function (a,b){
//         return a*b
//     },
//     div:function(a,b){
//         return a/b

//     },
// };

function mathss(a, b, operator) {
  switch (operator) {
    case "add": // Corrected case with string comparison
      return a + b;

    case "sub":
      return a - b;

    case "multi":
      return a * b;

    case "div":
      return a / b;

    case "mod":
      return a % b;

    default:
      return "Invalid operator";
  }
}

//   var  add = (a, b) => a + b;
// var  multi = (a, b) => a * b;
// var  div = (a, b) => a / b;
// var mod = (a, b) => a % b;
// console.log(mathss(1,3,add))
// Exporting the function
module.exports = {
  mathss,
};
