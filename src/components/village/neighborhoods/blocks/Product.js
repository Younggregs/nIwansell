import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Media } from 'react-bootstrap'
import BuzzMe from './houses/Buzz Me'
import Description from './houses/Description'
import ProductImage from './houses/Product Image'

export default class Product extends React.Component {
       render() {
         return (
           <section className="product">
               <Col lg={6} md={6} sm={12} xs={12}>
               <Media>
                <Media.Left>
                <Link to="/product">
                <ProductImage/>
                </Link>
                </Media.Left>
                <Media.Body>
                <Media.Heading><BuzzMe/></Media.Heading>
                <Link to="/product">
                <Description/>
                </Link>
                <span className="glyphs"><div glyph="star-empty"/></span>
                <BuzzMe/>
                </Media.Body>
                </Media>
               </Col>

               <Col lg={6} md={6} sm={12} xs={12}>
               <Media>
                <Media.Left>
                <Link to="/product">
                <ProductImage/>
                </Link>
                </Media.Left>
                <Media.Body>
                <Media.Heading><BuzzMe/></Media.Heading>
                <Link to="/product">
                <Description/>
                </Link>
                <span className="glyphs"><div glyph="star-empty"/></span>
                <BuzzMe/>
                </Media.Body>
                </Media>
               </Col>
           </section>
         )
       }
  }
