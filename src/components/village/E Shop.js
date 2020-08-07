import React from 'react'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import EShopNavigation from './neighborhoods/E Shop Navigation';
import EShopProduct from './neighborhoods/E Shop Product';
import CatchBoard from './neighborhoods/blocks/houses/Catch Board';
import EShopAdmin from './neighborhoods/blocks/houses/E Shop Admin';
import EshopInfo from './neighborhoods/blocks/houses/E Shop Info';

import loadable from '@loadable/component'

/* const EShopNavigation = loadable(() => import('./neighborhoods/E Shop Navigation'))
const EShopProduct = loadable(() => import('./neighborhoods/E Shop Product'))
const CatchBoard = loadable(() => import('./neighborhoods/blocks/houses/Catch Board'))
const EShopAdmin = loadable(() => import('./neighborhoods/blocks/houses/E Shop Admin'))
const EshopInfo = loadable(() => import('./neighborhoods/blocks/houses/E Shop Info'))
*/

export default class EShop extends React.Component {

  state = {
    isLoading: false,
    eshop : {},
    my_eshop : true,
    media: null
}

async componentWillMount() {

  this.setState({ isLoading: true})

try {
  const res = await fetch('https://www.iwansell.com/api/eshop/' + this.props.match.params.eshop_id);
  const eshop = await res.json();
  this.setState({
    eshop
  });
} catch (e) {
  console.log(e);
}

const auth = localStorage.getItem('auth_code')

try {
  const res = await fetch('https://www.iwansell.com/api/ismyeshop/' + this.props.match.params.eshop_id + '/', {

    credentials: 'same-origin',
    mode: 'cors',
    headers : {
      'Authorization' : 'Token ' + auth,

    },

  });
  const my_eshop = await res.json();
  this.setState({
    my_eshop
  });
} catch (e) {
  console.log(e);
}

this.setState({ isLoading: false })


}



setMedia(media_name){
  this.state.media = 'https://www.iwansell.com' + media_name
}

      render() {

        return (
           <div className="landing-page">
                {this.state.isLoading ? (
                      <div className="isloading">
                      <p><b><i>loading...</i></b></p>
                      <p><Spinner color="#ff0000" size={32}/></p>
                      </div>
                    ) : (
                      <EShopNavigation eshop_name = {this.state.eshop.name} eshop_id = {this.props.match.params.eshop_id}/>
                    )}
                   {this.setMedia(this.state.eshop.catch_board)}
                  <CatchBoard media = {this.state.media}/>
                  {/*
                  { this.state.my_eshop ? (
                    <EShopAdmin eshop_id = {this.props.match.params.eshop_id} about = {this.state.eshop.about}/>
                  ) : (
                      <EshopInfo eshop_id = {this.props.match.params.eshop_id} about = {this.state.eshop.about}/>
                  )}
                  */}


                {this.state.isLoading ? (
                    <div className="isloading">
                    <p><b><i>loading...</i></b></p>
                    <p><Spinner color="#ff0000" size={32}/></p>
                    </div>
                  ) : (  
                  <EShopProduct eshop_id = {this.props.match.params.eshop_id}/>
                )}

                  

                  </div>
         )
     }
}
