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
const cartButton = document.querySelector(".cart-btn")
const asideDiv = document.querySelector(".aside-cart")
const body = document.body
const header = document.querySelector(".header")
const img = document.querySelector(".main-pic")
const bigButton = document.querySelector(".bigbutton")
const midBtn = document.querySelector(".mid-btn")
const itemsView = document.querySelector(".items-view")
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
            

            buy.classList.add("add-cart")
            buy.innerHTML = "Add To Cart"
            buy.setAttribute("style", "cursor:pointer")
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

          console.log()


            //CART BUTTON
            const closeCartButton = document.querySelector(".close-cart-btn");
            
            cartButton.addEventListener("click", () => {
              asideDiv.classList.add("open");
              body.style.width = "700px"
              header.style.width = "1118px"
              img.style.width = "1120px"
              img.style.marginLeft = "400px"
              items.setAttribute("style", "grid-template-columns: 100px 100px 100px; grid-template-rows: 100px 100px 100px 100px 100px 100px;margin-left: 350px")
              ourProducts.setAttribute("style", "margin-left:335px")
              bigButton.style.marginLeft = "380px"
              midBtn.style.marginLeft = "380px"
            });
            
            closeCartButton.addEventListener("click", () => {
              asideDiv.classList.remove("open");
              document.body.style.overflow = "auto";
              body.style.width = "99%"
              items.removeAttribute("style" ,"margin-left")
              img.removeAttribute("style", "width;")
              img.removeAttribute("style", "margin-left")
              header.removeAttribute("style", "width")
              ourProducts.removeAttribute("style","margin-left")
              bigButton.removeAttribute("style", "margin-left")
              midBtn.removeAttribute("style", "margin-left")
            });
            //CART BUTTON
        
            //CART-DETAILS

            //doc
            const itemsTitle = document.querySelector(".items-title")
            const itemsImg = document.querySelector(".items-img")
            const itemsPrice = document.querySelector(".items-price")
            //doc

              buy.addEventListener("click", () => {
                
                const cartItemImage = document.createElement("img");
                cartItemImage.src = product.image;
                cartItemImage.alt = product.title;
                cartItemImage.classList.add("cart-item-image");
                cartItemImage.style.width = "50px";
                cartItemImage.style.height = "50px";
                itemsImg.appendChild(cartItemImage);
                
                
                const cartItemTitle = document.createElement("p");
                cartItemTitle.textContent = product.title;
                 itemsTitle.appendChild(cartItemTitle);
                    
            
                const cartItemPrice = document.createElement("p");
                cartItemPrice.textContent = product.price + " $";
                 itemsPrice.appendChild(cartItemPrice);
            
                const cartDetails = document.querySelector(".items-view");
                cartDetails.appendChild(cartItem);
              });

            //CART-DETAILS

        }
         });


        

         if(body.style.height < "1000px") {
            body.style.height = "1200px"
         }

    } catch(err) {
        console.log(err)
    }
}

fetchProducts();

const fetchUsers = async () => {
    try {
        const res = await fetch(usersAPI)
        const data = await res.json()

        console.log(data)
    }  catch(err) {
        console.log(err)
    }
}






