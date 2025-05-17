const result = document.getElementById("result1");
const menu = document.getElementById("togglebtn");
const navMenu = document.getElementById('navmenu');



menu.addEventListener('click', (e) => {
    e.preventDefault(); 
    navMenu.classList.toggle('show-header3'); 
});
const product = [
    {
        image:"https://books.goalkicker.com/HTML5Book/HTML5Grow.png",
        name:"HTML",
        rate:"⭐⭐⭐⭐⭐",
        price:"$80.00"
    },
    {
        image:"https://books.goalkicker.com/CSSBook/CSSGrow.png",
        name:"CSS",
        rate:"⭐⭐⭐⭐⭐",
        price:"$30.00"
    },
    {
        image:"https://books.goalkicker.com/JavaScriptBook/JavaScriptGrow.png",
        name:"JAVASCRIPT",
        rate:"⭐⭐⭐⭐⭐",
        price:"$100.00"
    },
    {
        image:"https://books.goalkicker.com/AngularJSBook/AngularJSGrow.png",
        name:"ANGULAR",
        rate:"⭐⭐⭐⭐⭐",
        price:"$50.00"
    },
    {
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1711564661i/18197267._SX50_.jpg",
        name:"LEARNING <br>PROGRAMMING <br>TECHNIQUES",
        rate:"⭐⭐⭐⭐⭐",
        price:"$110.00"
    },
    {
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539022493i/42245734._SX50_.jpg",
        name:"INPROVING<br> PRODUCTIVITY",
        rate:"⭐⭐⭐⭐⭐",
        price:"$35.00"
    },
    {
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397317998i/21899045._SX50_.jpg",
        name:"MODERN <br>PROGRAMMING",
        rate:"⭐⭐⭐⭐⭐",
        price:"$95.00"
    },
    {
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349026758i/6713575._SX50_.jpg",
        name:"MINDFULL <br>LEARNING",
        rate:"⭐⭐⭐⭐⭐",
        price:"$80.00"
    },
]

product.map((item) => {
    result.innerHTML +=   `<div id="container">
                                <img id="prod-image" src="${item.image}">
                                <p class="prod-name">${item.name}</p>
                                <p class="prod-rate">${item.rate}</p>
                                <p class="prod-price">${item.price}</p>
                                
                            </div>`
                     
})