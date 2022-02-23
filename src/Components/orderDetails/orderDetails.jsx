import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { getCartItems,OrderedData} from '../../Services/dataService'

function OrderDetails(props) {
  props.ClickOnContinue() 
  const[cartData,setCartData]=React.useState([]) 
  props.listenToOrderSummary()
  

 
    
    const getAllCartItems=()=>{

      getCartItems().then((response)=>{
        console.log("fetched cart data",response.data.result)
       setCartData(response.data.result,"all carted")
      }).catch((error)=>{
        console.log(error)
      })
    }
    React.useEffect(()=>{
      getAllCartItems()
    },[])


    return (
      <div>
        <Card sx={{ width: '50vw', height: '35vh', border: '1px solid black', marginTop: '20px', marginLeft: '150px' }}>
          {/* <CardContent sx={{border:'1px solid black',width:'800px',height:'35px',display:'flex',justifyContent:'space-evenly',flexDirection:'row'}}>  */}
          <CardContent sx={{ fontWeight: 'bold', fontSize: '20px', position: 'relative', right: '300px' }}>Order Summery</CardContent>

          
          <Typography>{props.product.product_id.bookName}</Typography>
          <Typography></Typography>
          <CardActions><Button variant='contained' size='large' sx={{ position: 'relative', left: '600px', top: '120px' }}>CHECKOUT</Button></CardActions>
        </Card>

      </div>
    )
  }

export default OrderDetails