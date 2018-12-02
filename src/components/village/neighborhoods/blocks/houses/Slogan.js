import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';

export default class Slogan extends React.Component {
       render() {
         return (
           <div className="slogan" id="slogan">
             <Col lg={2} md={2} smHidden xsHidden>
             <Link to="/blog">
                <Image width="100px" height="100px" src={ require ('./images/bg.jpg') } alt="iwansell" responsive/>
             </Link>
             </Col>
           </div>
         )
       }
  }
