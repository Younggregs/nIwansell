import React from 'react'
import { Col, Row, Form, Container, Image, InputGroup, Button } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class SearchView extends React.Component {

  state = {
    isLoading: false,
    categorylist: [],
    search_result: [],
    search_phrase: "",
    category_id: 99,
    media: null,
    is_search: false,

  };

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.searchResult()
    }
  }


  async componentDidMount() {
    try {
      const res = await fetch('https://www.iwansell.com/api/category/');
      const categorylist = await res.json();
      this.setState({
        categorylist
      });
    } catch (e) {
      console.log(e);
    }
  }

  async searchResult() {

    var formData = new FormData()
    formData.append('search_phrase', this.state.search_phrase)

    this.setState({ isLoading: true })


    try {
      const res = await fetch('https://www.iwansell.com/api/search/' + this.props.campus_id + '/' + this.state.category_id + '/',{

      body : formData,
      method: 'POST'

      });
      const search_result = await res.json();
      this.setState({
        search_result
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })
  }


  setSearchPhrase(search_phrase){
      this.state.search_phrase = search_phrase;
      this.state.is_search = true;
      this.searchResult();

  }

  getSearchPhrase(){
    var search_phrase = document.getElementById("search_phrase").value;
    this.setSearchPhrase(search_phrase);

  }

  getSearchPhrase2(){
    var search_phrase_sm = this.inputSearchPhrase.value
    this.setSearchPhrase(search_phrase_sm);
  }


  setCategoryId(category_id){
    this.state.category_id = category_id;

}

getCategoryId(){
  var category_id = document.getElementById("category_id").value;
  this.setCategoryId(category_id);

}


setMedia(media_name){
  this.state.media = 'https://www.iwansell.com/media/' + media_name
}

emptyResult(){

  var empty_set = false

  if(this.state.search_result.length <= 0 ){
    empty_set = true
  }

  return empty_set


}


       render() {

         return (
           <Container>
           <section className="search-field">
    
        <Col lg={12} md={12} smHidden xsHidden>

          <Row className="justify-content-md-center">
            <Col lg={6} md={6} smHidden xsHidden>

            <InputGroup>
            <Form.Control
              size="lg"
              id="search_phrase"
              type="text"
              cols="50"
              name="search_phrase"
              aria-describedby="basic-addon1"
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.searchResult()
                }
              }}
              inputRef={(ref) => { this.inputSearchPhrase = ref; }}
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Append>
                <Button variant="warning" onClick={this.getSearchPhrase.bind(this)}>Search</Button>
            </InputGroup.Append>
          </InputGroup>

            </Col>
          </Row>
           <Form>
           </Form>

           <section className="result-view">
          {this.state.is_search ? (
         <div>
           {this.state.isLoading ? (
             <Spinner/>
           ) : (
            <div>
            <br /><br />

            {this.emptyResult() ? (
              <p className="err-msg">No result found for <i>{this.state.search_phrase}</i></p>
            ) : (
              <span></span>
            )}


            <Row className="justify-content-md-center">
            {this.state.search_result.map(item => (
             <Col lg={3} md={3} sm={6} xs={12}>
              <div className="manage-product">
              <div className="product-image">
                <div class="image">
                  {this.setMedia(item.product_image)}
                  <Image href={"product/" + item.product_id }  alt="product-image" src= { `${this.state.media}` }/>
                </div></div>
                <Button variant='outline-dark'>{item.product_name}</Button><br />
                <Button variant='dark'>{item.starting_price}</Button>
             </div>
             </Col>

            ))}
            </Row>

           </div>
           )}
          </div>
          ) : (
            <div></div>
          )}
            </section>

           </Col>
           </section>
           </Container>
         )
       }
  }
