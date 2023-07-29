const productsAPI = "https://fakestoreapi.com/products"
const cartsAPI = "https://fakestoreapi.com/carts"
const usersAPI = "https://fakestoreapi.com/users"

const fetchProducts = async () => {
    try {
        const res = await fetch(productsAPI)
        const data = await res.json()

    


        console.log(data)

    } catch(err) {
        console.log(err)
    }
}


const fetchUsers = async () => {
    try {
        const res = await fetch(usersAPI)
        const data = await res.json()

        console.log(data)
    }  catch(err) {
        console.log(err)
    }
}






