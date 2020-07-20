import React from 'react'

import loadable from '@loadable/component'

const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const NewEShopForm = loadable(() => import('./neighborhoods/blocks/houses/New EShop Form'))

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
