//Letter Combinations of a Phone Number

var letterCombinations = function(digits) {
    var arr = [...digits]
    var finalArr =[]
    var charArr = arr.map(itm=>{
      switch(itm){
        case '2':
          return ['a','b','c']
        case '3':
          return ['d','e','f']
        case '4':
          return ['g','h','i']
        case '5':
          return ['j','k','l']
        case '6':
          return ['m','n','o']
        case '7':
          return ['p','q','r']
        case '8':
          return ['s','t','u']
        case '9':
          return ['v','w','x']
        default:
          break;
      }
    })

 /* let i =0
  while(i<charArr.length){
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        finalArr.push(`${charArr[i]}${charArr[j]}`)
      }
    }
  }*/
};


//Sorting of JSON by Keyss
//Sorting of JSON by Values
//PRACTICE
//Use Array.Filter, Array.Map and etc
//List all ES6 features with sample codes.    





