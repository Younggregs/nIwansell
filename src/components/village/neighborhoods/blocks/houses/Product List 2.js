import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'


export default class ProductList2 extends React.Component {

  state = {
    sold : false,
    remove : false
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
            <h2>Iwansell Product Feedback</h2>
            <br /><br />
            <h4>Hey dear, was this product sold?</h4>
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
    const res = await fetch('https://www.iwansell.com/api/remove_product/' + this.props.product_id + '/' + status + '/', {
      headers : {
        'Authorization' : 'Token ' + auth,
      },
    });
    const removed = await res.json();
    if(removed){
      alert('Removed succcessfully! Refresh to see updated list.')
    }
  } catch (e) {
    console.log(e);
  }

}



  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }




       render() {
         return (
            <section>

             <Col lg={4} md={4} sm={12} xs={12}> 
              <div className="manage-product">
              <div className="product-image">
                <div class="image">
               {this.setMedia(this.props.product_image)}
               <Link to={`/product/${ this.props.product_id }` }>
                  <img  height="200" width="auto" src= { `${this.state.media}` } alt="thumbnail"/>
                </Link>
               </div>
              </div>

               <div>
               <Link to={`/product/${ this.props.product_id }`}>
                    <h4><b>Product: </b> {this.props.product_name}</h4>
                    <p><b>Price: {this.props.starting_price}</b></p>
              </Link>
                
               </div><br />
               <Button onClick={() => this.customAlert()} bsStyle="danger"><b>REMOVE:</b> {this.props.product_name}</Button>
               <br />

               </div>
            </Col>

            </section>
         )
       }
  }
