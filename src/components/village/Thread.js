import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import ReactPlayer from 'react-player'
import fileType from './neighborhoods/blocks/houses/FileType'

import loadable from '@loadable/component'

const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const Post = loadable(() => import('./neighborhoods/blocks/houses/Post'))
const Footer = loadable(() => import('./neighborhoods/Footer'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const FormatDate = loadable(() => import('./neighborhoods/blocks/houses/Format Date'))
const Share = loadable(() => import('./neighborhoods/blocks/houses/Share'))
const Reply = loadable(() => import('./neighborhoods/blocks/houses/Reply'))
const SendComment = loadable(() => import('./neighborhoods/blocks/houses/Send Comment'))
const SendReply = loadable(() => import('./neighborhoods/blocks/houses/Send Reply'))
const FloatingActionButton2  = loadable(() => import('./neighborhoods/blocks/houses/Floating Action2'))

var FontAwesome = require('react-fontawesome')


export default class Thread extends React.Component {

  state={
    account_id: null,
    isLoggedIn: true,
    isLoading: false,
    isLoading2: false,
    isLoading3: false,
    isLoading4: false,
    campus_id: 1,
    thread: [],
    commentlist: [],
    market: "Your",
    media: null,
    logo: null,
    dp: null,
    isLoading2: false,
    following: false,
    votes: false,
    votesent: false,
    comment_votes: false,
    comment_votesent: false,
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
        const res = await fetch('https://www.iwansell.com/api/thread/'  + this.props.match.params.thread_id);
        const thread = await res.json();
        this.setState({
          thread
        });
      } catch (e) {
        console.log(e);
      }

    
      try {
        const res = await fetch('https://www.iwansell.com/api/comment/' + this.state.thread.thread_id);
        const commentlist = await res.json();
        this.setState({
          commentlist
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

    this.setState({ isLoading: false })


  }

  setMedia(media_name, logo, following, votes){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
    this.state.logo = 'https://www.iwansell.com/api/media/' + logo
    this.state.following = following
    this.state.votes = votes
  }


  setMedia2(dp, comment_votes){
    this.state.dp = 'https://www.iwansell.com/api/media/' + dp
    this.state.comment_votes = comment_votes
  }


  emptyResult(){

    var empty_set = true

    if(this.state.thread){
      empty_set = false
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
















  async voteComment(toggle, comment_id){

    this.setState({ isLoading4: true, votesent: true, toggle })
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/vote_comment/' + toggle + '/' + comment_id, {
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }
      })
      const comment_votes = await res.json();
      await this.setState({
        comment_votes
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({ isLoading4: false })
  }

  voteStateComment(){
      if(this.state.toggle == 1){
        var votes = this.state.comment_votes + 1
      }else{
        var votes = this.state.comment_votes - 1
      }

      return votes
      
  }








  shareUrl(id){
    return 'https://www.iwansell.com/thread/' + id
   }




      render() {

        return (
           <div className="channel-bg">
             
            <NavigationHeader/>
            <Container>
              <Row>
                <Col lg={8} md={8} sm={12} xs={12}>

                
            <Row className="channel-title-bg">
                <Col lg={6} md={3} sm={6} xs={6}>
                
                <Link to='/channel/1'>
                  <Button variant="info" block>Home</Button>
                </Link>

                </Col>


                <Col lg={6} md={6} sm={6} xs={6}>
                <Link to='Channel/1'>
                  <Button variant="warning" block>Trending</Button>
                </Link>
                </Col>
            </Row>

             <Row>

                 {this.state.isLoading ? (
                    <div className="isloading">
                        <p><b><i>loading...</i></b></p>
                        <p><Spinner color="#ff0000" size={32}/></p>
                    </div>
                    ) : (
                    <section>
                    <FloatingActionButton2/>
                
                        {this.emptyResult() ? (

                            <p className="err-msg">Sorry wrong turn</p>

                        ) : (
                            
                        <div className="thread">
                        {this.setMedia(this.state.thread.media, this.state.thread.logo, this.state.thread.following, this.state.thread.votes)}

                        <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="a-row"><Image src= { `${this.state.logo}` } height="40" width="40" alt="iwansell-logo" responsive rounded/>
                                <p style={{ fontWeight: 'bold', fontSize: 20, fontFamily: 'Baloo Bhai' }}>{this.state.thread.channel}</p></div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <p style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'Baloo Bhai' }}>Posted By {this.state.thread.firstname}#{this.state.thread.lastname} <FormatDate date={this.state.thread.date}/></p>
                        </Col>
                        {/*}
                        <Col lg={2} md={2} sm={2} xs={2}>
                        {this.state.isLoading2 ? (
                            <p>following...</p>
                            ) : (
                        <div>
                            {this.state.following ? (
                            <Button variant="outline-info" disabled>
                              <FontAwesome
                                className="super-crazy-colors"
                                name="rocket"
                                size="2x"
                                spin
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />Following</Button>
                            ) : (
                            <Button variant="info" onClick={() => this.follow(this.state.thread.channel_id)}>
                              <FontAwesome
                                className="super-crazy-colors"
                                name="rocket"
                                size="2x"
                                spin
                              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                              />
                            Follow</Button>
                            )}
                        </div>
                            )}
                        </Col>
                        */}
                        </Row>

                    <div style={{ margin: 10 }}>
                        <p style={{ fontWeight: 'bold', fontSize: 20, fontFamily:'Lexend Exa'}}>{this.state.thread.title}</p>
                        <p>{this.state.thread.thread}</p>
                         {this.isFile(this.state.thread.media)}
                         {this.state.is_video ? (
                              <ReactPlayer controls={true} url={ `${this.state.media}` } width='100' height='100%' playing />
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
                                  onClick={() => this.vote(1, this.state.thread.thread_id)}
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
                                  onClick={() => this.vote(0, this.state.thread.thread_id)}
                                />
                                </Col>

                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <SendComment account_id={this.state.account_id} count={this.state.thread.comment_count} thread={this.state.thread.thread} thread_id={this.state.thread.thread_id}/>
                                </Col>

                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <Share url={this.shareUrl(this.props.match.params.thread_id)}/>
                                </Col>
                                
                            </Row><hr />

                       
                     
                        <Row>
                            <div className="comment-box">
                            {this.state.commentlist.map(item => (
                                <div style={{ marginTop: 10}}>
                                  {this.setMedia2(item.dp, item.votes )}
                                <Row>
                                <Col lg={2} md={2} sm={4} xs={4}>
                                    <Image src= { `${this.state.dp}` } height="40" width="40" alt="iwansell-logo" responsive rounded/> 
                                </Col>
                                <Col lg={6} md={6} sm={5} xs={5}>
                                    <p style={{ fontWeight: 'bold', fontSize: 13 }}>
                                        {item.firstname}#{item.lastname} <FormatDate date={item.date}/>
                                    </p>
                                </Col>
                            </Row>
                                <p>{item.comment} </p>
                                
                                <Row>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <div glyph="arrow-up" onClick={() => this.voteComment(1, item.comment_id)}/>
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    {this.state.comment_votesent ? (
                                        <span>{this.voteStateComment()}</span>
                                    ) : (
                                        <span>{this.state.comment_votes}</span>
                                    )}
                                    
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <div glyph="arrow-down" onClick={() => this.voteComment(0, item.comment_id)}/>
                                </Col>


                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <SendReply account_id={this.state.account_id} count={item.comment_count} comment={item.comment} comment_id={item.comment_id} thread_id={this.props.match.params.thread_id}/>
                                </Col>

                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <Share url={this.shareUrl(this.props.match.params.thread_id)}/>
                                </Col>
                                </Row>
                                <Reply comment={item.comment} comment_id={item.comment_id} thread_id={this.props.match.params.thread_id}/>
                                </div>
                                
                                
                            ))}           
                            </div>
                            </Row>
                        </div>
                        
                    )}
                    </section>
                    )}
                    
                </Row>



            


             </Col>
             <Col lg={4} md={4} className="d-none d-sm-block d-xs-block">
                        <div className="thread">
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/nn.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                        </div>
                 </Col>
            </Row>
            </Container>
             <br /><br />
             <Footer logged_in={this.state.isLoggedIn}/>
             <Copyright/>
           </div>
         )
     }
}
