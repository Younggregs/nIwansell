import React from 'react'
import { Link } from 'react-router-dom'
import {  Table, Image } from 'react-bootstrap'

export default class MenuList extends React.Component {

 
       render() {
         return (
           <section className="menu_list">
           <Table responsive>
                <thead>
                  <tr>
                      <th>Navigation List</th>
                  </tr>
              </thead>
              <tbody>

            {this.props.logged_in ? (
             <tr>
             <td><Link to = "/newproduct">Start selling
                 </Link>
             </td>
             </tr>
            ) : (
              <tr>
              <td><Link to='/signup'>Create Account, start selling
                </Link>
              </td>
              </tr>
            )}

            
            
            <tr>
            <td><Link to={`/eshop_list/${ this.props.campus_id }/`}>eShops
                </Link></td>
            </tr>

            <tr>
            <td><Link to={`/listings/${ this.props.campus_id }/`}>Listings
                </Link></td>
            </tr>

            <tr>
            <td><Link to={`/channel/${ this.props.campus_id }/`}>TV
                </Link></td>
            </tr>


          <tr>
            <td><Link to="/why_us">Why Us
                </Link></td>
            </tr>


        <tr>
          <td><Link to="/howto">How To
           </Link></td>
        </tr>

           <tr>
             <td><Link to="/faq">FAQ
           </Link></td>
           </tr>


            <tr>
             <td><Link to="/feedback">Feedback
           </Link></td>
           </tr>

           <tr>
             <td><Link to="/about_us">About Us
           </Link></td>
           </tr>

            <tr>
             <td><Link to="/contact_us">Contact Us
           </Link></td>
           </tr>

           {this.props.logged_in ? (
             <tr>
             <td><Link to = "/logout">
               Logout
             </Link></td>
            </tr>
           ): (
            <tr>
            <td><Link to = "/signin">
              Login
            </Link></td>
           </tr>
           )}
           




           <tr>
             <td><a href="https://www.facebook.com/iwansellcampus/">
                  <Image width="50px" height="50px" src={ require ('./images/facebook.png') } alt="facebook" responsive/>
                </a>
             </td>
            </tr>


             <tr>
             <td><a href="https://twitter.com/iwansellcampus">
                  <Image width="50px" height="50px" src={ require ('./images/twitter.png') } alt="twitter" responsive/>
                </a>
             </td>
             </tr>

              <tr>
             <td><a href="https://instagram.com/iwansellcampus">
                  <Image width="60px" height="60px" src={ require ('./images/instagram.png') } alt="instagram" responsive/>
                </a>
              </td>
              </tr>

          </tbody>
          </Table>

           </section>
         )
       }
  }
