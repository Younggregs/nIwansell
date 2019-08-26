import React, { Component, Fragment } from "react";
import { Redirect, Link } from 'react-router-dom'
import { Row, Col, Form, Button,FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import ReactDropzone from "react-dropzone";
import Heading from './Heading'
import AppName from './App Name'



export default class NewThreadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      isLoading: false,
      message: [],
      title_err: false,
      post_err: false,
      channel: null,
      channel_: 'Iwansell Tv'
    };
  }


  async componentDidMount() {

    this.setState({ isLoading: true})
    
    const auth = localStorage.getItem('auth_code')

    try {
        const res = await fetch('https://www.iwansell.com/api/get_channel/', {
          headers : {
            'Authorization' : 'Token ' + auth,
          },
        });
        const channel = await res.json();
        this.setState({
          channel
        });
        console.log('contrl' + channel)
      } catch (e) {
        console.log(e);
      }
  

    this.setState({ isLoading: false})

  }





  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
     });
  }

  async submit(){

       

        this.setState({ 
            title_err: false,
            post: false,
          })
          
          var title = document.getElementById("title").value
          var post = document.getElementById("post").value
      
            if(title){
      
              if(post){

                this.setState({ isLoading: true})
                const auth = localStorage.getItem('auth_code')
      
                var formData = new FormData()
                formData.append('title', title)
                formData.append('post', post)
        
                for (var file of this.state.files) {
                    formData.append('files', file);
                    console.log(file + ' ' + file.name)
                  }
        
                
        
        
                try {
                  const res = await fetch('https://www.iwansell.com/api/thread/7/', {
        
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

              }else{
                this.setState({post_err: true})
              }
      
            }else{
              this.setState({title_err: true})
            }

        

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

  <Heading title={this.state.channel_} />

<Form>
  <FormGroup>
      <ControlLabel>Title
      {this.state.product_name_err ? (
      <span className="err-msg">
       * title required 
      </span>
    ) : (
      <div/>
    )}
      </ControlLabel>
      <FormControl 
        placeholder="Title of Post." 
        id="title" 
        name="title"/>
    </FormGroup>


  
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Post
      {this.state.description_err ? (
      <span className="err-msg">
       * post required 
      </span>
    ) : (
      <div/>
    )}
      </ControlLabel>
      <FormControl 
        componentClass="textarea" 
        placeholder="Post Body." 
        id="post" 
        name="post"/>
    </FormGroup>
    </Form>


        <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          Attach media to post
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
       <span><Redirect to={`/thread/${ this.state.message.code }`}/></span>
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

        <br /><br /><Button bsStyle="success" onClick={this.submit.bind(this)}>Submit</Button>
      </div>
    );
  }
}
