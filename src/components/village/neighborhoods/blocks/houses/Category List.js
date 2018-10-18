import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button, Table, FormControl } from 'react-bootstrap'
import Heading from './Heading'

export default class CategoryList extends React.Component {

  state = {
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

              </Table>
                </Col>
             </Row>
           </section>
         )
       }
  }
