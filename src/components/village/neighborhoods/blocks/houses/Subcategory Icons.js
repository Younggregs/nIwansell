import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class SubcategoryIcons extends React.Component {

  state = {
    isLoading: true,
    iconList: [],
    media: null,
    count: 0,
    id:null
  }

  async componentWillMount() {
    try {
      const res = await fetch('https://www.iwansell.com/api/sub_category_icons/');
      const iconList = await res.json();
      this.setState({
        iconList
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
           <section className="sub-category-icons">
            {this.state.isLoading ? (
              <div className="isloading">
              <p><b><i>loading...</i></b></p>
              <p><Spinner color="#ff0000" size={32}/></p>
              </div>
            ) : (
              <Row>
               <Col smHidden xsHidden>
                <Row>
            { this.state.iconList.map(item => (
                <Col lg={2} md={2} className="post-object-sm">
                   {this.setMedia(item.image)}
                    <Link to={`/subcategory_view/${ item.id }/`}>
                      <Image height="50px" width="50px" src= { `${this.state.media}` } alt="thumbnail"/>
                      <p>{item.name}</p>
                    </Link>
                </Col>
                 )
                )}
                </Row>
             </Col>
            </Row>

            )}
               
           </section>
         )
       }
  }
