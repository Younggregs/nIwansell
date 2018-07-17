import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import About from './blocks/houses/About.js';

export default class Footer extends React.Component {
       render() {
         return (
           <section className="footer">
             <Grid>
               <Row>
                 <About logged_in={this.props.logged_in}/>
               </Row>
             </Grid>
           </section>
         )
       }
  }
