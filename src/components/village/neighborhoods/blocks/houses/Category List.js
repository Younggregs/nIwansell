import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Table } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class CategoryList extends React.Component {

  state = {
    isLoading: true,
    category : 'All Categories',
    categoryList: [],
    categoryProductList: [],
    campus_id: 1,
    media: null
  }


  async componentWillMount() {

    try {
        const res = await fetch('https://www.iwansell.com/api/category/');
        const categoryList = await res.json();
        this.setState({
          categoryList
        });
      } catch (e) {
        console.log(e);
      }

      this.setState({ isLoading: false })

}


       render() {
         return (
          <section className="category-list">
             <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
             
      
                {this.state.isLoading ? (
                  <div className="isloading">
                  <p><b><i>loading...</i></b></p>
                  <p><Spinner color="#ff0000" size={32}/></p>
                  </div>
                ) : (
                  <div>
                       {this.state.categoryList.map(item => (
                        
                           <Link to={`/category_view/${ item.id }/`}>
                               <p>{item.name}</p>
                            </Link>
                         
                       ))}
               </div>

                )}
                
             
                </Col>
             </Row>
           </section>
         )
       }
  }
