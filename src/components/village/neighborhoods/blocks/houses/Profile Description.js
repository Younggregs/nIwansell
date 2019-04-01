import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Button } from 'react-bootstrap'

export default class ProfileDescription extends React.Component {


  constructor(props) {
    super(props)
    this.state = {value: 3, isfavorited: false}
  }



  async favorite(){

    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('http://165.22.140.170:8000/api/favorite/0/' + this.props.profile_id + '/', {

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const isfavorited = await res.json();
        this.setState({
          isfavorited
        });
    } catch (e) {
      console.log(e);
    }

  }



       render() {

        var Rating = require('react-rating');

         return (
           <section className="profile-description" id="profile-description">

              <p className="profile-name">{this.props.firstname} {this.props.lastname}</p>

            { this.props.is_myprofile ? (

              <div>
                <p>

              <span className="heart-glyphs">
               <Rating
                emptySymbol="glyphicon glyphicon-heart-empty"
                fullSymbol="glyphicon glyphicon-heart"
                {...this.props} initialRating={this.state.value} readonly quiet/>
               </span>

                </p>

                  <p>
                  <Link to ={`/editprofile/${ this.props.profile_id }`}>
                       Edit Profile
                    </Link>
                  </p>

                  <p>
                 <Link to ={`/bank_account/${ this.props.profile_id }`}>
                      Manage Banking Details
                   </Link>
                 </p>

              <p>
               <Link to="/newproduct">
                Add New Product
               </Link>
              </p>


              <p>
               <Link to="/productmanager">
                Sell your product
               </Link>
              </p>

              </div>

            ) : (

              <div>
                <p>Favorite Me
                 {this.state.isfavorited ? (
                   <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star"/></span></Button>
                 ) : (
                   <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star-empty"/></span></Button>
                 )}

                </p>
                <p>

               <Link to ={`/client_rr/${ this.props.profile_id }`}>
               Rating[Reviews]
               <span className="heart-glyphs">
               <Rating
                emptySymbol="glyphicon glyphicon-heart-empty"
                fullSymbol="glyphicon glyphicon-heart"
                {...this.props} initialRating={this.state.value} readonly quiet/>
               </span>

                  </Link>

              </p>
              </div>

            )}




              <p>
              <Link to={`/favorite_client/${ this.props.profile_id }`}>
                Favorites
               </Link>
              </p>


              <p>
              <Link to={`/sold/${ this.props.profile_id }`}>
                Sold products
               </Link>
              </p>

              <p>
              <Link to={`/bought/${ this.props.profile_id }`}>
                Bought products
               </Link>
              </p>








           </section>
         )
       }
  }
