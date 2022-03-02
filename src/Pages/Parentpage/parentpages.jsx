import React from 'react';
import Box from '@mui/material/Box';
import Signin from '../../Components/SignIn/signin';
import SignUp from '../../Components/SignUp/signup';
import image1 from '../../Assests/image1.png'
import Card from "@mui/material/Card";
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { CardContent } from '@mui/material';
import  '../Parentpage/Parentpage.css';

import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(() => ({

    myIcon : {
     
     "@media only screen and (min-width:320px) and (max-width : 480px)" :{
        height:'0% !important',
        width:'0% !important',
        
        //backgroundColor:'red !important',
        //display:'none !important'       
     },
    
    "@media only screen and (min-width:480px) and (max-width : 768px)" :{
        height:'0% !important',
        width:'0% !important',
        
        //backgroundColor:'red !important',
        //display:'none !important'       
     
    },
     
    "@media only screen and (min-width:769px) and (max-width : 1024px)" :{
        height:'0% !important',
        width:'0% !important',
    }
    },
   myImg:{
    "@media only screen and (min-width:320px) and (max-width : 480px)" :{
        height:'0% !important',
        width:'0% !important',
        display:'none !important' 
    },
   
   "@media only screen and (min-width:480px) and (max-width : 768px)" :{
    height:'0% !important',
    width:'0% !important',
    display:'none !important' 
},
"@media only screen and (min-width:769px) and (max-width : 1024px)" :{
    height:'0% !important',
    width:'0% !important',
    display:'none !important' 
}
   },
   sign_in_up_Box:{
    "@media only screen and (min-width:320px) and (max-width : 480px)" :{
        top: '0% !important',
        left: '0% !important',
        height:'100% !important',
        // width:'0% !important',
        border:'none !important',
        paddding:'0% !important'
    },
    "@media only screen and (min-width:481px) and (max-width : 768px)" :{
        top: '0% !important',
        left: '0% !important',
        height:'100% !important',
        width:'95% !important',
        
        border:'none !important',
        paddding:'0% !important'
    },
    "@media only screen and (min-width:769px) and (max-width : 1024px)" :{
        top: '0% !important',
        left: '0% !important',
        height:'100% !important',
        width:'90% !important',
        
        border:'none !important',
        paddding:'0% !important'
    },
   }   
  }))
function ParentPage() {
    const ClassNames = useStyles();
    const[pages,setPages]=React.useState(false)

    return(
        <div>


        <Box
        className ={ClassNames.myIcon}
            sx={{
                width: '100vw',
                height: 710,
                backgroundColor: 'gray'
                
            }}>
            <Box  className ={ClassNames.myImg}
             sx={{
                
                width: 500,
                height: 310,
                backgroundColor: 'lightgrey',
                borderRadius: '10px',
                position: 'relative',
                top: '28%',
                left: '30%',

            }}> 
            <img className='mainLogo' src={image1} alt="this is logo" />
            </Box> 
            <Card className ={ClassNames.sign_in_up_Box}
            
            sx={{ width: 300,
                height: 350,
                border: '1px solid black',
                backgroundColor: 'white',
                borderRadius: '8px',
                position: 'absolute',
                top: '24%',
                left: '50%'}}>
                    <CardContent className ={ClassNames.sign_in_up_Box} >
                   
                   <Typography sx={{display:'flex',justifyContent:'space-between',height:'15px',width:'100%'}}>
                        <Button onClick={()=>setPages(!pages)} sx={{fontWeight:'bold',fontSize:'17px',color:'black'}}>LOGIN</Button>
                        
                    <Button onClick={()=>setPages(!pages)}  sx={{fontWeight:'bold',fontSize:'17px',color:'black'}}>SIGNUP</Button></Typography>
                    {pages ? <SignUp />:<Signin />}
                    

                     

                </CardContent>

            </Card>

        </Box>

    </div>
    )
}

export default ParentPage;
