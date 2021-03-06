import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import ReactPlayer from 'react-player'
import fileType from './blocks/houses/FileType'

import loadable from '@loadable/component'

const FormatDate = loadable(() => import('./blocks/houses/Format Date'))
const Share = loadable(() => import('./blocks/houses/Share'))
const FloatingActionButton2 = loadable(() => import('./blocks/houses/Floating Action2'))
const SendComment = loadable(() => import('./blocks/houses/Send Comment'))

var FontAwesome = require('react-fontawesome')


export default class ChannelHome extends React.Component {

  state={
    account_id: null,
    isLoggedIn: true,
    isLoading: false,
    campus_id: 1,
    threadlist: [],
    market: "Your",
    media: null,
    logo: null,
    isLoading2: false,
    following: false,
    votes: false,
    votesent: false,
    toggle: null,
    is_video: false
  }

  isFile(filename){
    this.state.is_video = fileType(filename)
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')

    this.setState({ isLoading: true })

    try {
        const res = await fetch('https://www.iwansell.com/api/channel/' + this.props.campus_id);
        const threadlist = await res.json();
        this.setState({
          threadlist
        });
      } catch (e) {
        console.log(e);
      }

    try {
      const res = await fetch('https://www.iwansell.com/api/isloggedin/', {

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      .then(response => {
        if (response.status === 200) {

        } else {
          this.setState({ isLoggedIn: false})
        }
      })
    } catch (e) {
      console.log(e);
    }


    try {
      const res = await fetch('https://www.iwansell.com/api/get_account/',{

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       },

      });
      const account_id = await res.json();
      this.setState({
        account_id
      });
    } catch (e) {
      console.log(e);
    }


    try {
      const res = await fetch('https://www.iwansell.com/api/get_campus/',{

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       },

      });
      const campus_id = await res.json();
      this.setState({
        campus_id
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false })


  }

  setMedia(media_name, logo, following, votes){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
    this.state.logo = 'https://www.iwansell.com/api/media/' + logo
    this.state.following = following
    this.state.votes = votes
  }


  emptyResult(){

    var empty_set = false

    if(this.state.threadlist.length <= 0 ){
      empty_set = true
    }
    return empty_set
  }


  async follow(channel_id){
    this.setState({ isLoading2: true })
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/follow/' + channel_id, {
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }
      })
      const following = await res.json();
      this.setState({
        following
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({ isLoading2: false })
  }



  async vote(toggle, thread_id){

    this.setState({ isLoading3: true, votesent: true, toggle })
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/vote/' + toggle + '/' + thread_id, {
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }
      })
      const votes = await res.json();
      await this.setState({
          votes
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({ isLoading3: false })
  }

  voteState(){
      if(this.state.toggle == 1){
        var votes = this.state.votes + 1
      }else{
        var votes = this.state.votes - 1
      }

      return votes
      
  }


  shareUrl(id){
   return 'https://www.iwansell.com/thread/' + id
  }



  getThread(thread){
    return thread.substring(0, 300) + ' ...'
  }


      render() {

        return (
           <div>
             {this.state.isLoading ? (
                    <div className="isloading">
                        <p><b><i>loading...</i></b></p>
                        <p><Spinner color="#ff0000" size={32}/></p>
                    </div>
                    ) : (
                    <section>
             <FloatingActionButton2/>
              <section>
                 {this.emptyResult() ? (
                    <p className="err-msg">Its empty here, what you waiting for? start uploading!</p>
                    ) : (
                        <div>
                        {this.state.threadlist.map( item => 
                            
                            <div className="thread">
                             
                                {this.setMedia(item.media, item.logo, item.following, item.votes)}

                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div className="a-row"><Image src= { `${this.state.logo}` } height="40" width="40" alt="iwansell-logo" responsive rounded/>
                                        <p style={{ fontWeight: 'bold', fontSize: 20 }}>{item.channel}</p></div>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <p>Posted By {item.firstname}#{item.lastname} <FormatDate date={item.date}/></p>
                                </Col>

                               {/* } <Col lg={2} md={2} sm={2} xs={2}>
                                    {this.state.isLoading2 ? (
                                        <p>following...</p>
                                    ) : (
                                        <div>
                                            {this.state.following ? (
                                                <Button variant="outline-info" disabled><div glyph="check"/>Following</Button>
                                            ) : (
                                                <Button variant="outline-info" onClick={() => this.follow(item.channel_id)}><div glyph="check"/>Follow</Button>
                                            )}
                                        </div>
                                    )}
                                </Col>
                              */}
                            </Row>
                            <Link to={`/thread/${ item.thread_id }`}>
                            <div style={{ margin: 10 }}>
                                
                                <p style={{ fontWeight: 'bold', fontSize: 20}}>{item.title}</p>
                                <p>{this.getThread(item.thread)}<Button variant="outline-info"><div glyph="tasks"/>Continue To Conversation</Button></p>
                                      {this.isFile(item.media)}
                                      {this.state.is_video ? (
                                        <ReactPlayer controls={true} url={ `${this.state.media}` } width='100' height='100%' />
                                      ) : (
                                        <Image  src= { `${this.state.media}` } alt="image" responsive rounded/>
                                      )}
                                      
                            </div>
                            

                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                <FontAwesome
                                  className="super-crazy-colors"
                                  name="arrow-up"
                                  size="1x"
                                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                  onClick={() => this.vote(1, item.thread_id)}
                                />
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    {this.state.votesent ? (
                                        <span>{this.voteState()}</span>
                                    ) : (
                                        <span>{this.state.votes}</span>
                                    )}
                                    
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                <FontAwesome
                                  className="super-crazy-colors"
                                  name="arrow-down"
                                  size="1x"
                                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                  onClick={() => this.vote(0, item.thread_id)}
                                />
                                </Col>

                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <SendComment count={item.comment_count} thread={item.thread} thread_id={item.thread_id}/>
                                </Col>

                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <Share url={this.shareUrl(item.thread_id)}/>
                                </Col>
                                <Col lg={2} md={2} sm={3} xs={3}>
                                    
                                </Col>
                            </Row>
                            </Link>
                            </div>
                        
                        )}
                        
                        </div>
                    )}
            </section>

            </section>
            )}
           </div>
         )
     }
}
