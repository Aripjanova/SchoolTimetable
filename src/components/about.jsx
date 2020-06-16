 import React from "react";
 import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
 } from "react-router-dom";
 import bg_1 from './images/bg_1.jpg'
 import bg_2 from './images/bg_2.jpg'
 import bg_3 from './images/bg_3.jpg'
 import bg_4 from './images/bg_4.jpg'
 import course_1 from './images/course-1.jpg'
 import course_2 from './images/course-2.jpg'
 import course_3 from './images/course-3.jpg'
 import course_4 from './images/course-4.jpg'
 import course_5 from './images/course-5.jpg'
 import course_6 from './images/course-6.jpg'
 import event_1 from './images/event-1.jpg'
 import event_2 from './images/event-2.jpg'
 import event_3 from './images/event-3.jpg'
 import event_4 from './images/event-4.jpg'
 import event_5 from './images/event-5.jpg'
 import event_6 from './images/event-6.jpg'
 import image_1 from './images/image_1.jpg'
 import image_2 from './images/image_2.jpg'
 import image_3 from './images/image_3.jpg'
 import image_4 from './images/image_4.jpg'
 import image_5 from './images/image_5.jpg'
 import image_6 from './images/image_6.jpg'
 import loc from './images/loc.png'
 import person_1 from './images/person_1.jpg'
 import person_2 from './images/person_2.jpg'
 import person_3 from './images/person_3.jpg'
 import person_4 from './images/person_4.jpg'
 import person_5 from './images/person_5.jpg'
 import person_6 from './images/person_6.jpg'
 import person_7 from './images/person_7.jpg'
 import person_8 from './images/person_8.jpg'
 import person_9 from './images/person_9.jpg'
 import Header from "./header";
 import Subcribe from "./subcribe";
 import Footer from "./footer";

class About extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount()
    {
        const script = document.createElement("script");

        script.src = "/my-app/public/assets/js/jquery.min";
        //   <script src="assets/js/jquery.min.js"></script>
        script.src="assets/js/jquery-migrate-3.0.1.min.js";
        script.src="assets/js/popper.min.js";
        script.src="assets/js/bootstrap.min.js";
        script.src="assets/js/jquery.easing.1.3.js";
        script.src="assets/js/jquery.waypoints.min.js";
        script.src="assets/js/jquery.stellar.min.js";
        script.src="assets/js/owl.carousel.min.js";
        script.src="assets/js/jquery.magnific-popup.min.js";
        script.src="assets/js/aos.js";
        script.src="assets/js/jquery.animateNumber.min.js";
        script.src="assets/js/bootstrap-datepicker.js";
        script.src="assets/js/jquery.timepicker.min.js";
        script.src="assets/js/scrollax.min.js";
        script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false";
        script.src="assets/js/google-map.js";
        script.src="assets/js/main.js";
        //<script.src="assets/js/jquery.min.js"></script>

        // script.async = true;

        document.body.appendChild(script);
    }

    render(){
        return(
            <div>
                <div className="hero-wrap hero-wrap-2"
                     style={{backgroundImage: "url("+ bg_2 + ")", backgroundAttachment:"fixed"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center"
                             data-scrollax-parent="true">
                            <div className="col-md-8 ftco-animate text-center">
                                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Негизги</Link></span>
                                    <span>Биз</span></p>
                                <h1 className="mb-3 bread">Биз жонундо</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="ftco-section">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-6 d-flex ftco-animate">
                                <div className="img img-about align-self-stretch"
                                     style={{backgroundImage: "url("+ bg_3 + ")", width: "100%"}}></div>
                            </div>
                            <div className="col-md-6 pl-md-5 ftco-animate">
                                <h2 className="mb-4">Кош келиндер  Кожоке атындагы орто мектепке!</h2>
                                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                                    wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
                                    She packed her seven versalia, put her initial into the belt and made herself on the
                                    way.</p>
                                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came
                                    from it would have been rewritten a thousand times and everything that was left from
                                    its origin would be the word "and" and the Little Blind Text should turn around and
                                    return to its own, safe country. But nothing the copy said could convince her and so
                                    it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk
                                    with Longe and Parole and dragged her into their agency, where they abused her for
                                    their.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section-3 img" style={{backgroundImage: "url("+ bg_3 +")"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row d-md-flex justify-content-center">
                            <div className="col-md-9 about-video text-center">
                                <h2 className="ftco-animate">Genius University is a Leading Schools Around the
                                    World</h2>
                                <div className="video d-flex justify-content-center">
                                    <a href="https://vimeo.com/45830194"
                                       className="button popup-vimeo d-flex justify-content-center align-items-center"><span
                                        className="ion-ios-play"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-counter bg-light" id="section-counter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="10300">0</strong>
                                                <span>Satisfied Students</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="7896">0</strong>
                                                <span>Courses Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="400">0</strong>
                                                <span>Experts Advisors</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="200">0</strong>
                                                <span>Schools</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section testimony-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">What Our Student Says</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ftco-animate">
                                <div className="carousel-testimony owl-carousel">
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url("+ person_1 +")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from
                                                    the countries Vokalia and Consonantia, there live the blind texts.
                                                    Separated they live in Bookmarksgrove right at the coast of the
                                                    Semantics, a large language ocean.</p>
                                                <p className="name">Dennis Green</p>
                                                <span className="position">CSE Student</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url("+ person_2 +")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from
                                                    the countries Vokalia and Consonantia, there live the blind texts.
                                                    Separated they live in Bookmarksgrove right at the coast of the
                                                    Semantics, a large language ocean.</p>
                                                <p className="name">Dennis Green</p>
                                                <span className="position">Math Student</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url("+ person_3 +")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from
                                                    the countries Vokalia and Consonantia, there live the blind texts.
                                                    Separated they live in Bookmarksgrove right at the coast of the
                                                    Semantics, a large language ocean.</p>
                                                <p className="name">Dennis Green</p>
                                                <span className="position">Science Students</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url("+ person_3 +")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from
                                                    the countries Vokalia and Consonantia, there live the blind texts.
                                                    Separated they live in Bookmarksgrove right at the coast of the
                                                    Semantics, a large language ocean.</p>
                                                <p className="name">Dennis Green</p>
                                                <span className="position">English Student</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Subcribe/>
                <Footer/>


                 {/*loader -->*/}
                {/*<div id="ftco-loader" className="show fullscreen">*/}
                {/*    <svg className="circular" width="48px" height="48px">*/}
                {/*        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4"*/}
                {/*                stroke="#eeeeee"/>*/}
                {/*        <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4"*/}
                {/*                stroke-miterlimit="10" stroke="#F96D00"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}


            </div>
        )
    }
}
export default About