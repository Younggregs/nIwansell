import React from 'react'
import { Link } from 'react-router-dom'
import Digital from 'react-activity/lib/Digital';
import 'react-activity/lib/Digital/Digital.css';
import { Row, Col, Button, FormGroup, FormControl, HelpBlock, ControlLabel, Checkbox } from 'react-bootstrap'
import TokenWindow from './neighborhoods/Token Window'
import BusinessHeader from './neighborhoods/blocks/Business Header'


export default class SellerTransactionWindow extends React.Component {

    state = {
        token: null,
        product_name : '',
        payment_methods : [],
        price_error: false,
        terms_error: false,
        quantity_error: false,
        agreed_price: '',
        quantity: '',
        checked_value: false,
        isLoading: false,
        next_view: false
    }

    async componentWillMount() {
        try {
          const res = await fetch('https://www.iwansell.com/api/product_name/' + this.props.match.params.product_id + '/');
          const product_name = await res.json();
          this.setState({
            product_name
          });
        } catch (e) {
          console.log(e);
        }


        try {
            const res = await fetch('https://www.iwansell.com/api/payment_method/');
            const payment_methods = await res.json();
            this.setState({
              payment_methods
            });
          } catch (e) {
            console.log(e);
          }

    }


    async submitForm(){

        var agreed_price = document.getElementById("agreed_price").value
        var payment_method = document.getElementById("payment_method").value
        var quantity = document.getElementById("quantity").value

        if(agreed_price){

            this.setState({ price_error: false})

            if(quantity){
                this.setState({ quantity_error: false, isLoading: true})

                if(this.state.checked_value){

                    const auth = localStorage.getItem('auth_code')

                    var formData = new FormData()
                    formData.append('product_id', this.props.match.params.product_id)
                    formData.append('agreed_price', agreed_price)
                    formData.append('quantity', quantity)
                    formData.append('payment_method', payment_method)


                    try {
                      const res = await fetch('https://www.iwansell.com/api/initiate_transaction/', {

                       body :formData,
                       method: 'POST',
                       credentials: 'same-origin',
                       mode: 'cors',

                       headers : {
                            'Authorization' : 'Token ' + auth,

                        },

                      });
                      const token = await res.json();
                      this.setState({
                        token
                      });

                    } catch (e) {
                      console.log(e);
                    }

                    this.setState({ isLoading: false, next_view: true })


                }else{
                    this.setState({ terms_error: true})
                }


            }else{
                this.setState({ quantity_error: true})
            }


        }else{
            this.setState({ price_error: true})
        }



    }



 handleChange(event){
    this.setState({ checked_value: event.target.checked })
 }



  render(){

  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
  );
}

return (
<section className="seller-transaction-window">
<Row>
<Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={12} xs={12}>
    <BusinessHeader seller={true}/>
    <p className="transaction-header">Seller Transaction Window</p>

    {this.state.isLoading ? (
        <div>
            <p className="seller-product">Generating Buyer token</p>
            <Row>
            <Col lg={3} lgOffset={5} md={3} mdOffset={5} sm={3} smOffset={5} xs={3} xsOffset={5}>
                    <Digital color="#ffffff" size={32}/>
                </Col>
            </Row>
        </div>
    ) : (

        <div>
            {this.state.next_view ? (
                <TokenWindow token = {this.state.token}/>
            ) : (

                <form>
                <Row>

                <Col lg={6} md={6} sm={6} xs={6}>
                    <p className="seller-product">Product: {this.state.product_name}</p>
                </Col>

               <Col lg={6} md={6} sm={6} xs={6}>
                <FieldGroup
                  id="agreed_price"
                  label="Agreed Price"
                  name="agreed_price"
                  placeholder="In Naira"
                />
                {this.state.price_error ? (
                    <p className="err-msg">Invalid amount entered, amount should be in figures</p>
                ) : (
                    <div/>
                )}
                </Col>

              </Row>

            <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
                <FieldGroup
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  placeholder="quantity of product"
                />
                 {this.state.quantity_error ? (
                    <p className="err-msg">{this.state.term_sheet} Invalid quantity, quantity must be atleast 1</p>
                ) : (
                    <div/>
                )}
                </Col>

            <Col lg={6} md={6} sm={6} xs={6}>
                <FormGroup>
                <ControlLabel>Select Payment Method</ControlLabel>
                <FormControl componentClass="select" placeholder="select" name="payment_method" id="payment_method">
                            {this.state.payment_methods.map(item => (
                                <option value={item.id}>{item.method}</option>
                            ))}
                </FormControl>
                </FormGroup>
                </Col>
            </Row>

              <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                  <Checkbox
                  id = "term_sheet"
                  name = "term_sheet"
                  checked = {this.state.checked_value}
                  onChange = {this.handleChange.bind(this)}
                  readOnly>
                    I agree to the iwansell terms and conditions of trade
                  </Checkbox>

                {this.state.terms_error ? (
                    <p className="err-msg">Sorry you need to agree to the terms and conditions</p>
                ) : (
                    <div/>
                )}

                  </Col>
                </Row>

            <Row>

                <Col lg={3} lgOffset={3} md={3} mdOffset={3} sm={4} smOffset={2} xs={4} xsOffset={2}>
                    <br /><Button bsStyle="success" onClick={this.submitForm.bind(this)}>Proceed</Button>
                </Col>

                 <Col lg={3} md={3} sm={6} xs={6}>
                 <Link to="/home">
                    <br /><Button bsStyle="danger">Cancel</Button>
                 </Link>
                </Col>

            </Row>


            </form>


            )}
        </div>



    )}


</Col>
</Row>
</section>
      )
  }

}
