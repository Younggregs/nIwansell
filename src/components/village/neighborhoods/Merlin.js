import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Col, Row, Image} from 'react-bootstrap'

export default class About extends React.Component {

       render() {
         return (
           <section className="merlin" id="merlin">
           <Grid>
            <Row>
            <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={6} smOffset={1} xs={6} xsOffset={1}>
              <Row>
                  <p className="merlin-text">Nothing is difficult, everything is a challenge</p>
                  <p className="merlin-name"><i>-Merlin.</i></p>
                </Row>
            </Col>
           </Row>
           </Grid>
           </section>
         )
       }
  }
