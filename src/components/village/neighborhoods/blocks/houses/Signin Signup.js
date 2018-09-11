import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class SigninSignup extends React.Component {
       render() {
         return (
           <section className="profile-display">
           <Col lg={2} md={2} smHidden xsHidden>
       <Link to="/Signin">
       <Button bsStyle="success">Signin</Button>
       </Link>
       <span> </span>
       <Link to="/Signup">
       <Button bsStyle="info">Signup</Button>
       </Link>
        </Col>

        <Col sm={8} xs={8} lgHidden mdHidden>
        <div className="smaller">
       <Link to="/Signin">
       <Button bsStyle="info">Signin</Button>
       </Link>
       <span> </span>
       <Link to="/Signup">
       <Button bsStyle="success">Signup</Button>
       </Link>
        </div>
        </Col>
           </section>
         )
       }
  }
