import React from 'react'
import { Link } from 'react-router-dom'

export default class EHagglerDP extends React.Component {
       render() {
         return (
           <section className="ehaggler-dp">
            {this.props.go_back ? (
              <div>
              <Link to="/hagglemates">
                <span className="glyphs"><div glyph="arrow-left"/></span>
              </Link>&nbsp;&nbsp;
                <div glyph="user"/>
                &nbsp;&nbsp;
              {this.props.name}
              </div>
            ) : (
               <div>
              <div glyph="user"/>
              &nbsp;&nbsp;
              {this.props.name}
              </div>
            )}

           </section>
         )
       }
  }
