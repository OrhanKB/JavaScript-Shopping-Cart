const productsAPI = "https://fakestoreapi.com/products"
const cartsAPI = "https://fakestoreapi.com/carts"

//DOC
const items = document.querySelector(".items");
const seeMoreBtn = document.querySelector(".see-more");
const men = document.querySelector(".men");
const women = document.querySelector(".women");
const jewellery = document.querySelector(".jewellery")
const ourProducts = document.querySelector(".our-products")
const cartBtn = document.querySelector(".cart-btn");
const asideCart = document.querySelector(".aside-cart")
const closeBtn = document.querySelector(".close-cart-btn");
const body = document.querySelector("body")
const bigImg = document.querySelector(".big-image")
const texts = document.querySelector(".texts")
const header = document.querySelector("header")
const cartItems = document.querySelector(".cart-items")
const buy = document.querySelectorAll(".buy-button")
let cartQuantity = document.querySelector(".cart-quantity")
const deleteBtn = document.querySelector(".delete")
const totalPrice = document.querySelector(".total-price")
//DOC


//GET TOTAL QUANTITY
function saveTotalQuantity(totalQ) {
     localStorage.setItem("totalQuantity", JSON.stringify(totalQ));
}

async function getTotalQuantity() {
    const parsed =  JSON.parse(localStorage.getItem("totalQuantity"));
    return parsed
}
//GET TOTAL QUANTITY


//LOCALSTOARGE
function saveItemsLocalStorage(cartItemArray) {
    localStorage.setItem("cartItemArray",JSON.stringify(cartItemArray));
}

 function getItemsFromLocalStorage() {
    const storedItems =  localStorage.getItem("cartItemArray");
    return storedItems ? JSON.parse(storedItems) : [];
}

//LOCALSTOARGE

//SUMQUANTITY LOCALSTORAGE
function saveQuantitySum(summ) {
    localStorage.setItem("totalSum", JSON.stringify(summ))
}

function getQuantitySum() {
    const storedSum = localStorage.getItem("totalSum");
    return storedSum ? JSON.parse(storedSum) : [] ;
}

const sumOfQuantities = getQuantitySum();

const sumOfThis = sumOfQuantities.reduce((acc, num) => {
   return acc += num
},0)

totalPrice.innerHTML = sumOfThis.toFixed(2) + " $"
//SUMQUANTITY LOCALSTORAGE

//cartQuantity
const getItems = getItemsFromLocalStorage()
let zero = 0
const halan = getItems.forEach(item => {
    return zero += item.quantity
}) 

 
 getTotalQuantity()
 .then(quantity => {
    cartQuantity.innerHTML = quantity
    quantity ? cartQuantity.style.display = "flex" : [] ;
 })
 .catch("error");


//cartQuantity 



//div save
function divSave(cartItems) {
    localStorage.setItem("divSave", JSON.stringify(cartItems.innerHTML));
}

function getDivSave() {
    const parsedDiv = localStorage.getItem("divSave");
    return parsedDiv ? JSON.parse(parsedDiv) : [] ;
}

 const getDivSaveFunc = getDivSave();
  cartItems.innerHTML = getDivSaveFunc;
  const itemsOfCartItems = cartItems.childNodes;

  //CART ITEM ARRAY
   let cartItemArray = [];
  //CART ITEM ARRAY

