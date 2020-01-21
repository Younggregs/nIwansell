import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col, FormGroup,FormControl,InputGroup, Button } from 'react-bootstrap'
import EShopName from './EShop Name'

export default class EShopSearch extends React.Component {

  state = {
    search_result: [],
    search_phrase:"",
    is_search: false,

  };

  async searchResult() {

    var search_phrase = document.getElementById("search_phrase").value

    var formData = new FormData()
    formData.append("search_phrase", search_phrase)

    try {
      const res = await fetch('https://www.iwansell.com/api/eshop_search/' + this.props.eshop_id + '/',{

      body : formData,
      method : 'POST'

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


setMedia(media_name){
  this.state.media = 'https://www.iwansell.com/api/media/' + media_name
}



       render() {


         return (
           <section>

            <Row className="justify-content-center">
              <Col lg={6} md={6} sm={12} xs={12}>
                     <EShopName eshop_name = {this.props.eshop_name}/>
                </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
           <Form>

           <FormGroup>
                  <InputGroup>
                        <InputGroup.Text>
                        <Link to='/'>
                          Home
                        </Link>
                        </InputGroup.Text>

                          <Form.Control
                            type="text"
                            name="search_phrase"
                            id="search_phrase"
                            size="30"
                            placeholder={"Search " + this.props.eshop_name}
                        />

                    <InputGroup.Append>
                      <Button onClick={this.getSearchPhrase.bind(this)}>search</Button>
                  </InputGroup.Append>
                </InputGroup>
                </FormGroup>
           </Form>
          </Col>
        </Row>


      <Row>
       {this.state.is_search ? (
           <div>
            <br /><br />
            {this.state.search_result.map(item => (
             <Col lg={3} md={3} sm={6} xs={6}>
             {this.setMedia(item.product_image)}
             <img href={"product/" + item.product_id }  alt="product-image" src= { `${this.state.media}` } />
             <h3>{item.product_name}</h3>
              <p className="lg-fonts">Starting price : {item.starting_price}</p>
             </Col>

      ))}

           </div>
          ) : (
            <div></div>
          )}
       </Row>


           </section>
         )
       }
  }
