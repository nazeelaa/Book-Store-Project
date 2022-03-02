import React from 'react'
import Box from '@mui/material/Box';
import '../Header/Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import education from '../../Assests/education.png'
import TextField from '@mui/material/TextField';
import { Button, IconButton, InputAdornment } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Popper from '@mui/material/Popper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';
import { brown } from '@mui/material/colors';
import { color } from '@mui/system';



function Header(props) {
    let history= useHistory()
   

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const redirect=()=>{
        history.push("/")
    }
    const takeToCart=()=>{
        history.push("/Mycart")
    }
    const takeToWishlist=()=>{
        history.push("/mywishlist")
    }
    const takeToDashboard=()=>{
        history.push("/dashboard")
    }
    const takeToMycart=()=>{
        history.push("/Mycart")
    }
    return (
        <div>
            <Box className='HeaderBox'>


                <Box className='innerHeaderBox'>
                    <img className='bookImage'  onClick={takeToDashboard} src={education} height={100} alt='book'></img>
                    <p className='imagetitle'>Bookstore</p></Box>

                <Box className='searchBox'>
                    <TextField
                        placeholder='search'
                        size="small"
                        style={{ height: '40px', width: '550px', backgroundColor: 'white' }}
                        InputProps={{
                            endAdornment: (<InputAdornment><IconButton>< SearchOutlinedIcon /></IconButton></InputAdornment>
                            )
                        }}
                    /></Box>

                <Box className='iconBox'><div className='icons' >
                   
                    <button aria-describedby={id} type="button"  style={{ backgroundColor:'brown',color:'white',border:'0',}} onClick={handleClick}>
                    <PersonOutlineOutlinedIcon style={{ backgroundColor:'brown',color:'white'}} />user
                    </button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                         <div>welcome</div> 
                           <div>To access account and manage orders</div>
                           <Button variant="outlined" onClick={redirect} color="error" sx={{color:'brown'}} >LOGIN/SIGNUP</Button>
                            
                            <div><ShoppingBagIcon size='small' onClick={takeToCart}/>orders</div>
                            
                            <div><FavoriteIcon small='small' onClick={takeToWishlist}/>Wishlist</div>
                            
                        </Box>
                    </Popper>

                </div>
                    <div className='icons' >
                        <Badge badgeContent={10} color="primary">
                            <ShoppingCartOutlinedIcon onClick={takeToMycart} color="white" />
                        </Badge>
                        cart</div>

                </Box>

            </Box>


        </div>
    )
}

export default Header