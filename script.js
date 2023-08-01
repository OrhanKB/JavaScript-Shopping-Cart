const productsAPI = "https://fakestoreapi.com/products"
const cartsAPI = "https://fakestoreapi.com/carts"
const usersAPI = "https://fakestoreapi.com/users"

//DOC
const items = document.querySelector(".items")
const menBtn = document.querySelector("#men")
const womenBtn = document.querySelector("#women")
const jewBtn = document.querySelector("#jewelery")
const ourProducts = document.querySelector(".our-products")
const seeMoreBtn = document.querySelector(".mid-btn")
const body = document.body
//DOC



const fetchProducts = async () => {
    try {
        const res = await fetch(productsAPI)
        const data = await res.json()

          data.forEach((product) => {
            if(product.category !== "electronics") {

            //IMG
            const imgElement = document.createElement("img")
            imgElement.src = product.image;
            imgElement.alt = product.title;
            imgElement.classList.add("card");
            //IMG

            
            //DIV
            const divElement = document.createElement("div");
            divElement.classList.add("div-element")
            divElement.appendChild(imgElement);
            items.appendChild(divElement);
            //DIV

            //TITLE
            const title = document.createElement("p")
            title.classList.add("title")
            title.innerHTML = product.title
            divElement.appendChild(title)
            if(title.clientWidth >= divElement) { 
                title.style.fontSize = "2px"
            }
            //TITLE

            //PRICE 
            const price = document.createElement("p")
            price.classList.add("price")
            price.innerHTML = product.price + ` $`
            divElement.appendChild(price)
            //PRICE

            // BUY BUTTON
             const buy = document.createElement("button")
            const bişey = document.createElement("img")
            bişey.src = "img/shopping-cart.png"

            buy.classList.add("add-cart")
            buy.innerHTML = "Add To Cart"
            divElement.appendChild(buy) 

            const buyImg = document.createElement("img");
            buyImg.src = "img/shopping-cart.png";
            buyImg.alt = "Buy";
            buyImg.classList.add("buy-img")
            buy.appendChild(buyImg);
            // BUY BUTTON

            //FILTERING(men)
            menBtn.addEventListener("click", e => {
                if(product.category !== "men's clothing" ) {
                    divElement.style.display = "none"
                } else{
                divElement.style.display ="flex"
                ourProducts.innerHTML = "MEN'S CLOTHING"
                window,scrollBy(0, 600)
                }
            })
            //FILTERING(men)

            //FILTERING(women)
            womenBtn.addEventListener("click", e => {
                if(product.category !== "women's clothing") {
                    divElement.style.display = "none"
                } else {
                    divElement.style.display = "flex"
                    ourProducts.innerHTML = "WOMEN'S CLOTHING"
                    window,scrollBy(0, 600)
                }
            })
            //FILTERING(women)

            //FILTERING(jewelery)
            jewBtn.addEventListener("click", e => {
                if(product.category !== "jewelery") {
                    divElement.style.display = "none"
                } else {
                    divElement.style.display = "flex"
                    ourProducts.innerHTML  = "JEWELERY"
                    window,scrollBy(0, 600)       
                }
            })
            //FILTERING(jewelery)

            //MID-BTN SCROLL
           seeMoreBtn.addEventListener("click", e => {
            window,scrollBy(0, 550)
           })
            //MID-BTN SCROLL
        }
         });
        

         if(body.style.height < "1000px") {
            body.style.height = "1200px"
         }

    } catch(err) {
        console.log(err)
    }
}

fetchProducts()


const fetchUsers = async () => {
    try {
        const res = await fetch(usersAPI)
        const data = await res.json()

        console.log(data)
    }  catch(err) {
        console.log(err)
    }
}






