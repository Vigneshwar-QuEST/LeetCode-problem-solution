// GET SUBSET OF 2 ELEMENTS and check sum of 2 elements to equal to target
const getSubsets = (arr,tar) => arr.reduce((subsets,value)=> subsets.concat(subsets.map(set=>[...set,value])),[[]])
                                    .filter(el => el.length === 3)
                                    .filter(el=> el.reduce((sum,value)=> sum=sum+value,0)===tar).map(el=>el.map(itm=>arr.indexOf(itm))) 
        
                        
console.log(getSubsets([1,2,3,4,5,6],9))  


//Create distinct array from a given array

var removeDuplicates = function(nums) {
    var mySet = new Set()
    for(var val of nums){
        mySet.add(val)
    }
    console.log( [...mySet])
};

//Compare 2 objects in JSON and find the difference.

const checkDiff =(obj1,obj2)=>{
    var diffObj = {};
    for(var key in obj1){
        console.log(key+' : ')
        if(Object.prototype.toString.call(obj1[key]) === '[object Object]' && Object.prototype.toString.call(obj2[key])==='[object Object]'){
            console.log('Object : ')
            diffObj[key] = checkDiff(obj1[key],obj2[key])
        }
        else if(Object.prototype.toString.call(obj1[key]) === '[object Function]' && Object.prototype.toString.call(obj2[key])==='[object Function]'){
            console.log('Function : ')
            continue;
        }
        else if(Object.prototype.toString.call(obj1[key]) === '[object Date]' && Object.prototype.toString.call(obj2[key])==='[object Date]'){
            console.log('Date : ')
            diffObj[key]={
                type: compareValues(obj1[key],obj2[key]),
                data: obj2[key]
            }
        }
        else if(Object.prototype.toString.call(obj1[key]) === '[object Array]' && Object.prototype.toString.call(obj2[key])==='[object Array]'){
            console.log('Array : ')
            diffObj[key] = checkDiff(obj1[key],obj2[key])
        }
        else{
            console.log('Value : ')
            diffObj[key]={
                type: compareValues(obj1[key],obj2[key]),
                data: obj2[key] === undefined ? obj1[key]:obj2[key]
            }
        }
    }
    for(var key in obj2){
        if(obj1[key] === 'undefined'){
            console.log(key+' : ')
            diffObj[key] = {
                    type: compareValues(obj1[key],obj2[key]),
                    data: obj2[key]
                        }
    }
    }
    return diffObj
}

const compareValues=(value1, value2)=> {
    if (value1 === value2) {
      return 'VALUE_UNCHANGED';
    }
    if (Object.prototype.toString.call(value1) === '[object Date]' && Object.prototype.toString.call(value2)==='[object Date]' && value1.getTime() === value2.getTime()) {
      return 'VALUE_UNCHANGED';
    }
    if (value1 === undefined) {
      return 'VALUE_CREATED';
    }
    if (value2 === undefined) {
      return 'VALUE_DELETED';
    }
    return 'VALUE_UPDATED';
  }

console.log(checkDiff( { a: 'i am unchanged',
    b: 'i am deleted',
    e: {
      a: 1,
      b: false,
      c: null
    },
    f: [1, {
      a: 'same',
      b: [{
        a: 'same'
      }, {
        d: 'delete'
      }]
    }],
    g: new Date('2017.11.25')
  }, 
{
    a: 'i am unchanged',
    c: 'i am created',
    e: {
      a: '1',
      b: '',
      d: 'created'
    },
    f: [{
      a: 'same',
      b: [{
        a: 'same'
      }, {
        c: 'create'
      }]
    }, 1],
    g: new Date('2017.11.25')
  }))


//Find JSON in another JSON. (Subset)

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { 
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}

//return an array of values that match on a certain key
function getValues(obj, key) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getValues(obj[i], key));
            } else if (i == key) {
                objects.push(obj[i]);
            }
        }
        return objects;
    }
    
//return an array of keys that match on a certain value
function getKeys(obj, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getKeys(obj[i], val));
            } else if (obj[i] == val) {
                objects.push(i);
            }
        }
        return objects;
    }

var json = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","ID":"44","str":"SGML","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
    
var js = JSON.parse(json);
    
