import React from 'react'
import Card from '@mui/material/Card';
import { getCartItems, OrderedData } from '../../Services/dataService'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Box } from '@mui/material';
import book1 from '../../Assests/book1.png';
import '../my cart/myCart.css'




import { CardContent, TextField, Typography } from '@mui/material';
import CustomerDetails from '../customerDetails/customerDetails';
import OrderDetails from '../orderDetails/orderDetails';



function MyCart() {
  const [cartItems, setCartItems] = React.useState([]);

  const [orderplaced, setOrderPlaced] = React.useState(true)

  const [showAddress, setShowAddress] = React.useState(false);

  const [showButton, setShowButton] = React.useState(true);

  const [customerpage, setcustomerPage] = React.useState(true)

  const [navigate, setNavigate] = React.useState(true)
  const [orderSuccess, setOrderSuccess] = React.useState([])
  const [placeOrder, setPlaceOrder] = React.useState(true)
  const [cartBook, setCartBook] = React.useState([])



  const ClickOnContinue = () => {
    setPlaceOrder(true)
  }

  const clickedPlaceOrder = () => {
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
  const checkOut = () => {


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
      // history.push("/success")
    }).catch((error) => {
      console.log(error)
    })

  }


  return (

    <div>

     

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
              <span>{product.product_id.bookName}</span>
              <span>{product.product_id.author}</span>
              <span>{product.product_id.price}</span>
              <span className='buttons'>
                <span><button>-</button></span>
                <span>1</span>
                <span><button>+</button></span></span>
            </span></div>
        ))}
        {placeOrder ? <span className='placeorderbutton'><Button variant='contained' size='large' onClick={() => clickedPlaceOrder()}>Place Order</Button></span> : null}</div>




      {placeOrder ?

        <Card sx={{ width: '45.5vw', height: '10vh', border: '1px solid black', marginTop: '20px', position: 'relative', left: '300px' }}>
          <CardContent sx={{ fontSize: '20px', fontWeight: 'bold', position: 'relative', right: '250px' }}>Address Details</CardContent>
        </Card> : <CustomerDetails ClickOnContinue={ClickOnContinue} />}



      {navigate ?
        <Card sx={{ width: '45.5vw', height: '10vh', border: '1px solid black', marginTop: '20px', position: 'relative', left: '300px' }}>
          <CardContent sx={{ fontSize: '20px', fontWeight: 'bold', position: 'relative', right: '250px' }}>Order Summery</CardContent>
        </Card> : <OrderDetails />}



    </div>
  )
}


export default MyCart