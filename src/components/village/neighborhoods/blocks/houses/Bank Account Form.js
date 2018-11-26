import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import Heading from './Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class BankAccountForm extends React.Component {

  state = {
    isLoading: false,
    message : [],
    banklist: []
  }

  async componentWillMount(){
    this.setState({ isLoading: true})

    const auth = localStorage.getItem('auth_code')


    try {
      const res = await fetch('https://www.iwansell.com/api/bank_account/', {
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const banklist = await res.json();
        this.setState({
          banklist
        });

    } catch (e) {
      console.log(e);
    }


    this.setState({ isLoading: false})
  }



  async update(){

    this.setState({ isLoading: true})
    const auth = localStorage.getItem('auth_code')

    var account_number = document.getElementById("account_number").value

    var formData = new FormData()
    formData.append('account_number', account_number)

    try {
      const res = await fetch('https://www.iwansell.com/api/bank_account/', {


       body : formData,
       method: 'POST',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const banklist = await res.json();
        this.setState({
          banklist
        });

    } catch (e) {
      console.log(e);
    }

    false

}


emptyResult(){

  var empty_set = false

  if(this.state.banklist.length <= 0 ){
    empty_set = true
  }

  return empty_set


}







render(){

const formInstance = (
  <section className="edit-profile-form">
  <Heading title="Add Bank Account"/>

  {this.state.isLoading ? (
    <Spinner color="#ff0000" size={32}/>
  ) : (
    <div>
     {this.emptyResult() ? (
       <p>Its empty here, add bank account</p>
     ) : (

       <div>
       {this.state.banklist.map(item =>
       <div>
         <p>{item.account_number}</p>
         <p>{item.account_name}</p>
       </div>
       )}
       </div>

     )}
   </div>
  )}





  <form>
  <FormGroup>
        <FormControl
            id="account_number"
            type="text"
            label="Account Number"
            name="account_number"
            placeholder="eg 0838320302"

        />
        <HelpBlock>Add Account Number here for faster electronic transaction</HelpBlock>
</FormGroup>

    {this.state.message.error_message ? (
      <p className="err-msg">{this.state.message.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? (
       <p className="success-msg">Success!</p>
    ) : (
      <span></span>
    )}

    {this.state.isLoading ? (
      <Spinner color="#ff0000" size={32}/>
    ) : (
      <div/>
    )}

    <Button onClick={this.update.bind(this)}>add new</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
