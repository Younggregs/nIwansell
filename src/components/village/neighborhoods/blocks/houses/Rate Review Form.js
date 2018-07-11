import React from 'react';
import { Redirect } from 'react-router-dom'
import { Row, Col, Button,FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export default class RateReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 0, message: []}

    this.handleClick = this.handleClick.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
  }


  handleClick(event) {
    this.setState({value: undefined})
  }

  handleRatingChange(value){
    console.log(value)

    this.setState({ value : value })
    
    
  }





  async submitForm(){

    var review = document.getElementById("review").value

    var formData = new FormData()

    formData.append('review', review)
    formData.append('rating', this.state.value)

    const auth = localStorage.getItem('auth_code')
  
    try {
      const res = await fetch('http://199.192.21.172:8000/rate_review/' + this.props.status_code + '/' + this.props.id  + '/', {
      
       body : formData,
       method: 'POST',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const message = await res.json();
        this.setState({
          message
        });
    } catch (e) {
      console.log(e);
    }

    
  }








render(){

var Rating = require('react-rating');

  
const formInstance = (
  <section className="rate-review-form">
  <Row>
 
   <Col lg={6} md={6} sm={6} xs={6}>
   <ControlLabel>Rate</ControlLabel>
      <div>
      <span className="heart-glyphs">
        <Rating 
         emptySymbol="glyphicon glyphicon-heart-empty"
         fullSymbol="glyphicon glyphicon-heart"
        {...this.props} initialRating={this.state.value} onChange={this.handleRatingChange} />
        </span>
        <button onClick={this.handleClick.bind(this)}>Reset</button>
      </div>
   </Col>

  <form>
  

  <Col lg={6} md={6} sm={12} xs={12}>
    <FormGroup>
      <ControlLabel>Review</ControlLabel>
      <FormControl componentClass="textarea" placeholder="e.g Awesome fellas doing awesome stuff" id="review" name="review"/>
    </FormGroup>
   </Col>

   <Row>
   {this.state.message.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? ( 
       <span><Redirect to={`/eshop/${ this.props.id } `}/></span>
    ) : (
      <span></span>
    )}
   </Row>



  <Row>
  <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={6} smOffset={3} xs={6} xsOffset={3}>

    <Button onClick={this.submitForm.bind(this)}>rate and review</Button>
    </Col>
  </Row>
  </form>
  </Row>
  
  </section>
);

    return (formInstance);
  }
}
