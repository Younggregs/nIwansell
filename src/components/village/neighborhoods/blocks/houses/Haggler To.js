import React from 'react'

export default class HaggleTo extends React.Component {

  media_path = '/home/greggy/triads/the_iwansell/media/'
    
      render() {
       
        return (
           <span>
           <div className="haggler-to">   
                  <p>{this.props.msg}</p>
           </div>
           </span>
         )
     }
}
