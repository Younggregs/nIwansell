import React from 'react';
import { Link } from 'react-router-dom'
import Digital from 'react-activity/lib/Digital';
import 'react-activity/lib/Digital/Digital.css';
import { Image, Table, Button, Row, Col } from 'react-bootstrap'
import BuyerSuccessWindow from './Buyer Success Window'


export default class TransactionTokenProduct extends React.Component {

  state = {
    isLoading: false,
    next_view: false,
    response: null,
    product_image: null
  }

    componentWillMount(){
    this.state.product_image = 'https://www.iwansell.com/api/media/' + this.props.product_image
  }

  async submit(){

    this.setState({ isLoading: true })

                const auth = localStorage.getItem('auth_code')

                var formData = new FormData()
                formData.append('token', this.props.token)

                try {
                  const res = await fetch('https://www.iwansell.com/api/confirm_transaction_buyer/' + this.props.transaction_id + '/', {

                   body :formData,
                   method: 'POST',
                   credentials: 'same-origin',
                   mode: 'cors',

                   headers : {
                        'Authorization' : 'Token ' + auth,

                    },

                  });
                  const response = await res.json();
                  this.setState({
                    response
                  });

                } catch (e) {
                  console.log(e);
                }

                this.setState({ isLoading: false})

                if(this.state.response){
                  this.setState({ next_view: true})
                }


  }



       render() {
         return (
          <div>

          {this.state.next_view ? (
              <BuyerSuccessWindow
              token = {this.props.token}
              transaction_id = {this.props.transaction_id}/>
          ) : (
            <div>
            {this.state.isLoading ? (
              <div>
                <p className="seller-product">Processing request</p>
                <Row>
                <Col lg={3} lgOffset={5} md={3} mdOffset={5} sm={3} smOffset={5} xs={3} xsOffset={5}>
                    <Digital color="#ffffff" size={32}/>
                  </Col>
                </Row>
              </div>
            ) : (

              <section className="transaction-token-product">

              <Table bordered>
              <tbody>
              <tr>
                <td><p>Seller</p></td>
                <td>
               <p>{this.props.seller}</p>
                </td>
              </tr>
              <tr>
              <td><p>Product</p></td>
                <td>
               <p>{this.props.product_name}</p>
                </td>
              </tr>
              <tr>
              <td><p>Product image</p></td>
                <td>
                  <Image height="70" width="70" src= { `${this.state.product_image}` } alt="product image not found" responsive/>
                </td>
              </tr>
              <tr>
              <td><p>Agreed price</p></td>
                <td>
               <p><del>N</del>{this.props.agreed_price}</p>
                </td>
              </tr>
              <tr>
              <td><p>Payment method</p></td>
                <td>
               <p>{this.props.payment_method}</p>
                </td>
              </tr>
              <tr>
              <td><p>Quantity</p></td>
                <td>
               <p>{this.props.quantity}</p>
                </td>
              </tr>
              <tr>
              <td><p><br /><Button bsStyle="success" onClick={this.submit.bind(this)}>Proceed</Button></p></td>
                <td>
               <p><Link to="/home">
                  <br /><Button bsStyle="danger">Cancel</Button>
               </Link>></p>
                </td>
              </tr>
              </tbody>

              </Table>

          </section>


            )}
            </div>

          )}

          </div>


         )
       }
  }
