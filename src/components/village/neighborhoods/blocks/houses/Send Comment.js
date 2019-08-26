import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Glyphicon, Col, Row, FormControl, FormGroup, Form, InputGroup } from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class SendComment extends React.Component {

    state = {
        comment_err: false,
        message: [],
    }

    fetchThread(){
      return this.props.thread.substr(0, 150) +  '...'
    }

    options = {
        title: 'Title',
        message: 'Message',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ],
        childrenElement: () => <div />,
        customUI: ({ onClose }) => 
            <div className='custom-ui'>
                <Row>
                    <Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={12} xs={12}>
                        <div style={{ padding: 10, marginBottom: 20}}>
                            <p>{this.fetchThread()}</p>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={9} lgOffset={3} md={9} mdOffset={3} sm={12} xs={12}>
                    <div style={{ paddingLeft: 10,}}>
                    <Form inline>
                    <InputGroup>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Comment" 
                            id="comment" 
                            name="comment"
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                this.sendComment()
                                }
                            }}/>
                            <InputGroup.Button>
                                <Button><Glyphicon style={{ fontSize: 20}} onClick={() => this.sendComment()} glyph='send'>Send</Glyphicon></Button>
                            </InputGroup.Button>
                        </InputGroup>
                        </Form>
                    </div>
                    </Col>
                    
                </Row>
                
                  
            </div>,
        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => {},
        onClickOutside: () => {},
        onKeypressEscape: () => {}
    };

    async sendComment(){

        this.setState({ 
            comment_err: false,
          })
          
           var comment = document.getElementById("comment").value
      
            if(comment){
    
                this.setState({ isLoading: true})
                const auth = localStorage.getItem('auth_code')
      
                var formData = new FormData()
                formData.append('comment', comment)
        
                try {
                  const res = await fetch('https://www.iwansell.com/api/comment/' + this.props.thread_id + '/', {
        
                   body : formData,
                   method: 'POST',
                   headers : {
                    'Authorization' : 'Token ' + auth
                  },
        
                  })
                  const message = await res.json();
                    this.setState({
                      message, rd: true 
                    });
                    alert('sent!')
                    window.location.replace("https://www.iwansell.com/thread/" + this.props.thread_id);
        
                } catch (e) {
                  console.log(e);
                  alert('failed, retry please')
                }
        
                this.setState({ isLoading: false})

              }else{
                this.setState({comment_err: true})
              }

        

}

      customAlert(){
          confirmAlert(this.options)
      }

       render() {
         return (
           <section>
          
            <Glyphicon onClick={() => this.customAlert()} glyph="comment">{this.props.count}</Glyphicon>
           
           </section>
         )
       }
  }
