import React from 'react';
import { Container , Row } from 'react-bootstrap';

import loadable from '@loadable/component'

const ProductList = loadable(() => import('./neighborhoods/blocks/houses/Product List.js'))
const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const Post = loadable(() => import('./neighborhoods/blocks/houses/Post'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))

export default class ProductManager extends React.Component {
      render() {
        return (
           <div className="product-manager">
             <div className="search-page">
                <NavigationHeader/>
                <Post/>
            
             <Container>
              <br /><Row>
              
             
               <ProductList/>
              
              
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
