import React from 'react';
import { Glyphicon} from 'react-bootstrap';

export default class FavoriteButton extends React.Component {
       render() {
         return (
          <span>
              <span className="glyphs"><Glyphicon glyph="start-empty"/></span>
          </span>
         )
       }
  }
