import React from 'react'
import { Image } from 'react-bootstrap'

export default class ProductImage extends React.Component {

       render() {
         return (
           <section className="product-image">
             <div class="image">
               {this.props.media ? (
                 <Image src= { `${this.props.media}` } alt="product_image" responsive/>
               ) : (
                <div glyph="user"/>
               )}
              </div>
           </section>
         )
       }
  }
