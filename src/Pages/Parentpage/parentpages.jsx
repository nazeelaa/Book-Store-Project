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

function ParentPage() {

    const[pages,setPages]=React.useState(false)

    return(
        <div>


        <Box
            sx={{
                width: '100vw',
                height: 710,
                backgroundColor: 'gray'
            }}>
            <Box sx={{
                width: 500,
                height: 310,
                backgroundColor: 'lightgrey',
                borderRadius: '10px',
                position: 'relative',
                top: '28%',
                left: '30%',

            }}> <img className='mainLogo' src={image1} alt="this is logo" />
            </Box>
            <Card sx={{ width: 300,
                height: 350,
                border: '1px solid black',
                backgroundColor: 'white',
                borderRadius: '8px',
                position: 'absolute',
                top: '24%',
                left: '50%'}}>
                    <CardContent >
                    <Typography sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"260px",height:"310px"}}>
                    <Typography sx={{display:"flex",justifyContent:'space-evenly',flexDirection:"row"}}>
                        <Button onClick={()=>setPages(!pages)} sx={{fontWeight:'bold',fontSize:'17px',position:'relative',top:'-9px',left:'-15px',color:'black'}}>LOGIN</Button>
                        {/* {pages && <Signin />} */}
                    <Button onClick={()=>setPages(!pages)}  sx={{fontWeight:'bold',fontSize:'17px',position:'relative',top:'-9px',left:'35px',color:'black'}}>SIGNUP</Button>
                    {pages ? <SignUp />:<Signin />}
                    </Typography>

                     </Typography>

                </CardContent>

            </Card>

        </Box>

    </div>
    )
}

export default ParentPage;
