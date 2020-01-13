import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Col, Row, Form, InputGroup,  Button } from 'react-bootstrap'
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

          <Col lg={12} md={12}> 
           <Form>

           <InputGroup>
            <Form.Control
              size="lg"
              id="search_phrase_sm"
              type="text"
              cols="50"
              name="search_phrase_sm"
              placeholder="Search for anything..."
              aria-describedby="basic-addon1"
              onFocus={this.check.bind(this)}
              onKeyPress={event => {
               if (event.key === 'Enter') {
                 this.check.bind(this)
               }
             }}
              inputRef={(ref) => { this.inputSearchPhrase = ref; }}
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Append>
                <Button variant="warning" onClick={this.check.bind(this)}>Search</Button>
            </InputGroup.Append>
          </InputGroup>

          </Form>
           </Col>


          {/*
           <FormGroup>
            <Form.Control as="select" id="campus_id" name="campus_id" id="category_id" name="category_id">
               <option value="99">All categories</option>
               {this.state.categorylist.map(item => (
               <option value={item.id}>{item.name}</option>
               ))}
              </Form.Control>

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
            <Button onClick={this.check.bind(this)}>search</Button>
            </FormGroup>
                */}

           



           { 
            /*
           <Col xs={12} sm={12} lgHidden mdHidden>
           <Form inline>

             

      <FormGroup>

      <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><Button onClick={this.check.bind(this)}>search</Button></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              id="search_phrase_sm"
              type="text"
              name="search_phrase_sm"
              placeholder="Search for anything..."
              onFocus={this.check.bind(this)}
              onKeyPress={event => {
               if (event.key === 'Enter') {
                 this.check.bind(this)
               }
             }}
              inputRef={(ref) => { this.inputSearchPhrase = ref; }}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              <Button onClick={this.check.bind(this)}><div glyph="search"/></Button>
            </Form.Control.Feedback>
          </InputGroup>

  </FormGroup>



           </Form>
           </Col>
            */}

           </section>
         )
       }
  }
