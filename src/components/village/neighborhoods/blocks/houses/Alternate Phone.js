import React from 'react';
import { Redirect } from 'react-router-dom'
import { Table, Button,FormGroup, FormControl } from 'react-bootstrap';
import Heading from './Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class AlternatePhone extends React.Component {

  state = {
    isLoading: false,
    isLoading2: false,
    message : [],
    phone: [],
    mobile: null
  }

  async componentWillMount(){
    this.setState({ isLoading: true})
    const auth = localStorage.getItem('auth_code')



    try {
        const res = await fetch('https://www.iwansell.com/api/get_phone/', {
         headers : {
           'Authorization' : 'Token ' + auth
         }
  
        })
        const mobile = await res.json();
          this.setState({
            mobile
          });
  
      } catch (e) {
        console.log(e);
      }



    try {
      const res = await fetch('https://www.iwansell.com/api/alternate_phone/', {
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const phone = await res.json();
        this.setState({
          phone
        });

    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false})


  }



  async update(){
    this.setState({ isLoading2: true})

    const auth = localStorage.getItem('auth_code')

    var phone1 = document.getElementById("phone1").value
    var phone2 = document.getElementById("phone2").value

    var formData = new FormData()
    formData.append('phone1', phone1)
    formData.append('phone2', phone2)

    try {
      const res = await fetch('https://www.iwansell.com/api/alternate_phone/', {


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

    this.setState({ isLoading2: false})

}






render(){

    function FieldGroup({ id, label, help, ...props }) {
        return (
          <FormGroup controlId={id}>
            <div>{label}</div>
            <FormControl {...props} />
            {help && <div>{help}</div>}
          </FormGroup>
      );
    }

const formInstance = (
  <section className="edit-profile-form">
  <Heading title="Set/reset alternate phone"/>

  {this.state.isLoading ? (
      <div className="isloading">
      <p><b><i>loading...</i></b></p>
      <p><Spinner color="#ff0000" size={32}/></p>
      </div>
    ) : (
      <Table bordered striped hover>
      <tbody>
          <tr>
              <th>#1 {this.state.mobile}</th>
            </tr>
          <tr>
              <th>#2 {this.state.phone.phone1}</th>
            </tr>
          <tr>
              <th>#3 {this.state.phone.phone2}</th>
          </tr>
      </tbody>
  </Table>
    )}
  
  <form>
  <FormGroup>
  <div>Add or update alternate phone number</div>
        <FieldGroup
            id="phone1"
            type="text"
            label="Alternate phone 1"
            name="phone1"
            placeholder={this.state.phone.phone1}

        />
</FormGroup>

<FormGroup>
<FieldGroup
            id="phone2"
            type="text"
            label="Alternate phone 2"
            name="phone2"
            placeholder={this.state.phone.phone2}

        />
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

  {this.state.isLoading2 ? (
      <div className="isloading">
      <p><b><i>loading...</i></b></p>
      <p><Spinner color="#ff0000" size={32}/></p>
      </div>
    ) : (
      <div/>
    )}

    <Button onClick={this.update.bind(this)}>update phone</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
