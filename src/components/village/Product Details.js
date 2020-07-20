import React from 'react'

import loadable from '@loadable/component'

const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const ProductAccomplice = loadable(() => import('./neighborhoods/blocks/houses/Product Accomplice'))
const Adsense = loadable(() => import('./neighborhoods/blocks/houses/Adsense'))
const ProductDescription = loadable(() => import('./neighborhoods/Product Description'))


export default class ProductDetails extends React.Component {

  state = {
    response : true
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')
  
    try {
      const res = await fetch('https://www.iwansell.com/api/isloggedin/', {
      
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      .then(response => {
        if (response.status === 200) {
          
        } else {
          this.setState({ response: false})
        }
      })
  
    } catch (e) {
      console.log(e);
    }

  }



      render() {
        return (
           <section>
             <div className="search-page">
                <NavigationHeader/>
                <ProductDescription product_id={this.props.match.params.product_id} logged_in = {this.state.response}/>
                <Adsense/>
                <ProductAccomplice product_id={this.props.match.params.product_id} campus_id={1}/>
             </div> 
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </section>
         )
     }
}
