const input = document.querySelector('input');
const btn1 = document.querySelector('#btn1');
const array = [];
// const calcStr = array.join("").toString();

function printContent(id) {
    let element = document.getElementById(id);
    let consolePrint = element.textContent.trim();
    array.push(consolePrint);
    input.value = array.toString(); 
    
    // console.log(typeof consolePrint)
    
    
    // document.body.appendChild(array);
    console.log(input.value);
  }