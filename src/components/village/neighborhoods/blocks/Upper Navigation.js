import React from 'react'
import { Row,Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './houses/Logo'
import UpperNavigationRoutes from './Upper Navigation Routes'
import Slogan from './houses/Slogan'
import AppName from './houses/App Name'
import Post from './houses/Post'


export default class UpperNavigation extends React.Component {

       render() {
         return (
           <section>

             <Row>
               <Col lg={8} lgOffset={2} md={8} mdOffset={2} smHidden xsHidden>
               
               <Row>

              {this.props.logged_in ? (
                 <UpperNavigationRoutes logged_in={this.props.logged_in} campus_id = {this.props.campus_id}/>
              ) :
              (
                <UpperNavigationRoutes campus_id = {this.props.campus_id}/>
              )}

               </Row>
              
              </Col>

              <Col lgHidden mdHidden sm={12} xs={12}>
              <Row>
              {this.props.logged_in ? (
                 <UpperNavigationRoutes logged_in={this.props.logged_in} campus_id = {this.props.campus_id}/>
              ) :
              (
                <UpperNavigationRoutes campus_id = {this.props.campus_id}/>
              )}

              </Row>
              </Col>
            </Row>

           </section>
         )
       }
  }
