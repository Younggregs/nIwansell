import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default class AppName extends React.Component {
       render() {
         return (
           <div className="app-name" id="app-name">
             <Col lg={2} md={2} smHidden xsHidden>
             { this.props.logged_in ? (
               <Link to="/home">
                  <span>iwansell</span>
               </Link>
             ) : (
              <Link to="/iwansell">
                  <span>iwansell</span>
              </Link>
             )}
             
             </Col>

             <Col sm={4} xs={4} lgHidden mdHidden>
             { this.props.logged_in ? (
               <Link to="/home">
                  <span>iwansell</span>
               </Link>
             ) : (
              <Link to="/iwansell">
                  <span>iwansell</span>
              </Link>
             )}
             
             </Col>

           </div>
         )
       }
  }
