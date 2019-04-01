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
        const res = await fetch('http://www.iwansell.com/api/category/');
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
              <Table responsive>
                 <thead>
                    <tr>
                        <th><p className="heading-lg">Category</p></th>
                    </tr>
                </thead>
                {this.state.isLoading ? (
                  <Spinner/>
                ) : (
                  <tbody>
                <tr>
                </tr>
                       {this.state.categoryList.map(item => (
                         <tr>
                          <td>
                           <Link to={`/category_view/${ item.id }/`}>
                               <Button>{item.name}</Button>
                            </Link>
                          </td>
                          </tr>
                       ))}
                </tbody>

                )}
                
              </Table>
                </Col>
             </Row>
           </section>
         )
       }
  }
