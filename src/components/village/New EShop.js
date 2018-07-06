import React from 'react'
import Navigation from './neighborhoods/Navigation'
import NewEShopForm from './neighborhoods/blocks/houses/New EShop Form'

export default class NewEShop extends React.Component {
    logged_in = true
       render() {
         return (
           <section className="new-eshop">
             <Navigation logged_in = {this.logged_in}/>
             <NewEShopForm/>

           </section>
         )
       }
  }
