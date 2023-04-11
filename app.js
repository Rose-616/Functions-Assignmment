// // question no 01;
var num1=+prompt("Enter any number")
var num2=5;
function number(){
console.log(num1+num2)
}
number();




// question 2
var arr1 = prompt("Enter any value");
var arr2 = ["asad", "fahad","habib","khan"];

function search(arr) {
  
  if (arr.length === 0) {
    console.log("false");
    return;
  }

  
  if (arr[0] === arr1) {
    console.log(arr1 + " found");
    return;
  }

 
  search(arr.slice(1));
}

search(arr2);




// question 3
function additem(){
    var userinput = prompt("Enter anything:");
    var list = document.getElementById("car");
    var listitem = document.createElement("li");
    listitem.textContent = userinput;
    list.appendChild(listitem);
  }

  additem();





// question 4
function paragraph() {
    var para =prompt("Write any thing u want")
  document.getElementById("easy").innerHTML = para;
}
paragraph();








// quesiotion 5
function asad(){
   
    var input=prompt("Enter Any Color name")
    document.getElementById("body").style.backgroundColor=input
}
asad();


// question no 6
function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

const myObject = { name: "haider", age: 13 };


saveObjectToLocalStorage("myObjectKey", myObject);




// question no 7
function getObjectFromLocalStorage(key) {
    const objString = localStorage.getItem(key);
    if (!objString) {
      return null;
    }
    return JSON.parse(objString);
  }
  







// question no 8
function saveToLocalStorage(obj) {
   
    for (let prop in obj) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
  

    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
  
    return newObj;
  }
  