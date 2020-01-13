import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchField from './Search Field'

export default class SlideImage extends React.Component {
       render() {
         return (
           <div className="slide-image" id="slide-image">
            <Row className="justify-content-md-center">
             <Col lg={8} md={8}>
                <SearchField logged_in={this.props.logged_in} campus_id = {this.props.campus_id}/>
             </Col>
             { /*
             <Col lgHidden mdHidden sm={8} smOffset={2} xs={8} xsOffset={2}>
                <SearchField logged_in={this.props.logged_in} campus_id = {this.props.campus_id}/>
             </Col>
             */}
             </Row>
           </div>
         )
       }
  }
