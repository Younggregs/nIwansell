import React from 'react'
import { Row,Col} from 'react-bootstrap'
import EShopSearch from './blocks/houses/E Shop Search'
import EShopName from './blocks/houses/EShop Name'

export default class EShopNavigation extends React.Component {

       render() {
         return (
           <section>
               

                 <Col lg={12} md={12} smHidden xsHidden>
                 <div className="eshop-navigation">
                  <Row>
                   
                    <EShopSearch eshop_name = {this.props.eshop_name} eshop_id = {this.props.eshop_id}/>
                     
                   
                  </Row>
                  </div>
                  </Col>


                  <div className="sm-eshop-navigation">
                  <Col sm={12} xs={12} lgHidden mdHidden>
                  <Row>
                   <Col sm={12} xs={12}>
                     <div className="smaller">
                     <EShopName eshop_name = {this.props.eshop_name}/>
                     </div>
                    </Col>
                  </Row>
                  <Row>
                  <Col sm={12} xs={12}>
                     
                    <EShopSearch eshop_name = {this.props.eshop_name} eshop_id = {this.props.eshop_id}/>
                     
                    </Col>
                  </Row>

                 
                  </Col>
                  </div>


                
                <br /><br /><br />
           </section>
         )
       }
  }