console.log(getObjects(js,'ID','SGML'));

//Longest Substring Without Repeating Characters

const getSubStr = s=>{
    var arr = s.split('') 
    let mySet = new Set()
    arr.forEach(itm=>mySet.add(itm))
    let distArr = [...mySet] 
    var uniqueArr = [];
    var arrLen = arr.length
    for(var i=0;i<arrLen;i++){
      uniqueArr.push(getUniqueSubStr(arr))
      arr.splice(0,1)
      
    }
    console.log(Math.max(...uniqueArr.map(itm=>itm.length)))
    return Math.max(...uniqueArr.map(itm=>itm.length))
                                           
  }
  
  const getUniqueSubStr = (arr)=>{
    console.log(arr)
    var tempStr = ''
    let flag = true
    const subStr = arr.reduce((acc,char)=>{
                         if(tempStr.indexOf(char) === -1 && flag ){
                                console.log(tempStr)
                               tempStr = tempStr.concat(char)
                     }else if(tempStr.indexOf(char) >= 0){
                       flag = false
                     }
                     
                     acc = tempStr;
                     return acc },'')
        return subStr
  }
  
  getSubStr('pwwkew')


  //Find the missing fruits in the list2."
var list3 =["apples","oranges","banana","onions","lemons","tomatoes","carrot","cucumber","ginger","garlic"];
var list4 =["apples","cucumber","banana","tomatoes", "garlic"];

function getMissingFruits(arr1, arr2) {
    return arr1.filter(fruit1 => !arr2.reduce((avail, fruit2) => avail = avail === true ? avail = true: fruit1 === fruit2, false))
}

console.log(getMissingFruits(list3,list4))


//FIND THE DIFFERENCE IN INVETORY QUANTITY
var list1 =  [
    {item: "apples", quantity: 6},
    {item: "oranges", quantity: 5},
    {item: "banana", quantity: 4},
    {item: "onions", quantity: 15},
    {item: "lemons", quantity: 5},
    {item: "tomatoes", quantity: 10},
    {item: "carrot", quantity: 6},
    {item: "cucumber", quantity: 4},
    {item: "ginger", quantity: 4},
    {item: "garlic", quantity: 6}
   ]

var list2 = [
    {item: "apples", quantity: 20},
    {item: "oranges", quantity: 16},
    {item: "banana", quantity: 14},
    {item: "onions", quantity: 25},
    {item: "lemons", quantity: 15},
    {item: "tomatoes", quantity: 20},
    {item: "carrot", quantity: 19},
    {item: "cucumber", quantity: 14},
    {item: "ginger", quantity: 24},
    {item: "garlic", quantity: 18}
   ]

  /* [
    {item: "apples", quantity: 14},
    ..
    .
    .
    
    ]*/

 const getDiffInventory = (arr1,arr2)=> arr1.map((itm,ind)=> itm.quantity > arr2[ind].quantity ? 
                                                                        {item: itm.item, quantity: itm.quantity - arr2[ind].quantity} 
                                                                        : {item: itm.item, quantity: arr2[ind].quantity - itm.quantity})


console.log(getDiffInventory(list1,list2)) 


//Reverse integer
var reverse = function(x) {
    var rev =  parseInt(x.toString().split('').reverse().join(''))
    if(x<0){
      rev = -rev
    }
    return rev
  };

//Palindrome
var isPalindrome = function(x) {
    if(x<0) return false
 var rev =  parseInt(x.toString().split('').reverse().join(''))
 if(x === rev)return true
 return false 
};

//Roman to Integer

