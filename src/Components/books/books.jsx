import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import book1 from '../../Assests/book1.png';
import Box from '@mui/material/Box';


function Books(props) {

    
    
    const takeClick=(obj)=>{
       props.listentoBooks()
        props.setBookData(obj)
        
        console.log(obj)

    }
    
    return (
        <div>


            <Box sx={{ marginLeft: '10%', 
            marginTop: '10px',
            marginBottom:'10px',
            width:180,
            height:250,
            position: 'relative',
            left: '20%',
            backgroundColor:'lightgray'}}>
            <img height={140} src={book1} alt="bookimage"></img> 
            <Card sx={{width:'180px',height:'110px',paddingLeft:'1px',paddingRight:'1px'}} onClick={()=>takeClick(props.book)}>
            <CardContent sx={{marginTop:-2}}> 
            
                    <Typography sx={{fontSize:'13px',fontWeight:'bold',width: '300px', height: '20px', backgroundColor: 'none',display:'flex',flexDirection:'row'}}>{props.book.bookName}</Typography>
                    <Typography sx={{fontSize:'13px',width: '60px', height: '20px', backgroundColor: 'none'}}>by {props.book.author}</Typography>
                    
                    <Typography sx={{fontSize:'13px',width: '55px', height: '20px', backgroundColor: 'green', color:
                                        'white'}}>4.5*(20)</Typography>  
                    <Typography sx={{fontSize:'13px',width: '55px', height: '20px', backgroundColor: 'none'}}>Quantity:{props.book.quantity}</Typography>
                    <Typography sx={{fontSize:'13px',width: '55px', height: '20px', backgroundColor: 'none'}}>Rs:{props.book.price}</Typography>
                   
                    
                </CardContent>
                </Card>  
            </Box>
        </div>
    )
}

export default Books