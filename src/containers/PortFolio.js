import React ,{Component} from 'react'
import {Route} from "react-router-dom";
import Img1 from './images/img1.jpg'
import './css/MainCss.css'
import Header from './Header'
import About from './About'
import Services from './Services'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'
import {Link} from 'react-router-dom'

class PortFolio extends Component{
    render(){
        return(
            <div className="wrapper" >

                <div className="navigation col-lg-3  ">
                    <div className=" navi affix">
                        <div className="well">
                            <div className="text-center head ">
                                <img src={Img1} height="150" width="150" className="img-circle" alt="photo"/>
                                <h3 className="title">Anjali Elizabeth Joseph</h3>
                                <span ><a href="#">Software Developer</a> in Toronto</span>
                            </div>
                            <div className="nav ">

                                <ul>
                                    <li className="active"><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/about"}>About</Link></li>
                                    <li><Link to={"/services"}>Services</Link></li>
                                    <li><Link to={"/skills"}>Skills</Link></li>
                                    <li><Link to={"/education"}>Education</Link></li>
                                    <li><Link to={"/experience"}>Experience</Link></li>
                                    <li><Link to={"/work"}>Work</Link></li>
                                    <li><Link to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="footer  ">
                                <p><small>&copy; Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                    All rights reserved ..<br/>This website is made
                                    by Anjali..
                                </small></p>
                                <ul className="list">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="	fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="content col-lg-8">
                    <Route path="/" exact component={Header}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/education" component={Education}/>
                    <Route path="/experience" component={Experience}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/contact" component={Contact}/>
                </div>


            </div>

        );
    }
}

export default PortFolio;
