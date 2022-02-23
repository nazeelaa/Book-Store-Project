import axios from 'axios'

export const userLogin=(obj)=>

{
    console.log(obj)
    
    let response=axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",obj)
    return response
}

export const userSignup=(obj)=>
{
    console.log(obj)
    let response=axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",obj)
    return response
}