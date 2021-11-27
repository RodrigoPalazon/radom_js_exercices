const input = document.querySelector('input');
// const btn1 = document.querySelector('#btn1');
const array = [];
// const calcStr = array.join("").toString();

function printContent(id) {
    let element = document.getElementById(id);
    let consolePrint = element.textContent.trim();
    array.push(consolePrint);
    console.log(array.toString());
    input.value = array.join(" "); 
  }