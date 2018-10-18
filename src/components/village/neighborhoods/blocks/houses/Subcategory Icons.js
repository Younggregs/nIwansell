import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default class SubcategoryIcons extends React.Component {

  state = {
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

  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/' + media_name
  }

       render() {

         return (
           <section className="sub-category-icons">
               <Row>
               <Col smHidden xsHidden>
                <Row>
            { this.state.iconList.map(item => (
                <Col lg={2} md={2}>
                   {this.setMedia(item.image)}
                    <Image height="50px" width="50px" src= { `${this.state.media}` } alt="thumbnail"/>
                    <p>{item.name}</p>
                </Col>
                 )
                )}
                </Row>
             </Col>
            </Row>

           </section>
         )
       }
  }
