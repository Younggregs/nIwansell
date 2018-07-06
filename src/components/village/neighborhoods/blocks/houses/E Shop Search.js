import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col, FormGroup,FormControl,InputGroup, Button,Thumbnail,Glyphicon} from 'react-bootstrap'
import EShopName from './EShop Name'

export default class EShopSearch extends React.Component {

  state = {
    search_result: [],
    search_phrase:"",
    is_search: false,

  };

  async searchResult() {
    try {
      const res = await fetch('http://127.0.0.1:8000/eshop_search/1/'  + this.state.search_phrase );
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
  this.state.media = 'http://127.0.0.1:8000/media/' + media_name
}



       render() {
        

         return (
           <section>

              <Col lg={4} lgOffset={2} md={4} mdOffset={2} smHidden xsHidden>
                     <EShopName eshop_name = {this.props.eshop_name}/>
                    </Col>
            
           <Form inline>

           <FormGroup>
                  <InputGroup>
                        <InputGroup.Addon>
                        <Link to={`/eshop/${ this.props.eshop_id } `}>
                          <Glyphicon glyph="home"/>
                        </Link>
                        </InputGroup.Addon>

                          <FormControl 
                            type="text" 
                            name="search_phrase"
                            id="search_phrase"
                            size="30"
                            placeholder={"Search " + this.props.eshop_name}
                        />

                    <InputGroup.Button>
                    <Button onClick={this.getSearchPhrase.bind(this)}>search</Button>
                  </InputGroup.Button>
                </InputGroup>
                </FormGroup>
           </Form>

      
      <Col lg={12} md={12} smHidden xsHidden>
      <Row>
       {this.state.is_search ? (
           <div>
            <br /><br />
            {this.state.search_result.map(item => (
             <Col lg={3} md={3} smHidden xsHidden>
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

      <Col sm={12} xs={12} lgHidden mdHidden>

           <Row>
       {this.state.is_search ? (
           <div>
             <br /><br />
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
