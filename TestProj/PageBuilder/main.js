"use strict";

const h1_btn = document.body.querySelector("#h1");
const h2_btn = document.body.querySelector("#h2");
const h3_btn = document.body.querySelector("#h3");
const p_btn = document.body.querySelector("#p");
const hr_btn = document.body.querySelector("#hr");
const export_btn = document.body.querySelector("#export");

const content = document.body.querySelector("#content");

function CreateATextField (name, message){
    let val = document.createElement(name);
    val.setAttribute("contenteditable", true);
    let newContent = document.createTextNode(message);
    val.appendChild(newContent);
    return val;
}


h1_btn.addEventListener("click", () => {
    let h1 = CreateATextField("h1", "please write your title"); 
    content.appendChild(h1);
});

h2_btn.addEventListener("click", () => {
    let h2 = CreateATextField("h2", "please write your sub title"); 
    content.appendChild(h2);
});

h3_btn.addEventListener("click", () => {
    let h3 = CreateATextField("h3", "please write your subsub title"); 
    content.appendChild(h3);
});

p_btn.addEventListener("click", () => {
    let p = CreateATextField("p", "You can write your paragrahe here"); 
    content.appendChild(p);
});

hr_btn.addEventListener("click", () => {
    let hr = document.createElement("hr"); 
    content.appendChild(hr);
});

export_btn.addEventListener("click", ()=>{
    let popup = document.querySelector("#popup");
    popup.classList.toggle("hide");
    let newdiv = document.createElement("div");
    newdiv.textContent = content.innerHTML;
    popup.appendChild(newdiv);

});

