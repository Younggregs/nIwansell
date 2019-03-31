import React from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

export default class BuzzMe extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
          Click to see Phone
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              {this.props.phone}
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}