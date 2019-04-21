import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Row, Col } from 'react-bootstrap';
import MenuNavigation from './neighborhoods/Menu Navigation'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class LeastSold extends React.Component {


    state = {
      isLoading: false,
        product_list : [],
        rank : 0
    }


async componentWillMount(){
  this.setState({ isLoading: true })
    const auth = localStorage.getItem('auth_code')

        try {
            const res = await fetch('https://www.iwansell.com/api/least_sold/', {

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

          this.setState({ isLoading: false })

}



  emptyResult(){

    var empty_set = false

    if(this.state.product_list.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }

  nextRank(){
    this.state.rank = this.state.rank + 1

    return this.state.rank
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

                <p><Link to="/least_sold">Least Sold Products
                </Link></p>

                <p><Link to="/top_for_sell">Top Products Up For Sell
                </Link></p>

                <p><Link to="/least_for_sell">Least Products Up For Sell
                </Link></p>

            </div>
            </Col>


        <Col lg={6} md={6} sm={12} xs={12}>
        <Row className="business-text">
            <p className="menu-header">Least Product Sold</p>
        </Row>

        {this.state.isLoading ? (
            <Spinner/>
        ) : (
          <section>

        {this.emptyResult() ? (
          <p className="err-msg">Its empty here, No result found</p>
        ) : (
        <Row className="business-text">
        <Col lg={9} lgOffset={1} md={9} mdOffset={1} sm={12} xs={12}>
            <div className="business-list">

            <Table striped bordered hover>
                <thead>
                   <tr>
                    <td><b>Rank</b></td>
                    <td><b>Product</b></td>
                    <td><b>Frequency</b></td>
                   </tr>
                </thead>
                <tbody>
                {this.state.product_list.map(item => (
                    <tr>
                        <td>{this.nextRank()}</td>
                        <td>{item.product_name}</td>
                        <td><b>{item.frequency}</b></td>
                    </tr>
                ))}
                </tbody>
            </Table>
         </div>
         </Col>
        </Row>
      )}

          </section>
        )}
        

            </Col>
          </Row>
           </section>
         )
       }
  }
