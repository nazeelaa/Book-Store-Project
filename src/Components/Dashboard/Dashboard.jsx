import React, { useEffect } from 'react'
import {getBooks} from '../../Services/dataService'
import Books from '../books/books';
import Header from '../Header/Header';
import '../Dashboard/Dashboard.css'
import BookDetails from '../bookdetails/bookDetails';
import {getCartItems} from '../../Services/dataService'
import MyCart from '../my cart/myCart';

// import CustomerDetails from '../customerDetails/customerDetails';


function Dashboard() {
const [bookItems,setbookItems]=React.useState([])
//rendering the comps
const[currentPage,setCurrentPage]=React.useState(true)
//setting the book details
const[bookdetails,setbookdetails]=React.useState()

const [cartItem, setCartItem] = React.useState("");

const [cart, setCart] = React.useState([])


const setBookData=(bookdata)=>{
setbookdetails(bookdata)
}

const listentoBooks=()=>{
    setCurrentPage(false)
}
useEffect(()=>{
        getBooks().then((data)=>{
    console.log(data.data.result)
    setbookItems(data.data.result)
    
})
    .catch((error)=>{
        console.log(error)
    }) 

    getCartItems().then((response)=>{
            
        setCartItem(response.data.result)
        console.log(response.data.result,'i am book ')
    
})
.catch((error)=>{
    console.log(error)
})
},[])

const listentoBookDetails=(data)=>{
console.log(data)

}

  return (
      <div><Header cartItem={cartItem} /> 
       
     
      
      {currentPage ?
    
      <div className='getBook'>{bookItems.map((book)=><Books setBookData={setBookData}  listentoBooks={listentoBooks} book={book}/>)} </div> 
      :<BookDetails bookdetails={bookdetails} listentoBookDetails={listentoBookDetails} />
    
    }
    
      
     </div>
    
  )
}
export default Dashboard

