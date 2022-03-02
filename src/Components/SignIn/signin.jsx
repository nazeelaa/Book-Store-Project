import React from 'react';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { userLogin } from '../../Services/userService'
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';
import { Box } from '@mui/system';
import '../SignIn/signin.css';
import { useHistory } from 'react-router-dom';



function Signin() {
    let history= useHistory()
    

    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    const [passwordhelper, setpwdhelper] = React.useState("")
    const [passworderror, setpwderror] = React.useState(false)
    const [emailhelper, setemailhelper] = React.useState("")
    const [emailerror, setemailerror] = React.useState(false)
    const [loginPass, setloginPass] = React.useState({ email: "", password: "" })


    function takEmail(event) {
        setloginPass({ ...loginPass, email: event.target.value })
    }

    function takPassword(event) {
        setloginPass({ ...loginPass, password: event.target.value })

    }

    function onSubmit() {
        if (loginPass.email === "" && loginPass.password === "") {
            setemailerror(true)
            setemailhelper("please enter the correct email")

            setpwderror(true)
            setpwdhelper("please enter correct password")

        }


        let emailTest = emailRegex.test(loginPass.email)
        let pwdTest = passwordRegex.test(loginPass.password)
        console.log(emailTest)
        console.log(pwdTest)

        if (emailTest) {
            setemailerror(false)
            setemailhelper("")
        }
        else {
            setemailerror(true)
            setemailhelper("enter correct email")

        }

        if (pwdTest) {
            setpwderror(false)
            setpwdhelper("")
        }
        else {
            setpwderror(true)
            setpwdhelper("please enter correct password")
        }

        if (emailTest === true && pwdTest === true) {
            userLogin(loginPass).then((response) => {
                console.log(response)
                
                localStorage.setItem("token", response.data.result.accessToken)
                history.push("/dashboard")



            }).catch((error) => {
                console.log(error)

            })
        }

    }
    return (
    
        <Box className="signinbox">
            <Box className="signinboxTwo">
            <TextField className='text' id="outlined-basic" size="small" label="Email Id" variant="outlined"
                error={emailerror} helperText={emailhelper}
                onChange={takEmail} />
            <TextField className='text' type="password" id="outlined-basic" size="small" label="Password" variant="outlined"
                error={passworderror} helperText={passwordhelper}
                onChange={takPassword}
            />
            <Button  variant="contained" sx={{backgroundColor:'brown'}}  onClick={onSubmit}>Login</Button>
            --------OR---------
            <Box className='SigninButtons'>
            <Button id="btn" variant="contained" size='small'>Facebook</Button>
            <Button id="btn" variant="contained" size='small' sx={{backgroundColor:'gray'}}>Google</Button></Box>
            </Box>
        </Box>
        
       



    )
}

export default Signin;