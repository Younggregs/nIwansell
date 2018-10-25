import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class TopSearchedProduct extends React.Component {

    state = {
        product_list : []
    }


async componentWillMount(){
    const auth = localStorage.getItem('auth_code')

        try {
            const res = await fetch('https://www.iwansell.com/api/top_search_product/', {

             headers : {
                'Authorization' : 'Token ' + auth,
              }

            });
            const product_list = await res.json();
            this.setState({
                product_list
            });
          } catch (e) {
            console.log(e);
          }

}



       render() {
         return (
           <section className="business_mode">
            <MenuNavigation business_mode={true}/>
            <Row className="menu">

            <Col lg={3} lgOffset={1} md={3} mdOffset={1} sm={12} xs={12}>
            <div className="business-menu">

           <p><Link to="/product_valuation">Product Valuation
           </Link></p>

           <p><Link to="/top_search">Top Searched Products
           </Link></p>

           <p><Link to="/top_not_found">Top Not Found Searched Products
           </Link></p>

            <p><Link to="/top_sold">Top Sold Products
           </Link></p>

           <p><Link to="/top_for_sell">Top Products Up For Sell
           </Link></p>

            <p><Link to="/least_for_sell">Least Products Up For Sell
           </Link></p>

            </div>
            </Col>


        <Col lg={6} md={6} sm={12} xs={12}>
        <Row className="business-text">
            <p className="menu-header">Top Searched Products</p>
        </Row>

        <Row className="business-text">
        <Col lg={9} lgOffset={3} md={9} mdOffset={3} sm={12} xs={12}>
         <div className="business-list">

            <table>
                <thead>
                    <td><b>Rank</b></td>
                    <td><b>Product</b></td>
                    <td><b>Frequency</b></td>
                </thead>

                {this.state.product_list.map(item => (
                    <tr>
                        <td>{item.product_rank}</td>
                        <td>{item.product_name}</td>
                        <td><b>{item.product_frequency}</b></td>
                    </tr>
                ))}
            </table>
         </div>

         </Col>
        </Row>


            </Col>
          </Row>
           </section>
         )
       }
  }
