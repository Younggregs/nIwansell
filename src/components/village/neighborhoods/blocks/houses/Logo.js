import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';


export default class Logo extends React.Component {
       render() {
         return (
           <div className="logo" id="logo">
             <Col lg={2} md={2} smHidden xsHidden>
             { this.props.logged_in ? (
               <Link to="/home">
                 <div className="logo">
                 <p>iwansell</p>
                
                    <Image className="logo-image-wrapper" width="100px" height="100px" src={ require ('./images/nicon1.png') } alt="iwansell" responsive rounded/>

                  </div>
               </Link>
             ) : (
              <Link to="/">
                <div className="logo">
                <p>iwansell</p>
                
                   <Image className="logo-image-wrapper" width="100px" height="100px" src={ require ('./images/nicon1.png') } alt="iwansell" responsive rounded/>
               
                </div>
              </Link>
             )}

             </Col>

             <Col sm={4} xs={4} lgHidden mdHidden>
             { this.props.logged_in ? (
               <Link to="/home">
                   <div className="logo-sm">
                   <p>iwansell</p>
                 
                      <Image className="logo-image-wrapper" width="100px" height="100px" src={ require ('./images/icon.png') } alt="iwansell" responsive rounded/>
                   
                </div>
               </Link>
             ) : (
              <Link to="/">
                   <div className="logo-sm">
                   <p>iwansell</p>
                   
                      <Image className="logo-image-wrapper" width="100px" height="100px" src={ require ('./images/icon.png') } alt="iwansell" responsive rounded/>
                   
                </div>
              </Link>
             )}

             </Col>

           </div>
         )
       }
  }
