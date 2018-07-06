import React from 'react'
import HaggleTable from './neighborhoods/blocks/houses/Haggle Table'
import HaggleClient from './neighborhoods/blocks/houses/Haggle Client'
import HaggleBox from './neighborhoods/blocks/houses/Haggle Box'


export default class EHaggler extends React.Component {
  
  
      render() {
       
        return (
           <div>
                    <HaggleClient client_id = {this.props.client_id}/>
                    <HaggleTable client_id={this.props.client_id}/>
                    <HaggleBox client_id={this.props.client_id}/>
           </div>
         )
     }
}
