import React from 'react'
import {Row, Col , Image} from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css'

export default class BlogPost extends React.Component {

  state={
    isLoading: true,
    blogPost: {},
    media: null,
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    try {
      const res = await fetch('https://www.iwansell.com/api/blog_post/' + this.props.blog_id + '/');
      const blogPost = await res.json();
      this.setState({
        blogPost
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
           <section className="Blog Items">

           {this.state.isLoading ? (
             <Spinner/>
           ) : (
             <section>

                          <Row>
                          <section className="profile-image">
                              <div class="dp-image">
                              {this.setMedia(this.state.blogPost.image)}
                                 <Image src= { `${this.state.media}` } alt="product_image" responsive/>
                                 </div>

                         </section>
                         </Row>

                                 <Row>
                                     <p className="blog-header">{this.state.blogPost.title}</p>
                                 </Row>

                                 <Row>
                                     <p className="date"><i>{this.state.blogPost.date}</i></p>
                                 </Row>

                                 <Row>
                                      <p>{this.state.blogPost.blog_post}</p>
                                 </Row>
             </section>
           )}


           </section>
         )
     }
}
