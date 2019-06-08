import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Col, Row, Form, Thumbnail, FormGroup,FormControl,InputGroup,Glyphicon, Button,ControlLabel,HelpBlock} from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';



export default class SearchField extends React.Component {

  state = {
    isLoading: false,
    categorylist: [],
    category_id: 99,
    media: null,
    is_search: false,
    control: false

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



check(){
  this.setState({ control : true })
}



       render() {

         return (
           <section className="search-field">
             {this.state.control && (
               <Redirect to='/search_page'/>
             )}
             <Col lg={12} md={12} smHidden xsHidden>
           <Form inline>

           <FormGroup>
               <FormControl componentClass="select" placeholder="select" id="category_id" name="category_id">
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
                  size="50"
                  onFocus={this.check.bind(this)}
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.check.bind(this)
                    }
                  
                  }}
              />

            <Button onClick={this.check.bind(this)}><Glyphicon glyph="search"/></Button>
            </FormGroup>
           </Form>
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
       onFocus={this.check.bind(this)}
       onKeyPress={event => {
        if (event.key === 'Enter') {
          this.check.bind(this)
        }
      }}
       inputRef={(ref) => { this.inputSearchPhrase = ref; }}
       />


      
      <InputGroup.Button>
        <Button onClick={this.check.bind(this)}><Glyphicon glyph="search"/></Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>



           </Form>
           </Col>
           </section>
         )
       }
  }
