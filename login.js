var number = 3
function printNumbers(){
    number = 4;
    console.log(number)
}
let heading = document.getElementsByTagName("h1");
heading.innerText ="Hello";
heading.innerHTML ="Hello";
console.log("heading",heading);

function prinToScreen(){
    console.log(number)
}