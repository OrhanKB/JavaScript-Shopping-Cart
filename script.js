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
const quantity = document.querySelector(".quantity")

//DOC

 

const fetchProducts = async () => {
    try {
        const res = await fetch(productsAPI)
        const data = await res.json()

    
            let cartItemCount = 0;
            // let buyButtons = [];
        

          data.forEach((product) => {
            if(product.category !== "electronics") {


                
                //aside cart
                function createCartItemElement (product)  {

                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");
                
                    //img
                    const itemsImg = document.createElement("div");
                    itemsImg.classList.add("items-img");
                    const cartItemImage = document.createElement("img");
                    cartItemImage.src = product.image;
                    cartItemImage.alt = product.title;
                    itemsImg.appendChild(cartItemImage);
                    cartItem.appendChild(itemsImg);
                    //img
                
                    //title
                    const itemsTitle = document.createElement("div");
                    itemsTitle.classList.add("items-title");
                    const cartItemTitle = document.createElement("p");
                    cartItemTitle.textContent = product.title;
                    itemsTitle.appendChild(cartItemTitle);
                    cartItem.appendChild(itemsTitle);
                    //title
                
                    //price
                    const itemsPrice = document.createElement("div");
                    itemsPrice.classList.add("items-price");
                    const cartItemPrice = document.createElement("p");
                    cartItemPrice.innerHTML = `<span class="product-price">${product.price}$</span>`
                    itemsPrice.appendChild(cartItemPrice);
                    cartItem.appendChild(itemsPrice);
                    //price

                    //quantity
                    const itemsQuantity = document.createElement("span")
                    itemsQuantity.classList.add("items-quantity")
                    itemsQuantity.innerHTML = `<button class="decrease">-</button><input type="number" value="1" min="0" class="quantity-input"></input><button class="increase">+</button>`
                    cartItem.appendChild(itemsQuantity)
                    //quantity

                    //shortening
                    const inputString = cartItemTitle.innerHTML;
                    const wordsArray = inputString.split(" ")
                    const firstThree = wordsArray.slice(0, 2)
                    const withoutComma  = firstThree.join(" ")
                    if(wordsArray.length > 3) {
                        cartItemTitle.innerHTML = withoutComma + "..."
                    } else {
                        cartItemTitle.innerHTML = inputString
                    }
                    //shortening
                   
                    //increase-decrease quantity
                    const quantityInput = itemsQuantity.querySelector(".quantity-input")
                    const decrease = itemsQuantity.querySelector(".decrease")
                    decrease.addEventListener("click", e => {
                        quantityInput.value--   

                       if(quantityInput.value <= 0)  {
                        asideDiv.removeChild(cartItem);
                        --cartItemCount;   
                    }
                    // quantity.innerHTML = cartItemCount
                    if(cartItemCount <= 0) {
                        quantity.style.display = "none"
                    } else{
                        quantity.style.display = "flex"
                        quantity.innerHTML = cartItemCount;
                    }
                })
               

                    const increase = itemsQuantity.querySelector(".increase")
                    increase.addEventListener("click", e => {
                        quantityInput.value++
                        
                    })

                    
                    //increase-decrease quantity

             

                    items.appendChild(cartItem);


                    return cartItem;
                }
                //aside cart

              
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




            //CART BUTTON
             const closeCartButton = document.querySelector(".close-cart-btn")
             const totalCartBtn = document.querySelector(".total-price")
            
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
              totalCartBtn.style.display ="flex"
            });

            
            
            closeCartButton.addEventListener("click", () => {
                asideDiv.classList.remove("open")
                document.body.style.overflow ="auto"

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
              
              const buyButtons = document.querySelectorAll(".add-cart")
              buyButtons.forEach((buyButton) => {
                buyButton.disabled = false;

                buyButton.removeEventListener("click", buyClickHandler);

                buyButton.addEventListener("click", buyClickHandler)
              })
            }); 

            //CART BUTTON
        

            //navbar-quantity - cart-items

              buy.addEventListener("click", () => {

                  const cartItems = createCartItemElement(product);
                asideDiv.appendChild(cartItems);

                quantity.style.display = "flex"
                quantity.innerHTML = ++cartItemCount;
                
                buy.disabled = true;
                buyButtons.forEach(button => {
                    if(button ===buy) {
                        button.removeEventListener("click", buyClickHandler);
                    } else {
                        button.disabled = false;
                        button.addEventListener("click", buyClickHandler);
                    }
                });
                
            });

            

            buy.addEventListener("click", () => {
                buy.disabled = true;

                buy.removeEventListener("click", buyClickHandler);
            });

            const buyClickHandler = () => {
               
            }; 

            

            buy.addEventListener("click", buyClickHandler);


        
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









