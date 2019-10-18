import React from 'react'
import AdSense from 'react-adsense';

export default class Adsense extends React.Component {
       render() {
         return (
            <section>
                <AdSense.Google
                    client='ca-pub-8330076437591523'
                    slot='6443734631'
                    style={{ display: 'block' }}
                    layout='in-article'
                    format='fluid'
                />
          </section>
         )
        }
    }