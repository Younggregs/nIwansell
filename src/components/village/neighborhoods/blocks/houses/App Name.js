import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default class AppName extends React.Component {
       render() {
         return (
           <div className="app-name" id="app-name">
             <Col lg={2} md={2} sm={4} xs={4}>
             { this.props.logged_in ? (
               <Link to="/home">
                  <span>Iwansell</span>
               </Link>
             ) : (
              <Link to="/">
                  <span>Iwansell</span>
              </Link>
             )}
             
             </Col>

           </div>
         )
       }
  }
