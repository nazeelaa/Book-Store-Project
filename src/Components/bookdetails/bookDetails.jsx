import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import book1 from '../../Assests/book1.png';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { addCart, CartItemQuantity, getWishlist } from '../../Services/dataService'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import { addWishlist, getCartItems } from '../../Services/dataService'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CloseFullscreen } from '@mui/icons-material';


function BookDetails(props) {

    const [addBook, setAddBook] = React.useState(true)
    const [quantity, setQuantity] = React.useState(0)
    const [currentcartItem, setCurrentItem] = React.useState({})
    const [wishlist, setWishlist] = React.useState([])
    const [wishquantity, setWishquantity] = React.useState(0)
    const [currentWishlistItem, setCurrentWishlistItem] = React.useState({})




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
    const getCart = () => {
        getCartItems().then((response) => {
            let filterArray = response.data.result.filter(cartbook => currentcartItem._id === cartbook._id)
            console.log(filterArray[0])
            setCurrentItem(filterArray[0])
        }).catch((err) => {
            console.log(err)
        })
    }

    const incrementCounter = (product) => {
        console.log(product)

        let obj = {
            "quantityToBuy": currentcartItem.quantityToBuy + 1
        }

        CartItemQuantity(currentcartItem._id, obj).then((response) => {
            console.log(response, "inside book details update");
            getCart()

        })
            .catch((error) => {
                console.error(error);

            });


    }
    const decrementCounter = (product) => {
        console.log(product)
        let obj = {
            "quantityToBuy": currentcartItem.quantityToBuy - 1
        }
        CartItemQuantity(currentcartItem._id, obj).then((response) => {
            console.log(response, "inside book details update");
            getCart()

        })
            .catch((error) => {
                console.error(error);
            });
    }

    const wishListItems = (id) => {
        console.log(id)
        setWishlist(false)

        addWishlist(id).then((response) => {

            console.log("from wishlist", response.data.result)
            props.listentoBookDetails()


        }).catch((error) => {
            console.log(error)

        })

    }
    const getWishlistItems = () => {
        console.log("data from wish")
        getWishlist().then((response) => {

            setCurrentWishlistItem(response.data.result, "geting wishlist")
        }).catch((err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getWishlistItems()
    }, [])










    React.useEffect(() => {

        getCartItems().then((response) => {
            let filterArray = response.data.result.filter(book => book.product_id._id === props.bookdetails._id)

            if (filterArray.length > 0) {
                setAddBook(false)



                setCurrentItem(filterArray[0])
            }
            else {
                setAddBook(true)

            }
        }).catch((err) =>
            console.log(err)
        )

    }, [])










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
                            <CardContent sx={{}}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <img width={250} height={300} src={book1}></img> </Typography>
                            </CardContent> </Card>


                        {addBook ? (<CardActions sx={{ display: "flex", justifyContent: "space-between", position: 'relative', top: '30px', left: '150px' }}>
                            <Button onClick={() => bookId(props.bookdetails._id)} variant="contained" size='large' sx={{ backgroundColor: 'brown' }}>Add a Bag
                            </Button>)
                        </CardActions>)
                            :


                            <CardActions sx={{ height: '20px', width: '125px', position: 'relative', top: '30px', left: '150px' }} >
                                <Button size="small" onClick={() => incrementCounter(props.bookdetails)} sx={{ border: "1px solid #DBDBDB", backgroundColor: "#FAFAFA" }}>+</Button>
                                <div>{currentcartItem.quantityToBuy}</div>
                                <Button size="small" onClick={() => decrementCounter(props.bookdetails)} sx={{ backgroundColor: "#FAFAFA", border: "1px solid #DBDBDB", cursor: 'pointer' }}>-</Button></CardActions>}






                        {wishlist ? <CardActions>
                            <Button
                                onClick={() => wishListItems(props.bookdetails._id)}
                                variant="contained" size='large' sx={{ backgroundColor: 'brown', position: 'relative', left: '300px', bottom: '20px' }}><FavoriteIcon />WishList</Button>
                        </CardActions>
                            :

                            <CardActions>
                                <Button sx={{ position: 'relative', bottom: '15px', left: '330px', backgroundColor: 'white' }}><FavoriteIcon sx={{ color: 'brown' }} /></Button>
                            </CardActions>}

                    </Box>
                    <Box sx={{
                        width: '55vw', height: '100vh', marginTop: '10px', marginRight:
                            '30px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'
                    }}>

                        <Card sx={{ width: '100%', height: '100%', border: '1px solid red', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                            <CardContent>
                                <CardContent sx={{ width: '100%', height: '60%',borderBottom: '3px solid #D1D1D1', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>{props.bookdetails.bookName}</Typography>
                                    <Typography >by {props.bookdetails.author}</Typography>
                                    <Typography sx={{
                                        backgroundColor: 'green', color:
                                            'white', position: 'relative'
                                    }}>4.5*(20)</Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} >Rs:{props.bookdetails.price}</Typography></CardContent>

                                <CardContent sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderBottom: '3px solid #D1D1D1' }} style={{ background: '#FFFFFF' }}>
                                    <Typography >*Book Detail</Typography>
                                    <Typography sx={{  fontSize: 'small' }}>
                                        {props.bookdetails.description}
                                        {/* A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.
                                     In a restricted sense, a book is a self-sufficient section or part of a longer composition. */}
                                    </Typography>
                                </CardContent>
                            </CardContent>

                            <Card sx={{ width: '55.5%', height: '200px', position: 'absolute', top: '430px', backgroundColor: 'wheat' }}>
                                <CardContent sx={{ position: 'relative', right: '350px', fontWeight: 'bold' }}>Overall rating</CardContent>
                                <Typography sx={{ position: 'relative', right: '350px' }}>
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} /></Typography>
                                <Typography><TextField fullWidth placeholder='write your review' sx={{ width: '800px', backgroundColor: 'white' }}></TextField></Typography>
                                <CardActions><Button sx={{ backgroundColor: 'black', color: 'white', position: 'relative', left: '700px' }}>submit</Button></CardActions>
                            </Card>


                            <Card sx={{ width: '55.5%', height: '150px', position: 'absolute', top: '630px' }}>
                                <CardContent sx={{ position: 'relative', right: '350px', fontSize: '20px', fontWeight: 'bold' }}>Aniket Chile</CardContent>
                                <Typography sx={{ position: 'relative', right: '350px' }}>

                                    <StarIcon style={{ color: '#FFCE00' }} />
                                    <StarIcon style={{ color: '#FFCE00' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} /></Typography>
                                <Typography sx={{ position: 'relative', right: '355px' }}>Good Product</Typography>
                            </Card>

                            <Card sx={{ width: '55.5%', height: '150px', position: 'absolute', top: '780px' }}>
                                <CardContent sx={{ position: 'relative', right: '350px', fontSize: '20px', fontWeight: 'bold' }}>Nazeela</CardContent>
                                <Typography sx={{ position: 'relative', right: '350px' }}>

                                    <StarIcon style={{ color: '#FFCE00' }} />
                                    <StarIcon style={{ color: '#FFCE00' }} />
                                    <StarIcon style={{ color: '#FFCE00' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                                    <StarBorderOutlinedIcon style={{ color: '#707070' }} /></Typography>
                                <Typography sx={{ position: 'relative', right: '312px' }}>made in india,by nazeela</Typography>
                            </Card>


                        </Card>

                    </Box>



                </Box> : " "}


        </div>


    )
}



export default BookDetails