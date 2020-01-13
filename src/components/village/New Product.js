import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import NewProductForm from './neighborhoods/blocks/houses/New Product Form.js';
import NewEShopProductForm from './neighborhoods/blocks/houses/New EShop Product Form'
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';

export default class NewProduct extends React.Component {

  state = {
    eshop_exist: true,
    isLoading: false
  }

  async componentDidMount() {

    this.setState({ isLoading: true})
    
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/eshop_exist/',{

        headers : {
          'Authorization' : 'Token ' + auth,

        },

      } );
      const eshop_exist = await res.json();
      this.setState({
        eshop_exist
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false})


  }


      render() {
        return (
           <div className="product-manager">
             
             <Container>
              <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <div>
                {this.state.eshop_exist.eshop_exist ? (
                  <NewEShopProductForm/>
                ) : (
                  <NewProductForm/>
                )}
               
              </div>
              </Col>
              </Row><br /><br />
             </Container>
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
