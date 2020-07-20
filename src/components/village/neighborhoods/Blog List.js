import React from 'react'
import { Row } from 'react-bootstrap'

import loadable from '@loadable/component'

const BlogHeaderPost = loadable(() => import('./blocks/Blog Header Post'))
const BlogItems = loadable(() => import('./blocks/Blog Items'))

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
