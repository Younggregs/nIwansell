import React, { Component, Fragment } from "react";
import { Redirect, Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import ReactDropzone from "react-dropzone";
import Heading from './Heading'
import AppName from './App Name'


export default class NewListingMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      isLoading: false,
      message: []
    };
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
     });
  }




  async submitForm(){

        this.setState({ isLoading: true})
        const auth = localStorage.getItem('auth_code')

        var formData = new FormData()
        formData.append('category', this.props.category)
        formData.append('product_name', this.props.product_name)
        formData.append('description', this.props.description)
        formData.append('budget', this.props.budget)

        for (var file of this.state.files) {
            formData.append('files', file);
            console.log(file + ' ' + file.name)
          }

        


        try {
          const res = await fetch('https://www.iwansell.com/api/new_listing/' + this.props.account_id + '/', {

           body : formData,
           method: 'POST',
           credentials: 'same-origin',
           mode: 'cors',
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

        this.setState({ isLoading: false})

}







  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };

    return (
      <div className="app">
      <Row>
      <div className="login-appname">
        <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
        <Link to="/home">
          <AppName logged_in = {true}/>
        </Link>
        </Col>
    </div>
    </Row><br />

  <Heading title="Drop image of product you need here"/>

        <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          Click to add images of product you need here
        </ReactDropzone>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
          
        }

    {this.state.message.error_message ? (
      <p className="err-msg">{this.state.message.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? (
       <span><Redirect to={`/listings/${ this.state.message.code }`}/></span>
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

        <br /><br /><Button bsStyle="success" onClick={this.submitForm.bind(this)}>Finish</Button>
      </div>
    );
  }
}
