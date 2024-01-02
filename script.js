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

let cartItemCount = 0;

function getQuantity(cartItemCount) {
    localStorage.setItem("cartItemCount", JSON.stringify(cartItemCount));
}



function setQuantity() {
    const parsed = localStorage.getItem("cartItemCount");
    return parsed ? JSON.parse(parsed) : [];
    } 

    //TOTAL PRICE
    function setTotalPrice(totalPrice) {
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice.innerHTML));
    }

    function getTotalPrice() {
        const getTotalPrice = localStorage.getItem("totalPrice");
        return getTotalPrice ? JSON.parse(getTotalPrice) : [] ;
    }

    //TOTAL PRICE
  

// LOCAL STORAGE

const fetchProducts = async () => {
    
    
    try {
        const res = await fetch(productsAPI)
            const data = await res.json()      
            
            let cartItemArray = getItemsLocalStorage();
            let totalCartPrice = 0;
            const bishey = [

            ]    

            
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
                    itemsQuantity.innerHTML = `<button class="decrease">-</button><input type="number" min="0" class="quantity-input"></input><button class="increase">+</button>`
                    cartItem.appendChild(itemsQuantity) 
                    
                    //quantity

                    
    
                    //increase - decrease divs
                    let quantityInput = itemsQuantity.querySelector(".quantity-input")
                    const increase = itemsQuantity.querySelector(".increase");
                    const decrease = itemsQuantity.querySelector(".decrease");
                     

                    //TOTAL PRICE
                    const totalPrice = document.querySelector(".total-price");
                    function updateTotalPrice() {
                        totalPrice.innerHTML = `${Math.abs(totalCartPrice.toFixed(2))} $`
                     }
                     
                    //TOTAL PRICE

                    /** DİKKAT **/
                   
                    
                   
                     
                    decrease.addEventListener("click", e => {   
                        const existingProduct = cartItemArray.find(item => item.product.id === product.id)

                        if(existingProduct) {

                        if(existingProduct) {
                            let sumAll = cartItemArray.reduce((acc, item) => {
                                let quantity = item.quantity;
                            
                                if (typeof quantity === 'number') {
                                    return acc + quantity;
                                } else if (typeof quantity === 'string') {
                                    let quantityNumber = parseInt(quantity, 10); // Convert string to number
                                    if (!isNaN(quantityNumber)) {
                                        return acc + quantityNumber;
                                    } else {
                                        return acc;
                                    }
                                } else {
                                    return acc;
                                }
                            }, 0);
                            
                            
                            quantity.innerHTML = --sumAll
                             
                            quantityInput.value--
                           
                            if( quantityInput.value  <= 0) {
                                cartItemArray = cartItemArray.filter(item => item.product.id !== product.id);
                                asideDiv.removeChild(cartItem);
                               
                               
                            } else {
                                existingProduct.quantity = quantityInput.value;
                                quantity.style.display = "flex";
                            }

                            cartItemCount = cartItemArray.reduce((acc, item) => {
                                acc + item.quantity
                            },0) 

                            bishey.forEach(item => {Number(item.id) === existingProduct.product.id ? Number(--item.quantity) : []; item.quantity <= 0 ? bishey.splice(item, 1) : []} );
                            console.log("bishey:", bishey);
                            
                        }

                       localStorage.setItem("cartItemArray", JSON.stringify(cartItemArray));         
                        
                        const productPrice = parseFloat(product.price);
                        
                        totalCartPrice -= productPrice;
                        updateTotalPrice()
                    } 
                     });


                    increase.addEventListener("click", e => {
                        const existingProduct = cartItemArray.find(item => item.product.id === product.id)
                       quantityInput.value++; 
                      
                       quantity.innerHTML =  ++cartItemCount
                       const productPrice = parseFloat(product.price);
                       totalCartPrice += productPrice;
                       updateTotalPrice();

                       const index = cartItemArray.findIndex(item => item.product.id === product.id);
                       if (index !== -1) {
                           cartItemArray[index].quantity++;
                       }

                       bishey.forEach(item =>  Number(item.id) === existingProduct.product.id ? Number(++item.quantity) : []);
                       
                       
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
                              asideDiv.appendChild(cartItem);
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
                        getQuantity(cartItemCount);
                        setTotalPrice(totalPrice);
                        
                        quantityInput.id = product.id;
                        increase.id = quantityInput.id;
                        decrease.id = quantityInput.id;
                        
                        if(!bishey.some(item => item.id === quantityInput.id )) {
                        bishey.push({id:quantityInput.id, quantity: quantityInput.value});


                                               
                    }   
                    

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
         //2ND
        //DISPLAY ITEMS
         function displayItems() {
            const cartItemArray = getItemsLocalStorage();
            
            cartItemArray.reverse().forEach(item => {
                const cartItem = document.createElement("div");
                
               
                
                quantity.style.display = "flex";
                quantity.innerHTML = setQuantity()
               
                
                
                
               // quantityInput.value 

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
                    itemsQuantity.innerHTML = `<button class="decrease">-</button><input type="number" min="0" class="quantity-input"></input><button class="increase">+</button>`
                    cartItem.appendChild(itemsQuantity) 
                //quantity
                 
                
                //KRİTİK

                  //increase - decrease divs
                  let quantityInput = itemsQuantity.querySelector(".quantity-input")
                  const increase = itemsQuantity.querySelector(".increase");
                  const decrease = itemsQuantity.querySelector(".decrease");
                
                  quantityInput.value = item.quantity;
                    
                  
                  //TOTAL PRICE
                  const totalPrice = document.querySelector(".total-price");
                  totalPrice.innerHTML = getTotalPrice()
                 // totalCartPrice = getTotalPrice();
                 // totalPrice.innerHTML = totalCartPrice
                  function updateTotalPrice() {
                        `${Math.abs(totalCartPrice.toFixed(2))} $` 
                   }
                  //TOTAL PRICE

                  decrease.addEventListener("click", e => {   

                 const existingProduct = cartItemArray.find(item => item.product.id === item.product.id);
                
                   
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
                             // quantity.style.display ="none";
                              quantity.innerHTML = cartItemCount;
                          } else {
                            //  quantity.style.display  ="flex";
                              quantity.innerHTML = cartItemCount;
                          }
                      }

                      function removeCartItemsArray() {
                        const storedCartItems = localStorage.getItem("cartItemArray");
                        const parsed =  JSON.parse(storedCartItems);
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
                    ++cartItemCount;
                     let quantities = setQuantity()
                     
                      quantity.innerHTML = ++quantities
                      ++quantityInput.value
                     updateTotalPrice();
                 
                     // Store the updated cartItemArray back into localStorage
                     localStorage.setItem("cartItemArray", JSON.stringify(cartItemArray));
                     getQuantity(quantities)
                     
                  })
                  //increase - decrease divs
         
                  //buy button
                  const buy = document.querySelector(".add-cart")
                  
                  buy.addEventListener("click", e => {
                    
                    
                      const existingProduct = cartItemArray.find(item => item.product.id === product.id);
                                console.log("existing product:", existingProduct)
                     if(existingProduct) {

                  } else {
                          cartItemArray.unshift({product: item.product, quantity: 1});   
                           quantityInput.value = 1;
                          /* BURASI!!! */  asideDiv.appendChild(cartItem);
                      } 
                      
                      
                      const totalCartItemCount = cartItemArray.reduce((total, item) => total + item.quantity)
                      

                      if(totalCartItemCount <= 0 ) {   
                         // quantity.style.display = "none";
                      }  else {
                         // quantity.style.display = "flex";
                          quantity.innerHTML = ++cartItemCount;
                      }
                      
                      const productPrice = parseFloat(item.product.price);

                      totalCartPrice += productPrice;
                     
                      updateTotalPrice()
                      saveItemsLocalStorage(cartItemArray);
                      setQuantity();
                      
                      

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
