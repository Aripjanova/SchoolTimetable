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

class TeacherSingle extends React.Component {
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
                     style={{backgroundImage: "url(" + bg_2 + ")", backgroundAttachment:"fixed"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center"
                             data-scrollax-parent="true">
                            <div className="col-md-8 ftco-animate text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span>
                                    <span className="mr-2"><a href="teacher.html">Teacher</a></span> <span>Teacher Details</span>
                                </p>
                                <h1 className="mb-3 bread">Teacher Details</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="teacher-details d-md-flex">
                                            <div className="img ftco-animate"
                                                 style={{backgroundImage: "url(" + person_5 + ")"}}></div>
                                            <div className="text ftco-animate">
                                                <h3>Mary Gold</h3>
                                                <span className="position">CSE Teacher</span>
                                                <p>When she reached the first hills of the Italic Mountains, she had a
                                                    last view back on the skyline of her hometown Bookmarksgrove, the
                                                    headline of Alphabet Village and the subline of her own road, the
                                                    Line Lane. Pityful a rethoric question ran over her cheek, then she
                                                    continued her way.</p>

                                                <p>When she reached the first hills of the Italic Mountains, she had a
                                                    last view back on the skyline of her hometown Bookmarksgrove, the
                                                    headline of Alphabet Village and the subline of her own road, the
                                                    Line Lane. Pityful a rethoric question ran over her cheek, then she
                                                    continued her way.</p>
                                                <div className="mt-4">
                                                    <h4>Social Link</h4>
                                                    <p className="ftco-social d-flex">
                                                        <a href="#"
                                                           className="d-flex justify-content-center align-items-center"><span
                                                            className="icon-twitter"></span></a>
                                                        <a href="#"
                                                           className="d-flex justify-content-center align-items-center"><span
                                                            className="icon-facebook"></span></a>
                                                        <a href="#"
                                                           className="d-flex justify-content-center align-items-center"><span
                                                            className="icon-instagram"></span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 bg-light mt-3 p-5 ftco-animate">
                                        <h4 className="mb-4">Send a Message</h4>
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Name"></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Email"></input>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="" id="" cols="30" rows="7" className="form-control"
                                                          placeholder="Message"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Send Message"
                                                       className="btn btn-primary py-3 px-5"></input>
                                            </div>
                                        </form>
                                    </div>
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
export default TeacherSingle