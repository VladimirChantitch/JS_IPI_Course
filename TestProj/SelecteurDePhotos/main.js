"use strict";

const selectAll_btn = document.body.querySelector("#selectAll");
const deSelectAll_btn = document.body.querySelector("#deselectAll");

const images = document.body.querySelectorAll("ul li");

const total = document.body.querySelector("#total");

var count = 0; 

var add = function addToCompter(){
    count += 1;
    total.textContent = count;
}

var remove = function addToCompter(){
    count -= 1;
    if (count < 0){
         count = 0;
    }
    total.textContent = count;
}

for (let index = 0; index < images.length; index++) {
    images[index].addEventListener("click",  () => {
        if (images[index].classList.contains("selected")){
            images[index].classList.remove("selected");
            remove();
        }else{
            images[index].classList.add("selected");
            add();
        }
    });
}

selectAll_btn.addEventListener("click", () => {
    images.forEach(image => {
        if (!image.classList.contains("selected")){
            image.classList.add("selected");
            add();
        }
    });
});

deSelectAll_btn.addEventListener("click", ()=> {
    images.forEach(image => {
        if (image.classList.contains("selected")){
            image.classList.remove("selected");
            remove();
        }
    });
});