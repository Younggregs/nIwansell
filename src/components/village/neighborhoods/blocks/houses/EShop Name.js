import React from 'react';


export default class EShopName extends React.Component {
       render() {
         return (
           <section className="eshop-name">
           <span>{this.props.eshop_name}</span>
           </section>
         )
       }
  }
