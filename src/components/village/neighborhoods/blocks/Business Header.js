import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class BusinessHeader extends React.Component {

       render() {
         return (
           <section>
           {this.props.seller ? (
               <div className="seller-business-header">
                    Iwansell Business
                </div>
           ) : (
                <div className="buyer-business-header">
                    Iwansell Business
                </div>
           )}

          </section>

         )
       }
  }
