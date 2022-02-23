import React from 'react'
import Box from '@mui/material/Box';
import '../Header/Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import education from '../../Assests/education.png'
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';



function Header(props) {
    return (
        <div>
            <Box
                sx={{
                    width: '100vw',
                    height: '9vh',
                    backgroundColor: 'brown',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'


                }}>

                <Box
                    sx={{
                        width: 200,
                        height: 50,
                        display: 'flex',
                        //justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}
                ><img className='image' src={education} alt='book'></img>
                    <p className='imagetitle'>Bookstore</p></Box>

                <Box
                    sx={{
                        width: 600,
                        height: 50,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <TextField
                        placeholder='search'
                        size="small"
                        style={{ height: '40px', width: '550px', backgroundColor: 'white' }}
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                            endAdornment: (<InputAdornment><IconButton>< SearchOutlinedIcon /></IconButton></InputAdornment>
                            )
                        }}
                    /></Box>

                <Box
                    sx={{
                        width: 80,
                        height: 50,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        color: 'white'

                    }}><div className='icons' >
                        <PersonOutlineOutlinedIcon />user</div>
                    <div className='icons' >
                        <Badge badgeContent={props.cartItem.length} color="primary">
                            <ShoppingCartOutlinedIcon color="white" />
                        </Badge>
                        cart</div>

                </Box>

            </Box>


        </div>
    )
}

export default Header