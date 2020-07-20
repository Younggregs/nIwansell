import React from 'react';
import { Container , Row } from 'react-bootstrap';

import loadable from '@loadable/component'

const Navigation = loadable(() => import('./neighborhoods/Navigation.js'))
const SoldProductList = loadable(() => import('./neighborhoods/blocks/houses/Sold Product List.js'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))


export default class Sold extends React.Component {
      render() {
        return (
           <div className="product-manager">
             <Navigation logged_in={true}/>
             <Container>
              <br /><Row>

              <div className="sign-in">
               <SoldProductList profile_id = {this.props.match.params.profile_id}/>
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
