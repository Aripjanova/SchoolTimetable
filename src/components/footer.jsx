import React,{Component} from "react";
import bg_2 from "./images/bg_2.jpg";
import image_1 from "./images/image_1.jpg";
import image_2 from "./images/image_2.jpg";
class  Footer extends Component{
    render() {
        return (

            <div>

                <footer className="ftco-footer ftco-bg-dark ftco-section img"
                        style={{backgroundImage: "url(" + bg_2 + ")",backgroundAttachment:"fixed"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-3">
                                <div className="ftco-footer-widget mb-4">
                                    <h2>
                                        <a className="navbar-brand" href="index.html"><i
                                            className="flaticon-university"></i>Genius <small>University</small></a></h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                        blind texts.</p>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Recent Blog</h2>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{backgroundImage: "url(" + image_1 + ")"}}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar"></span> July 12, 2018</a></div>
                                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{backgroundImage: "url(" + image_2 + ")"}}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar"></span> July 12, 2018</a></div>
                                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="ftco-footer-widget mb-4 ml-md-4">
                                    <h2 className="ftco-heading-2">Site Links</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="py-2 d-block">Home</a></li>
                                        <li><a href="#" className="py-2 d-block">About</a></li>
                                        <li><a href="#" className="py-2 d-block">Courses</a></li>
                                        <li><a href="#" className="py-2 d-block">Students</a></li>
                                        <li><a href="#" className="py-2 d-block">Video</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                            </li>
                                            <li><a href="#"><span className="icon icon-phone"></span><span
                                                className="text">+2 392 3929 210</span></a></li>
                                            <li><a href="#"><span className="icon icon-envelope"></span><span
                                                className="text">info@yourdomain.com</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">

                                <p>
                                    {/*Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/*Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>


                - loader -->
                <div id="ftco-loader" className="show fullscreen">
                    <svg className="circular" width="48px" height="48px">
                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10"
                                stroke="#F96D00"/>
                    </svg>
                </div>
            </div>
        );
    }
}
export  default Footer