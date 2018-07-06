import React from 'react';
import { Image, Row, Col } from 'react-bootstrap'
import Heading from './Heading'
import Rating from './Rating'


export default class RatingsReviews extends React.Component {


  state = {
    rrList : []
  }

  async componentWillMount(){

    const auth = localStorage.getItem('auth_code')
  
    try {
      const res = await fetch('http://127.0.0.1:8000/rate_review/' + this.props.status_code + '/' + this.props.id  + '/', {
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const rrList = await res.json();
        this.setState({
          rrList
        });
    } catch (e) {
      console.log(e);
    }

    
  }



  setMedia(media_name){
    this.state.media = 'http://127.0.0.1:8000/media/' + media_name
  }



       render() {
         return (
           <section>

             <Heading title="Ratings and Reviews"/>

             {this.state.rrList.map(item => (

              <div className="ratings-reviews">
              {this.setMedia(item.client_image)}
             
              

              <Row>
              <div className="client-image">
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Image alt="client's-image" circle responsive  src= { `${this.state.media}` }/>
                </Col>

                <Col lg={6} md={6} sm={6} xs={6}>
                  {item.client_name}
                </Col>

               </div>
              </Row>
              <Row>
               <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={8} smOffset={2} xs={8} xsOffset={2}>
               {item.review}
               <br /><br />
               <Rating rating= {item.rating}/>
               </Col>
              </Row>

              </div>



             ))}

           </section>
         )
       }
  }
