import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import EShopNavigation from './E Shop Navigation'
import RateReviewForm from './blocks/houses/Rate Review Form'
import RatingsReviews from './blocks/houses/Ratings Reviews'

export default class RateReview extends React.Component {
    logged_in = true
       render() {
         return (
           <section className="rate-review">
           {this.props.eshop_name ? (
             <EShopNavigation eshop_id = {this.props.id} eshop_name={this.props.eshop_name}/>
           ) : (
             <span></span>
           )}
             
             <Grid>
                 <Row>
                     <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                        <RateReviewForm status_code={this.props.status_code} id={this.props.id}/>
                        <RatingsReviews status_code={this.props.status_code} id={this.props.id}/>
                     </Col>
                 </Row>
             </Grid>     
           </section>
         )
       }
  }
