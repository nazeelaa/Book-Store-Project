import logo from './logo.svg';
import './App.css';
import Signin from '../src/Components/SignIn/signin'
import SignUp from './Components/SignUp/signup';
import ParentPage from './Pages/Parentpage/parentpages';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Books from './Components/books/books';
import BookDetails from './Components/bookdetails/bookDetails';
import MyCart from './Components/my cart/myCart';
import CustomerDetails from './Components/customerDetails/customerDetails';
import OrderDetails from './Components/orderDetails/orderDetails';
import OrderPlaced from './Components/orderPlaced/orderPlaced';
import Router from './router/Router';



function App() {
  return (
    <div className="App">
       {/* <Signin />   */}
        {/* <SignUp />     */}
       {/* <ParentPage />  */}
       {/* <Dashboard />   */}
       {/* <OrderDetails /> */}
       {/* <OrderPlaced /> */}
       {/* <CustomerDetails /> */}
       {/* <MyCart />   */}
       {/* <Books />    */}
       {/* <Header />   */}
       {/* <BookDetails /> */}
      <Router />

       
     
    </div>
  );
}

export default App;
