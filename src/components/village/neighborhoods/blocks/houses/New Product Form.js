import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router-dom'
import { render } from "react-dom";
import { Button } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import ReactDropzone from "react-dropzone";

export default class MyUploader extends Component {
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

        for (var file of this.state.files) {
            formData.append('files', file);
            console.log(file + ' ' + file.name)
          }

        


        try {
          const res = await fetch('https://www.iwansell.com/api/media_upload/' + this.props.product_id + '/', {

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
        <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          Drop images of product to sell here
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
       <span><Redirect to={`/product/${ this.state.message.code }`}/></span>
    ) : (
      <span></span>
    )}

    {this.state.isLoading ? (
      <Spinner color="#ff0000" size={32}/>
    ) : (
      <div/>
    )}

        <br /><br /><Button bsStyle="success" onClick={this.submitForm.bind(this)}>Finish</Button>
      </div>
    );
  }
}
