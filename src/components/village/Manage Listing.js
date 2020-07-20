import React from 'react';
import { Container , Row } from 'react-bootstrap';

import loadable from '@loadable/component'

const ListingProduct = loadable(() => import('./neighborhoods/blocks/houses/Listing Product.js'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))


export default class ProductManager extends React.Component {
      render() {
        return (
           <div className="product-manager">
             <div className="search-page">
                <NavigationHeader/>
               
             <Container>
              <br /><Row>
              
              <div>
               <ListingProduct/>
              </div>
              
              </Row><br /><br />
             </Container>
             </div> 
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
