import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ParentPage from "../Pages/Parentpage/parentpages";
import Dashboard from "../Components/Dashboard/Dashboard";
import MyCart from "../Components/my cart/myCart";
import OrderPlaced from "../Components/orderPlaced/orderPlaced";


function Router() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ParentPage} /> 
            <Route exact path="/Mycart" component={MyCart} />           
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/success" component={OrderPlaced} />
            
          </Switch>
        </BrowserRouter>
      </div>
    )
}
export default Router