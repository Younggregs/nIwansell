import React from 'react'
import { Col, Row, Form, Thumbnail, FormGroup,FormControl,InputGroup,Glyphicon, Button,ControlLabel,HelpBlock} from 'react-bootstrap'

export default class SearchField extends React.Component {

  state = {
    categorylist: [],
    search_result: [],
    search_phrase: "",
    category_id: 99,
    media: null,
    is_search: false,

  };

  async componentDidMount() {
    try {
      const res = await fetch('http://199.192.21.172:8000/category/');
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


    try {
      const res = await fetch('http://199.192.21.172:8000/search/' + this.props.campus_id + '/' + this.state.category_id + '/',{

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
  this.state.media = 'http://199.192.21.172:8000/media/' + media_name
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
           <section className="search-field">
             <Col lg={8} md={8} smHidden xsHidden>
           <Form inline>

           <FormGroup>
               <FormControl componentClass="select" placeholder="select" id="category_id" name="category_id" onChange={ this.getCategoryId.bind(this) }>
               <option value="99">All categories</option>
               {this.state.categorylist.map(item => (
               <option value={item.id}>{item.name}</option>
               ))}
              </FormControl>

      <FormControl
       type="text"
       id="search_phrase"
       name="search_phrase"
       placeholder="Search for anything...  try 'flash drive'"
       size="50"/>




            <Button onClick={this.getSearchPhrase.bind(this)}><Glyphicon glyph="search"/></Button>
            </FormGroup>
           </Form>

           <Row>
       {this.state.is_search ? (
           <div>
            <br /><br />
            {this.emptyResult() ? (
              <p className="err-msg">No result found for <i>{this.state.search_phrase}</i></p>
            ) : (
              <span></span>
            )}
            {this.state.search_result.map(item => (
             <Col lg={4} md={4} smHidden xsHidden>
             {this.setMedia(item.product_image)}
             <Thumbnail href={"product/" + item.product_id }  alt="product-image" src= { `${this.state.media}` }>
             <h3>{item.product_name}</h3>
              <p className="lg-fonts">Starting price : {item.starting_price}</p>
             </Thumbnail>
             </Col>

    ))}

           </div>
          ) : (
            <div></div>
          )}
            </Row>

           </Col>



           <Col xs={12} sm={12} lgHidden mdHidden>
           <Form inline>

      <FormGroup>
    <InputGroup>
    <FormControl
       id="search_phrase_sm"
       type="text"
       name="search_phrase_sm"
       placeholder="Search for anything...  try 'flash drive'"
       inputRef={(ref) => { this.inputSearchPhrase = ref; }}
       />


      <InputGroup.Button>
        <Button onClick={this.getSearchPhrase2.bind(this)}><Glyphicon glyph="search"/></Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>



           </Form>

        <Row>
       {this.state.is_search ? (
           <div>
             <br /><br />
             {this.emptyResult() ? (
              <p className="err-msg">No result found for <i>{this.state.search_phrase}</i></p>
            ) : (
              <span></span>
            )}
            {this.state.search_result.map(item => (
             <Col sm={10} smOffset={1} xs={10} xsOffset={1}>
             {this.setMedia(item.product_image)}
             <Thumbnail href={"product/" + item.product_id } alt="product-image" src= { `${this.state.media}` }>
             <h3>{item.product_name}</h3>
              <p className="sm-fonts">Starting price : {item.starting_price}</p>
             </Thumbnail>
             </Col>


    ))}

           </div>
          ) : (
            <div></div>
          )}
           </Row>
           </Col>
           </section>
         )
       }
  }
