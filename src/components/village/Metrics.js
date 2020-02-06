import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class Menu extends React.Component {

      state = {
          show: false,
          data: []
      }

      async componentDidMount(){
          this.setState({isLoading: true })

          if(this.props.match.params.mcode === 'aeeef93039299249943'){
              this.setState({ show: true })

              try {
                const res = await fetch('https://iwansell.com/api/app_review/')
                const data = await res.json();
                  this.setState({
                    data
                  });

                  console.log(data)
          
              } catch (e) {
                console.log(e);
              }
          }

          this.setState({isLoading: false })

          
      }

      empty(){
          var stat = true
          if(this.state.data){
            stat = false
          }

          return stat
      }

      render() {
        return (
           <div className="profile">
                <p>Metrics</p>
                {this.state.show ? (
                    
                    <Container fluid="true">
                    {this.state.isLoading ? (
                            <div className="isloading">
                                <p><b><i>loading...</i></b></p>
                                <p><Spinner color="#ff0000" size={32}/></p>
                            </div>
                    ) : (
                    <section>
                        
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="a1">
                                <p>Total Number of Products for Sell</p>
                                <p className="afigure">1509</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="a2">
                                <p>Total Number of Registered Users</p>
                                <p className="afigure">1076</p>
                            </div>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="a1">
                                <p>Total Number of eShops</p>
                                <p className="afigure">81</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="a2">
                                <p>Total Number of Listings</p>
                                <p className="afigure">41</p>
                            </div>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="a1">
                                <p>Total Number of Daily Active Users</p>
                                <p className="afigure">1000</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="a2">
                                <p>Total Number of Installed Mobile Apps</p>
                                <p className="afigure">415</p>
                            </div>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row className="justify-content-center">
                        <Col lg={8} md={8} sm={12} xs={12}>
                            <div className="a1">
                                <p>Metrics Per Campus Marketplace</p>
                                {this.empty()? (
                                    <p>Sorry something broke, please refresh to start</p>
                                ) : (
                                <Table striped bordered hover variant="dark">
                                    <thead>                             
                                        <th>Campus</th>
                                        <th>Products</th>
                                        <th>Registered Users</th>
                                        <th>eShops</th>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map(item => 
                                        <tr>
                                            <td>{item.campus}</td>
                                            <td>{item.no_account}</td>
                                            <td>{item.no_product}</td>
                                            <td>{item.no_eshop}</td>
                                        </tr>
                                        )}
                                    </tbody>
                                </Table>
                                )}
                                
                            </div>
                        </Col>
                    </Row>
                    </section>
                )}

                </Container>

                

                ):(

                    <p>You are not authorised to view this content</p>
                )}
            

           </div>
         )
     }
}
