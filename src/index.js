import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import loadable from '@loadable/component'

const Welcome = loadable(() => import('./components/village/Welcome'))
const LandingPage = loadable(() => import('./components/village/Landing Page'))
const Signin = loadable(() => import('./components/village/Sign in'))
const Signup = loadable(() => import('./components/village/Sign up'))
const ProductDetails = loadable(() => import('./components/village/Product Details'))
const Profile = loadable(() => import('./components/village/Profile'))
const ProductValuation = loadable(() => import('./components/village/Product Valuation'))
const TopSearchedProduct = loadable(() => import('./components/village/Top Searched Product'))
const TopNotFound = loadable(() => import('./components/village/Top Not Found'))
const TopSoldProduct = loadable(() => import('./components/village/Top Sold Product'))
const TopForSell = loadable(() => import('./components/village/Top For Sell'))
const LeastForSell = loadable(() => import('./components/village/Least For Sell'))
const LeastSold = loadable(() => import('./components/village/Least Sold'))
const Menu = loadable(() => import('./components/village/Menu'))
const FeedBack = loadable(() => import('./components/village/Feedback'))
const AboutUs = loadable(() => import('./components/village/About Us'))
const ContactUs = loadable(() => import('./components/village/Contact Us'))
const WhyUs = loadable(() => import('./components/village/Why Us'))
const HowTo = loadable(() => import('./components/village/How To'))
const FAQ = loadable(() => import('./components/village/FAQ'))
const EShopList = loadable(() => import('./components/village/EShop List'))
const EditProfile = loadable(() => import('./components/village/Edit Profile'))
const NewProduct = loadable(() => import('./components/village/New Product'))
const ProductManager = loadable(() => import('./components/village/Product Manager'))
const Home = loadable(() => import('./components/village/Home'))
const EHaggler = loadable(() => import('./components/village/EHaggler'))
const HaggleMates = loadable(() => import('./components/village/Haggle Mates'))
const EShop = loadable(() => import('./components/village/E Shop'))
const ManageEshop = loadable(() => import('./components/village/Manage Eshop'))
const EditEShop = loadable(() => import('./components/village/Edit EShop'))
const NewEShop = loadable(() => import('./components/village/New EShop'))
const NewEShopProduct = loadable(() => import('./components/village/New EShop Product'))
const SoldProduct = loadable(() => import('./components/village/Sold Product'))
const EShopRR = loadable(() => import('./components/village/EShop RR'))
const ClientRR = loadable(() => import('./components/village/Client RR'))
const FavoriteClient = loadable(() => import('./components/village/neighborhoods/blocks/houses/Favorite Client'))
const FavoriteEShop = loadable(() => import('./components/village/neighborhoods/blocks/houses/Favorite EShop'))
const FavoriteProduct = loadable(() => import('./components/village/neighborhoods/blocks/houses/Favorite Product'))
const ForgotPassword = loadable(() => import('./components/village/Forgot Password'))
const ResetPassword = loadable(() => import('./components/village/Reset Password'))
const Blog = loadable(() => import('./components/village/Blog'))
const BlogCategoryView = loadable(() => import('./components/village/Blog Category View'))
const CategoryView = loadable(() => import('./components/village/Category View'))
const SubcategoryView = loadable(() => import('./components/village/Subcategory View'))
const SellerTransactionWindow = loadable(() => import('./components/village/Seller Transaction Window'))
const BuyerTransactionWindow = loadable(() => import('./components/village/Buyer Transaction Window'))
const Sold = loadable(() => import('./components/village/Sold'))
const Bought = loadable(() => import('./components/village/Bought'))
const ViewReceipt = loadable(() => import('./components/village/View Receipt'))
const BankAccount = loadable(() => import('./components/village/Bank Account'))
const ViewMore = loadable(() => import('./components/village/View More'))
const MediaUpload = loadable(() => import('./components/village/Media Upload'))
const SearchPage = loadable(() => import('./components/village/Search Page'))
const PrivacyPolicy = loadable(() => import('./components/village/Privacy Policy'))
const Disclaimer = loadable(() => import('./components/village/Disclaimer'))
const Logout = loadable(() => import('./components/village/Logout'))
const AuthTest = loadable(() => import('./components/village/Auth Test'))
const About = loadable(() => import('./components/village/About'))
const Listings = loadable(() => import('./components/village/Listings'))
const NewListings = loadable(() => import('./components/village/New Listings'))
const ManageListings = loadable(() => import('./components/village/Manage Listing'))
const Channel = loadable(() => import('./components/village/Channel'))
const Thread = loadable(() => import('./components/village/Thread'))
const NewThread = loadable(() => import('./components/village/New Thread'))
const Metrics = loadable(() => import('./components/village/Metrics'))

class App extends React.Component {
        render() {
          return (
            <Router>
              <div>
                <Route exact path="/auth_test" component={AuthTest}/>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/iwansell" component={LandingPage}/>
                <Route exact path="/iwansell/:campus_id" component={LandingPage}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/product/:product_id" component={ProductDetails}/>
                <Route exact path="/profile/:profile_id" component={Profile}/>
                <Route exact path="/editprofile/:profile_id" component={EditProfile}/>
                <Route exact path="/product_valuation" component={ProductValuation}/>
                <Route exact path="/top_search" component={TopSearchedProduct}/>
                <Route exact path="/top_not_found" component={TopNotFound}/>
                <Route exact path="/top_sold" component={TopSoldProduct}/>
                <Route exact path="/top_for_sell" component={TopForSell}/>
                <Route exact path="/least_for_sell" component={LeastForSell}/>
                <Route exact path="/least_sold" component={LeastSold}/>
                <Route exact path="/menu/:campus_id" component={Menu}/>
                <Route exact path="/feedback" component={FeedBack}/>
                <Route exact path="/about_us" component={AboutUs}/>
                <Route exact path="/contact_us" component={ContactUs}/>
                <Route exact path="/howto" component={HowTo}/>
                <Route exact path="/eshop_list/:campus_id" component={EShopList}/>
                <Route exact path="/listings/:campus_id" component={Listings}/>
                <Route exact path="/new_listing" component={NewListings}/>
                <Route exact path="/manage_listing" component={ManageListings}/>
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
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/blog/:blog_id" component={Blog}/>
                <Route exact path="/blog_category/:category_id" component={BlogCategoryView}/>
                <Route exact path="/category_view/:category_id" component={CategoryView}/>
                <Route exact path="/subcategory_view/:subcategory_id" component={SubcategoryView}/>
                <Route exact path="/seller_transaction_window/:product_id" component={SellerTransactionWindow}/>
                <Route exact path="/buyer_transaction_window/" component={BuyerTransactionWindow}/>
                <Route exact path="/sold/:profile_id" component={Sold}/>
                <Route exact path="/bought/:profile_id" component={Bought}/>
                <Route exact path="/view_receipt/:transaction_id" component={ViewReceipt}/>
                <Route exact path="/bank_account/:profile_id" component={BankAccount}/>
                <Route exact path="/view_more" component={ViewMore}/>
                <Route exact path="/media_upload/:product_id" component={MediaUpload}/>
                <Route exact path="/search_page" component={SearchPage}/>
                <Route exact path="/channel/:campus_id" component={Channel}/>
                <Route exact path="/thread/:thread_id" component={Thread}/>
                <Route exact path="/new_thread" component={NewThread}/>
                <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
                <Route exact path="/disclaimer" component={Disclaimer}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/metrics/:mcode" component={Metrics}/>
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
