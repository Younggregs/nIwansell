import React from 'react'
import { Grid,Row,Col, Image } from 'react-bootstrap'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


export default class LandingShow extends React.Component {

    state = {
        percent: 0,
        increment: 20,
        status: "default",
        max : 100
    }

    async componentWillMount(){
        setInterval( () => {
            if (this.state.percent != this.state.max){
                this.setState({percent: this.state.percent + this.state.increment});
            }


            switch(this.state.percent){
                case 20:
                    this.setState({ status : "error" });
                break;

                case 40:
                    this.setState({ status : "default" });
                break;

                case 60:
                    this.setState({ status : "active" });
                break;

                case 80:
                    this.setState({ status : "success" });
                break;

                case 100:
                    this.setState({ status : "success" });
                break;

            }

         }, 1000)
      }

      render() {

        return (
           <div className="welcome">
           <Grid>
               <Row>
                   <Col lg={12} md={12} sm={12} smHidden xs={12} xsHidden>
                    <Row>
                        <div className="welcome-logo">
                         <Image src={ require ('./neighborhoods/blocks/houses/images/bg.jpg') } alt="iwansell-logo" responsive/>
                        </div>
                    </Row>

                    <Row>
                        <Progress
                        theme={
                            {
                              error: {
                                symbol: this.state.percent + '%',
                                trailColor: 'pink',
                                color: 'red'
                              },
                              default: {
                                symbol: this.state.percent + '%',
                                trailColor: 'lightblue',
                                color: 'blue'
                              },
                              active: {
                                symbol: this.state.percent + '%',
                                trailColor: 'yellow',
                                color: 'orange'
                              },
                              success: {
                                symbol: this.state.percent + '%',
                                trailColor: 'lime',
                                color: 'green'
                              }
                            }
                          }
                        percent={this.state.percent} status={this.state.status} />
                    </Row>

                    <Row>
                     <span className="welcome-text-lg">{this.props.welcome_message}</span>
                    </Row>

                   </Col>

                   <Col lg={12} lgHidden md={12} mdHidden sm={12} xs={12}>
                   <Row>
                        <div className="welcome-logo-sm">
                         <Image src={ require ('./neighborhoods/blocks/houses/images/bg.jpg') } alt="iwansell-logo" responsive/>
                        </div>
                    </Row>

                    <Row>
                        <Progress
                        theme={
                            {
                              error: {
                                symbol: this.state.percent + '%',
                                trailColor: 'pink',
                                color: 'red'
                              },
                              default: {
                                symbol: this.state.percent + '%',
                                trailColor: 'lightblue',
                                color: 'blue'
                              },
                              active: {
                                symbol: this.state.percent + '%',
                                trailColor: 'yellow',
                                color: 'orange'
                              },
                              success: {
                                symbol: this.state.percent + '%',
                                trailColor: 'lime',
                                color: 'green'
                              }
                            }
                          }
                        percent={this.state.percent} status={this.state.status} />
                    </Row>

                    <Row>
                        <span className="welcome-text-sm">{this.props.welcome_message}</span>
                    </Row>
                   </Col>
               </Row>
           </Grid>
           </div>
         )
     }
}
