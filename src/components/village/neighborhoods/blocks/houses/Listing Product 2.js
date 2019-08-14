import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Col, Row, Button } from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
 
export default class ListingProduct2 extends React.Component {

  state = {
    removed : false
  }


  async manageListing(product_id){

    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/remove_product/' + product_id + '/', {

        headers : {
          'Authorization' : 'Token ' + auth,

        },

      });
      const remove = await res.json();
      this.setState({
        remove
      });
    } catch (e) {
      console.log(e);
    }

  }



  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }


  options = {
    title: 'Title',
    message: 'Message',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      }
    ],
    childrenElement: () => <div />,
    customUI: ({ onClose }) => 
        <div className='custom-ui'>
            <h2>Iwansell Listings Feedback</h2>
            <br /><br />
            <h4>Hey fam, was your NEED satisfied?</h4>
                <Button 
                    bsStyle="success" 
                    onClick={() => {
                    this.handleClickDelete(1);
                    onClose(); 
                    }}><h4>Yes it was</h4></Button>
                <Button
                    bsStyle="danger"
                    onClick={() => {
                    this.handleClickDelete(0);
                    onClose();
                }}><h4>No it wasn't</h4></Button>
        </div>,
    closeOnEscape: true,
    closeOnClickOutside: true,
    willUnmount: () => {},
    onClickOutside: () => {},
    onKeypressEscape: () => {}
};


  customAlert(){
      confirmAlert(this.options)
  }


  async handleClickDelete(status){

    const auth = localStorage.getItem('auth_code')
    try {
      const res = await fetch('https://www.iwansell.com/api/remove_listing/' + this.props.product_id + '/' + status + '/', {
        headers : {
          'Authorization' : 'Token ' + auth,
        },
      });
      const removed = await res.json();
      this.setState({
        removed
      });
    } catch (e) {
      console.log(e);
    }

  }
   
 



       render() {
         return (
           <section className="product-list ">
            <Col lg={3} md={3} sm={12} xs={12}>
               
               <div className="product-options">
                    <h4><b>I NEED:</b> {this.props.product_name}</h4>
                    <p><b>LIKE SO:</b> {this.props.product_description}</p>
                    <p><b>BUDGET:</b> {this.props.budget}</p>
                    <Button onClick={() => this.customAlert()} bsStyle="danger"><b>REMOVE:</b> {this.props.product_name}</Button>
               </div><br /><br />

            
            </Col>

           </section>
         )
       }
  }
