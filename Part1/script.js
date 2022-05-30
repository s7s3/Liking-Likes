var count1= 3;
var countElement1 = document.querySelector("#count1");
console.log(countElement1);

function add1(){
    count1++;
    countElement1.innerHTML = count1 +"likes";
    console.log(count1);
}