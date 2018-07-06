import React from 'react';
import { Row } from 'react-bootstrap';

export default class Heading extends React.Component {
       render() {
         return (
           <section className="heading">
             { this.props.trending ? ( 
                <Row>
                  <p>Trending in {this.props.title}</p>
                </Row>
             )
             : (
               <p>{this.props.title}</p>
             )}
            
           </section>
         )
       }
  }
