import React from 'react'
import RateReview from './neighborhoods/Rate Review'

export default class ClientRR extends React.Component {
    logged_in = true
       render() {
         return (
           <section className="client-rr">
             <RateReview status_code= '0' id={this.props.match.params.id}/>
           </section>
         )
       }
  }
