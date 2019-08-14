import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button,FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Heading from './Heading'
import AppName from './App Name'
import NewListingMedia from './New Listing Media'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class NewListingForm extends React.Component {

  state = {
    categorylist: [],
    product_image:null,
    account_id: null,
    message: [],
    media:[],
    isloading: false,
    next_view: false,
    category: null,
    product_name: null,
    description: null,
    budget: null,
    product_name_err: false,
    description_err: false,
    budget_err: false
  };

  async componentDidMount() {

    this.setState({ isLoading: true})
    
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/myaccount_id/', {

        headers : {
          'Authorization' : 'Token ' + auth,

        },

      });
      const account_id = await res.json();
      this.setState({
        account_id
      });
      console.log('my id' + account_id)
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
    this.setState({ isLoading: false})


  }

  nextView(){

    this.setState({ 
      product_name_err: false,
      description: false,
      starting_price: false
    })
    
    var category = document.getElementById("category").value
    var product_name = document.getElementById("product_name").value
    var description = document.getElementById("description").value
    var budget = document.getElementById("budget").value

      if(product_name){

        if(description){

          if(budget){

            this.setState({
              category: category,
              product_name: product_name,
              description: description,
              budget: budget,
              next_view: true
            })

          }else{
            this.setState({starting_price_err: true})
          }

        }else{
          this.setState({description_err: true})
        }

      }else{
        this.setState({product_name_err: true})
      }
 

}
  


render(){



const formInstance = (
  <section className="new-product-form">

  <Row>
  <div className="login-appname">
   <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
  <Link to="/home">
    <AppName logged_in = {true}/>
  </Link>
  </Col>
  </div>
</Row><br />

  <Heading title="Upload What You Need"/>

  <br />


  <form>
  
  <FormGroup>
      <ControlLabel>Categories</ControlLabel>
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
      <FormControl componentClass="select" placeholder="select" id="category" name="category">
      {this.state.categorylist.map(item => (
        <option value={item.id}>{item.name}</option>
      ))}
      </FormControl>
    </FormGroup>

  

    <FormGroup>
      <ControlLabel>Product Name
      {this.state.product_name_err ? (
      <span className="err-msg">
       * product name required 
      </span>
    ) : (
      <div/>
    )}
      </ControlLabel>
      <FormControl placeholder="e.g Samsung s6 edge" id="product_name" name="product_name"/>
    </FormGroup>


  
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Describe Product
      {this.state.description_err ? (
      <span className="err-msg">
       * description required 
      </span>
    ) : (
      <div/>
    )}
      </ControlLabel>
      <FormControl componentClass="textarea" placeholder="e.g Gold plated, 64gb ROM, 3gb ROM, used ..." id="description" name="description"/>
    </FormGroup>

      
    <FormGroup>
      <ControlLabel>Your Budget
      {this.state.budget_err ? (
      <span className="err-msg">
       * budget required
      </span>
    ) : (
      <div/>
    )}
      </ControlLabel>
      <FormControl placeholder="e.g 70k" id="budget" name="budget"/>
    </FormGroup>



 <FormGroup>
   <Button bsStyle="success" onClick={this.nextView.bind(this)}>Continue</Button>
 </FormGroup>
 </form>
  </section>
);

 return (
    <div>
      {this.state.next_view ? (
        <NewListingMedia
          account_id={3}
          category={this.state.category}
          product_name={this.state.product_name}
          description={this.state.description}
          budget={this.state.budget}
        />
      ) : (
          formInstance
      )}
    </div>);

  }
}
