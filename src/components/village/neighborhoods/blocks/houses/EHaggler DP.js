import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Glyphicon} from 'react-bootstrap'

export default class EHagglerDP extends React.Component {
       render() {
         return (
           <section className="ehaggler-dp">
            {this.props.go_back ? (
              <div>
              <Link to="/hagglemates">
                <span className="glyphs"><Glyphicon glyph="arrow-left"/></span>
              </Link>&nbsp;&nbsp;
                <Image width="50px" height="50px" src={ require ('./images/einstein.jpg') } alt="display-pic"/>
                &nbsp;&nbsp;
              {this.props.name}
              </div>
            ) : (
               <div>
              <Image width="50px" height="50px" src={ require ('./images/einstein.jpg') } alt="display-pic"/>
              &nbsp;&nbsp;
              {this.props.name}
              </div>
            )}
               
           </section>
         )
       }
  }
