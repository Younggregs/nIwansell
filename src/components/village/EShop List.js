import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Row, Form , FormControl, Button, FormGroup, Glyphicon, InputGroup} from 'react-bootstrap'
import EShopCategory from './neighborhoods/blocks/houses/EShop Category'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class EshopList extends React.Component {

    state = {
        isLoading: true,
        eshop_list : [],
        categorylist: []
    }


  async componentDidMount() {
       this.setState({ isLoading: true})
        try {
          const res = await fetch('http://165.22.140.170:8000/api/eshop_list/' +  this.props.match.params.campus_id + '/');
          const eshop_list = await res.json();
          this.setState({
            eshop_list
          });
        } catch (e) {
          console.log(e);
        }


        try {
          const res = await fetch('http://165.22.140.170:8000/api/category/');
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
        var eshop_name = document.getElementById("eshop_name").value

        var formData = new FormData()
        formData.append("eshop_name", eshop_name)

        try {
            const res = await fetch('http://165.22.140.170:8000/api/eshop_list/' + this.props.match.params.campus_id + '/', {

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

          this.setState({ isLoading: false })

}



async sortByCategory(id){

  this.setState({ isLoading: true })
  try {
      const res = await fetch('http://127.0.0.1:8000/api/eshop_list_category/' + this.props.match.params.campus_id + '/' + id + '/');
      const eshop_list = await res.json();
      this.setState({
        eshop_list
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })

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
          <Col lg={3} lgOffset={1} md={3} mdOffset={1} smHidden xsHidden>
          <div className="eshop-category-menu">
          <p className="eshop-category-header">Sort eshops by category</p>
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

          <Col lg={4} lgOffset={1} md={4} mdOffset={1} sm={12} xs={12}>
          {this.state.isLoading ? (
            <Spinner/>
          ) : (
            <div className="eshop-list">

             <div className="menu-header">
              <p>EShop List</p>
             </div>

             {this.emptyResult() ? (

                 <p className="err-msg">No result found</p>

             ) : (

               <span>

               {this.state.eshop_list.map(item => (
                   <span>
                   <hr />
                   <div>
                   <p className="eshop-name"><Link to={`/eshop/${ item.id }`}>
                   {item.name}
                   </Link>
                   </p>
                   <EShopCategory eshop_id = {item.id}/>
                   <p><i>{item.about}</i></p>
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
