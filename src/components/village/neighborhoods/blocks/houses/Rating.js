import React from 'react';

export default class Rating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: this.props.rating}
  }




render(){

var Rating = require('react-rating');

    return (
        <span className="heart-glyphs">
               <Rating 
                emptySymbol="glyphicon glyphicon-heart-empty"
                fullSymbol="glyphicon glyphicon-heart"
                {...this.props} initialRating={this.state.value} readonly quiet/>
        </span>
    );
  }
}
