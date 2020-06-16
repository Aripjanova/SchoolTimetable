import React ,{Component} from "react";
import {
    Route,
    NavLink,
    HashRouter, Switch
} from "react-router-dom";
import Index from "./index";
import About from "./about";
import Course from "./course";
class Header extends Component{
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

    render() {
        return (
            // <HashRouter>
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                     id="ftco-navbar">
                    <div className="container">

                        <a className="navbar-brand" href="../src/components/index.html"><i
                            className="flaticon-university"></i>Кожоке<br/> <small>Мектеби</small></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu"></span> Menu
                        </button>


                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><NavLink className="nav-link" to="/">Негизги </NavLink></li>
                                <li className="nav-item "><NavLink className="nav-link" to="/about">Биз </NavLink></li>
                                <li className="nav-item "><NavLink className="nav-link" to="/schedules">Расписание </NavLink></li>
                                <li className="nav-item "><NavLink className="nav-link" to="/teacher">Мугалимдер </NavLink></li>
                                <li className="nav-item "><NavLink className="nav-link" to="/blog">Ийгиликтерибиз </NavLink></li>
                                {/*<li className="nav-item "><NavLink className="nav-link" to="/event">Иш чаралар </NavLink></li>*/}
                                <li className="nav-item "><NavLink className="nav-link" to="/contact">Контакты </NavLink></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span
                                        className="fa fa-language" > </span> Тилди танданыз</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown09">
                                        <a className="dropdown-item" href="#fr"><span
                                            className="flag-icon flag-icon-ru"> </span> Орусча</a>
                                        <a className="dropdown-item" href="#it"><span
                                            className="flag-icon flag-icon-kg"> </span> Кыргызча</a>

                                    </div>

                                </li>
                            </ul>

                        </div>



                    </div>
                </nav>


            </div>
                // {/*</HashRouter>*/}

        );
    }
}
export default Header