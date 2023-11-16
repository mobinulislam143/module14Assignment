import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css'


function Footer(props) {
    return (
        <div>
            <footer className='text-center text-lg-start  text-muted'>
               <section>
                    <div className='container text-center text-md-start text-light '>
                        <div className='row'>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h1>WEB LOGO</h1>
                                <p>Some footer text about the Agency. Just a little description to help people understand you better</p>
                                <div className='social-icon'>
                                    <SocialIcon  url="www.facebook.com" />
                                    <SocialIcon style={{margin: "0px 5px", }} url="https://bd.linkedin.com/" />
                                    <SocialIcon style={{margin: "0px 5px" }} url="www.twitter.com" />
                                    <SocialIcon   url="www.instagram.com" />
                                </div>
                                <p className='mt-4'>Copyright Design Agency 2022</p>
                            </div>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h3>Quick Links</h3>
                                <ul className='list-group'>
                                    <li ><a href='/service'>Services</a></li>
                                    <li><a href='#'>Portfolio</a></li>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>Contact Us</a></li>
                                </ul>
                            </div>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h3>Address</h3>
                                <p>Design Agency Head Office. Airport Road United Arab Emirate</p>
                            </div>
                        </div>
                    </div>
               </section>
            </footer>
            
        </div>
    );
}

export default Footer;