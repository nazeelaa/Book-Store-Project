import React from 'react';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {userSignup} from '../../Services/userService';
import { Box } from '@mui/material';
import '../SignUp/signup.css';
function SignUp() {

    
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const mobileNumberRegex =/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;


const [fnamehelper, setfnamehelper] = React.useState("")
const [fnamerror, setfnamerror] = React.useState(false)
const [emailhelper, setemailhelper] = React.useState("")
const [emailerror, setemailerror] = React.useState(false)
const [pwdhelper, setpwdhelper] = React.useState("")
const [pwderror, setpwderror] = React.useState(false)
const [mobilehelper, setmobilehelper] = React.useState("")
const [mobilerror, setmobileerror] = React.useState(false)
const [signupPass, setsignupPass] = React.useState({ fullName: "", email: "",password:"",phone:"" })

function takeFname(event) {
    setsignupPass({ ...signupPass, fullName: event.target.value })

}
function takeEmail(event) {
    setsignupPass({ ...signupPass, email: event.target.value })

}
function takePwd(event) {
    setsignupPass({ ...signupPass, password: event.target.value })

}
function takeMobile(event) {
    setsignupPass({ ...signupPass, phone: event.target.value })

}
function onSubmit()
   {
    // if (signupPass.fullName === "" && signupPass.email === "" && signupPass.password === "" && signupPass.phone === "" ) 
    // {
        setfnamehelper(true)
        setfnamehelper("please enter the full name")
        
        setemailerror(true)
        setemailhelper("please enter the correct email")

        setpwderror(true)
        setpwdhelper("please enter correct password")
         
        setmobileerror(true)
        setmobilehelper("please enter correct mobile")

    //}
        let firstnameTest=firstNameRegex.test(signupPass.fullName)
        let emailTest=emailRegex.test(signupPass.email)
        let passwordTest=passwordRegex.test(signupPass.password)
        let mobileTest=mobileNumberRegex.test(signupPass.phone)
    
            console.log(firstnameTest)
            console.log(emailTest)
            console.log(passwordTest)
            console.log(mobileTest)

            if(firstnameTest)
        { 
            setfnamerror(false)
            setfnamehelper("")
            
        }
        else 
        {
            setfnamerror(true)
            setfnamehelper("please enter the correct First name")
        }
        if(emailTest)
        { 
            setemailerror(false)
            setemailhelper("")
            
        }
        else 
        {
            setemailerror(true)
            setemailhelper("please enter the correct Email Id")
        }
        if(passwordTest)
        { 
            setpwderror(false)
            setpwdhelper("")
            
        }
        else 
        {
            setpwderror(true)
            setpwdhelper("please enter the correct password")
        }

        if(mobileTest)
        { 
            setmobileerror(false)
            setmobilehelper("")
            
        }
        else 
        {
            setmobileerror(true)
            setmobilehelper("please enter the correct mobile number")
        }
        if (firstnameTest === true && emailTest === true && passwordTest === true && mobileTest === true ) 
        {
            console.log("hello")
            userSignup(signupPass).then((response)=>{

            console.log(response)
            
            
            

            }).catch((error)=>{
                console.log(error)
            })
        }
    }









   
    return (
    <div>
        
            <Box className="signUpBox">
                <Box className='signupInnerBox' >
                    
                  
                        <Typography><TextField className='fields' id="outlined-basic" size="small" label="Full Name" variant="outlined" 
                        error={fnamerror} helperText={fnamehelper} onChange={takeFname}
                         /></Typography>
                        <Typography><TextField className='fields' id="outlined-basic" size="small" label="Email Id" variant="outlined"
                         error={emailerror} helperText={emailhelper} onChange={takeEmail}
                         /></Typography>
                        <Typography><TextField className='fields' id="outlined-basic" size="small" label="Password" variant="outlined" 
                        error={pwderror} helperText={pwdhelper} onChange={takePwd}
                        /></Typography>
                        <Typography><TextField className='fields' id="outlined-basic" size="small" label="Mobile Number" variant="outlined"
                        error={mobilerror} helperText={mobilehelper} onChange={takeMobile}
                        /></Typography>
                        <Typography><Button className='fields' sx={{backgroundColor:'brown'}} variant="contained"  onClick={onSubmit}>SignUp</Button></Typography>
                                
                    
                    

                    

                    
                </Box>
              
            </Box>
            </div>
            



    )
}

export default SignUp;