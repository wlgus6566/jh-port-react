import React from 'react';
import Header from '../components/Header';
import './Contact.scss';


function Contact(){
  return (
      <div id="wrap">
        <Header color="brown"/>
          <section id="contact">
            <div className="container">
              <h2 className="bigTitle">Get in touch</h2>
              <div className="contact_cont">
                <div className="left">
                  <div className="txt">
                    <strong>Location</strong>
                    <p>10, Dongjak-daero 29ba-gil, Dongjak-gu, Seoul, Republic of Korea</p>
                  </div>
                  <div className="txt">
                    <strong>Phone number</strong>
                    <p>010 - 5578 - 6566</p>
                  </div>
                  <div className="txt">
                    <strong>Email</strong>
                    <p>wlgus6566@naver.com</p>
                  </div>
                </div>
                <div className="right">
                  <div className="img">contact 이미지</div>
                </div>
              </div>
              <div className="contact_bottom">
                <h3> Let’s contact me<br></br>
                  anytime. Share your<br></br>
                  story and grow with me.</h3>
              </div>
            </div>
          </section>
      </div>
  )
}

export default Contact;