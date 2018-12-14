import React ,{Component} from 'react'
import Video from './images/background.mp4'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Logo from './images/logo.png'
import Cv from './images/cv.pdf'


class Header extends Component{
    render(){
        return(
            <div className="headerSection">

                <img src={Logo} height="80" width="80"/>
                <ReactCSSTransitionGroup
                    transitionName="slide"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>
                <video autoPlay muted loop className="video1">
                    <source src={Video} type="video/mp4" />
                </video>


                    <div className="head-content">
                        <h1>Hi! <br/>I'm Anjali</h1>
                        <h4> Enthusiastic Web Developer | Passionate Coder |Mastery in React.js,Javascript,HTML5,CSS,BootStrap,Json,C,C++,C#,Asp.net,Python,Adobe Photoshop &Illustrator
                        ..</h4>
                        <div className="col-lg-4">

                            <p><a className="btn btn-info btn-learn" target="_blank" href={Cv}>Download CV <i
                                className="icon-download4"></i></a></p>
                        </div>
                        <div className="col-lg-4">

                            <p><a className="btn btn-success btn-learn" target="_blank" href="https:/www.linkedin.com/in/anjali-elizabeth-joseph">Check Out My LinkedIn <i
                                className="icon-download4"></i></a></p>
                        </div>
                        <div className="col-lg-4">

                            <p><a className="btn btn-primary btn-learn"  target="_blank" href="https://github.com/anjaligeril">Go Through My Git <i
                                className="icon-download4"></i></a></p>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }


}

export default Header;