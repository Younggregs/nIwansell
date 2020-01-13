import React from 'react';
import { Container,Row,Col,FormGroup,FormControl, Button } from 'react-bootstrap'; 

    function setschool(){

    }

    export function school_setter () {
        return(
                <section>
                <Container className="navigation" id="navigation">
                 <Row>
                  <Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={10} smOffset={2} xs={10} xsOffset={2}>
                  <form onSubmit={this.setSchool}>
                      <p>select school</p>
                    <FormGroup>
                   <FormControl componentClass="select" placeholder="select">
                    <option value="1">Futminna</option>
                    
                   </FormControl>
                 </FormGroup>
    
                 <FormGroup>{' '}
                <Button type="submit">continue</Button>
                  </FormGroup>{' '}
                  </form>
                  </Col>
                </Row>
               </Container>
               </section>
        )  
               
             
    }

          
    
  
