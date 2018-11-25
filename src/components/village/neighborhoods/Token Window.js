import React from 'react';
import { Link } from 'react-router-dom'
import Digital from 'react-activity/lib/Digital';
import 'react-activity/lib/Digital/Digital.css';
import { Table, Button, Row, Col } from 'react-bootstrap'
import SellerSuccessWindow from './Seller Success Window'


export default class TokenWindow extends React.Component {

  state = {
    isLoading: true,
    next_view: false,
    success: false,
    show_buyer: false,
    buyer : [],
  }

  componentWillMount(){
    setInterval( () => {
        this.BuyerChecker()
       }, 2000)
  }


  async BuyerChecker(){

    if(this.state.buyer.buyer){
      this.setState({ isLoading: false, success: true})
    }



    if(this.state.success){
      this.setState({ show_buyer: true})
    }
    else{
        const auth = localStorage.getItem('auth_code')

        var formData = new FormData()
        formData.append('token', this.props.token)

        try {
          const res = await fetch('https://www.iwansell.com/api/confirm_buyer/', {

           body :formData,
           method: 'POST',
           credentials: 'same-origin',
           mode: 'cors',

           headers : {
                'Authorization' : 'Token ' + auth,

            },

          });
          const buyer = await res.json();
          this.setState({
            buyer
          });

        } catch (e) {
          console.log(e);
        }




    }

  }


  async proceed(){

    this.setState({ isLoading: true})

    const auth = localStorage.getItem('auth_code')

    var formData = new FormData()
    formData.append('token', this.props.token)

    try {
      const res = await fetch('https://www.iwansell.com/api/confirm_transaction_seller/', {

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


    this.setState({ next_view: true})
  }



       render() {
         return (
           <div>
             {this.state.next_view ? (
               <SellerSuccessWindow
               transaction_id = {this.state.buyer.transaction_id}
               response={this.state.response}/>
             ) : (
              <section>
                {this.state.isLoading ? (
                  <div>
                     <p className="seller-product">Buyer Token:: {this.props.token}</p>
                     <p className="seller-product">Waiting for buyer confirmation</p>
                  <Row>
                  <Col lg={3} lgOffset={5} md={3} mdOffset={5} sm={3} smOffset={5} xs={3} xsOffset={5}>
                    <Digital color="#ffffff" size={32}/>
                  </Col>
                </Row>
                   </div>
                ) : (
                 <Table bordered>
                   <tbody>
                     <tr>
                       <td>
                         <p className="seller-product">Buyer Name</p>
                       </td>
                       <td>
                         <p className="seller-product">{this.state.buyer.buyer}</p>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <p><br /><Button bsStyle="success" onClick={this.proceed.bind(this)}>Proceed</Button></p>
                       </td>
                        <td>
                        <p><br /><Button bsStyle="danger">Cancel</Button></p>
                        </td>
                     </tr>
                   </tbody>
                 </Table>
                )}

              </section>

             )}
          </div>

         )
       }
  }
