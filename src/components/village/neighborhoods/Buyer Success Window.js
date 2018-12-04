import React from 'react';
import { Link } from 'react-router-dom'
import Digital from 'react-activity/lib/Digital';
import 'react-activity/lib/Digital/Digital.css';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Row, Col, Image, Table, Button } from 'react-bootstrap'


export default class BuyerSuccessWindow extends React.Component {

  state = {
    isLoading: true,
    response: null,
    success: false,
    receipt_register: [],
    show_receipt: false,
    product_image: null
  }

  componentWillMount(){

      setInterval( () => {
        if(this.state.show_receipt){}
        else{this.successChecker()}
       }, 2000)

  }


  async successChecker(){

    if(this.state.response){
      this.setState({ success: true, show_receipt: true})
      this.getReceipt()
  }

    if(this.state.success){}
    else{
        const auth = localStorage.getItem('auth_code')

        var formData = new FormData()
        formData.append('token', this.props.token)

        try {
          const res = await fetch('https://www.iwansell.com/api/transaction_status/', {

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




    }

  }


  async getReceipt(){

    this.setState({isLoading: true })

    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/receipt/' + this.props.transaction_id + '/', {
       headers : {
            'Authorization' : 'Token ' + auth,

        },
      });
      const receipt_register = await res.json();
      this.setState({
        receipt_register
      });

    } catch (e) {
      console.log(e);
    }

    this.setState({
      isLoading: false,
      product_image: 'https://www.iwansell.com/api/media/' + this.state.receipt_register.product_image
    })

}





pdf(){

  html2canvas(document.querySelector("#receipt-div")).then(canvas => {
    document.body.appendChild(canvas)
  })

  const input = document.getElementById('receipt-div');

html2canvas(input)
.then((canvas) => {
  const imgData = canvas.toDataURL('image/png');
});

html2canvas(input)
.then((canvas) => {
  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF();
  pdf.addImage(imgData, 'PNG', 2, 5);
  pdf.save("iwansell-receipt.pdf");
});

}


       render() {
         return (
          <div>
            {this.state.show_receipt ? (
              <section>
                 <div className="blink-me">
                   <p className="transaction-success">Bought!</p>
                </div>
                {this.state.isLoading ? (
                  <div>
                      <p className="seller-product">Generating receipt</p>
                  <Row>
                  <Col lg={3} lgOffset={5} md={3} mdOffset={5} sm={3} smOffset={5} xs={3} xsOffset={5}>
                    <Digital color="#ffffff" size={32}/>
                  </Col>
                </Row>
                  </div>
                ) : (
                  <section>
                  <div className="receipt-div" id="receipt-div">
                    <div className="receipt-header">
                      <p>Iwansell Group #Business</p>
                      <p>{this.state.receipt_register.campus}</p>
                    </div><br />
                    <div className="receipt-detail">
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p>Seller: {this.state.receipt_register.seller_name}</p>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p>Buyer: {this.state.receipt_register.buyer_name}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p>Payment method: {this.state.receipt_register.payment_method}</p>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p>Transaction ID: {this.state.receipt_register.transaction_id}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p>Date: {this.state.receipt_register.date}</p>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p>Campus code: {this.state.receipt_register.campus_code}</p>
                      </Col>
                    </Row>
                    </div>
                    <Table bordered>
                      <thead>
                        <tr>
                          <td>Product</td>
                          <td>Image</td>
                          <td>Quantity</td>
                          <td>Amount</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><p>{this.state.receipt_register.product_name}</p></td>
                          <td> <Image height="70" width="70" src= { `${this.state.product_image}` } alt="product image" responsive/></td>
                          <td><p>{this.state.receipt_register.quantity}</p></td>
                          <td><p>{this.state.receipt_register.price}</p></td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="additional">
                        <p><b>Additional transaction details</b></p>
                        <p>Client : Buyer</p>
                        <p>Product : {this.state.receipt_register.product_name}</p>
                        <p>Total Amount: {this.state.receipt_register.price}</p>
                        <p>Payment method: {this.state.receipt_register.payment_method}</p>
                        <p>Transaction ID: {this.state.receipt_register.transaction_id}</p>
                    </div>
                    <br />
                  </div>

                  <Row>
                  <Col lg={5} lgOffset={2} md={5} mdOffset={5} sm={5} smOffset={2} xs={5} xsOffset={2}>
                    <Button bsStyle="success" onClick={this.pdf.bind(this)}>Download pdf</Button>
                  </Col>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <Link to='/home'>
                      <Button bsStyle="success">Finish</Button>
                    </Link>
                  </Col>
                  </Row>
                  </section>
                )}

              </section>
            ) : (
              <div>
                {this.state.isLoading ? (
                  <div>
                  <p className="seller-product">Waiting for Seller Confirmation</p>
                  <Row>
                  <Col lg={3} lgOffset={5} md={3} mdOffset={5} sm={3} smOffset={5} xs={3} xsOffset={5}>
                    <Digital color="#ffffff" size={32}/>
                  </Col>
                </Row>
                  </div>
                  ) : (
                  <div className="blink-me">
                    <p className="transaction-success">Bought!</p>
                  </div>
                  )}
             </div>

          )}



          </div>

         )
       }
  }
