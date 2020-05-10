const burger = document.querySelector(".burger");

const iconBurger  = document.querySelector(".fa-bars");
const iconX  = document.querySelector(".fa-times");
const column = document.querySelector("aside");
const text = document.querySelector(".wrapper");





burger.addEventListener('click', function(){
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");
    text.classList.toggle("show");


})

// II sposob  - jQuery//

// $(".burger").on("click", function(){
// $(".fas, aside, .wrapper").toggleClass("show");




// })