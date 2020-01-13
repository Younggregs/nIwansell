import React from 'react';
import { Container , Row } from 'react-bootstrap';
import ListingProduct from './neighborhoods/blocks/houses/Listing Product.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';
import NavigationHeader from './neighborhoods/blocks/Navigation Header'


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
