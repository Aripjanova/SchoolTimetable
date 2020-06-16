import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
//import a from '/my-app/public/assets/js/jquery.min'

//import '../../public/assets/css/style.css'
//import '../../public/assets/css/animate.css'
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
import Footer from "./footer";
import Subcribe from "./subcribe";
//https://github.com/hilongjw/vue-dragging
//  https://react-dnd.github.io/react-dnd/examples/sortable/simple
class  Index extends Component{
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

    render(){

        return (
            <div>

                {/*header menu*/}
               {/*<Header/>*/}
                {/*end of header menu*/}

                <div className="hero-wrap" style={{backgroundImage: "url(" + bg_1 + ")", backgroundAttachment:"fixed"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                            <div className="col-md-8 ftco-animate text-center">
                                <h1 className="mb-4" > Эч бир улут жашоодо билимсиз гүлдөй албайт</h1>
                                {/*Никакая нация не может процветать в жизни без образования*/}
                                <p>
                                    <a href="#" className="btn btn-primary px-4 py-3">Байланыш</a>
                                    <a href="#" className="btn btn-secondary px-4 py-3">Расписание</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ftco-search-course">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="courseSearch-wrap d-md-flex flex-column-reverse">
                                    <div className="full-wrap d-flex ftco-animate">
                                        <div className="one-third order-last p-5">
                                            <span>Маалыматты издөө</span>
                                            <h3>I want to study</h3>
                                            <form action="#" className="course-search-form">
                                                <div className="form-group d-flex">
                                                    <input type="text" className="form-control" placeholder="Type a course you want to study"></input>
                                                    <input type="submit" value="Search" className="submit"></input>
                                                </div>
                                            </form>
                                            <p>Just Browsing? <a href="#"> See all courses</a></p>
                                        </div>
                                        <div className="one-forth order-first img" style={{backgroundImage:"url(" + image_1 + ")"}}></div>
                                    </div>
                                    <div className="full-wrap ftco-animate">
                                        <div className="one-half">
                                            <div className="featured-blog d-md-flex">
                                                <div className="image d-flex order-last">
                                                    <a href="#" className="img" style={{backgroundImage: "url(" + image_2 + ")"}}></a>
                                                </div>
                                                <div className="text order-first">
                                                    <span className="date">Aug 20, 2018</span>
                                                    <h3><a href="#">Семинар өткөрөбүз 03.03.2020</a></h3>
                                                    <p>III чейректи жыйнтоочу семир өткөрулөт.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services p-3 py-4 d-block text-center">
                                    <div className="icon d-flex justify-content-center align-items-center mb-3"><span
                                        className="flaticon-exam"></span></div>
                                    <div className="media-body px-3">
                                        <h3 className="heading">Экзамендер</h3>
                                        <p>Чейрек ичинде откорулгон экзамен ар бир класстын жеке кабинеттеринде откорулот.Жыйынтыктоочу экзамендерге атайын каналар болунгон</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services p-3 py-4 d-block text-center">
                                    <div className="icon d-flex justify-content-center align-items-center mb-3"><span
                                        className="flaticon-blackboard"></span></div>
                                    <div className="media-body px-3">
                                        <h3 className="heading">Кабинеттер</h3>
                                        <p>Сабактарга арналган 35 кабинет жана сабактан тышкаркы иштер учун 5 кабинет бар. Ар бир кабинетте тактайлар жайгашкан.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services p-3 py-4 d-block text-center">
                                    <div className="icon d-flex justify-content-center align-items-center mb-3"><span
                                        className="flaticon-books"></span></div>
                                    <div className="media-body px-3">
                                        <h3 className="heading">Биздин китепкана</h3>
                                        <p>Мектепте 3000 ден ашуун ар турдуу багыттагы китептер бар</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="ftco-section-3 img" style={{backgroundImage: "url(" + bg_3 + ")"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row d-md-flex justify-content-center">
                            <div className="col-md-9 about-video text-center">
                                <h2 className="ftco-animate">Кожоке атындагы орто мектеби Ноокат районун эн алдынкы мектептеринин бири</h2>
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
                                                <strong className="number" data-number="800">0</strong>
                                                <span>Окуучу</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="450">0</strong>
                                                <span>5-11 класс окуучусу</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="350">0</strong>
                                                <span>1-4 класс окуучусу</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="150">0</strong>
                                                <span>Алдынкы окуучу</span>
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
                                <h2 className="mb-4">Биздин окуучулар  эмне дейт</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ftco-animate">
                                <div className="carousel-testimony owl-carousel">
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5" style={{backgroundImage: "url(" + person_1 + ")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                                    the Semantics, a large language ocean.</p>
                                                <p className="name">Dennis Green</p>
                                                <span className="position">CSE Student</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5" style={{backgroundImage: "url(" + person_2 + ")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                                    the Semantics, a large language ocean.</p>
                                                <p className="name">Dennis Green</p>
                                                <span className="position">Math Student</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5" style={{backgroundImage: "url(" + person_3 + ")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                                    the Semantics, a large language ocean.</p>
                                                <p className="name">Dennis Green</p>
                                                <span className="position">Science Students</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap text-center">
                                            <div className="user-img mb-5" style={{backgroundImage: "url(" + person_3 + ")"}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                                    the Semantics, a large language ocean.</p>
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

                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Сыймыктанган бутуруучулор</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="d-flex mb-4">
                                        <div className="img" style={{backgroundImage: "url(" + person_1 + ")"}}></div>
                                        <div className="info ml-4">
                                            <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                                            <span className="position">CSE Teacher</span>
                                            <p className="ftco-social d-flex">
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-twitter"></span></a>
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-facebook"></span></a>
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-instagram"></span></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                            One day however a small line of blind text by the name</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="d-flex mb-4">
                                        <div className="img" style={{backgroundImage: "url(" + person_2 + ")"}}></div>
                                        <div className="info ml-4">
                                            <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                                            <span className="position">CSE Teacher</span>
                                            <p className="ftco-social d-flex">
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-twitter"></span></a>
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-facebook"></span></a>
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-instagram"></span></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                            One day however a small line of blind text by the name</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-sm-4 ftco-animate">
                                <div className="staff">
                                    <div className="d-flex mb-4">
                                        <div className="img" style={{backgroundImage: "url(" + person_3 + ")"}}></div>
                                        <div className="info ml-4">
                                            <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                                            <span className="position">CSE Teacher</span>
                                            <p className="ftco-social d-flex">
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-twitter"></span></a>
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-facebook"></span></a>
                                                <a href="#" className="d-flex justify-content-center align-items-center"><span
                                                    className="icon-instagram"></span></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                            One day however a small line of blind text by the name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-freeTrial">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex align-items-center">
                                    <div className="free-trial ftco-animate">
                                        <h3>Мектеп бул жашоонун устаканасы</h3>
                                        <p>3000 ден ашуун баланы уядан учурган мектебибиз</p>
                                    </div>
                                    <div className="btn-join ftco-animate">
                                        <p><a href="#" className="btn btn-primary py-3 px-4">Кэнен маалымат</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Биздин ийримдер</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="course align-self-stretch">
                                    <a href="#" className="img" style={{backgroundImage: "url(" + course_1 + ")"}}></a>
                                    <div className="text p-4">
                                        <p className="category"><span>English</span></p>
                                        <h3 className="mb-3"><a href="#">English for Tommorow</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                            One day however a small line of blind text by the name</p>
                                        <p><a href="#" className="btn btn-primary">Enroll now!</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="course align-self-stretch">
                                    <a href="#" className="img" style={{backgroundImage: "url(" + course_2 + ")"}}></a>
                                    <div className="text p-4">
                                        <p className="category"><span>Science</span></p>
                                        <h3 className="mb-3"><a href="#">Computer Engineering</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                            One day however a small line of blind text by the name</p>
                                        <p><a href="#" className="btn btn-primary">Enroll now!</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="course align-self-stretch">
                                    <a href="#" className="img" style={{backgroundImage: "url(" + course_3 + ")"}}></a>
                                    <div className="text p-4">
                                        <p className="category"><span>Business</span></p>
                                        <h3 className="mb-3"><a href="#">Business Studies</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                            One day however a small line of blind text by the name</p>
                                        <p><a href="#" className="btn btn-primary">Enroll now!</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-10 ftco-animate">
                                <p><strong>When she reached</strong> the first hills of the Italic Mountains, she had a last view back on the
                                    skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road,
                                    the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                <p><span>Just Browsing?</span><a href="course.html"> View All Courses</a></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Recent from blog</h2>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20" style={{backgroundImage: "url(" + image_1 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">August 12, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                        </div>
                                        <h3 className="heading mt-3"><a href="#">How to standout at start of your UX Career</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20" style={{backgroundImage: "url(" + image_2 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">August 12, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                        </div>
                                        <h3 className="heading mt-3"><a href="#">How to standout at start of your UX Career</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20" style={{backgroundImage: "url(" + image_3 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">August 12, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                        </div>
                                        <h3 className="heading mt-3"><a href="#">How to standout at start of your UX Career</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h2 className="mb-4">Our Latest Events</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20" style={{backgroundImage: "url(" + event_1 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">Sep. 10, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                        </div>
                                        <h3 className="heading mb-4"><a href="#">Intern Bootcamp Meetup 2018</a></h3>
                                        <p className="time-loc"><span className="mr-2"><i className="icon-clock-o"></i> 10:30AM-03:30PM</span>
                                            <span><i className="icon-map-o"></i> Venue Main Campus</span></p>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                        <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward"></i></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry d-flex align-self-stretch flex-column-reverse">
                                    <a href="blog-single.html" className="block-20" style={{backgroundImage:"url(" + event_2 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">Sep. 10, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                        </div>
                                        <h3 className="heading mb-4"><a href="#">Intern Bootcamp Meetup 2018</a></h3>
                                        <p className="time-loc"><span className="mr-2"><i className="icon-clock-o"></i> 10:30AM-03:30PM</span>
                                            <span><i className="icon-map-o"></i> Venue Main Campus</span></p>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                        <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward"></i></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20" style={{backgroundImage: "url(" + event_3 + ")"}}>
                                    </a>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div><a href="#">Sep. 10, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                        </div>
                                        <h3 className="heading mb-4"><a href="#">Intern Bootcamp Meetup 2018</a></h3>
                                        <p className="time-loc"><span className="mr-2"><i className="icon-clock-o"></i> 10:30AM-03:30PM</span>
                                            <span><i className="icon-map-o"></i> Venue Main Campus</span></p>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                        <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward"></i></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Subcribe/>
                <Footer/>
            </div>

        );

    }
}

export default Index;
