import React from 'react';
import { Container, Row } from 'react-bootstrap';
import About from './blocks/houses/About.js';

export default class Footer extends React.Component {

  state = {
    isloggedin : false,
    eshop_exist: false
  }

  async componentDidMount(){

        const auth = localStorage.getItem('auth_code')

        try {
          const res = await fetch('https://www.iwansell.com/api/isloggedin/', {

           credentials: 'same-origin',
           mode: 'cors',
           headers : {
             'Authorization' : 'Token ' + auth
           }

          })
          const isloggedin = await res.json();
            this.setState({
              isloggedin
            });
        } catch (e) {
          console.log(e);
        }

        try {
          const res = await fetch('https://www.iwansell.com/api/eshop_exist/',{
    
            headers : {
              'Authorization' : 'Token ' + auth,
    
            },
    
          } );
          const eshop_exist = await res.json();
          this.setState({
            eshop_exist
          });
        } catch (e) {
          console.log(e);
        }




}




       render() {
         return (
           <section className="footer">
             <Container>
               <Row>
                 <About logged_in={this.state.isloggedin} eshop_exist={this.state.eshop_exist.eshop_exist} campus_id={this.props.campus_id}/>
               </Row>
             </Container>
           </section>
         )
       }
  }
