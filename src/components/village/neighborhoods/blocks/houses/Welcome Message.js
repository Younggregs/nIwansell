import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default class WelcomeMessage extends React.Component {
       render() {
         return (
           <div className="welcome-message" id="welcome-message">
                <p>Iwansell is a place to buy and sell on a campus.</p><br />
                <p>We have opened up Iwansell for popular consumption in <b>FUTMinna campus.</b></p><br />
                <p>You can use Iwansell to :</p>
                <ul>
                    <li><b>Sell</b> anything you want</li>
                    <li><b>Buy</b> anything you can find</li>
                    <li>Rent online stores<b>(eShops)</b></li>
                    <li>Carry out market valuation using <b>Business Mode</b></li>
                </ul><br />
           </div>
         )
       }
  }
