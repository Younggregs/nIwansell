import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class FAQ extends React.Component {


       render() {
         return (
           <section className="faq">
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
             <p className="menu-header">FAQ</p>

              <div className="menu-body">

            <div className="question">
            <p>#1. It takes too long to load on my device.</p>
            </div>

            <div className="answer">
            <p>This is most probably due to poor internet network connection.
                But hey, welcome to the future! you are using a web application
                so it requires a little more data to load for the first time, then
                that's it, you can move around the application just like a standalone
                application on your smart phone.</p>

            <p>We are still working on it to make it load faster.</p>
            </div>


            <div className="question">
            <p>#2. It does not open in my browser.</p>
            </div>

            <div className="answer">
            <p>The web application needs a Javascript supported browser to be accessed.
                Don't get confused please, almost all modern browsers support Javascript.
                So try using a different browser and make sure you have good internet
                network connection.
            </p>

            </div>



            <div className="question">
            <p>#2. It does not open in my browser.</p>
            </div>

            <div className="answer">
            <p>The web application needs a Javascript supported browser to be accessed.
                Don't get confused please, almost all modern browsers support Javascript.
                So try using a different browser and make sure you have good internet
                network connection.
            </p>

            </div>



            <div className="question">
            <p>#3. Why cant i click on a board on the sponsored section, or a product on the
                trending section?</p>
            </div>

            <div className="answer">
            <p>The boards in the sponsored section are for advertisements, they are not products links
                so can not be clicked.
            </p>
            <p>The products in the trending sections are not actual products or products link. They are are just
                prototypes of what is trending in the campus. So, if you like any of the prototypes in the
                trending sections, search for it in the search field. If no one is selling it, you  can take the
                challenge!
            </p>

            </div>



            <div className="question">
            <p>#4. What is a campus?</p>
            </div>

            <div className="answer">
            <p>A campus is a very important, influential and well populated higher learning institution.
            </p>

            </div>



            <div className="question">
            <p>#5. What is an e-shop?</p>
            </div>

            <div className="answer">
            <p>An e-shop is an online establishment for the retail sale of goods or services which requires
                no physical address. Iwansell provides a logical address for all e-shops, where everyone can
                see and access an e-shop.
            </p>

            </div>







              </div>
             </div>
            </Col>
          </Row>

           </section>
         )
       }
  }
