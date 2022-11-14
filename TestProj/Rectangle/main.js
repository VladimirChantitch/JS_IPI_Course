"use strict";

const rectangle = document.body.querySelector(".rectangle");

document.body.querySelector("#toggle-rectangle").addEventListener("click", () => {
    rectangle.classList.toggle("hide");
});

rectangle.addEventListener("mouseenter", () =>{
    if (!rectangle.classList.contains("important")){
        rectangle.classList.add("important");
    }
});

rectangle.addEventListener("mouseleave", () => {
    if(rectangle.classList.contains("important")){
        rectangle.classList.remove("important");
    }
    if(rectangle.classList.contains("good")){
        rectangle.classList.remove("good");
    }
});

rectangle.addEventListener("dblclick", () => {
    if (!rectangle.classList.contains("good")){
        rectangle.classList.add ("good");
    }
});
