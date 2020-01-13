import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Table, Row, Col, Button,FormControl, FormGroup, Form, InputGroup } from 'react-bootstrap';
import MenuNavigation from './neighborhoods/Menu Navigation'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class ProductValuation extends React.Component {

    state = {
        isLoading: false,
        product_review : {},
        display_result : false,
        product : null
    }


async submitForm(){

        this.setState({ isLoading: true })

        const auth = localStorage.getItem('auth_code')

        var product = document.getElementById("product").value
        this.setState({ product : product})

        var formData = new FormData()
        formData.append("product", product)

        try {
            const res = await fetch('https://www.iwansell.com/api/product_valuation/', {

             body: formData,
             method: 'POST',
             headers : {
                'Authorization' : 'Token ' + auth,

              }

            });
            const product_review = await res.json();
            this.setState({
                product_review
            });
          } catch (e) {
            console.log(e);
          }
          this.setState({ isLoading: false })

          this.displayResult()

}

displayResult(){
    this.setState({ display_result : true})
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

             <p className="menu-header">Product Valuation</p>

             <Col lg={10} lgOffset={1} md={10} mdOffset={1} sm={12} xs={12}>
            <Form inline>

            <FormGroup>
                <InputGroup>
                <FormControl
                    id="product"
                    type="text"
                    name="product"
                    placeholder="search product"
                    size="50"
                    inputRef={(ref) => { this.inputSearchPhrase = ref; }}
                />


                <InputGroup.Button>
            <Button onClick={this.submitForm.bind(this)}><div glyph="search"/></Button>
            </InputGroup.Button>
            </InputGroup>
            </FormGroup>
        </Form>
        </Col>
        </Row>

        {this.state.isLoading ? (
            <div className="isloading">
            <p><b><i>loading...</i></b></p>
            <p><Spinner color="#ff0000" size={32}/></p>
            </div>
        ) : (
        <Row className="business-text">
        <Col lg={9} lgOffset={1} md={9} mdOffset={1} sm={12} xs={12}>
        {this.state.display_result ? (
            <div className="product-review">
            <p>
                Product Review for product <i><b>{this.state.product}</b></i>
            </p>
            <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>Times  <i><b>{this.state.product}</b></i> was searched for</td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.searched_frequency}</b></td>
                </tr>
                <tr>
                    <td>Times  <i><b>{this.state.product}</b></i> was searched for and not found</td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.notFound_frequency}</b></td>
                </tr>
                <tr>
                    <td>Number of  <i><b>{this.state.product}</b></i> up for sell </td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.forSell_frequency}</b></td>
                </tr>
                <tr>
                    <td>Number of  <i><b>{this.state.product}</b></i> sold </td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.sold_frequency}</b></td>
                </tr>
                </tbody>
            </Table>
         </div>

        ) : (
            <span></span>
        )}

         </Col>
        </Row>

        )}


            </Col>
          </Row>
           </section>
         )
       }
  }
