import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Blog extends React.Component {

  state={
    blogList: [],
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    try {
      const res = await fetch('https://www.iwansell.com/api/category_blog/' + this.props.category_id + '/',{

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       },

      });
      const blogList = await res.json();
      this.setState({
        blogList
      });
    } catch (e) {
      console.log(e);
    }


  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }



  emptyResult(){

    var empty_set = false

    if(this.state.blogList.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }

      render() {

        return (
           <section className="blog-items">

            {this.emptyResult() ? (

                <Row>
                    <p className="err-msg">Nothing here yet, we are still looking for our pen</p>
                </Row>
            ) : (

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
                    <p>{item.blog_post}
                    <Link to={`/blog/${ item.blog_id }/`}>
                        <Button bsStyle="success">Read more</Button>
                    </Link>
                    </p>
            </Row>
                     </Col>
                 ))}
            </Row>


            )}

           </section>
         )
     }
}
