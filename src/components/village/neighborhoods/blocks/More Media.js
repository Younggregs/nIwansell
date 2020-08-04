import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import loadable from '@loadable/component'

const ProductSlideShow = loadable(() => import('./houses/Product SlideShow'))
const ProductVideoPlayer = loadable(() => import('./houses/Product Video Player'))


export default class MoreMedia extends React.Component {

  state = {
    switch_media: true,
  };


  switchMedia(){
    if (this.state.switch_media == false){
       this.state.switch_media = true
       this.setState({ switch_media: true })
    }else{
      this.state.switch_media = false
      this.setState({ switch_media: false })
    }
          
  }



       render() {
         return (
           <Container fluid="true">
                <Row className="justify-content-md-center">
                    <ProductSlideShow product_id = {this.props.product_id}/>

                {/*
               <Col lg={6} md={6}>
                <ProductVideoPlayer product_id = {this.props.product_id}/>
               </Col>
                */}

               </Row>


              {/*}
              <Col sm={12} xs={12} lgHidden mdHidden>
              {this.state.switch_media ? ( 
                <div>
                <Row>
                <Col sm={6} xs={6}>
                  <Button bsStyle="primary">More Images</Button>  
                </Col>
                <Col sm={6} xs={6}>
                  <Button onClick={this.switchMedia.bind(this)}>Video Clip</Button>  
                </Col>
                </Row>

                <Row>
                  <Col sm={10} smOffset={1} xs={10} xsOffset={1}>
                    <ProductSlideShow product_id = {this.props.product_id}/>
                </Col>
                </Row>
                </div>
              ) : (
                <div>
                <Row>
                <Col sm={6} xs={6}>
                  <Button onClick={this.switchMedia.bind(this)}>More Images</Button>  
                </Col>
                <Col sm={6} xs={6}>
                  <Button bsStyle="primary" >Video Clip</Button>  
                </Col>
                </Row>

                <Row>
                  <Col sm={10} xs={10}>
                    <ProductVideoPlayer product_id = {this.props.product_id}/>
                </Col>
                </Row>
                </div>

              )}
              </Col>

              */}
           </Container>
         )
       }
  }
