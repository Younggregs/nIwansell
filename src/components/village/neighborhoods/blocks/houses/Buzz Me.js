import React from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class BuzzMe extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      isLoading: false,
      phone: []
    };
  }

  async componentWillMount(){
    this.setState({ isLoading: true})
    

    try {
        const res = await fetch('https://www.iwansell.com/api/alternate_phone_seller/' + this.props.account_id)
        const phone = await res.json();
          this.setState({
            phone
          });
  
      } catch (e) {
        console.log(e);
      }

      try {
        const res = await fetch('https://www.iwansell.com/api/alternate_phone_seller/' + this.props.account_id)
        const phone = await res.json();
          this.setState({
            phone
          });
  
      } catch (e) {
        console.log(e);
      }

      this.setState({ isLoading: false })
  }


  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="isloading">
          <p><b><i>loading...</i></b></p>
          <p><Spinner color="#ff0000" size={32}/></p>
          </div>
        ) : (
          <div/>
        )}
        <Button bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
          Click to see Phone
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <p><b>{this.props.phone}</b></p>
              <p><i>alternate phones:</i></p>
              <p><b><i>{this.state.phone.phone1}</i></b></p>
              <p><b><i>{this.state.phone.phone2}</i></b></p>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}