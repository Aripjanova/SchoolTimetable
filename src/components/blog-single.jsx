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

class BlogSingle extends React.Component {
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

                {/*END nav */}
                <div className="hero-wrap hero-wrap-2"
                     style={{backgroundImage: "url(" + bg_1 + ")", backgroundAttachment:"fixed"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center"
                             data-scrollax-parent="true">
                            <div className="col-md-8 ftco-animate text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span>
                                    <span className="mr-2"><a href="blog.html">Blog</a></span> <span>Blog Details</span>
                                </p>
                                <h1 className="mb-3 bread">Blog Details</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ftco-animate">
                                <h2 className="mb-3">Health Care Professional News</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia
                                    suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto
                                    optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium?
                                    Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque
                                    quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                                <p>
                                    <img src="images/image_2.jpg" alt="" className="img-fluid"></img>
                                </p>
                                <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis
                                    repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate
                                    quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
                                    deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima
                                    esse vero ut ea, repudiandae suscipit!</p>
                                <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                                <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius
                                    aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut
                                    officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                                    earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic
                                    non? Debitis commodi aut, adipisci.</p>
                                <p>
                                    <img src="images/image_3.jpg" alt="" className="img-fluid"></img>
                                </p>
                                <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil
                                    explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate
                                    maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia
                                    aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam
                                    iste enim veniam, modi rem maiores.</p>
                                <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi
                                    rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum
                                    consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id
                                    quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore,
                                    quia laboriosam harum excepturi ea.</p>
                                <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor
                                    distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci
                                    modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur
                                    et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis.
                                    Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                                <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia
                                    adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto
                                    commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure,
                                    reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione.
                                    Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">Life</a>
                                        <a href="#" className="tag-cloud-link">Sport</a>
                                        <a href="#" className="tag-cloud-link">Tech</a>
                                        <a href="#" className="tag-cloud-link">Travel</a>
                                    </div>
                                </div>

                                <div className="about-author d-flex p-5 bg-light">
                                    <div className="bio align-self-md-center mr-5">
                                        <img src="images/person_1.jpg" alt="Image placeholder"
                                             className="img-fluid mb-4"></img>
                                    </div>
                                    <div className="desc align-self-md-center">
                                        <h3>Lance Smith</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque,
                                            autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam
                                            vero culpa sapiente consectetur similique, inventore eos fugit cupiditate
                                            numquam!</p>
                                    </div>
                                </div>


                                <div className="pt-5 mt-5">
                                    <h3 className="mb-5">6 Comments</h3>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder"></img>
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                                    quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                                                    officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                                                    impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder"></img>
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                                    quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                                                    officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                                                    impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>

                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="images/person_1.jpg" alt="Image placeholder"></img>
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>John Doe</h3>
                                                        <div className="meta">June 27, 2018 at 2:21pm</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                                                            autem, eum officia, fugiat saepe enim sapiente iste iure!
                                                            Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                        <p><a href="#" className="reply">Reply</a></p>
                                                    </div>


                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <img src="images/person_1.jpg" alt="Image placeholder"></img>
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>John Doe</h3>
                                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Pariatur quidem laborum necessitatibus, ipsam
                                                                    impedit vitae autem, eum officia, fugiat saepe enim
                                                                    sapiente iste iure! Quam voluptas earum impedit
                                                                    necessitatibus, nihil?</p>
                                                                <p><a href="#" className="reply">Reply</a></p>
                                                            </div>

                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="vcard bio">
                                                                        <img src="images/person_1.jpg"
                                                                             alt="Image placeholder"></img>
                                                                    </div>
                                                                    <div className="comment-body">
                                                                        <h3>John Doe</h3>
                                                                        <div className="meta">June 27, 2018 at 2:21pm
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur
                                                                            adipisicing elit. Pariatur quidem laborum
                                                                            necessitatibus, ipsam impedit vitae autem,
                                                                            eum officia, fugiat saepe enim sapiente iste
                                                                            iure! Quam voluptas earum impedit
                                                                            necessitatibus, nihil?</p>
                                                                        <p><a href="#" className="reply">Reply</a></p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder"></img>
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                                    quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                                                    officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                                                    impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                  {/*END comment-list -->*/}

                                    <div className="comment-form-wrap pt-5">
                                        <h3 className="mb-5">Leave a comment</h3>
                                        <form action="#" className="p-5 bg-light">
                                            <div className="form-group">
                                                <label htmlFor="name">Name *</label>
                                                <input type="text" className="form-control" id="name"></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email *</label>
                                                <input type="email" className="form-control" id="email"></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="website">Website</label>
                                                <input type="url" className="form-control" id="website"></input>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="" id="message" cols="30" rows="10"
                                                          className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Post Comment"
                                                       className="btn py-3 px-4 btn-primary"></input>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                           {/*.col-md-8 */}
                            <div className="col-md-4 sidebar ftco-animate">
                                <div className="sidebar-box">
                                    <form action="#" className="search-form">
                                        <div className="form-group">
                                            <span className="icon fa fa-search"></span>
                                            <input type="text" className="form-control"
                                                   placeholder="Type a keyword and hit enter"></input>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-box ftco-animate">
                                    <div className="categories">
                                        <h3>Categories</h3>
                                        <li><a href="#">Departments <span>(12)</span></a></li>
                                        <li><a href="#">Doctors <span>(22)</span></a></li>
                                        <li><a href="#">Medicine <span>(37)</span></a></li>
                                        <li><a href="#">Hospital <span>(42)</span></a></li>
                                        <li><a href="#">Cure <span>(14)</span></a></li>
                                        <li><a href="#">Health <span>(140)</span></a></li>
                                    </div>
                                </div>

                                <div className="sidebar-box ftco-animate">
                                    <h3>Recent Blog</h3>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4"
                                           style={{backgroundImage: "url(" + image_1 + ")"}}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no
                                                control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar"></span> July 12,
                                                    2018</a></div>
                                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4"
                                           style={{backgroundImage:"url(" + image_2 + ")"}}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no
                                                control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar"></span> July 12,
                                                    2018</a></div>
                                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4"
                                           style={{backgroundImage: "url(" + image_3 + ")"}}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no
                                                control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="icon-calendar"></span> July 12,
                                                    2018</a></div>
                                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-box ftco-animate">
                                    <h3>Tag Cloud</h3>
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">medical</a>
                                        <a href="#" className="tag-cloud-link">cure</a>
                                        <a href="#" className="tag-cloud-link">remedy</a>
                                        <a href="#" className="tag-cloud-link">health</a>
                                        <a href="#" className="tag-cloud-link">workout</a>
                                        <a href="#" className="tag-cloud-link">medicine</a>
                                        <a href="#" className="tag-cloud-link">doctor</a>
                                        <a href="#" className="tag-cloud-link">medic</a>
                                    </div>
                                </div>

                                <div className="sidebar-box ftco-animate">
                                    <h3>Paragraph</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                                        necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                        sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                 {/*.section */}

                <Subcribe/>
                <Footer/>


            </div>
        )
    }
}
export default BlogSingle