import React from 'react'

export default class HaggleFrom extends React.Component {

  media_path = '/home/greggy/triads/the_iwansell/media/'
    
      render() {
       
        return (
           <span>
           <div className="haggler-from">
               <p>{this.props.msg}</p> 
           </div>
           </span>
         )
     }
}
