import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button,FormControl } from 'react-bootstrap';
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class FeedBack extends React.Component {


  state= {
    statement: []
  }


 async submitForm(){

    var email = document.getElementById("email").value
    var feedback = document.getElementById("feedback").value



    var formData = new FormData()
    formData.append('email', email)
    formData.append('feedback', feedback)


    try {
      const res = await fetch('https://www.iwansell.com/api/feedback/', {

       body :formData,
       method: 'POST',

      });
      const statement = await res.json();
      this.setState({
        statement
      });

    } catch (e) {
      console.log(e);
    }


  }



       render() {
         return (
           <section className="feedback">
            <MenuNavigation/>
            <Row className="menu">

            <Col lg={2} lgOffset={2} md={2} mdOffset={2} sm={12} xs={12}>
            <div className="menu-nav">

           <p><Link to="/why_us">Why Us
           </Link></p>

           <p><Link to="/howto">How To
           </Link></p>

           <p><Link to="/faq">FAQ
           </Link></p>

            <p><Link to="/feedback">Feedback
           </Link></p>

           <p><Link to="/about_us">About Us
           </Link></p>

            <p><Link to="/contact_us">Contact Us
           </Link></p>
            </div>
            </Col>


            <Col lg={6} md={6} sm={12} xs={12}>
             <div className="menu-text">
             <p className="menu-header">Feedback</p>

            <div className="menu-body">
            <p>We'll love to hear from you.</p>


              <form>
  <Row>
  <Col lg={6} md={6} sm={12} xs={12}>
    <FormControl
      id="email"
      type="email"
      name="email"
      placeholder="email"
    />
   </Col>

   <Col lg={6} md={6} sm={12} xs={12}>
    <textarea
     id="feedback"
     name="feedback"
     label="Feedback"
     placeholder="let's know what you think"
    >
      </textarea>
   </Col>
   </Row>

   <Row>
   {this.state.statement.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.statement.code ? (
       <span className="success-msg">We received your feedback and would take it into consideration</span>
    ) : (
      <span></span>
    )}
   </Row>

   <Row><br />
    <Col lg={2} lgOffset={4} md={2} mdOffset={4} sm={12} xs={12}>
    <Button bsStyle="success" onClick={this.submitForm.bind(this)}>Submit</Button>
    </Col>
   </Row>


  </form>




              </div>
             </div>
            </Col>
          </Row>
           </section>
         )
       }
  }
