import React from 'react';
import { Grid , Row, Col } from 'react-bootstrap';
import Navigation from './neighborhoods/Navigation.js';
import SoldProductList from './neighborhoods/blocks/houses/Sold Product List.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';


export default class Sold extends React.Component {
      render() {
        return (
           <div className="product-manager">
             <Navigation logged_in={true}/>
             <Grid>
              <br /><Row>

              <div className="sign-in">
               <SoldProductList profile_id = {this.props.match.params.profile_id}/>
              </div>

              </Row><br /><br />
             </Grid>
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
