import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from './components/village/Welcome'
import LandingPage from './components/village/Landing Page'
import Signin from './components/village/Sign in'
import Signup from './components/village/Sign up'
import ProductDetails from './components/village/Product Details'
import Profile from './components/village/Profile'
import Menu from './components/village/Menu'
import FeedBack from './components/village/Feedback'
import AboutUs from './components/village/About Us'
import ContactUs from './components/village/Contact Us'
import WhyUs from './components/village/Why Us'
import HowTo from './components/village/How To'
import FAQ from './components/village/FAQ'
import EShopList from './components/village/EShop List'
import EditProfile from './components/village/Edit Profile'
import NewProduct from './components/village/New Product'
import ProductManager from './components/village/Product Manager'
import Home from './components/village/Home'
import EHaggler from './components/village/EHaggler'
import HaggleMates from './components/village/Haggle Mates'
import EShop from './components/village/E Shop'
import ManageEshop from './components/village/Manage Eshop'
import EditEShop from './components/village/Edit EShop'
import NewEShop from './components/village/New EShop'
import NewEShopProduct from './components/village/New EShop Product'
import SoldProduct from './components/village/Sold Product'
import EShopRR from './components/village/EShop RR'
import ClientRR from './components/village/Client RR'
import FavoriteClient from './components/village/neighborhoods/blocks/houses/Favorite Client'
import FavoriteEShop from './components/village/neighborhoods/blocks/houses/Favorite EShop'
import FavoriteProduct from './components/village/neighborhoods/blocks/houses/Favorite Product'
import ForgotPassword from './components/village/Forgot Password'
import ResetPassword from './components/village/Reset Password'
import Logout from './components/village/Logout'
import AuthTest from './components/village/Auth Test';


    class App extends React.Component {
        render() {
          return (
            <Router>
              <div>
                <Route exact path="/auth_test" component={AuthTest}/>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/iwansell" component={LandingPage}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/product/:product_id" component={ProductDetails}/>
                <Route exact path="/profile/:profile_id" component={Profile}/>
                <Route exact path="/editprofile/:profile_id" component={EditProfile}/>
                <Route exact path="/menu" component={Menu}/>
                <Route exact path="/feedback" component={FeedBack}/>
                <Route exact path="/about_us" component={AboutUs}/>
                <Route exact path="/contact_us" component={ContactUs}/>
                <Route exact path="/howto" component={HowTo}/>
                <Route exact path="/eshop_list" component={EShopList}/>
                <Route exact path="/faq" component={FAQ}/>
                <Route exact path="/why_us" component={WhyUs}/>
                <Route exact path="/newproduct" component={NewProduct}/>
                <Route exact path="/productmanager" component={ProductManager}/>
                <Route exact path="/favorite_client/:profile_id" component={FavoriteClient}/>
                <Route exact path="/favorite_eshop/:profile_id" component={FavoriteEShop}/>
                <Route exact path="/favorite_product/:profile_id" component={FavoriteProduct}/>
                <Route exact path="/hagglemates" component={HaggleMates}/>
                <Route exact path="/hagglemates/:profile_id" component={HaggleMates}/>
                <Route exact path="/ehaggler" component={EHaggler}/>
                <Route exact path="/eshop/:eshop_id" component={EShop}/>
                <Route exact path="/manage_eshop" component={ManageEshop}/>
                <Route exact path="/edit_eshop" component={EditEShop}/>
                <Route exact path="/new_eshop" component={NewEShop}/>
                <Route exact path="/new_eshop_product" component={NewEShopProduct}/>
                <Route exact path="/client_rr/:id" component={ClientRR}/>
                <Route exact path="/eshop_rr/:id" component={EShopRR}/>
                <Route exact path="/soldproduct/:eshop_id" component={SoldProduct}/>
                <Route exact path="/forgot_password" component={ForgotPassword}/>
                <Route exact path="/reset_password/:reset_code" component={ResetPassword}/>
                <Route exact path="/logout" component={Logout}/>
              </div>
            </Router>
           )
         }
       }

     ReactDOM.render(
       <App/>,
       document.getElementById('app')
     );
