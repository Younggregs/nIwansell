import React from 'react'
import { Col, Glyphicon, Badge, Tooltip, OverlayTrigger, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavigationIcons extends React.Component {

  state = {
    unread_msgs : [],
    have_eshop: false,
    eshop_id : null
  }


  async componentWillMount() {

    const auth = localStorage.getItem('auth_code')


      try {
        const res = await fetch('https://www.iwansell.com/api/unread_messages/', {

          headers : {
            'Authorization' : 'Token ' + auth,

          },

        });
        const unread_msgs = await res.json();
        this.setState({
          unread_msgs
        });
      } catch (e) {
        console.log(e);
      }


      try {
        const res = await fetch('https://www.iwansell.com/api/have_eshop/', {

          headers : {
            'Authorization' : 'Token ' + auth,

          },

        });
        const have_eshop = await res.json();
        this.setState({
          have_eshop
        });
      } catch (e) {
        console.log(e);
      }


      if(this.state.have_eshop) {



        try {
          const res = await fetch('https://www.iwansell.com/api/my_eshopid/', {

            headers : {
              'Authorization' : 'Token ' + auth,

            },

          });
          const eshop_id = await res.json();
          this.setState({
            eshop_id
          });
        } catch (e) {
          console.log(e);
        }



      }





  }
       render() {

        const profile = (
          <Tooltip id="profile">
            <strong>Profile</strong>
          </Tooltip>
        );

        const eshop = (
          <Tooltip id="eshop">
            <strong>e-shop</strong>
          </Tooltip>
        );

        const ehaggler= (
          <Tooltip id="ehaggler">
            <strong>e-haggler</strong>
          </Tooltip>
        );

         return (
           <section className="ehaggler-icon">
              <Col lg={2} md={2} smHidden xsHidden>
              <Link to="/newproduct">
                <Button bsStyle="success">
                  Sell it
                </Button>
               </Link>&nbsp;&nbsp;

             <Link to={`/profile/${ this.props.account_id }`}>
             <OverlayTrigger placement="left" overlay={profile}>
                <span className="glyphs"><Glyphicon glyph="user"/></span>
             </OverlayTrigger>
             </Link>&nbsp;&nbsp;


             <Link to="/hagglemates">
             <OverlayTrigger placement="bottom" overlay={ehaggler}>
                <span className="glyphs"><Glyphicon glyph="envelope"/>
                {this.state.unread_msgs.code ? (
                  <sup><Badge>{this.state.unread_msgs.code}</Badge></sup>
                ) :(
                  <span></span>
                )}
                  </span>
               </OverlayTrigger>
             </Link>&nbsp;&nbsp;


              {this.state.have_eshop ? (
                <Link to={`/eshop/${ this.state.eshop_id }`}>
                  <OverlayTrigger placement="right" overlay={eshop}>
                 <span className="glyphs"><Glyphicon glyph="home"/></span>
                  </OverlayTrigger>
               </Link>
              ): (
                <span></span>
              )}


             </Col>


            <div className="sm-nav-glyphs">
             <Col sm={2} xs={2} lgHidden mdHidden>
             <Link to={`/profile/${ this.props.account_id }`}>
                <span className="glyphs"><Glyphicon glyph="user"/></span>
             </Link>
             </Col>

             <Col sm={2} xs={2} lgHidden mdHidden>
             <Link to="/hagglemates">
                <span className="glyphs"><Glyphicon glyph="envelope"/><sup>{this.state.unread_msgs.code}</sup></span>
             </Link>
             </Col>

             {this.state.have_eshop ? (
                <Col sm={2} xs={2} lgHidden mdHidden>
                <Link to={`/eshop/${ this.state.eshop_id }`}>
                   <span className="glyphs"><Glyphicon glyph="home"/></span>
                </Link>
                </Col>
             ) : (
                 <span></span>
             )}




             <Col sm={2} xs={2} lgHidden mdHidden>
             <Link to='/menu'>
              <span className="glyphs"><Glyphicon glyph="menu-hamburger"/></span>
             </Link>
             </Col>


             </div>



           </section>
         )
       }
  }
