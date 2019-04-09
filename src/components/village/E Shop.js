import React from 'react'
import EShopNavigation from './neighborhoods/E Shop Navigation'
import EShopProduct from './neighborhoods/E Shop Product'
import CatchBoard from './neighborhoods/blocks/houses/Catch Board'
import EShopAdmin from './neighborhoods/blocks/houses/E Shop Admin'
import EshopInfo from './neighborhoods/blocks/houses/E Shop Info'


export default class EShop extends React.Component {

  state = {
    eshop : {},
    my_eshop : null,
    media: null
}

async componentDidMount() {

const auth = localStorage.getItem('auth_code')

try {
  const res = await fetch('https://www.iwansell.com/api/eshop/' + this.props.match.params.eshop_id);
  const eshop = await res.json();
  this.setState({
    eshop
  });
} catch (e) {
  console.log(e);
}


try {
  const res = await fetch('https://www.iwansell.com/api/ismyeshop/' + this.props.match.params.eshop_id + '/', {

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


}



setMedia(media_name){
  this.state.media = 'https://www.iwansell.com' + media_name
}

      render() {

        return (
           <div className="eshop">

                  <EShopNavigation eshop_name = {this.state.eshop.name} eshop_id = {this.props.match.params.eshop_id}/>
                  {this.setMedia(this.state.eshop.catch_board)}
                  <CatchBoard media = {this.state.media}/>
                  { this.state.my_eshop ? (
                    <EShopAdmin eshop_id = {this.props.match.params.eshop_id} about = {this.state.eshop.about}/>
                ) : (
                    <EshopInfo eshop_id = {this.props.match.params.eshop_id} about = {this.state.eshop.about}/>
                )}

                  <EShopProduct eshop_id = {this.props.match.params.eshop_id}/>
           </div>
         )
     }
}
