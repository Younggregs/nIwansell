import React from 'react'
import EShopShore2 from './blocks/EShop Store 2'

export default class EShopStore extends React.Component {

  state = {
    eshop_store: [],
    subcategory: [],
    subcategory_id: null,
    media : null
  }



  async componentWillMount() {
    try {
      const res = await fetch('http://199.192.21.172:8000/eshop_subcategory/' + this.props.eshop_id );
      const subcategory = await res.json();
      this.setState({
        subcategory
      });
    } catch (e) {
      console.log(e);
    }


  }



  setMedia(media_name){
    this.state.media = 'http://199.192.21.172:8000' + media_name
  }


       render() {
         return (
           <section className="trending">

                { this.state.subcategory.map(item =>

                   <EShopShore2 eshop_id={this.props.eshop_id} name = {item.name} id={item.id}/>
                )}
           
           </section>
         )
       }
  }
