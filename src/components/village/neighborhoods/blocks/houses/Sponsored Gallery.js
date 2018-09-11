import React from 'react'

export default class SponsoredGallery extends React.Component {

	state = {
    sponsoredList: [],
    media: null
  }

  async componentWillMount() {
    try {
      const res = await fetch('http://199.192.21.172:8000/sponsored/');
      const sponsoredList = await res.json();
      this.setState({
        sponsoredList
      });
    } catch (e) {
      console.log(e);
    }

  }

  setMedia(media_name){
    this.state.media = 'http://199.192.21.172:8000' + media_name
  }

  switchMedia(){
    this.state.count = this.state.count + 1
    this.state.id = 'id' + this.state.count
  }

  defaultImage(){
      if(this.state.count == 2){
        return true
      }

      return false
  }



       render() {

        const galleryMedia = (
          <div>
          {this.state.sponsoredList.map(item => (
            <span>
            {this.setMedia(item.product_image)}
            {this.switchMedia()}

            {this.state.defaultImage ? (
              <span>
              <input type="radio" name="slide_switch" id={this.state.id} checked="checked"/>
              <label for={this.state.id}>
              <img src= { `${this.state.media}` } with="100"/>
            </label>
            <img src= { `${this.state.media}` }/>
                </span>
            ) : (
              <span>
              <input type="radio" name="slide_switch" id={this.state.id}/>
              <label for={this.state.id}>
              <img src= { `${this.state.media}` } width="100"/>
            </label>
            <img src= { `${this.state.media}` }/>
            </span>
            )}

            </span>
         )
        )}
        </div>
         );

         return (galleryMedia)
       }
  }
