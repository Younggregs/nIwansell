import React from 'react'
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    RedditShareButton,
    InstapaperShareButton,
    EmailShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    PinterestIcon,
    RedditIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share'
import { Button, Glyphicon, Col, Row } from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class Share extends React.Component {

    options = {
        title: 'Title',
        message: 'Message',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ],
        childrenElement: () => <div />,
        customUI: ({ onClose }) => 
            <div className='custom-ui'>
                <h2>Share On</h2>
                <br /><br />
                <Row>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <WhatsappShareButton url="https://www.iwansell.com/"><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <TwitterShareButton url="https://www.iwansell.com/"><TwitterIcon size={32} round={true} /></TwitterShareButton>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <FacebookShareButton url="https://www.iwansell.com/"><FacebookIcon size={32} round={true} /></FacebookShareButton>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <TelegramShareButton url="https://www.iwansell.com/"><TelegramIcon size={32} round={true} /></TelegramShareButton>
                    </Col>
                </Row><br /><br />
                <Row>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <PinterestShareButton url="https://www.iwansell.com/"><PinterestIcon size={32} round={true} /></PinterestShareButton>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <RedditShareButton url="https://www.iwansell.com/"><RedditIcon size={32} round={true} /></RedditShareButton>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <EmailShareButton url="https://www.iwansell.com/"><EmailIcon size={32} round={true} /></EmailShareButton>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <LinkedinShareButton url="https://www.iwansell.com/"><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                    </Col>
                </Row>
               
            </div>,
        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => {},
        onClickOutside: () => {},
        onKeypressEscape: () => {}
    };
    
    
      customAlert(){
          confirmAlert(this.options)
      }

       render() {
         return (
           <section>
               <Glyphicon onClick={() => this.customAlert()} glyph="share-alt">share</Glyphicon>
           </section>
         )
       }
  }
