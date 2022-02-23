import React from 'react';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {userLogin} from '../../Services/userService'


function Signin() {
    
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    const [passwordhelper, setpwdhelper] = React.useState("")
    const [passworderror, setpwderror] = React.useState(false)
    const [emailhelper, setemailhelper] = React.useState("")
    const [emailerror, setemailerror] = React.useState(false)
    const [loginPass, setloginPass] = React.useState({ email: "", password: "" })
    

    function takEmail(event){
        setloginPass({ ...loginPass, email: event.target.value })
    }
    
    function takPassword(event){
        setloginPass({ ...loginPass, password: event.target.value })

    }

   function onSubmit()
   {
    if (loginPass.email === "" && loginPass.password === "") 
    {
        setemailerror(true)
        setemailhelper("please enter the correct email")

        setpwderror(true)
        setpwdhelper("please enter correct password")

    }
   

   let emailTest=emailRegex.test(loginPass.email)
   let pwdTest=passwordRegex.test(loginPass.password)
        console.log(emailTest)
        console.log(pwdTest)

        if(emailTest)
        {
            setemailerror(false)
            setemailhelper("")
        }
        else
        {
            setemailerror(true)
            setemailhelper("enter correct email")
            
        }

        if(pwdTest) {
            setpwderror(false)
            setpwdhelper("")
        }
        else {
            setpwderror(true)
            setpwdhelper("please enter correct password")
        }
    
        if(emailTest === true && pwdTest === true) {
            userLogin(loginPass).then((response) => {
                console.log(response)

                localStorage.setItem("token", response.data.result.accessToken)
               

                

            }).catch((error) => {
                console.log(error)

            })
        }
    
}
    return(  
    <div>
       
            <Card sx={{ width: 280,
                height: 280,
                // border: '1px solid black',
                backgroundColor: 'white',
                
                position: 'absolute',
                top: '12%',
                left: '3%'}}>
                <CardContent>
                    
                    <Typography sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"260px",height:"250px"}}>
                    {/* <Typography sx={{fontSize:"20px",fontWeight:"bold",position:'relative',left:"-80px"}}onChange={onsubmit}>LOGIN</Typography> */}
                        <Typography><TextField id="outlined-basic" size="small" label="Email Id" variant="outlined" 
                         error={emailerror} helperText={emailhelper} 
                         onChange={takEmail}
                        /></Typography>
                        <Typography><TextField type="password" id="outlined-basic" size="small" label="Password" variant="outlined" 
                        error={passworderror} helperText={passwordhelper} 
                        onChange={takPassword}
                        /> </Typography>
                        <Typography sx={{width:'200px',height:'30px',display:"flex",justifyContent:"center",position:'relative',left:'25px'}}><Button  variant="contained" sx={{backgroundColor:'brown'}} fullWidth={true} onClick={onSubmit}>Login</Button></Typography>
                                <Typography>--------OR---------</Typography>
                                <Typography sx={{display:"flex",justifyContent:"space-between"}}>
                                    <Typography><Button variant="contained" size='small'>Facebook</Button></Typography>
                                    <Typography><Button variant="contained" size='small' sx={{backgroundColor:'gray'}}>Google</Button></Typography>
                                </Typography></Typography>
                    
                    

                    

                    
                </CardContent>
              
            </Card>
            </div>
            



     )
}

export default Signin;