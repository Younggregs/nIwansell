import React from 'react'
import { Row } from 'react-bootstrap'
import BlogHeaderPost from './blocks/Blog Header Post'
import BlogItems from './blocks/Blog Items'

export default class BlogList extends React.Component {

      render() {

        return (
           <section className="blog-list">
            <Row>
                <BlogHeaderPost/>
            </Row>
            <Row>
                <BlogItems/>
            </Row>
           </section>
         )
     }
}
