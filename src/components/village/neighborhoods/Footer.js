import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import About from './blocks/houses/About.js';

export default class Footer extends React.Component {

  state = {
    isloggedin : false
  }

  async componentDidMount(){

        const auth = localStorage.getItem('auth_code')

        try {
          const res = await fetch('http://165.22.140.170:8000/api/isloggedin/', {

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

}




       render() {
         return (
           <section className="footer">
             <Grid>
               <Row>
                 <About logged_in={this.state.isloggedin}/>
               </Row>
             </Grid>
           </section>
         )
       }
  }
