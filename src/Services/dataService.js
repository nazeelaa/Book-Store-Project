import axios from 'axios'


const headerconfig={

    headers:{

        "x-access-token":localStorage.getItem("token")
    }
}

export const getBooks=()=>{
    
    let data=axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
    return data
}



export const addCart =(id) => {
    
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,null,headerconfig)
    return response
}

export const CartItemQuantity =(cartItemId,data) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItemId}`,data,headerconfig)
    return response
}

export const getCartItems =() => {
    let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`,headerconfig)
    return response
}









export const updateCustomerDetails=(customerDetailsobj) => {
    // console.log(customerDetailsobj)
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,customerDetailsobj,headerconfig)
    return response
}

export const OrderedData=(data) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,data,headerconfig)
    
    return response
}

export const deleteBook=(cartItemId) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${cartItemId}`,headerconfig)
    return response
}


export const addWishlist=(id) => {
    
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,null,headerconfig)
    return response
}

export const getWishlist =()=> {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items",headerconfig)
    return response
}

export const deleteWishlistItems=(cartItemId) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${cartItemId}`,headerconfig)
    return response
}


