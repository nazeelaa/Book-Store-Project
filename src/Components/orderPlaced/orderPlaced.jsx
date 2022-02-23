import React from 'react'
import orderplaced from '../../Assests/orderplaced.jpeg'
import Box from '@mui/material/Box';
import '../orderPlaced/orderPlaced.css'



function OrderPlaced() {

   
  return (
    <div>
     
        <Box sx={{width:'100%',height:'100vh',border:'1px solid black',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img width={350} height={300} src={orderplaced} />
        <Box sx={{width:'300px',height:'30px'}}>
        Hurray!!! Your order is confirmed! The order id is ( #000235 ).
              Save the order id for further communication. </Box>
              <table className="order-table">
              <tr>
                <th className="email">Email Us</th>
                <th>Contact Us</th>
                <th>Address</th>
              </tr>
              <tr>
                <td className="email">admin@bookstore.com</td>
                <td>+91 8123269878</td>
                <td>
                  42, 14 main 15th Cross, Sector 4, opp to BDA complex near
                  Kamarakom resturant HSR layout Banglore 560034
                </td>
              </tr>
            </table>


    
        </Box>
    </div>
  )
}

export default OrderPlaced