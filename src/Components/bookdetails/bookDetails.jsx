import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import book1 from '../../Assests/book1.png';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { addCart, CartItemQuantity } from '../../Services/dataService'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import {getWishlist,getCartItems} from '../../Services/dataService'
import FavoriteIcon from '@mui/icons-material/Favorite';


function BookDetails(props) {

    const [addBook, setAddBook] = React.useState(true)
    const [quantity, setQuantity] = React.useState(0)
    const[currentcartItem,setCurrentItem]=React.useState({})
    const[wishlist,setWishlist]= React.useState([])
    // const [wishquantity,setWishquantity]=React.useState(0)
    

    

    const bookId = (id) => {
        console.log(id)
        setAddBook(false)
        


        addCart(id).then((response) => {

            console.log(response, "product id")
            props.listentoBookDetails()
            

        })
            .catch((error) => {
                console.error(error)
            });

    }
    const getCart=()=>{
        getCartItems().then((response)=>{
           
        }
            
            )
    }

    const incrementCounter = (product) => {
        console.log(currentcartItem.quantityToBuy,"beauty")
        let data = {
            "quantityToBuy": currentcartItem.quantityToBuy + 1,
        }
        CartItemQuantity(product._id,data).then((response) => {
            console.log(response,"inside book details update");
            getCart()

        })
            .catch((error) => {
                console.error(error);
            });


    }

    const decrementCounter = (cartItemId) => {

        let data = {
            // quantityToBuy: quantity - 1,
        }
        CartItemQuantity().then((response) => {
            console.log(response);


        })
            .catch((error) => {
                console.error(error);
            });
    }

    const getwishlist =(id)=>{
        setWishlist(false)
        
       getWishlist(id).then((result)=>{
          
          setWishlist(result.data.data,"from wish list")
          
      }).catch(()=>{
  
      })
  }
  React.useEffect(()=>{
      
    getCartItems().then((response)=>{
        let filterArray=response.data.result.filter(book=>book.product_id._id===props.bookdetails._id)

        if(filterArray.length>0)
        {
            setAddBook(false)
            setCurrentItem(filterArray[0])
        }
        else{
            setAddBook(true) 
        }
    }).catch((err)=>
    console.log(err)
    )

  },[])










    return (
        <div>
             {props.bookdetails ? 

            <Box sx={{ width: '100%', height: '100vh', display: 'flex' }}>
                <Box sx={{
                    width: '40%', height: '65vh', marginTop: '10px', marginLeft:
                        '30px'
                }}>
                    <Card sx={{
                        height: '350px',
                        width: '300px',
                        
                        position: 'relative',
                        left: '150px',
                        top: '20px'
                    }}>
                        <CardContent sx={{ }}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <img width={250} height={300} src={book1}></img> </Typography>
                        </CardContent> </Card>


                    {addBook ? (<CardActions sx={{ display: "flex", justifyContent: "space-between", position: 'relative', top: '30px', left: '150px' }}>
                        <Button onClick={() => bookId(props.bookdetails._id)} variant="contained" size='large' sx={{ backgroundColor: 'brown' }}>Add a Bag
                        </Button>)
                    </CardActions>)
                        :


                        <CardActions sx={{ height: '20px', width: '125px',position: 'relative', top: '30px', left: '150px' }} >
                            <Button size="small" onClick={() => incrementCounter(props.bookdetails)} sx={{ border: "1px solid #DBDBDB", backgroundColor: "#FAFAFA" }}>+</Button>
                            <div>{currentcartItem.quantityToBuy}</div>
                            <Button size="small" onClick={() => decrementCounter(props.bookdetails)} sx={{ backgroundColor: "#FAFAFA", border: "1px solid #DBDBDB", cursor: 'pointer'}}>-</Button></CardActions>}


                           



                           { wishlist ? <CardActions>
                                <Button 
                                onClick={()=>getwishlist()} 
                                variant="contained" size='large' sx={{ backgroundColor: 'brown',position:'relative',left:'300px',bottom:'20px' }}><FavoriteIcon />WishList</Button>
                            </CardActions>
                            :

                            <CardActions>
                                <Button sx={{position:'relative',bottom:'15px',left:'330px',backgroundColor:'white'}}><FavoriteIcon sx={{color:'brown'}}/></Button>
                            </CardActions> }

                </Box>
                <Box sx={{
                    width: '55vw', height: '100vh', marginTop: '10px', marginRight:
                        '30px',display:'flex',flexDirection:'row'}}>

                    <Card sx={{width:'845px',height:'350px'}}>
                    <CardContent>
                    <CardContent sx={{width:'450px',height:'150px',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Typography sx={{ fontSize: '30px',width:'400px',height:'40px'}}>{props.bookdetails.bookName}</Typography>
                               <Typography sx={{ fontSize: '15px',width:'200px',height:'20px'}}>by {props.bookdetails.author}</Typography>
                                 <Typography sx={{
                                     width: '100px', height: '20px', backgroundColor: 'green', color:
                                         'white',position:'relative',left:'30px'
                                 }}>4.5*(20)</Typography>
                                 <Typography sx={{ fontSize: 25, fontWeight: 'bold',width:'200px',height:'30px' }}>Rs:{props.bookdetails.price}</Typography></CardContent>
                                 <Typography sx={{ position: 'relative', right: '330px', top: '10px' }}>Book Detail</Typography>
                                 <Typography sx={{ position: 'relative', left: '-5px', top: '10px',fontSize:'small' }}>
                                     A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.
                                     In a restricted sense, a book is a self-sufficient section or part of a longer composition.</Typography>
                             </CardContent>

                            <Card sx={{width:'55.5%',height:'200px',position:'absolute',top:'430px',backgroundColor:'wheat'}}>
                              <CardContent sx={{position:'relative',right:'350px',fontWeight:'bold'}}>Overall rating</CardContent>
                              <Typography  sx={{position:'relative',right:'350px'}}> 
                                <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                <StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} /></Typography>
                        <Typography><TextField fullWidth placeholder='write your review' sx={{width:'800px',backgroundColor:'white'}}></TextField></Typography>
                       <CardActions><Button sx={{backgroundColor:'black',color:'white',position:'relative',left:'700px'}}>submit</Button></CardActions>
                                </Card> 
                    
                                 
                                <Card sx={{width:'55.5%',height:'150px',position:'absolute',top:'630px'}}>
                              <CardContent sx={{position:'relative',right:'350px',fontSize:'20px',fontWeight:'bold'}}>Aniket Chile</CardContent>
                              <Typography  sx={{position:'relative',right:'350px'}}> 
                                
                                <StarIcon style={{ color: '#FFCE00' }} />
				          	<StarIcon style={{ color: '#FFCE00' }} />
                              <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                              <StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} /></Typography>
                        <Typography sx={{position:'relative',right:'355px'}}>Good Product</Typography>
                       </Card>    

                       <Card sx={{width:'55.5%',height:'150px',position:'absolute',top:'780px'}}>
                              <CardContent sx={{position:'relative',right:'350px',fontSize:'20px',fontWeight:'bold'}}>Nazeela</CardContent>
                              <Typography  sx={{position:'relative',right:'350px'}}> 
                                
                                <StarIcon style={{ color: '#FFCE00' }} />
				          	<StarIcon style={{ color: '#FFCE00' }} />
                              <StarIcon style={{ color: '#FFCE00' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} /></Typography>
                        <Typography sx={{position:'relative',right:'312px'}}>made in india,by nazeela</Typography>
                       </Card>           
                    
                        
                    </Card>

                </Box>



            </Box>: " "}
            

</div>

    
    )
}

               

export default BookDetails