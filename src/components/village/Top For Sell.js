import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class TopForSell extends React.Component {

    state = {
        product_list : []
    }


async componentWillMount(){
    const auth = localStorage.getItem('auth_code')

        try {
            const res = await fetch('https://www.iwansell.com/api/top_for_sell/', {

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






  emptyResult(){

    var empty_set = false

    if(this.state.product_list.length <= 0 ){
      empty_set = true
    }

    return empty_set


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

           <p><Link to="/top_for_sell">Top Products Up For Sale
           </Link></p>

            <p><Link to="/least_for_sell">Least Products Up For Sale
           </Link></p>

            </div>
            </Col>


        <Col lg={6} md={6} sm={12} xs={12}>
        <Row className="business-text">
            <p className="menu-header">Top Products Up For Sale</p>
        </Row>

        {this.emptyResult() ? (
          <p className="err-msg">Its empty here, No result found</p>
        ) : (
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
      )}


            </Col>
          </Row>
           </section>
         )
       }
  }
