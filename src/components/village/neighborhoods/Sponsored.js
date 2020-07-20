import React from 'react'
import { Row, Col } from 'react-bootstrap'

import loadable from '@loadable/component'

const SponsoredGallery = loadable(() => import('./blocks/houses/Sponsored Gallery'))
const CategoryList = loadable(() => import('./blocks/houses/Category List'))
const SubcategoryIcons = loadable(() => import('./blocks/houses/Subcategory Icons'))

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
