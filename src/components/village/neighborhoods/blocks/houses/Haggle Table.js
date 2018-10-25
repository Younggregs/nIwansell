import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HagglerFrom from './Haggler From'
import HagglerTo from './Haggler To'

export default class HaggleTable extends React.Component {

  state = {
    messages : [],
  }

  auth = localStorage.getItem('auth_code')


  async componentDidMount() {

    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/messenger/' + this.props.client_id + '/',{
         
        headers : {
         'Authorization' : 'Token ' + auth,
         
       },
     })
      const messages = await res.json();
      this.setState({
        messages
      });
    } catch (e) {
      console.log(e);
    }

    this.realTime()
  }

  async update() {


    try {
      const res = await fetch('https://www.iwansell.com/api/messenger/' + this.props.client_id + '/',{
         
        headers : {
         'Authorization' : 'Token ' + this.auth,
         
       },
     })
      const messages = await res.json();
      this.setState({
        messages
      });
    } catch (e) {
      console.log(e);
    }
  }

  realTime(){
    setInterval(() => this.update(), 2000);
  }

    
      render() {
       
        return (
           <div>
               
                 <Row>
                  <Col lg={12} md={12} smHidden xsHidden>
                  
                  <div className="haggle-table">
                   { this.state.messages.map(item => 
                    <span>
                   { item.from_or_to ? (
                    <HagglerFrom msg={item.msg}/>
                   ) : (
                    <HagglerTo msg={item.msg}/>
                   )}

                   
                  </span>
                   )}
                  </div>

                  
                  
                  </Col>

                  <Col sm={12} xs={12} lgHidden mdHidden>
                  <br /><br />
                  <div className="haggle-table-sm">
                   { this.state.messages.map(item => 
                    <span>
                   { item.from_or_to ? (
                    <HagglerFrom msg={item.msg}/>
                   ) : (
                    <HagglerTo msg={item.msg}/>
                   )}

                   
                  </span>
                   )}
                  </div>


                  
                  
                  </Col>

                 </Row>
               
           </div>
         )
     }
}
