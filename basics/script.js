let ipt = document.querySelector(".ip");
let btn = document.querySelector(".press");
// let head = document.querySelector("h1");
let body = document.querySelector("body");

btn.addEventListener("click", function () {

 let head = document.createElement("h1");
 head.innerText = ipt.value;
 body.appendChild(head);
  ipt.value = "";

});
