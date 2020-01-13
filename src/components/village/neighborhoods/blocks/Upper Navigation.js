import React from 'react'
import UpperNavigationRoutes from './Upper Navigation Routes'

export default class UpperNavigation extends React.Component {

       render() {
         return (
           <section className='upper-navigation'>

              {this.props.logged_in ? (
                 <UpperNavigationRoutes logged_in={this.props.logged_in} campus_id = {this.props.campus_id}/>
              ) :
              (
                <UpperNavigationRoutes campus_id = {this.props.campus_id}/>
              )}

           </section>
         )
       }
  }
