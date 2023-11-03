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
const quantity = document.querySelector(".quantity");
let divElement;
//DOC


// LOCAL STORAGE
function saveItemsLocalStorage(cartItemArray) {
    localStorage.setItem("cartItemArray",JSON.stringify(cartItemArray));
}

function getItemsLocalStorage() {
    const storedCartItems = localStorage.getItem("cartItemArray");
    return storedCartItems ? JSON.parse(storedCartItems) : [] ;
}


// LOCAL STORAGE

const fetchProducts = async () => {
    
    
    try {
        const res = await fetch(productsAPI)
            const data = await res.json()

            
            
         
            
            let cartItemCount = 0;
            let cartItemArray = getItemsLocalStorage();
            let totalCartPrice = 0;
            const cartItemElements = [];
            
            
          data.forEach((product) => {
            
            if(product.category !== "electronics") {
           
        

            //aside cart 
             
            //IMG
            const imgElement = document.createElement("img")
            imgElement.src = product.image;
            imgElement.alt = product.title;
            imgElement.classList.add("card");
            //IMG 

            
            //DIV
            let divElement = document.createElement("div");
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
            scrollBy(0, 550)
           })
            //MID-BTN SCROLL


           //deneme
              
           //deneme

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

            
            if(closeCartButton) {
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
                  
                }); 
            }
            

            //CART BUTTON

            //function
            
            //display cart items
            

            
            //display cart items
   
            

            function createCartItemElement (product)  {
                

                    const existingCartItem = cartItemArray.find(item => item.product.id === product.id);

                    if(existingCartItem) {
                        existingCartItem.quantity++;
                        return
                    }

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
                    let itemsTitle = document.createElement("div");
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
    
                    //increase - decrease divs
                    let quantityInput = itemsQuantity.querySelector(".quantity-input")
                    const increase = itemsQuantity.querySelector(".increase");
                    const decrease = itemsQuantity.querySelector(".decrease");


                    
                    //TOTAL PRICE
                    const totalPrice = document.querySelector(".total-price");
                    function updateTotalPrice() {
                        totalPrice.innerHTML = `${totalCartPrice.toFixed(2)} $`
                     }
                     
                    //TOTAL PRICE

                   
    
                    decrease.addEventListener("click", e => {   
                        const existingProduct = cartItemArray.find(item => item.product.id === product.id)

                        if(existingProduct) {
                            quantityInput.value--

                            if(quantityInput.value <= 0) {
                                const itemIndex = cartItemArray.findIndex(item => item.product.id === product.id)

                                if(itemIndex !== -1) {
                                    cartItemArray.splice(itemIndex, 1)
                                }
                                asideDiv.removeChild(cartItem);
                                
                                
                            }

                            cartItemCount-- ;

                            if(cartItemCount <= 0) {
                                quantity.style.display ="none";
                                quantity.innerHTML = cartItemCount;
                            } else {
                                quantity.style.display  ="flex";
                                quantity.innerHTML = cartItemCount;
                            }
                        }

                        function removeCartItemsArray() {
                            const storedCartItems = localStorage.getItem("cartItemArray");
                            const parsed = JSON.parse(storedCartItems);

                            const removedItem = parsed.filter(item => item.product.id !== existingProduct.product.id);
                            return removedItem
                        }

                        const updatedCartItems = removeCartItemsArray();

                        localStorage.setItem("cartItemArray", JSON.stringify(updatedCartItems))
                        
                    
                       
                        
                        const productPrice = parseFloat(product.price);
                        
                        totalCartPrice -= productPrice;
                        updateTotalPrice()
                        
                     });
                     
                    increase.addEventListener("click", e => {
                        const existingProduct = cartItemArray.find(item => item.product.id === product.id)
                       quantityInput.value++;
                       quantity.innerHTML = ++cartItemCount;
                       const productPrice = parseFloat(product.price);
                       totalCartPrice += productPrice;
                       updateTotalPrice();
                       
                      const cartArray = localStorage.getItem("cartItemArray");
                      const parse = JSON.parse(cartArray);
                     const updated = parse.filter(item => console.log(item.quantity++))
                       
                       localStorage.setItem("cartItemArray", JSON.stringify(updated))
                       
                    })
                    //increase - decrease divs
    
                    //buy button
                    
                    
                    buy.addEventListener("click", e => {
                        
                        const existingProduct = cartItemArray.find(item => item.product.id === product.id)                        

                       if(existingProduct) {
                       ++existingProduct.quantity;
                       quantityInput.value = existingProduct.quantity;
                    } else {
                            cartItemArray.unshift({product: product, quantity: 1});   
                             quantityInput.value = 1;
                            /* BURASI!!! */  asideDiv.appendChild(cartItem);
                        } 
                        
                        
                        const totalCartItemCount = cartItemArray.reduce((total, item) => total + item.quantity)

                        if(totalCartItemCount <= 0 ) {   
                            quantity.style.display = "none";
                        }  else {
                            quantity.style.display = "flex";
                            quantity.innerHTML = ++cartItemCount;
                        }
                        
                        const productPrice = parseFloat(product.price);

                        totalCartPrice += productPrice;
                       
                        updateTotalPrice()
                        
                        saveItemsLocalStorage(cartItemArray);
                        
                        
                        

                         });
                         
                         
                    //buy button
             
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
                    
                    return cartItem; 
                         
                } 

                

                createCartItemElement(product, divElement); 

               
                
               
            //function


    }; 
    
         });

        //DISPLAY ITEMS
         function displayItems() {
            const cartItemArray = getItemsLocalStorage();
            cartItemArray.forEach(item => {
                const cartItem = document.createElement("div");
                
                //img
                const itemsImg = document.createElement("div");
                itemsImg.classList.add("items-img");
                const cartItemImage = document.createElement("img");
                cartItemImage.src = item.product.image;
                cartItemImage.alt = item.product.title;
                itemsImg.appendChild(cartItemImage);
                cartItem.appendChild(itemsImg);
                //img

                //title
                let itemsTitle = document.createElement("div");
                    itemsTitle.classList.add("items-title");
                    const cartItemTitle = document.createElement("p");
                    cartItemTitle.textContent = item.product.title;
                    itemsTitle.appendChild(cartItemTitle);
                    cartItem.appendChild(itemsTitle);
                //title

                //price
                const itemsPrice = document.createElement("div");
                    itemsPrice.classList.add("items-price");
                    const cartItemPrice = document.createElement("p");
                    cartItemPrice.innerHTML = `<span class="product-price">${item.product.price}$</span>`
                    itemsPrice.appendChild(cartItemPrice);
                    cartItem.appendChild(itemsPrice);
                //price

                //quantity
                  const itemsQuantity = document.createElement("span")
                    itemsQuantity.classList.add("items-quantity")
                    itemsQuantity.innerHTML = `<button class="decrease">-</button><input type="number" value="1" min="0" class="quantity-input"></input><button class="increase">+</button>`
                    cartItem.appendChild(itemsQuantity) 
                //quantity

                //KRİTİK

                  //increase - decrease divs
                  let quantityInput = itemsQuantity.querySelector(".quantity-input")
                  const increase = itemsQuantity.querySelector(".increase");
                  const decrease = itemsQuantity.querySelector(".decrease");
                

                  
                  //TOTAL PRICE
                  const totalPrice = document.querySelector(".total-price");
                  function updateTotalPrice() {
                      totalPrice.innerHTML = `${totalCartPrice.toFixed(2)} $`
                   }
                   
                  //TOTAL PRICE

                 
  
                  decrease.addEventListener("click", e => {   
                      const existingProduct = cartItemArray.find(item => item.product.id === item.product.id)
                    console.log("existing product:",existingProduct)
                      if(existingProduct) {
                          quantityInput.value--

                          if(quantityInput.value <= 0) {
                              const itemIndex = cartItemArray.findIndex(item => item.product.id === item.product.id) /* BURAYA Bİ BAKILSIN!! */

                              if(itemIndex !== -1) {
                                  cartItemArray.splice(itemIndex, 1)
                              }
                              asideDiv.removeChild(cartItem);
                          }

                          cartItemCount-- ;

                          if(cartItemCount <= 0) {
                              quantity.style.display ="none";
                              quantity.innerHTML = cartItemCount;
                          } else {
                              quantity.style.display  ="flex";
                              quantity.innerHTML = cartItemCount;
                          }
                      }

                      function removeCartItemsArray() {
                        const storedCartItems = localStorage.getItem("cartItemArray");
                        const parsed =  JSON.parse(storedCartItems)
                        const removedItem = parsed.filter(item => item.product.id !== existingProduct.product.id);
                       
                            return removedItem
                       
                    }
                    
                    const updatedCartItems = removeCartItemsArray();
                    localStorage.setItem("cartItemArray", JSON.stringify(updatedCartItems))

                      const productPrice = parseFloat(item.product.price);

                      totalCartPrice -= productPrice;
                      updateTotalPrice()

                   });
  
                  increase.addEventListener("click", e => {
                     quantityInput.value++;
                     quantity.innerHTML = ++cartItemCount;
                     const productPrice = parseFloat(product.price);
                     totalCartPrice += productPrice;
                     updateTotalPrice();
                     
                  })
                  //increase - decrease divs
  
                  //buy button
                  const buy = document.querySelector(".add-cart")
                  
                  buy.addEventListener("click", e => {
                      
                      const existingProduct = cartItemArray.find(item => item.product.id === item.product.id)                        

                     if(existingProduct) {
                     ++existingProduct.quantity;
                     quantityInput.value = existingProduct.quantity;
                  } else {
                          cartItemArray.unshift({product: item.product, quantity: 1});   
                           quantityInput.value = 1;
                          /* BURASI!!! */  asideDiv.appendChild(cartItem);
                      } 
                      
                      
                      const totalCartItemCount = cartItemArray.reduce((total, item) => total + item.quantity)

                      if(totalCartItemCount <= 0 ) {   
                          quantity.style.display = "none";
                      }  else {
                          quantity.style.display = "flex";
                          quantity.innerHTML = ++cartItemCount;
                      }
                      
                      const productPrice = parseFloat(item.product.price);

                      totalCartPrice += productPrice;
                     
                      updateTotalPrice()
                      
                      saveItemsLocalStorage(cartItemArray);
                      
                     
                       });
                       
                       
                       
                  //buy button

                //KRİTİK

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




                asideDiv.appendChild(cartItem)
            })
        }
        //DISPLAY ITEMS

         displayItems()
    

         
         if(body.style.height < "1000px") {
            body.style.height = "1200px"
         }
         
    } catch(err) {
        console.log(err)
    }
}






fetchProducts();
