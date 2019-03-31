import React from 'react'
import {Row, Col } from 'react-bootstrap'
import Navigation from './neighborhoods/Navigation'
import CategoryProduct from './neighborhoods/blocks/Category Product'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import {setMarket, setCampusId, setAccountId} from './neighborhoods/blocks/houses/auth/Auth'

export default class ViewMore extends React.Component {

  state={
    account_id: null,
    campus_id: 1,
    market: "FUTminna"
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    try {
      const res = await fetch('http://127.0.0.1:8000/api/get_account/',{

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       },

      });
      const account_id = await res.json();
      this.setState({
        account_id
      });
      setAccountId(account_id)
    } catch (e) {
      console.log(e);
    }


    /*try {
      const res = await fetch('http://127.0.0.1:8000/api/get_campus/',{

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       },

      });
      const campus_id = await res.json();
      this.setState({
        campus_id
      });
      setCampusId(campus_id)
    } catch (e) {
      console.log(e);
    }*/
    setCampusId(this.state.campus_id)


      /*try {
        const res = await fetch('http://127.0.0.1:8000/api/campus_code/' + this.state.campus_id + '/');
        const market = await res.json();
        this.setState({
          market
        });
        setMarket(market)
      } catch (e) {
        console.log(e);
      }*/
      setMarket(this.state.market)





  }


      render() {

        return (
           <div className="home">
             <Navigation logged_in={true} account_id={this.state.account_id} campus_id={this.state.campus_id}/>
             <Row>
               <Col lg={12} md={12} sm={12} xs={12}>
                 <Row>
                    <CategoryProduct campus_id={this.state.campus_id} show_more={false}/>
                 </Row>
                </Col>
             </Row>
             <GotoTop/>
             <Footer logged_in={true}/>
             <Copyright/>
           </div>
         )
     }
}
