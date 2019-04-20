import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col , Image, Button} from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import truncate from './houses/truncate'

export default class BlogHeaderPost extends React.Component {

  state={
    isLoading: true,
    blogTop: {},
    media: null,
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    try {
      const res = await fetch('https://www.iwansell.com/api/blog_top/');
      const blogTop = await res.json();
      this.setState({
        blogTop
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })


  }


  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }

      render() {

        return (
           <section className="blog-header-post">

           {this.state.isLoading ? (
             <Spinner/>
           ) : (
             <section>
             <Row>
             <section className="profile-image">
                 <div class="dp-image">
                 {this.setMedia(this.state.blogTop.image)}
                    <Image src= { `${this.state.media}` } alt="product_image" responsive/>
                </div>
            </section>
            </Row>

             <Row>
                    <p className="blog-header">{this.state.blogTop.title}</p>
            </Row>

            <Row>
                    <p className="date"><i>{this.state.blogTop.date}</i></p>
            </Row>

            <Row>
                    <p>{truncate(this.state.blogTop.blog_post)}
                    <Link to={`/blog/${ this.state.blogTop.id }/`}>
                        <Button bsStyle="success">Read more</Button>
                    </Link>
                    </p>
            </Row>
             </section>

           )}



           </section>
         )
     }
}
