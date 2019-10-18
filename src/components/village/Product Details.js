import React from 'react'
import Navigation from './neighborhoods/Navigation'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import ProductDescription from './neighborhoods/Product Description'
import NavigationHeader from './neighborhoods/blocks/Navigation Header'
import Post from './neighborhoods/blocks/houses/Post'
import ProductAccomplice from './neighborhoods/blocks/houses/Product Accomplice'
import MobileApp from './neighborhoods/blocks/houses/Mobile App'
import Adsense from './neighborhoods/blocks/houses/Adsense'


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
                <Post logged_in = {this.state.response}/>
                <ProductDescription product_id={this.props.match.params.product_id} logged_in = {this.state.response}/>
                <MobileApp/>
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
