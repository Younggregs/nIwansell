import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import Navigation from './neighborhoods/Navigation.js';
import BoughtProductList from './neighborhoods/blocks/houses/Bought Product List.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';


export default class Bought extends React.Component {
      render() {
        return (
           <div className="product-manager">
             <Navigation logged_in={true}/>
             <Container>
              <br /><Row>

              <div className="sign-in">
               <BoughtProductList profile_id = {this.props.match.params.profile_id}/>
              </div>

              </Row><br /><br />
             </Container>
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
