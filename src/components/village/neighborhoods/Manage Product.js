import React from 'react'
import EShopProductList from  './blocks/houses/EShop Product List'

export default class ManageProduct extends React.Component {

    title = "Products"
       render() {
         return (
           <section className="manage-product">
                <EShopProductList/>
           </section>
         )
       }
  }