// add event listeners out of the function
    let sayac = 0;
    let totalQuantity
 itemsOfCartItems.forEach(item => {
    const additionButtons = item.lastChild.firstChild;
    const extractionButtons = item.lastChild.lastChild;
    const priceOfItems = parseFloat(item.childNodes[2].innerHTML);
   
    additionButtons.addEventListener("click", async e => {
        cartItemArray = await getItemsFromLocalStorage()
       

        const existingProduct = cartItemArray.find(arrayItem => arrayItem.id === parseInt(item.id));
        
        

        
        const quantityElement = item.lastChild.childNodes[1];
        quantityElement.innerHTML = parseInt(quantityElement.innerHTML) + 1;
        ++existingProduct.quantity;
        //total price
        const totalSum = localStorage.getItem("totalSum");
        const parsedSum = JSON.parse(totalSum);

        parsedSum.push(priceOfItems)

       let sumAll = parsedSum.reduce((acc, num) => {
            return acc+num
        }, 0)
        totalPrice.innerHTML = sumAll.toFixed(2) + "$"
        //total price
            ++cartQuantity.innerHTML 
            totalQuantity = cartItemArray.reduce((acc, item) => acc + item.quantity, 0);

       
        saveItemsLocalStorage(cartItemArray);
         saveQuantitySum(parsedSum);
        divSave(cartItems);
        saveTotalQuantity(totalQuantity);
    });

    extractionButtons.addEventListener("click", async e => {
        cartItemArray = await getItemsFromLocalStorage()
        const existingProduct = cartItemArray.find(arrayItem => arrayItem.id === parseInt(item.id)); 
        const indexToRemove = cartItemArray.indexOf(existingProduct);
        

        const quantityElement = item.lastChild.childNodes[1];
        quantityElement.innerHTML = --existingProduct.quantity; 
        
        --cartQuantity.innerHTML
        cartQuantity.innerHTML < 1 ? cartQuantity.style.display = "none" : [] ;
        totalQuantity = cartItemArray.reduce((acc, item) => acc + item.quantity, 0);

        
        //total price
        const totalSum = localStorage.getItem("totalSum");
        const parsedSum = JSON.parse(totalSum);
        const priceToRemove = priceOfItems;
        const indexOfPriceToRemove = parsedSum.indexOf(priceToRemove);
        
        if(indexOfPriceToRemove !== -1) {
            parsedSum.splice(indexOfPriceToRemove, 1);

            const afterRemove = parsedSum.reduce((acc, num) => {
                return acc+=num
            }, 0);

            totalPrice.innerHTML = afterRemove.toFixed(2) + "$"
        } 

        parsedSum.splice(indexOfPriceToRemove, 1);

        const afterRemove = parsedSum.reduce((acc, num) => {
            return acc+=num
        }, 0);

        totalPrice.innerHTML = afterRemove.toFixed(2) + "$"

            
        if(parseInt(quantityElement.innerHTML) < 1) {
            cartItems.removeChild(item);
           cartItemArray.splice(indexToRemove, 1);
        }     

           console.log("parsedsum:", parsedSum); 
        saveItemsLocalStorage(cartItemArray);
        saveQuantitySum(parsedSum);
        divSave(cartItems)
        saveTotalQuantity(totalQuantity);
        //total price
    });

 })
// add event listeners out of the function


