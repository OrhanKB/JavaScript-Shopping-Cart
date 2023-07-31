const productsAPI = "https://fakestoreapi.com/products"
const cartsAPI = "https://fakestoreapi.com/carts"
const usersAPI = "https://fakestoreapi.com/users"

//DOC
const items = document.querySelector(".items")
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
            // BUY BUTTON

            
        }
         });
        

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






