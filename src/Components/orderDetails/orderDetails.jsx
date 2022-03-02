import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, Grid, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { getCartItems,OrderedData} from '../../Services/dataService';
import book1 from '../../Assests/book1.png';
import '../orderDetails/orderDetails.css'
import { typography } from '@mui/system';

function OrderDetails(props) {
 
  
  




   
  

 
    
    

    
    return (
      
     

           
        <Box className="ordersummary">
            
            <Box className="orderimg">
                <div id="orderimg">
                    <img src={book1} height={100} alt="img" id="imagecard" />
                </div>
                <div className="ordertxt">
                    <Typography sx={{ fontWeight: 'bold' }}> {props.product.product_id.bookName}</Typography>
                    <Typography>{props.product.product_id.author}</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>{props.product.product_id.price}</Typography>
                </div>
            </Box>
            
       
           
         
          
          
              
           
          
         
       
         

              </Box>
    )
  }

export default OrderDetails