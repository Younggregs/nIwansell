import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Row, Col, Button,FormControl, FormGroup, Form, InputGroup, Glyphicon } from 'react-bootstrap';
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class ProductValuation extends React.Component {

    state = {
        product_review : {},
        display_result : false,
        product : null
    }


async submitForm(){
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

           <p><Link to="/top_for_sell">Top Products Up For Sale
           </Link></p>

            <p><Link to="/least_for_sell">Least Products Up For Sale
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
            <Button onClick={this.submitForm.bind(this)}><Glyphicon glyph="search"/></Button>
            </InputGroup.Button>
            </InputGroup>
            </FormGroup>
        </Form>
        </Col>
        </Row>

        <Row className="business-text">
        <Col lg={9} lgOffset={3} md={9} mdOffset={3} sm={12} xs={12}>
        {this.state.display_result ? (
            <div className="product-review">
            <p>
                Product Review for product <i><b>{this.state.product}</b></i>
            </p>
            <table>
                <tr>
                    <td>Searches for product </td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.searchedProduct}</b></td>
                </tr>
                <tr>
                    <td>Not found searches for product </td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.notFoundProduct}</b></td>
                </tr>
                <tr>
                    <td>Number of product up for sale </td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.productForSell}</b></td>
                </tr>
                <tr>
                    <td>Product sold </td>
                    <td>&nbsp;&nbsp;</td>
                    <td><b>{this.state.product_review.productSold}</b></td>
                </tr>
            </table>
         </div>

        ) : (
            <span></span>
        )}

         </Col>
        </Row>


            </Col>
          </Row>
           </section>
         )
       }
  }