const fetchProducts = async () => {
    try{
        const res = await fetch(productsAPI);
        const data = await res.json()
       data.forEach(obj => obj["quantity"] = 0);

     
       let summ = getQuantitySum();   
        
        data.map(product => {
            if(product.category !== "electronics") {

                //DIV
                const divElement = document.createElement("div");
                divElement.classList.add("item")
                items.appendChild(divElement)
                divElement.id = product.id
                //DIV

                //IMG
                const image = document.createElement("img");
                image.src = product.image;
                image.alt = product.title;
                image.classList.add("image");
                divElement.appendChild(image)
                //IMG

                //TITLE
                const title = document.createElement("p");
                title.classList.add("title")
                title.innerHTML = product.title;
                divElement.appendChild(title);
                //TITLE

                //PRICE
                const price = document.createElement("p");
                price.classList.add("price");
                price.innerHTML = product.price + ` $`
                divElement.appendChild(price)
                //PRICE

                //BUY BUTTON
                const buy = document.createElement("div");
                buy.classList.add("buy-button");
                buy.id = product.id
                buy.innerHTML = "Add to Cart";
                buy.setAttribute("style","cursor:pointer");
                divElement.appendChild(buy)

                const buyImg = document.createElement("img");
                buyImg.src = "img/shopping-cart.png"
                buyImg.alt = "Buy"
                buyImg.classList.add("buy-img");
                buy.appendChild(buyImg)
                //BUY BUTTON

                //SEE MORE BTN SCROLL
                seeMoreBtn.addEventListener("click", e => {
                    scrollTo(0, 540)
                })
                //SEE MORE BTN SCROLL
                
                //MEN - CATEGORIZE
                men.addEventListener("click", e => {
                    if(product.category === "men's clothing") {
                        divElement.style.display = "flex"
                        ourProducts.innerHTML = "MEN'S CLOTHING"
                        scrollTo(0, 550)
                        } else {    
                            divElement.style.display = "none"   
                    } 
                })
                //MEN CATEGORIZE

                //WOMEN CATEGORIZE
                women.addEventListener("click", e => {
                    if(product.category === "women's clothing") {
                        divElement.style.display ="flex"
                        ourProducts.innerHTML = "WOMEN'S CLOTHING"
                        scrollTo(0, 550)
                    } else {
                        divElement.style.display = "none"
                    }
                    
                })
                //WOMEN CATEGORIZE

                //JEWELLERY CATEGORIZE
                jewellery.addEventListener("click", e => {
                    if(product.category === "jewelery") {
                        divElement.style.display = "flex"
                        ourProducts.innerHTML = "JEWELERY"
                        scrollTo(0, 550)
                    } else {
                        divElement.style.display = "none"
                    }
                })
                //JEWELLERY CATEGORIZE

                //ASIDE CART BTN
                cartBtn.addEventListener("click", e => {
                    asideCart.style.right = "180px";
                    body.style.width = "682px"
                    texts.style.left = "200px"
                ourProducts.setAttribute("style", "margin-left: 420px")
                    items.setAttribute("style", "grid-template-columns: 100px 100px 100px; grid-template-rows: 100px 100px 100px 100px 100px 100px;margin-left: 380px ")
                    header.setAttribute("style", "width: 1101px")
                    
                })

                closeBtn.addEventListener("click", e => {
                    asideCart.style.right ="-420px"
                    body.style.width = "100%"
                    texts.style.left = "0px"
                    ourProducts.removeAttribute("style", "margin-left")
                    items.removeAttribute("style", "grid-template-columnds; grid-template-rows; margin-left")
                    header.removeAttribute("style","width")
                    
                })
                //ASIDE CART BTN


         //ASIDE-ITEMS!!!
                
            //ASIDE ITEM
            const asideItem = document.createElement("div");   
            asideItem.classList.add("aside-item");
            //ASIDE ITEM

            
                //DELETE BTN
                deleteBtn.addEventListener("click", e => {
                   localStorage.removeItem("cartItemArray")
                   cartItems.innerHTML = "";
                    cartQuantity.innerHTML = 0
                    cartQuantity.style.display = "none"
                    totalPrice.innerHTML = 0 + "$"
                    summ.splice(0, summ.length)
                })
                //DELETE BTN
                

         product.quantity = 1   
         //IMG 
         const asideImg = document.createElement("img");
         asideImg.classList.add("aside-img");
         asideImg.src = product.image
         asideItem.appendChild(asideImg);
         //IMG

         //TITLE
         const asideTitle = document.createElement("p");
         asideTitle.classList.add("aside-title");
         asideTitle.textContent = product.title
         asideItem.appendChild(asideTitle);
         //TITLE

         //PRICE
             const asidePrice = document.createElement("p");
             asidePrice.classList.add("aside-price");
             asidePrice.textContent = product.price + "$"
             asideItem.appendChild(asidePrice);
         //PRICE
            

                // QUANTITY BUTTONS
                const quantityBtns = document.createElement("div")
                quantityBtns.classList.add("quantity-btns");
                
                const addition = document.createElement("button");
                addition.innerHTML = "+"
                addition.classList.add("addition");
                quantityBtns.appendChild(addition);

                const quantity = document.createElement("div");  
                quantity.classList.add("quantity");
                quantityBtns.appendChild(quantity);
                quantity.innerHTML = product.quantity;

                const extraction = document.createElement("button");
                extraction.innerHTML = "-"
                extraction.classList.add("extraction");
                quantityBtns.appendChild(extraction);

                asideItem.appendChild(quantityBtns) 

                asideItem.id = product.id
                        quantity.id = product.id
                

                //shortening
                const inputString = asideTitle.innerHTML
                const wordsArray = inputString.split(" ");
                const firstThree = wordsArray.slice(0, 2);
                const withoutComma = firstThree.join(" ");
                if(wordsArray.length > 3) {
                    asideTitle.innerHTML = withoutComma + "..."
                } else {
                    asideTitle.innerHTML = inputString
                }
                //shortening
                         
            

            // QUANTITY BUTTONS
        //ASIDE-ITEMS!!!
                 
                
        
                function createCartItemElement(product) {   
                                         
                    buy.addEventListener("click", async  (e) => {
                          cartItemArray = await getItemsFromLocalStorage()
                       let  existingProduct = cartItemArray.find(item => item.id === product.id);    
                        
                    let itemExists = false;   
                    cartQuantity.style.display = "flex"    

                        cartItems.childNodes.forEach((div) => {
                            if(parseInt(div.id) === parseInt(asideItem.id)) {
                                let midchild = div.lastChild.childNodes[1];
                                
                                
                                midchild.innerHTML = ++existingProduct.quantity; 
                                itemExists = true;
                                
                            }   
                            
                        });
                        
                    if(!itemExists) {
                        cartItems.appendChild(asideItem)
                        cartItemArray.push({...product, quantity:1});
                        quantity.innerHTML = 1;
                    }

                    let totalQuantity = cartItemArray.reduce((acc, item) => acc + item.quantity, 0);
                    cartQuantity.innerHTML = totalQuantity;
                    saveTotalQuantity(totalQuantity);
                    saveItemsLocalStorage(cartItemArray);                    
                    

                    //total price
                    
                    summ.push(product.price);
                    
                    let sumAll = summ.reduce((acc, nums) => {
                        return acc += nums
                    }, 0)
                    totalPrice.innerHTML = sumAll.toFixed(2) + "$"
                    //total price
                    

                    saveQuantitySum(summ);
                    divSave(cartItems); 
                    
                }   
                    );


                    let totalQuantity
                   addition.addEventListener("click", async  (e) => {
                       
                        cartItemArray = await getItemsFromLocalStorage()
                        
                       const existingProduct = cartItemArray.find(item => item.id === product.id);

                        

                       cartItems.childNodes.forEach((div) => {
                           if(parseInt(div.id) === parseInt(asideItem.id)) {
                               let midchild = div.lastChild.childNodes[1];
                               
                   
                               midchild.innerHTML = ++existingProduct.quantity; 
                               itemExists = true;
                               
                           }
                           
                     totalQuantity = cartItemArray.reduce((acc, item) => acc + item.quantity, 0);
                     cartQuantity.innerHTML = totalQuantity;
                     
                        
                       });
                 
                       
                       saveItemsLocalStorage(cartItemArray)
                      

                       
                   //total price
                   summ.push(product.price);
                   let sumAll = summ.reduce((acc, nums) => {
                       return acc += nums
                   }, 0);
                   totalPrice.innerHTML = sumAll.toFixed(2) + "$"
                   //total price

                   saveQuantitySum(summ);
                   divSave(cartItems);
                   saveTotalQuantity(totalQuantity);
                      
                   });
                

                   extraction.addEventListener("click", async (e) => {
                        cartItemArray = await getItemsFromLocalStorage()

                   const existingProduct = cartItemArray.find(item => item.id === product.id);
                   const indexToRemove = cartItemArray.indexOf(existingProduct);
                   let itemExists = false;   
                     
                    //div to remove
                       cartItems.childNodes.forEach((div) => {
                           if(parseInt(div.id) === parseInt(asideItem.id)) {
                               let midchild = div.lastChild.childNodes[1];
                               
                   
                               midchild.innerHTML = --existingProduct.quantity; 
                               itemExists = true;
                               --cartQuantity.innerHTML
                               cartQuantity.innerHTML < 1 ? cartQuantity.style.display = "none" : [] ;

                               if(parseInt(midchild.innerHTML) < 1) {
                                   cartItems.removeChild(div);
                                  cartItemArray.splice(indexToRemove, 1);
                               }
                           }   
                           
                       }); 
                    //div to remove
                       
                  //price to remove
                       let priceToRemove = product.price
                       let priceToRemoveIndex = summ.indexOf(priceToRemove)
                       summ.splice(priceToRemoveIndex, 1)
                       const afterRemove = summ.reduce((acc, num) => {
                           return acc += num
                       }, 0)

                       totalPrice.innerHTML = afterRemove.toFixed(2) + " $"

                    //price to remove

                    //quantity to remove 
                       const getQuantity = getTotalQuantity();
                        getQuantity
                       .then(quantity => {
                        --quantity
                        saveTotalQuantity(quantity);
                        console.log("quantity:", quantity);
                       })
                       .catch("error");
                       
                    //quantity to remove


                       saveItemsLocalStorage(cartItemArray);
                       divSave(cartItems);
                       saveQuantitySum(summ);
                   }) ;
                
                
                    
                }
                createCartItemElement(product, divElement);
                
            }
        })
        
    }
    
    catch(err) {
        console.log(err)
    }
}

fetchProducts();