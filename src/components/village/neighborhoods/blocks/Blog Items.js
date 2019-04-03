import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import truncate from './houses/truncate'

export default class Blog extends React.Component {

  state={
    isLoading: true,
    blogList: [],
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    try {
      const res = await fetch('https://www.iwansell.com/api/blog_snippet/');
      const blogList = await res.json();
      this.setState({
        blogList
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })


  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }

      render() {

        return (
           <section className="blog-items">

           {this.state.isLoading ? (
             <Spinner/>
           ) : (
             <section>

                          <Row>
                              {this.state.blogList.map(item => (
                                  <Col lg={6} md={6}>
                                     <Row>
                          <section className="profile-image">
                              <div class="dp-image">
                              {this.setMedia(item.image)}
                                 <Image src= { `${this.state.media}` } alt="product_image" responsive/>
                             </div>
                         </section>
                         </Row>

                          <Row>
                                 <p className="blog-header">{item.title}</p>
                         </Row>

                         <Row>
                                 <p className="date"><i>{item.date}</i></p>
                         </Row>

                         <Row>
                                 <p>{truncate(item.blog_post)}
                                 <Link to={`/blog/${ item.id }/`}>
                                     <Button bsStyle="success">Read more</Button>
                                 </Link>
                                 </p>
                         </Row>
                                  </Col>
                              ))}
                         </Row>

             </section>
           )}

           </section>
         )
     }
}
