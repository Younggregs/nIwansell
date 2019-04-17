import React from 'react'
import { Link } from 'react-router-dom'
import {  Table, Image } from 'react-bootstrap'

export default class MenuList extends React.Component {

  state = {
    eshop_exist : false,
  }


  async componentWillMount(){

  const auth = localStorage.getItem('auth_code')

  try {
    const res = await fetch('https://www.iwansell.com/api/eshop_exist/', {

      headers : {
        'Authorization' : 'Token ' + auth,

      },

    });
    const eshop_exist = await res.json();
    this.setState({
      eshop_exist
    });
  } catch (e) {
    console.log(e);
  }

}

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
            <tr>
            <td><Link to="/eshop_list">e-shops
                </Link></td>
            </tr>


             <tr>
             <td><Link to = "/product_valuation">
               Business Mode
             </Link></td>
             </tr>

             {this.state.eshop_exist.eshop_exist ? (
              <div/>
             ) : (
              <tr>
              <td><Link to = "/new_eshop">
                Rent an e-shop
              </Link></td>
              </tr>
             )}

            <tr>
            <td><Link to = "/newproduct">
              Upload item for sell
            </Link></td></tr>

            <tr>
            <td><Link to = "/productmanager">
              Sell your item
            </Link></td></tr>

            <tr>
            <td><Link to = "/buyer_transaction_window">
              Buy an item
            </Link></td></tr>

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

           <tr>
            <td><Link to = "/logout">
              Logout
            </Link></td>
           </tr>




           <tr>
             <td><a href="https://web.facebook.com/Iwansell-group-270682653560747/?ref=br_rs">
                  <Image width="50px" height="50px" src={ require ('./images/facebook.png') } alt="facebook" responsive/>
                </a>
             </td>
            </tr>


             <tr>
             <td><a href="https://twitter.com/IwansellG">
                  <Image width="50px" height="50px" src={ require ('./images/twitter.png') } alt="twitter" responsive/>
                </a>
             </td>
             </tr>

              <tr>
             <td><a href="https://instagram.com/iwansell_group">
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
