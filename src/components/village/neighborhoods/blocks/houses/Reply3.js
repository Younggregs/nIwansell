import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import FormatDate from './Format Date'
import Share from './Share'
import Reply4 from './Reply4'
import SendReply4 from './Send Reply4'

var FontAwesome = require('react-fontawesome')

export default class Reply3 extends React.Component {

  state={
   replylist: [],
   isLoading: false,
   dp: null,
   votes: 0, 
   media: null
  }

  async componentWillMount() {

    this.setState({ isLoading: true })
    try {
        const res = await fetch('https://www.iwansell.com/api/reply_3/' + this.props.reply_id);
        const replylist = await res.json();
        this.setState({
          replylist
        });
      } catch (e) {
        console.log(e);
      }
    this.setState({ isLoading: false })


  }

  setMedia(dp, media, votes){
    this.state.dp = 'https://www.iwansell.com/media/' + dp
    this.state.media = 'https://www.iwansell.com/media/' + media
    this.state.votes = votes
  }


  emptyResult(){

    var empty_set = false

    if(this.state.replylist.length <= 0 ){
      empty_set = true
    }
    return empty_set
  }


  async vote(toggle, reply_id){

    this.setState({ isLoading3: true, votesent: true, toggle })
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/vote_reply_3/' + toggle + '/' + reply_id, {
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


      render() {

        return (
           <div>
            {this.state.replylist.map(item => (
                <div className="reply-line">
                    {this.setMedia(item.dp, item.media, item.votes)}
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
                    <p>{item.reply}</p>
              
        
                <Row>
                <Col lg={1} md={1} sm={1} xs={1}>
                <FontAwesome
                                  className="super-crazy-colors"
                                  name="arrow-up"
                                  size="1x"
                                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                  onClick={() => this.vote(1, item.reply_id)}
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
                                  onClick={() => this.vote(0, item.reply_id)}
                                />
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2}>
                      <SendReply4 count={item.reply_count} reply={item.reply} reply_id={item.reply_id} thread_id={this.props.thread_id}/>
                    </Col>
                </Row>
                <Reply4 reply={item.reply} reply_id={item.reply_id} thread_id={this.props.thread_id}/>
            </div> 

            ))}
                
           </div>
         )
     }
}
