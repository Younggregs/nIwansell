import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl } from 'react-bootstrap';
import Heading from './Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class EditCampus extends React.Component {

  state = {
    isLoading: false,
    message : [],
    campuslist: [],
    campus_code: null
  }

  async componentWillMount(){
    this.setState({ isLoading: true })
    const auth = localStorage.getItem('auth_code')


    try {
      const res = await fetch('https://www.iwansell.com/api/campus/')
      const campuslist = await res.json();
        this.setState({
          campuslist
        });

    } catch (e) {
      console.log(e);
    }


    try {
        const res = await fetch('https://www.iwansell.com/api/get_campus_code/', {
         headers : {
           'Authorization' : 'Token ' + auth
         }

        })
        const campus_code = await res.json();
          this.setState({
            campus_code
          });

      } catch (e) {
        console.log(e);
      }

      this.setState({ isLoading: false})


  }

  async update(){

    this.setState({ isLoading: true})

    const auth = localStorage.getItem('auth_code')

    var campus = document.getElementById("campus").value

    var formData = new FormData()
    formData.append('campus', campus)

    try {
      const res = await fetch('https://www.iwansell.com/api/reset_campus/', {


       body : formData,
       method: 'POST',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const message = await res.json();
        this.setState({
          message
        });

    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })

}






render(){

const formInstance = (
  <section className="edit-profile-form">
  <Heading title="Change Campus"/>

  <p>Current campus: <b>{this.state.campus_code} campus marketplace</b></p>
  <form>
  <FormGroup>
    <div>Select Campus</div>
    <FormControl componentClass="select" placeholder="select" name="campus" id="campus">
                   {this.state.campuslist.map(item => (
                    <option value={item.id}>{item.campus_code}</option>
                    ))}
      </FormControl>
      <div>NOTE: Your eShop, products would not be updated</div>
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
      <div className="isloading">
      <p><b><i>loading...</i></b></p>
      <p><Spinner color="#ff0000" size={32}/></p>
      </div>
    ) : (
      <div/>
    )}

    <Button bsStyle="success" onClick={this.update.bind(this)}>update campus</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
