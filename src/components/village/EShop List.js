import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Row, Form , FormControl, Button, FormGroup, Glyphicon, InputGroup} from 'react-bootstrap'

export default class EshopList extends React.Component {

    state = {
        eshop_list : []
    }


    async componentDidMount() {
        try {
          const res = await fetch('http://199.192.21.172:8000/eshop_list/');
          const eshop_list = await res.json();
          this.setState({
            eshop_list
          });
        } catch (e) {
          console.log(e);
        }
      }

async submitForm(){

        var eshop_name = document.getElementById("eshop_name").value

        var formData = new FormData()
        formData.append("eshop_name", eshop_name)

        try {
            const res = await fetch('http://199.192.21.172:8000/eshop_list/', {

             body: formData,
             method: 'POST'

            });
            const eshop_list = await res.json();
            this.setState({
              eshop_list
            });
          } catch (e) {
            console.log(e);
          }

}




emptyResult(){

    var empty_set = false

    if(this.state.eshop_list.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }







       render() {
         return (
           <section>
           <div className="menu-navigation">

           <Col lg={3} md={3} sm={12} xs={12}>
            <p>Iwansell</p>
           </Col>

            <Form inline>

           <FormGroup>
    <InputGroup>
    <FormControl
       id="eshop_name"
       type="text"
       name="eshop_name"
       placeholder="Find e-shop"
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
          <Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={12} xs={12}>
             <div className="eshop-list">

              <div className="menu-header">
               <p>EShop List</p>
              </div>

              {this.emptyResult() ? (

                  <p className="err-msg">No result found for searched eshop</p>

              ) : (

                <span>

                {this.state.eshop_list.map(item => (
                    <span>
                    <hr />
                    <div>
                    <p><Link to={`/eshop/${ item.id } `}>
                    {item.name}
                    </Link>
                    </p>
                    <p><i>{item.about}</i></p>
                    </div>
                    <hr />
                    </span>
                ))}

                </span>

              )}



              </div>
          </Col>
        </Row>


           </section>
         )
       }
  }
