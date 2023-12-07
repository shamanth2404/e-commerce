const search = document.querySelector(".input-group");
const bigImg = document.querySelector(".img-fluid");
const imgList = document.querySelector(".list");
const heading = document.querySelector(".h3");
const itemList = document.querySelector(".item-list");
const searchList = document.querySelector(".search-list");
const drop = document.querySelector(".dropdown");
const login = document.querySelector(".active");
const pg1 = document.querySelector(".page1");

search.addEventListener("click", () =>{
    drop.classList.add("d-none");
    login.classList.add("d-none");
    pg1.classList.add("d-none");
    search.classList.remove("w-50");
    search.classList.add("w-75");
    searchList.classList.remove("d-none");    
});

const placeholders = ['Search "milk"','Search "bread"','Search "sugar"'];

let currentPlaceholderIndex = 0;

// Function to update the input placeholder
function updatePlaceholder() {
    
    document.querySelector(".form-control").placeholder = placeholders[currentPlaceholderIndex];
    currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
}

// Initial update and schedule updates every 2 seconds
updatePlaceholder();
setInterval(updatePlaceholder, 2000);