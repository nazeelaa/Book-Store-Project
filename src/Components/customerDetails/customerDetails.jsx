
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent,TextField,Typography} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import FormControlLabel from '@mui/material/FormControlLabel';
import {updateCustomerDetails} from '../../Services/dataService'

function CustomerDetails(props) {
    const [customer, setCustomerdata] = React.useState([]);
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [type, setType] = React.useState("");
  
    let takeState = (event) => setState(event.target.value);
    let takeAddress = (event) => setAddress(event.target.value);
    let takeCity = (event) => setCity(event.target.value);
    let takeValue = (event) => setType(event.target.value);


  
   
    
    const CustomerDetails = () => {
      
      let customerDetails = {
        
        "addressType": type,
        "fullAddress": address,
        "city": city,
        "state": state
      };
     
    
      updateCustomerDetails(customerDetails).then((response) => {
       
          console.log("updated address ", response);
         
          setCustomerdata(response.data.result)
         
        })
        .catch((err) => {
          console.warn(err);
          
        });
    };
    
    
    

    
  return (
    <div>
    
           <Card sx={{position:'relative',left:'20%',border:'1px solid black',width:'45vw',height:'70vh',marginTop:'20px',display:'flex',flexDirection:'column ',justifyContent:'space-evenly'}}>
           <CardContent sx={{width:'600px',height:'35px',display:'flex',justifyContent:'space-evenly',flexDirection:'row',position:'relative',left:'15%'}}> 
            <Typography sx={{fontWeight:'bold',fontSize:'20px',position:'relative',right:'300px'}}>Customer Details</Typography>
            <Typography sx={{width:'200px',height:'30px',border:'1px solid black',position:'absolute',display:'flex',justifyContent:'center',fontWeight:'bold',fontSize:'medium'}}>Add New Address</Typography>
            </CardContent>
            <CardContent sx={{marginLeft:'40px',display:'flex',justifyContent:'space-between',width:'460px',height:'20px'}}>
                <Typography><TextField id="outlined-basic" label="Full Name" variant="outlined" size='small'  /></Typography>
                <Typography><TextField id="outlined-basic" label="Mobile Number" variant="outlined" size='small' /></Typography>
            </CardContent>
            <CardContent sx={{marginLeft:'40px',width:'460px',height:'40px'}}>
                <Typography><TextField fullWidth label="Address" id="fullWidth" onChange={(event)=>takeAddress(event)}/></Typography>
            </CardContent>

            <CardContent sx={{marginLeft:'40px',display:'flex',justifyContent:'space-between',width:'460px',height:'20px'}}>
                <Typography><TextField id="outlined-basic" label="city/town" variant="outlined" size='small' onChange={(event)=>takeCity(event)}  /></Typography>
                <Typography><TextField id="outlined-basic" label="state" variant="outlined" size='small'  onChange={(event)=>takeState(event)}  /></Typography>
            </CardContent>
            <CardContent sx={{marginLeft:'40px',fontSize:'20px',fontWeight:'bold'}}>
                <Typography sx={{fontSize:'15px',fontWeight:'bold',position:'relative',right:'330px'}}>Type</Typography>
            <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onClick={(event)=>takeValue(event)}
      >
        <FormControlLabel value="Home" control={<Radio />} label="Home" />
        <FormControlLabel value="Work" control={<Radio />} label="Work" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
                
            </CardContent>
            </Card>
            <CardActions sx={{position:'relative',bottom:'60px',left:'800px'}}>
        <Button onClick={CustomerDetails} variant='contained' size='large'>CONTINUE</Button></CardActions>
        {/* <Card sx={{width:'50vw',height:'10vh',marginTop:'20px',marginLeft:'150px'}}>
            <CardContent sx={{fontSize:'20px',fontWeight:'bold',position:'relative',right:'280px'}}>Order Summery</CardContent>
        </Card> */}
        
    </div>
  )
}

export default CustomerDetails