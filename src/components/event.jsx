import React from "react";
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

class Event extends React.Component {
    constructor(props) {
        super(props);}
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
    render() {
        return (
            <div>

                {/*END nav -->*/}

                <div className="hero-wrap hero-wrap-2"
                     style={{backgroundImage: "url(" + bg_1 + ")", backgroundAttachment:"fixed"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center"
                             data-scrollax-parent="true">
                            <div className="col-md-8 ftco-animate text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span>
                                    <span>Event</span></p>
                                <h1 className="mb-3 bread">Events</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20"
                                       style={{backgroundImage: "url(" + event_1 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">Sep. 10, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                                            </div>
                                        </div>
                                        <h3 className="heading mb-4"><a href="#">Intern Bootcamp Meetup 2018</a></h3>
                                        <p className="time-loc"><span className="mr-2"><i className="icon-clock-o"></i> 10:30AM-03:30PM</span>
                                            <span><i className="icon-map-o"></i> Venue Main Campus</span></p>
                                        <p>A small river named Duden flows by their place and supplies it with the
                                            necessary regelialia.</p>
                                        <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry d-md-flex align-self-stretch flex-column-reverse">
                                    <a href="blog-single.html" className="block-20 align-self-end"
                                       style={{backgroundImage: "url(" + event_2 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">Sep. 10, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                                            </div>
                                        </div>
                                        <h3 className="heading mb-4"><a href="#">Intern Bootcamp Meetup 2018</a></h3>
                                        <p className="time-loc"><span className="mr-2"><i className="icon-clock-o"></i> 10:30AM-03:30PM</span>
                                            <span><i className="icon-map-o"></i> Venue Main Campus</span></p>
                                        <p>A small river named Duden flows by their place and supplies it with the
                                            necessary regelialia.</p>
                                        <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20"
                                       style={{backgroundImage: "url(" + event_3 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">Sep. 10, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                                            </div>
                                        </div>
                                        <h3 className="heading mb-4"><a href="#">Intern Bootcamp Meetup 2018</a></h3>
                                        <p className="time-loc"><span className="mr-2"><i className="icon-clock-o"></i> 10:30AM-03:30PM</span>
                                            <span><i className="icon-map-o"></i> Venue Main Campus</span></p>
                                        <p>A small river named Duden flows by their place and supplies it with the
                                            necessary regelialia.</p>
                                        <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            <Subcribe/>
            <Footer/>
            </div>
        )
    }
}
export default Event