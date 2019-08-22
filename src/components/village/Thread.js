import React from 'react'
import { Grid, Row, Col, Image, Button, Glyphicon } from 'react-bootstrap'
import NavigationHeader from './neighborhoods/blocks/Navigation Header'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import FormatDate from './neighborhoods/blocks/houses/Format Date'
import Share from './neighborhoods/blocks/houses/Share'
import Reply from './neighborhoods/blocks/houses/Reply'
import SendComment from './neighborhoods/blocks/houses/Send Comment'
import SendReply from './neighborhoods/blocks/houses/Send Reply'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


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
           <div className="home">
            <NavigationHeader/>
             <Grid>
                 <Col lg={8} md={8} smHidden xsHidden>

                 {this.state.isLoading ? (
                    <div className="isloading">
                        <p><b><i>loading...</i></b></p>
                        <p><Spinner color="#ff0000" size={32}/></p>
                    </div>
                    ) : (
                    <section>
                    
                
                        {this.emptyResult() ? (
                            <p className="err-msg">Sorry wrong turn</p>
                        ) : (
                            
                        <div className="thread">
                        {this.setMedia(this.state.thread.media, this.state.thread.logo, this.state.thread.following, this.state.thread.votes)}

                        <Row>
                        <Col lg={3} md={3} sm={4} xs={4}>
                            <div className="a-row"><Image src= { `${this.state.logo}` } height="40" width="40" alt="iwansell-logo" responsive rounded/>
                                <p style={{ fontWeight: 'bold', fontSize: 20 }}>{this.state.thread.channel}</p></div>
                        </Col>
                        <Col lg={6} md={6} sm={5} xs={5}>
                            <p>Posted By {this.state.thread.firstname}#{this.state.thread.lastname} <FormatDate date={this.state.thread.date}/></p>
                        </Col>
                        <Col lg={2} md={2} sm={2} xs={2}>
                        {this.state.isLoading2 ? (
                            <p>following...</p>
                            ) : (
                        <div>
                            {this.state.following ? (
                            <Button disabled><Glyphicon glyph="check"/>Following</Button>
                            ) : (
                            <Button bsStyle="info" onClick={() => this.follow(this.state.thread.channel_id)}><Glyphicon glyph="check"/>Follow</Button>
                            )}
                        </div>
                            )}
                        </Col>
                        </Row>

                    <div style={{ margin: 10 }}>
                        <p style={{ fontWeight: 'bold', fontSize: 20}}>{this.state.thread.title}</p>
                        <p>{this.state.thread.thread}</p>
                        <Image  src= { `${this.state.media}` } alt="iwansell-logo" responsive rounded/>
                    </div>

                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <Glyphicon glyph="arrow-up" onClick={() => this.vote(1, this.state.thread.thread_id)}/>
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    {this.state.votesent ? (
                                        <span>{this.voteState()}</span>
                                    ) : (
                                        <span>{this.state.votes}</span>
                                    )}
                                    
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <Glyphicon glyph="arrow-down" onClick={() => this.vote(0, this.state.thread.thread_id)}/>
                                </Col>

                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <SendComment count={this.state.thread.comment_count} thread={this.state.thread.thread} thread_id={this.state.thread.thread_id}/>
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
                                    <Glyphicon glyph="arrow-up" onClick={() => this.voteComment(1, item.comment_id)}/>
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    {this.state.comment_votesent ? (
                                        <span>{this.voteStateComment()}</span>
                                    ) : (
                                        <span>{this.state.comment_votes}</span>
                                    )}
                                    
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <Glyphicon glyph="arrow-down" onClick={() => this.voteComment(0, item.comment_id)}/>
                                </Col>


                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <SendReply count={item.comment_count} comment={item.comment} comment_id={item.comment_id} thread_id={this.props.match.params.thread_id}/>
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
                    
                 </Col>

                 <Col lg={4} md={4} smHidden xsHidden>
                        <div className="thread">
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/nn.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                        </div>
                 </Col>
             </Grid>






             <Row>
                  <Col lgHidden mdHidden sm={12} xs={12}>

                 {this.state.isLoading ? (
                    <div className="isloading">
                        <p><b><i>loading...</i></b></p>
                        <p><Spinner color="#ff0000" size={32}/></p>
                    </div>
                    ) : (
                    <section>
                    
                
                        {this.emptyResult() ? (
                            <p className="err-msg">Sorry wrong turn</p>
                        ) : (
                            
                        <div className="thread">
                        {this.setMedia(this.state.thread.media, this.state.thread.logo, this.state.thread.following, this.state.thread.votes)}

                        <Row>
                        <Col lg={3} md={3} sm={4} xs={4}>
                            <div className="a-row"><Image src= { `${this.state.logo}` } height="40" width="40" alt="iwansell-logo" responsive rounded/>
                                <p style={{ fontWeight: 'bold', fontSize: 20 }}>{this.state.thread.channel}</p></div>
                        </Col>
                        <Col lg={6} md={6} sm={5} xs={5}>
                            <p>Posted By {this.state.thread.firstname}#{this.state.thread.lastname} <FormatDate date={this.state.thread.date}/></p>
                        </Col>
                        <Col lg={2} md={2} sm={2} xs={2}>
                        {this.state.isLoading2 ? (
                            <p>following...</p>
                            ) : (
                        <div>
                            {this.state.following ? (
                            <Button disabled><Glyphicon glyph="check"/>Following</Button>
                            ) : (
                            <Button bsStyle="info" onClick={() => this.follow(this.state.thread.channel_id)}><Glyphicon glyph="check"/>Follow</Button>
                            )}
                        </div>
                            )}
                        </Col>
                        </Row>

                    <div style={{ margin: 10 }}>
                        <p style={{ fontWeight: 'bold', fontSize: 20}}>{this.state.thread.title}</p>
                        <p>{this.state.thread.thread}</p>
                        <Image  src= { `${this.state.media}` } alt="iwansell-logo" responsive rounded/>
                    </div>

                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <Glyphicon glyph="arrow-up" onClick={() => this.vote(1, this.state.thread.thread_id)}/>
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    {this.state.votesent ? (
                                        <span>{this.voteState()}</span>
                                    ) : (
                                        <span>{this.state.votes}</span>
                                    )}
                                    
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <Glyphicon glyph="arrow-down" onClick={() => this.vote(0, this.state.thread.thread_id)}/>
                                </Col>

                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <SendComment count={this.state.thread.comment_count} thread={this.state.thread.thread} thread_id={this.state.thread.thread_id}/>
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
                                    <Glyphicon glyph="arrow-up" onClick={() => this.voteComment(1, item.comment_id)}/>
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    {this.state.comment_votesent ? (
                                        <span>{this.voteStateComment()}</span>
                                    ) : (
                                        <span>{this.state.comment_votes}</span>
                                    )}
                                    
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <Glyphicon glyph="arrow-down" onClick={() => this.voteComment(0, item.comment_id)}/>
                                </Col>


                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <SendReply count={item.comment_count} comment={item.comment} comment_id={item.comment_id} thread_id={this.props.match.params.thread_id}/>
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
                    
                 </Col>
             </Row>
             <br /><br />
             <Footer logged_in={this.state.isLoggedIn}/>
             <Copyright/>
           </div>
         )
     }
}
