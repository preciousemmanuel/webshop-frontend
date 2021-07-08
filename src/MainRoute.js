import { Switch,Route,Link } from "react-router-dom";
import NavBar from "./components/Nav";

 import Home from "./pages/Home";
 import Cart from "./pages/Cart";
 import DeliveryInfo from "./pages/DeliveryInfo";
import SuccessOrder from "./pages/SuccessOrder";
import Product from "./pages/Product";
import SearchProducts from "./pages/SearchProducts";



const MainRoute=()=>(
<div id="layout-wrapper" style={{paddingBottom:50}}>
<NavBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/successorder" component={SuccessOrder} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/deliveryinfo" component={DeliveryInfo} />
    <Route exact path="/product/:productid" component={Product} />
    <Route exact path="/search/:search" component={SearchProducts} />
    
      
    </Switch>
    </div>
)

export default MainRoute;