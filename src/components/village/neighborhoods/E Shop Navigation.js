import React from 'react'
import { Row,Col} from 'react-bootstrap'
import EShopSearch from './blocks/houses/E Shop Search'

export default class EShopNavigation extends React.Component {

       render() {
         return (
           <section>
               
                 <div className="eshop-navigation">
                  <Row>
                   
                    <EShopSearch eshop_name = {this.props.eshop_name} eshop_id = {this.props.eshop_id}/>
                   
                  </Row>
                  </div>
                
                <br /><br /><br />
           </section>
         )
       }
  }
