const result = document.getElementById("result2");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const select4 = document.getElementById("select4");
const select5 = document.getElementById("select5");
const form = document.getElementById("form");
const input = document.getElementById("input");


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
const product1 = [
    {
        image:"https://m.media-amazon.com/images/I/81ZBWeKoZVL._AC._SR360,460.jpg",
        name:"python crash",
        rate:"⭐⭐⭐⭐⭐",
        price:"$28.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/71hvXA+XmdL._AC._SR360,460.jpg",
        name:"Isc2",
        rate:"⭐⭐⭐⭐⭐",
        price:"$68.22"
    },
    {
        image:"https://m.media-amazon.com/images/I/51vZ6t5W4gL._AC._SR360,460.jpg",
        name:"system design",
        rate:"⭐⭐⭐⭐⭐",
        price:"$39.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/7148uFt7XbL._AC._SR360,460.jpg",
        name:"the explosive",
        rate:"⭐⭐⭐⭐⭐",
        price:"$11.89"
    },
    {
        image:"https://m.media-amazon.com/images/I/711Qnv05eTL._AC._SR360,460.jpg",
        name:"philosophy",
        rate:"⭐⭐⭐⭐⭐",
        price:"$22.95"
    },
    {
        image:"https://m.media-amazon.com/images/I/61Hc-9h+-XL._AC._SR360,460.jpg",
        name:"THE hidden",
        rate:"⭐⭐⭐⭐⭐",
        price:"27.30"
    },
    {
        image:"https://m.media-amazon.com/images/I/716nYICfCwL._AC._SR360,460.jpg",
        name:"python <br>programming",
        rate:"⭐⭐⭐⭐⭐",
        price:"$7.39"
    },
    {
        image:"https://m.media-amazon.com/images/I/817iWsLJR0L._AC._SR360,460.jpg",
        name:"the mythical",
        rate:"⭐⭐⭐⭐⭐",
        price:"$24.49"
    },
]
select1.addEventListener("click",()=>{
    result.innerHTML = " "
    product1.map((item) => {
        result.innerHTML +=   `<div id="container1">
                                    <img id="prod-image" src="${item.image}">
                                    <p class="prod-name">${item.name}</p>
                                    <p class="prod-rate">${item.rate}</p>
                                    <p class="prod-price">${item.price}</p>
                                    
                                </div>`
                         
    })
})

const product2 = [
    {
        image:"https://m.media-amazon.com/images/I/61ZjV2GmZiL._AC._SR360,460.jpg",
        name:"practical generative",
        rate:"⭐⭐⭐⭐⭐",
        price:"$34.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/71EF+flQuaL._UX300_PJku-sticker-v8,TopRight,0,-50._AC._SR360,460_.jpg",
        name:"vibe coding",
        rate:"⭐⭐⭐⭐⭐",
        price:"$6.22"
    },
    {
        image:"https://m.media-amazon.com/images/I/71slGh1Gd4L._AC._SR360,460.jpg",
        name:" the cumputer",
        rate:"⭐⭐⭐⭐⭐",
        price:"$17.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/71Mlebvs7IL._AC._SR360,460.jpg",
        name:"automate the<br> boring",
        rate:"⭐⭐⭐⭐⭐",
        price:"$50.46"
    },
    {
        image:"https://m.media-amazon.com/images/I/81i92NccenL._AC._SR360,460.jpg",
        name:"Trapped",
        rate:"⭐⭐⭐⭐⭐",
        price:"$26.95"
    },
    {
        image:"https://m.media-amazon.com/images/I/81A8mPjzFvL._AC._SR360,460.jpg",
        name:"figuring out<br>fluency in mathematics",
        rate:"⭐⭐⭐⭐⭐",
        price:"$32.30"
    },
    {
        image:"https://m.media-amazon.com/images/I/61mIq2iJUXL._AC._SR360,460.jpg",
        name:"cracking coding",
        rate:"⭐⭐⭐⭐⭐",
        price:"$27.39"
    },
    {
        image:"https://m.media-amazon.com/images/I/71q3umuEqxL._AC._SR360,460.jpg",
        name:"the unofficial<br>zelda",
        rate:"⭐⭐⭐⭐⭐",
        price:"$21.49"
    },
]
select2.addEventListener("click",()=>{
    result.innerHTML = " "
    product2.map((item) => {
        result.innerHTML +=   `<div id="container2">
                                    <img id="prod-image" src="${item.image}">
                                    <p class="prod-name">${item.name}</p>
                                    <p class="prod-rate">${item.rate}</p>
                                    <p class="prod-price">${item.price}</p>
                                    
                                </div>`
                         
    })
})

