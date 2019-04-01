import React from 'react'

export default class EshopCategory extends React.Component {

    state = {
        eshop_category : []
    }


async componentDidMount() {
        try {
          const res = await fetch('http://www.iwansell.com/api/eshop_category/' + this.props.eshop_id);
          const eshop_category = await res.json();
          this.setState({
            eshop_category
          });
        } catch (e) {
          console.log(e);
    }
}


emptyResult(){

    var empty_set = false

    if(this.state.eshop_category.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }







       render() {
         return (
           <section>
              {this.emptyResult() ? (

                    <p className="err-msg">No category specified</p>

              ) : (

                <p><b>Category</b> :

                {this.state.eshop_category.map(item => (

                    <b><i> {item.category_name}</i></b>

                ))}

                </p>

              )}

           </section>
         )
       }
  }
