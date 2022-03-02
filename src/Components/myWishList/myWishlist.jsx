import React from "react";
import '../myWishList/myWishlist.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { getWishlist,deleteWishlistItems } from "../../Services/dataService";
import Header from "../Header/Header";

function MyWishList(){

    const [myWishlist, setMyWishlist] = React.useState([]);
	const [showState, setShowState] = React.useState(false);
  


	const displayWishlist  = () => {
		getWishlist().then((response) => {
            console.log("getWishlist",response.data.result)
				setMyWishlist(response.data.result);
			}).catch((err) => {
				console.log(err)
			});
	};


	React.useEffect(() => {
		displayWishlist();
	}, []);

	
	const handleDelete  = (cartItemId) => {
		console.log("deleted wishlist")
		deleteWishlistItems(cartItemId).then((response) => 
			{
				console.log("deleted data",response.data.result)	
				setShowState(!showState);
				displayWishlist()
			})
			.catch((err) => {
				console.log(err);
			});
	};
    return(
        <div>
        <Header />
		
	
        <div className='wish-list-display-book'>
                       {myWishlist.map((book) => (
							<div    className='wishlist-Book-Container'>
								<div className='Img-Info-Container'>
									<div className='BookImg-Container'>
										<div className='wishlistBookImg'></div>
									</div>
									<div className='BookInfo-Container'>
										<div className='BookName'>
                                        {book.product_id.bookName}
										</div>
										<div className='BookAuthor'>
											by {book.product_id.author}
										</div>
										<div className='Book-Price-Container'>
											<div className='BookNewPrice'>
												Rs. {book.product_id.discountPrice}
											</div>
											<div className='BookOldPrice'>
												Rs. {book.product_id.price}
											</div>
										</div>
									</div>
								</div>
								<div className='Buttons-Container'>
									 <div
										className='remove-Btn'
									    onClick={() => handleDelete(book.product_id._id)}> 
										<DeleteOutlineOutlinedIcon style={{ width: '100%', height: '100%'}}/>
									</div>
								</div>
							</div>
						))}
                        </div>
				</div>

			 
			
    )

}
export default MyWishList