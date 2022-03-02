import React from 'react'
import Card from '@mui/material/Card';
import { getCartItems, CartItemQuantity,OrderedData,deleteBook } from '../../Services/dataService'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Box, Grid } from '@mui/material';
import book1 from '../../Assests/book1.png';
import '../my cart/myCart.css'
import Header from '../Header/Header';



import { CardContent, TextField, Typography } from '@mui/material';
import CustomerDetails from '../customerDetails/customerDetails';
import OrderDetails from '../orderDetails/orderDetails';
import { useHistory } from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';



function MyCart() {
 let history= useHistory()
  const [cartBook, setcartBook] = React.useState([])
  
  const [cartItems, setCartItems] = React.useState([]);
  

  const [placeOrder, setPlaceOrder] = React.useState(true)
  const [cartData, setCartData] = React.useState(false)
  
  const [orderContinue,setOrderContinue]=React.useState(false)

  
  const[orderSuccess,setOrderSuccess]=React.useState()


  const CheckOut=()=>{
    let orderArray = cartBook.map(function (book) {
      let obj = {
        "product_id": book.product_id._id,
        "product_name": book.product_id.bookName,
        "product_quantity": book.product_id.quantityToBuy,
        "product_price": book.product_id.discountPrice,
      }
      return obj
    })
    setOrderSuccess({ ...orderSuccess, orders: orderArray })
    OrderedData(orderSuccess).then((response) => {
      console.log(response)
      history.push("/OrderPlaced")
     
    }).catch((error) => {
      console.log(error)
    })
    
  
  }

  const clickedPlaceOrder = () => {
    setCartData(true)
    setPlaceOrder(false)
  }

  React.useEffect(() => {

    getAllCartItems();
  }, []);

  const getAllCartItems = () => {
    getCartItems().then((response) => {
      console.log("getCartItems", response.data.result);
      setCartItems(response.data.result);

    })
      .catch((err) => {
        console.warn(err);
      });
  };

  const incrementCart = (product) => {
    console.log("increment", product)
    let data = {
      "quantityToBuy": product.quantityToBuy + 1
    }
    CartItemQuantity(product._id, data).then((result) => {
      getAllCartItems()
      console.log(result, "sucess")

    }).catch((err) => {
      console.log(err, "failed update")
    })
  }



  const decrementCart = (product) => {
    let data = {
      "quantityToBuy": product.quantityToBuy - 1
    }
    CartItemQuantity(product._id, data).then((result) => {
      getAllCartItems()
      console.log(result, "sucess")

    }).catch((err) => {
      console.log(err, "failed update")
    })


  }

  const listenToCustomerDetails = () => {
    console.log("data")
    setOrderContinue(true)
    
  }

  const removeBook=(cartItem)=>{
    console.log("book delete")
    deleteBook(cartItem._id).then((response)=>{
      console.log(response.data.result,"delete book")
      getAllCartItems()

    }).catch((error)=>{
      console.log(error)
    })
  }





  return (

    <div>
      <Header />


      <div className='cartContainer'>
        <span className='headerBox'>
          <span id='headers'>My Cart</span>
          <span id='headers'><LocationOnIcon sx={{ color: 'brown' }} />Use Current Location</span>
        </span>




        {cartItems.map((product) => (
          <div className='miniBox'>
            <span className='image'>
              <span><img height={100} src={book1} alt="bookimage"></img></span>
            </span>
            <span className='mini'>
              <span id='bn'>{product.product_id.bookName}</span>
              <span>{product.product_id.author}</span>
              <span id='bn'>{product.product_id.price}</span>
              <span className='buttons'>
                <span><RemoveCircleOutlineOutlinedIcon onClick={() => decrementCart(product)}></RemoveCircleOutlineOutlinedIcon></span>
                <span>{product.quantityToBuy}</span>
                <span><AddCircleOutlineOutlinedIcon onClick={() => incrementCart(product)}></AddCircleOutlineOutlinedIcon></span>
                <span><Button onClick={()=>removeBook(product)} sx={{color:'black'}}>remove</Button></span>
              </span>
            </span></div>
        ))}
        {placeOrder ? <span className='placeorderbutton'>
          <Button variant='contained' size='large' onClick={() => clickedPlaceOrder()}>Place Order</Button>
        </span> : null}</div>





      {cartData ? <CustomerDetails listenToCustomerDetails={listenToCustomerDetails} /> :
        <Card sx={{ width: '45.5vw', height: '10vh', border: '1px solid black', marginTop: '20px', position: 'relative', left: '300px' }}>
          <CardContent sx={{ fontSize: '20px', fontWeight: 'bold', position: 'relative', right: '250px' }}><Button>Address Details</Button></CardContent>
        </Card>
      }



       
        {orderContinue? <Box sx={{display:'flex',flexDirection:'column',border:'1px solid black',width:'45vw',position:'relative',left:'20%'}}> <Grid sx={{width:'100%'}}>
          {cartItems.map((product)=><OrderDetails product={product}/>)}</Grid>
          <Button variant='contained' sx={{width:'100px',position:'relative',left:'70%'}} onClick={CheckOut}>CheckOut</Button></Box>
        :
         
         <Card sx={{ width: '45.5vw', height: '10vh', border: '1px solid black', marginTop: '20px', position: 'relative', left: '300px' }}>
           <CardContent sx={{ fontSize: '20px', fontWeight: 'bold', position: 'relative', right: '250px' }}>Order Summery</CardContent>
         </Card>  }

 


    </div>
  )
}


export default MyCart