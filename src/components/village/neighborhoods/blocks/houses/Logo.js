import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';

export default class AppName extends React.Component {
       render() {
         return (
           <div className="logo" id="logo">
             <Col lg={2} md={2} smHidden xsHidden>
             { this.props.logged_in ? (
               <Link to="/home">
                   <Image width="100px" height="100px" src={ require ('./images/bg.jpg') } alt="iwansell" responsive/>
               </Link>
             ) : (
              <Link to="/iwansell">
                   <Image width="100px" height="100px" src={ require ('./images/bg.jpg') } alt="iwansell" responsive/>
              </Link>
             )}

             </Col>

             <Col sm={4} xs={4} lgHidden mdHidden>
             { this.props.logged_in ? (
               <Link to="/home">
                   <Image width="50px" height="50px" src={ require ('./images/bg.jpg') } alt="iwansell" responsive/>
               </Link>
             ) : (
              <Link to="/iwansell">
                   <Image width="50px" height="50px" src={ require ('./images/bg.jpg') } alt="iwansell" responsive/>
              </Link>
             )}

             </Col>

           </div>
         )
       }
  }
