import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Row, Form, ControlLabel, FormControl, Button, Image, FormGroup, Glyphicon, InputGroup} from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import BuzzMe from './neighborhoods/blocks/houses/Buzz Me'
import FloatingActionButton from './neighborhoods/blocks/houses/Floating Action'

export default class Listings extends React.Component {

    state = {
        isLoading: true,
        listings : [],
        categorylist: [],
        media: null
    }


  async componentDidMount() {
       this.setState({ isLoading: true})
        try {
          const res = await fetch('https://www.iwansell.com/api/listings/' +  this.props.match.params.campus_id + '/');
          const listings = await res.json();
          this.setState({
            listings
          });
        } catch (e) {
          console.log(e);
        }


        try {
          const res = await fetch('https://www.iwansell.com/api/category/');
          const categorylist = await res.json();
          this.setState({
            categorylist
          });
        } catch (e) {
          console.log(e);
        }


        this.setState({ isLoading: false })
  }








async submitForm(){

        this.setState({ isLoading: true })
        var listing = document.getElementById("listing").value

        var formData = new FormData()
        formData.append("listing", listing)

        try {
            const res = await fetch('https://www.iwansell.com/api/listings/' + this.props.match.params.campus_id + '/', {

             body: formData,
             method: 'POST'

            });
            const listings = await res.json();
            this.setState({
              listings
            });
          } catch (e) {
            console.log(e);
          }

          this.setState({ isLoading: false })

}



async sortByCategory(id){
    this.setState({ isLoading: true })
  
    if(id){
        try {
            const res = await fetch('https://www.iwansell.com/api/listing_category/' + this.props.match.params.campus_id + '/' + id + '/');
            const listings = await res.json();
            this.setState({
              listings
            });
          } catch (e) {
            console.log(e);
          }
    }else{
        var e = document.getElementById("category");
        var category_id = e.options[e.selectedIndex].value;

        try {
            const res = await fetch('https://www.iwansell.com/api/listing_category/' + this.props.match.params.campus_id + '/' + category_id + '/');
            const listings = await res.json();
            this.setState({
              listings
            });
          } catch (e) {
            console.log(e);
          }

    }

    this.setState({ isLoading: false })

}




emptyResult(){

    var empty_set = false

    if(this.state.listings.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }


  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }







       render() {
         return (
           <section>
               <FloatingActionButton/>
           <div className="menu-navigation">
            

           <Col lg={3} md={3} sm={12} xs={12}>
            <p>Iwansell Listings</p>
           </Col>

            <Form inline>

           <FormGroup>
    <InputGroup>
    <FormControl
       id="listing"
       type="text"
       name="listing"
       placeholder="Search Listing"
       size="50"
       inputRef={(ref) => { this.inputSearchPhrase = ref; }}
       />


      <InputGroup.Button>
        <Button onClick={this.submitForm.bind(this)}><Glyphicon glyph="search"/></Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
           </Form>
             </div>

             <br /><br /><br />

        <Row>
          <Col lg={3} lgOffset={1} md={3} mdOffset={1} smHidden xsHidden>
          <div className="eshop-category-menu">
          <p className="eshop-category-header">Sort Listings By Category</p>
          <p>
              <Button onClick={this.sortByCategory.bind(this, 99)}>
                All Categories
              </Button>
            </p>
          {this.state.categorylist.map(item => (

            <p>
              <Button onClick={this.sortByCategory.bind(this, item.id)}>
                {item.name}
              </Button>
            </p>

          ))}

          </div>
          </Col>

        
          <Col lgHidden mdHidden sm={12} xs={12}>
              <Form>
              <FormGroup>
                    <ControlLabel>Sort Listings by Category</ControlLabel>
                <p>
                    {this.state.isLoading ? (
                    <div>
                        <p><b><i>Fetching Categories</i></b></p>
                            <p><Spinner color="#ff0000" size={32}/></p>
                        </div>
                    ) : (
                    <div/>
                    )}
                </p>
            <FormControl 
                componentClass="select"
                placeholder="select" 
                id="category" 
                name="category"
                onChange={this.sortByCategory.bind(this, false)}>
                <option value="99">All Categories</option>
            {this.state.categorylist.map(item => (
                <option value={item.id}>{item.name}</option>
            ))}
            </FormControl>
            </FormGroup>
            </Form>
          </Col>


          <Col lg={4} lgOffset={1} md={4} mdOffset={1} sm={12} xs={12}>
          {this.state.isLoading ? (
            <div className="isloading">
            <p><b><i>loading...</i></b></p>
            <p><Spinner color="#ff0000" size={32}/></p>
            </div>
          ) : (
            <div className="eshop-list">

             <div className="menu-header">
              <p>Listings - What People Need</p>
             </div>

             {this.emptyResult() ? (

                 <p className="err-msg">No result found</p>

             ) : (

               <span>

               {this.state.listings.map(item => (
                  <span>
                      {this.setMedia(item.product_image)}
                  <hr />
                  <div>
                  <p style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>I NEED: {item.product_name}</p>
                  <p><b>LIKE SO:</b> {item.product_description}</p>
                  <p><b>MY BUDGET:</b> {item.budget}</p>
                  <p style={{ textAlign: 'center'}}><b>LOOKS LIKE THIS:</b> <Image width="auto" height="400px" src={ `${this.state.media}` } alt="product image" responsive/></p>
                  <hr />
                  
                       <Row>
                       <Col lg={6} md={6} sm={6} xs={6}>
                           <a href={ 'https://api.whatsapp.com/send?phone=' + item.phone}>
                                <div className="contact-button">Whatsapp<Glyphicon glyph="envelope"/></div>
                           </a>
                       </Col>
                       <Col lg={6} md={6} sm={6} xs={6}>
                        <a href={ `tel:${item.phone}`}>
                            <div className="contact-button">Phone<Glyphicon glyph="phone"/></div>
                        </a>
                           
                       </Col>
                       </Row>

                  </div>
                  <hr />
                  </span>
               ))}

               </span>

             )}



             </div>
          )}

          </Col>
        </Row>


           </section>
         )
       }
  }
