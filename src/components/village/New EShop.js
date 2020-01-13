import React from 'react'
import NavigationHeader from './neighborhoods/blocks/Navigation Header'
import NewEShopForm from './neighborhoods/blocks/houses/New EShop Form'

export default class NewEShop extends React.Component {
    logged_in = true
       render() {
         return (
           <section className="new-eshop">
             <NavigationHeader logged_in = {this.logged_in}/>
             <NewEShopForm/>

           </section>
         )
       }
  }
