import React from 'react';

export default class Desription extends React.Component {
       render() {
         return (
           <section className="desription">
             <p>{this.props.description}</p><br />
           </section>
         )
       }
  }
