import React from 'react';
import { Image } from 'react-bootstrap';

export default class ProfileImage extends React.Component {
       render() {
         return (
          <section className="profile-image">
           <div class="dp-image">
          {this.props.media ? (
           <Image src= { `${this.props.media}` } alt="product_image" responsive/>
          ) : (
           <Image src={ require ('./images/hat.jpg') } alt="product_image"/>
          )}
          </div>
      </section>
         )
       }
  }