var romanToInt = function(s) {
    let [I,V,X,L,C,D,M] = [1,5,10,50,100,500,1000]
    let arr = s.split('');
    let currVal = 0
    let val = arr.reduce((acc,char,ind)=>{
      switch(char){
        case 'I':      
          if(arr[ind+1]==='I'||arr[ind+1]===undefined){
            currVal++;
            break;
          }else{
            currVal--;
            break;
          }
        case 'V':
          currVal = currVal+5;
          break;
        case 'X':
          if(arr[ind+1]==='L'||arr[ind+1]==='C'){
            currVal = currVal-10;
            break;
          }else{
            currVal = currVal+10;
            break;
          }
  
        case 'L':
          currVal = currVal+50;
           break;
  
        case 'C':
          if(arr[ind+1]==='D'||arr[ind+1]==='M'){
            currVal = currVal-100;
            break;
          }else{
            currVal = currVal+100;
            break;
          }
  
        case 'D':
          currVal = currVal+500;
           break;
  
        case 'M':
          currVal = currVal+1000;
           break;
  
        default:
           currVal;
           break;
      }
      acc = currVal
    },0)
  
  return currVal
  };

  //Integer to Roman
  /**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let [I,V,X,L,C,D,M] = [1,5,10,50,100,500,1000]
    let tempStr = ''
    while(num!=0){
      if(num%1000 !== num){
      num = num-1000
      tempStr = tempStr.concat('M')
    }
    else if(num%500 !== num && num<900 ){
      num = num-500
      tempStr= tempStr.concat('D')
    }
    else if(num%500 !== num && num>=900){
      num=num-900
      tempStr= tempStr.concat('CM')
    }
    else if(num%100 !== num && num<400){
      num = num-100
      tempStr= tempStr.concat('C')
    }
    else if(num%100 !== num && num>=400){
      num=num-400
      tempStr= tempStr.concat('CD')
    }
    else if(num%50 !== num && num<90){
      num = num-50
      tempStr= tempStr.concat('L')
    }
    else if(num%10 !== num && num>=90){
      num=num-90
      tempStr= tempStr.concat('XC')
    }
    else if(num%10 !== num && num>=40){
      num = num-40
      tempStr= tempStr.concat('XL')
    }
      else if(num%10 !== num && num<90){
      num = num-10
      tempStr= tempStr.concat('X')
    }
    else if(num%5 !== num && num<9){
      num = num-5
      tempStr= tempStr.concat('V')
    }
    else if(num === 9){
      num=num-9
      tempStr= tempStr.concat('IX')
    }
    else if(num<4){
      num--
      tempStr= tempStr.concat('I')
    }
    else if(num===4){
      num=num-4
      tempStr= tempStr.concat('IV')
    }}
    
  return tempStr
  
  };


//Longest Common Prefix

var longestCommonPrefix = function(strs) {
    const mySet = new Set()
    let i=0;
    let flag=true
    let tempStr =''
    while(flag){
      strs.reduce((acc,itm)=>{
        mySet.add(itm[i])
      },'')
      if(mySet.size === 1){
        tempStr=tempStr.concat(...mySet)
        mySet.clear()
        i++
      }else{
        flag = false
      }
    }
      console.log(tempStr)
  };

  //3sum
const getSubsets = (arr,tar) => arr.reduce((subsets,value)=> subsets.concat(subsets.map(set=>[...set,value])),[[]])
                                    .filter(el => el.length === 3)
                                    .filter(el=> el.reduce((sum,value)=> sum=sum+value,0)===tar)
        
                        
console.log(getSubsets([-1,0,1,2,-1,-4],0))

 //3sum
const getSubsets = (arr,tar) => arr.reduce((subsets,value)=> subsets.concat(subsets.map(set=>[...set,value])),[[]])
                                    .filter(el => el.length === 3)
                                    .filter(el=> el.reduce((sum,value)=> sum=sum+value,0)===tar)
        
                        
console.log(getSubsets([-1,0,1,2,-1,-4],0))


//Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
  var mySet = new Set();
  
 nums.forEach(itm => mySet.add(itm))
  
  nums=[...mySet]
  console.log(nums)
  return nums

};

//Remove element
var removeElement = function(nums, val) {
  const newArr = nums.filter(itm=> itm != val)
  
  nums = [...newArr]
  console.log(nums)
};


//Return the index of the first occurrence of needle in haystack, or -1
var strStr = function(haystack, needle) {
  if(haystack.indexOf(needle)!=-1){
      return haystack.indexOf(needle)
  }else {
      return -1
  }
  };

//Divide Two Integers

var divide = function(dividend, divisor) {
  var quo = 0;
  var div = Math.abs(dividend)
  var  dis = Math.abs(divisor)
  while(div>=dis){
    div = div - dis
    quo++
  }
  quo = (divisor<0) || (dividend < 0) ? quo*-1:quo

  return quo
};
