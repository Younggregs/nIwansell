import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SponsoredGallery from './blocks/houses/Sponsored Gallery'
import CategoryList from './blocks/houses/Category List'
import SubcategoryIcons from './blocks/houses/Subcategory Icons'

export default class Sponsored extends React.Component {

       render() {

         return (
           <section>

              <Row>
                <Col lg={3} md={3} smHidden xsHidden>
                  <CategoryList/>
                </Col>

                <Col lg={9} md={9} sm={12} xs={12}>
                  <SponsoredGallery title={this.props.title} campus_id={this.props.campus_id}/>
                </Col>

              </Row>
              <Row>
               <SubcategoryIcons/>
             </Row>


           </section>
         )
       }
  }
