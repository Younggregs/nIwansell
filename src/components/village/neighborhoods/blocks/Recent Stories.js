import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button, Image,Table } from 'react-bootstrap'

export default class CategoryList extends React.Component {

  state = {
    blogList: [],
    campus_id: 1,
    media: null
  }


  async componentWillMount() {

    try {
        const res = await fetch('https://www.iwansell.com/api/recent_blog_post/');
        const blogList = await res.json();
        this.setState({
          blogList
        });
      } catch (e) {
        console.log(e);
      }

}


       render() {
         return (
           <section className="category-list">
             <Row>
             <Table responsive>
                 <thead>
                    <tr>
                        <th>Recent Stories</th>
                    </tr>
                </thead>

                <tbody>

                {this.state.blogList.map(item => (
                    <tr>
                    <td>
                        {item.title}
                    </td>
                    </tr>
                ))}

                </tbody>
             </Table>
             </Row>
           </section>
         )
       }
  }
