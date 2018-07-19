import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class HowTo extends React.Component {


       render() {
         return (
           <section className="how-to">
            <MenuNavigation/>
            <Row className="menu">

            <Col lg={2} lgOffset={2} md={2} mdOffset={2} sm={12} xs={12}>
            <div className="menu-nav">

           <p><Link to="/why_us">Why Us
           </Link></p>

           <p><Link to="/howto">How To
           </Link></p>

           <p><Link to="/faq">FAQ
           </Link></p>

            <p><Link to="/feedback">Feedback
           </Link></p>

           <p><Link to="/about_us">About Us
           </Link></p>

            <p><Link to="/contact_us">Contact Us
           </Link></p>
            </div>
            </Col>


            <Col lg={6} md={6} sm={12} xs={12}>
             <div className="menu-text">
             <p className="menu-header">How To</p>

              <div className="menu-body">



           <div className="question">
            <p>#1. <i>How to</i> Put a product up for sale</p>
            </div>

            <div className="answer">
            <p>-1. Signup or Signin if you have an account already.</p>
            <p>-2. Click on the profile(user) icon to go to your profile page.</p>
            <p>-3. Click on the <b>'Add New Product'</b> link.</p>
            <p>-4. Fill the new product form and submit
                (if successful, you would be redirected to the new product page).</p>
            <p>-5. Done! </p>

            </div>



            <div className="question">
            <p>#2. <i>How to</i> Search and buy a product</p>
            </div>

            <div className="answer">
            <p>-1. Type in the product name in the search field and click on the search icon.</p>
            <p>-2. Search results would be displayed.</p>
            <p>-3. Click ont the product you wish to buy, you would be redirected to the product
                description and details page.
            </p>
            <p>-4. Click on the <b>'Buzz Me'</b> button to get the phone number of the seller, or
            click on the <b>'Message Me'</b> button to message the seller through our messenger,
            the <b>'e-haggler'</b>.</p>
            <p>-5. Contact teh seller by calling his/her phone number or through the <b>'e-haggler'</b>.</p>
            <p>-6. Please endeavour to meet your client in an open place during the day for safety.</p>
            <p>-7. Done. </p>

            </div>





            <div className="question">
            <p>#3. <i>How to</i> Rent an e-shop</p>
            </div>

            <div className="answer">
            <p>-1. Signup or Signin if you have an account already.</p>
            <p>-2. Scroll to the bottom of the home page to locate the <b>'Rent an e-shop'</b> link(On mobile
            devices, you can click on the menu icon to locate the link).</p>
            <p>-3. Click on the link, fill the form provided with your e-shop brand name and submit form
                (when your e-shop is successfully created, you would be redirected to the e-shop.</p>
            <p>-4. Done!.</p>
            </div>



            <div className="question">
            <p>#4. <i>How to</i> Add product to e-shop</p>
            </div>

            <div className="answer">
            <p>-1. Signup or Signin if you have an account already.</p>
            <p>-2. Click on the e-shop(home) icon to go to your e-shop.</p>
            <p>-3. Click on <b>'Add a product'</b> button to add a new product to your e-shop.</p>
            <p>-4. The e-shop new product form provides a category and a sub-category for each product
                you wish to add to your e-shop.</p>
            <p>-5. Select a category, and wait a little for the sub-category to be generated.</p>
            <p>-6. Fill the form and submit(when succesfull you would redirected to you e-shop).</p>
            <p>-7. Done!</p>

            </div>




            <div className="question">
            <p>#5 <i>How to</i> Recover forgotten password</p>
            </div>

            <div className="answer">
            <p>-1. Click on the Signin/Signup button and click on the <b>'forgot password?'</b> link.</p>
            <p>-2. Enter your email (which you registered with) in the form provided.</p>
            <p>-3. If account with that email exist, your password recovery details would be sent to you email account.</p>
            <p>-4. Visit your email inbox and click on the password recovery link.</p>
            <p>-5. Fill in the password reset form, and submit.</p>
            <p>-6. Done!</p>

            </div>





              </div>
             </div>
            </Col>
          </Row>
           </section>
         )
       }
  }
