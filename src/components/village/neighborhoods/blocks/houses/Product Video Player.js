import React from 'react'
import {Col} from 'react-bootstrap'
import Heading from './Heading.js'


export default class ProductVideoPlayer extends React.Component {

  state = {
    videoClip :[]
  }

  async componentWillMount() {
    try {
        const res = await fetch('http://www.iwansell.com/api/product_video/' + this.props.product_id);
        const videoClip = await res.json();
        this.setState({
          videoClip
        });
      } catch (e) {
        console.log(e);
      }
    }


  setMedia(media_name){
    this.state.media = 'http://www.iwansell.com' + media_name
  }

       render() {

         return (
           <section className="product-video-player"> 
              <Heading title="Video Clip"/>

              <Col lg={12} md={12} smHidden xsHidden> 

              {this.setMedia(this.state.videoClip.video)}
                <img src= { `${this.state.media}` }  alt='No video clip found for this product'/>

              <video id="video-clip" width="500" height="260" preload controls>
	            <source src= { `${this.state.media}` } type="video/mp4; "/>
	            <source src= { `${this.state.media}` } type="video/ogg; "/>
	            <source src= { `${this.state.media}` } type="video/webm "/>
	                My browser does not support the video tag yet
             </video>

             </Col>



             <Col sm={12} xs={12} lgHidden mdHidden> 

              {this.setMedia(this.state.videoClip.video)}
                <img src= { `${this.state.media}` }  alt='No video clip found for this product'/>

              <video id="video-clip" preload controls>
	            <source src= { `${this.state.media}` } type="video/mp4; "/>
	            <source src= { `${this.state.media}` } type="video/ogg; "/>
	            <source src= { `${this.state.media}` } type="video/webm "/>
	                My browser does not support the video tag yet
             </video>

             </Col>

           </section>
         )
       }
  }