const product3 = [
    {
        image:"https://m.media-amazon.com/images/I/51WwoZhY5AL._AC._SR240,240.jpg",
        name:"software design",
        rate:"⭐⭐⭐⭐⭐",
        price:"$34.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/41eb5kXSkXL._AC._SR240,240.jpg",
        name:"microsoft",
        rate:"⭐⭐⭐⭐⭐",
        price:"$6.22"
    },
    {
        image:"https://m.media-amazon.com/images/I/51+TOcUfwXL._AC._SR240,240.jpg",
        name:" web programming",
        rate:"⭐⭐⭐⭐⭐",
        price:"$17.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/515VGhfLt8L._AC._SR240,240.jpg",
        name:"gaming programming",
        rate:"⭐⭐⭐⭐⭐",
        price:"$50.46"
    },
    {
        image:"https://m.media-amazon.com/images/I/41pdC8C4joL._AC._SR240,240.jpg",
        name:"technology",
        rate:"⭐⭐⭐⭐⭐",
        price:"$26.95"
    },
    {
        image:"https://m.media-amazon.com/images/I/417v2-+R2eL._AC._SR240,240.jpg",
        name:"Books",
        rate:"⭐⭐⭐⭐⭐",
        price:"$32.30"
    },
    {
        image:"https://m.media-amazon.com/images/I/41hKgvmrSoL._AC._SR240,240.jpg",
        name:"app development",
        rate:"⭐⭐⭐⭐⭐",
        price:"$27.39"
    },
    {
        image:"https://m.media-amazon.com/images/I/41aLUO8y04L._AC._SR240,240.jpg",
        name:"E-readers",
        rate:"⭐⭐⭐⭐⭐",
        price:"$21.49"
    },
]
select3.addEventListener("click",()=>{
    result.innerHTML = " "
    product3.map((item) => {
        result.innerHTML +=   `<div id="container3">
                                    <img id="prod-image" src="${item.image}">
                                    <p class="prod-name">${item.name}</p>
                                    <p class="prod-rate">${item.rate}</p>
                                    <p class="prod-price">${item.price}</p>
                                    
                                </div>`
                         
    })
})
const product4 = [
    {
        image:"https://m.media-amazon.com/images/I/612H9QWuzzL._AC._SR360,460.jpg",
        name:"UI/UX Designer",
        rate:"⭐⭐⭐⭐⭐",
        price:"$34.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/61frMjJbsRL._AC._SR360,460.jpg",
        name:"microsoft lists",
        rate:"⭐⭐⭐⭐⭐",
        price:"$6.22"
    },
    {
        image:"https://m.media-amazon.com/images/I/71oZ45OrLjL._AC._SR360,460.jpg",
        name:" javascript",
        rate:"⭐⭐⭐⭐⭐",
        price:"$27.99"
    },
    {
        image:"https://m.media-amazon.com/images/I/71xdJ65b4RL._AC._SR360,460.jpg",
        name:"coding all in one",
        rate:"⭐⭐⭐⭐⭐",
        price:"$50.46"
    },
    {
        image:"https://m.media-amazon.com/images/I/51zvXJYpwkL._AC._SR360,460.jpg",
        name:"ios",
        rate:"⭐⭐⭐⭐⭐",
        price:"$26.95"
    },
    {
        image:"https://m.media-amazon.com/images/I/61WvFfFptDL._AC._SR360,460.jpg",
        name:"building mobile",
        rate:"⭐⭐⭐⭐⭐",
        price:"$32.30"
    },
    {
        image:"https://m.media-amazon.com/images/I/71K7t65ulVL._AC._SR360,460.jpg",
        name:"Swift Cookbook",
        rate:"⭐⭐⭐⭐⭐",
        price:"$27.39"
    },
    {
        image:"https://m.media-amazon.com/images/I/81vvgZqCskL._AC._SR360,460.jpg",
        name:"the lean Startup",
        rate:"⭐⭐⭐⭐⭐",
        price:"$21.49"
    },
]
select4.addEventListener("click",()=>{
    result.innerHTML = " "
    product4.map((item) => {
        result.innerHTML +=   `<div id="container4">
                                    <img id="prod-image" src="${item.image}">
                                    <p class="prod-name">${item.name}</p>
                                    <p class="prod-rate">${item.rate}</p>
                                    <p class="prod-price">${item.price}</p>
                                    
                                </div>`
                         
    })
})
select5.addEventListener('click',()=>{
    result.innerHTML = " "
    product.map((item) => {
        result.innerHTML +=   `<div id="container">
                                    <img id="prod-image" src="${item.image}">
                                    <p class="prod-name">${item.name}</p>
                                    <p class="prod-rate">${item.rate}</p>
                                    <p class="prod-price">${item.price}</p>
                                    
                                </div>`
                         
    })
})

const allProducts = [...product, ...product1, ...product2, ...product3, ...product4];

form.addEventListener('keyup', (e) => {
    const pattern = new RegExp(`${input.value.trim()}`, 'i');

    const filteredProducts = allProducts.filter((item) => pattern.test(item.name));

    result.innerHTML = '';

    filteredProducts.forEach((item) => {
        result.innerHTML += `
            <div id="container">
                <img id="prod-image" src="${item.image}" alt="${item.name}">
                <p class="prod-name">${item.name}</p>
                <p class="prod-brand">Brand: ${item.brand }</p>
                <p class="prod-price">${item.price}</p>
                <p class="prod-rate">${item.rate}</p>
                
            </div>
        `;
    });
});
