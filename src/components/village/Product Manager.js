import React from 'react';
import { Grid , Row } from 'react-bootstrap';
import ProductList from './neighborhoods/blocks/houses/Product List.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';
import NavigationHeader from './neighborhoods/blocks/Navigation Header'
import Post from './neighborhoods/blocks/houses/Post'

export default class ProductManager extends React.Component {
      render() {
        return (
           <div className="product-manager">
             <div className="search-page">
                <NavigationHeader/>
                <Post/>
            
             <Grid>
              <br /><Row>
              
             
               <ProductList/>
              
              
              </Row><br /><br />
             </Grid>
             </div> 
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
