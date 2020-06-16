import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Index from "./components";
import Main from "./components/learning/Main";

import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import About from "./components/about";
import Blog from "./components/blog";
import BlogSingle from "./components/blog-single";
import Contact from "./components/contact";
import Event from "./components/event";
import Teacher from "./components/teacher";
import TeacherSingle from "./components/teacher-single";
import Header from "./components/header";
import Content from "./components/content";
import Course from "./components/course";
import Timetable from "./components/timetable";



ReactDOM.render(
    <Router>
        <div>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Home</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/about">About</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/schedules">Users</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/teacher">Users</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/event">Users</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/contact">Users</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/contacts">Users</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}

<Header/>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>

                <Route path="/about">
                    <About />
                </Route>
                <Route path="/schedules">
                    <Timetable />
                </Route>

                <Route path="/teacher">
                    <Teacher />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/event">
                    <Event />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/contacts">
                    <Contact />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
