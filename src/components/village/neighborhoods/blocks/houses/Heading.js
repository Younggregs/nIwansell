import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Heading extends React.Component {

       render() {
         return (
           <section>
           <Col smHidden xsHidden>
           <section className="heading-lg">
             { this.props.trending ? (
                <Row>
                  <p><i>New</i> in {this.props.title}</p>
                </Row>
             )
             : (
                <span>
                { this.props.store ? (
                  <p>{this.props.title} <span className="shelf">Shelf</span></p>
                  ) : (
                    <p>{this.props.title}</p>
                )}
                </span>

             )}
             </section>
            </Col>

            {/*}
            <Col lgHidden mdHidden>
           <section className="heading-sm">
             { this.props.trending ? (
                <Row>
                  <p><i>New</i> in {this.props.title}</p>
                </Row>
             )
             : (
                <span>
                { this.props.store ? (
                  <p>{this.props.title} <span className="shelf">Shelf</span></p>
                  ) : (
                    <p>{this.props.title}</p>
                )}
                </span>

             )}
             </section>
            </Col>
            */}


          </section>

         )
       }
  }
