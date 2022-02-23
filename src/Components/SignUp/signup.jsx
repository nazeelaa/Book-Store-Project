import React from 'react';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {userSignup} from '../../Services/userService'
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
        
            <Card sx={{  width: 280,
                height: 300,
                // border: '1px solid black',
                // backgroundColor: 'white',
                // borderRadius: '8px',
                position: 'absolute',
                top: '12%',
                left: '3%'}}>
                <CardContent >
                    <Typography sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"260px",height:"280px"}}>
                    {/* <Typography><Button>sIGN</Button></Typography> */}
                    {/* sx={{fontSize:"20px",fontWeight:"bold",position:'relative',left:"80px"}} onChange={onsubmit}>SIGNUP</Typography> */}
                        <Typography><TextField id="outlined-basic" size="small" label="Full Name" variant="outlined" 
                        error={fnamerror} helperText={fnamehelper} onChange={takeFname}
                         /></Typography>
                        <Typography><TextField id="outlined-basic" size="small" label="Email Id" variant="outlined"
                         error={emailerror} helperText={emailhelper} onChange={takeEmail}
                         /></Typography>
                        <Typography><TextField id="outlined-basic" size="small" label="Password" variant="outlined" 
                        error={pwderror} helperText={pwdhelper} onChange={takePwd}
                        /></Typography>
                        <Typography><TextField id="outlined-basic" size="small" label="Mobile Number" variant="outlined"
                        error={mobilerror} helperText={mobilehelper} onChange={takeMobile}
                        /></Typography>
                        <Typography sx={{width:'200px',height:'30px',display:"flex",justifyContent:"center",position:'relative',left:'25px'}}><Button sx={{backgroundColor:'brown'}} variant="contained" fullWidth={true} onClick={onSubmit}>SignUp</Button></Typography>
                                </Typography>
                    
                    

                    

                    
                </CardContent>
              
            </Card>
            </div>
            



    )
}

export default SignUp;