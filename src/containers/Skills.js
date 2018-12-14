import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Skills extends Component{
    render(){
        return(
            <div className="skillsSection text-left">
                <span className="heading-meta title">My Specialty</span>
                <h2 className="subheading title">My Skills</h2>
                <div className="row">
                    <ReactCSSTransitionGroup transitionName="slide1"
                                             transitionAppear={true}
                                             transitionAppearTimeout={1000}
                                             transitionEnterTimeout={1000}
                                             transitionLeaveTimeout={1000}>
                    <div className="col-md-12 " >
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                            wild Question.  Marks and devious Semikoli, but the Little Blind Text didn’t listen.
                            She packed her seven
                            versalia, put her initial into the belt and made herself on the way.</p>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>Photoshop</h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  color-1" role="progressbar" aria-valuenow="75"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    75%
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>jQuery</h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  color-2" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    60%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>HTML5</h3>
                            <div className="progress">
                                <div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    85%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>CSS3</h3>
                            <div className="progress">
                                <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    90%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="progress-wrap">
                            <h3>WordPress</h3>
                            <div className="progress">
                                <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    70%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div className="progress-wrap">
                            <h3>SEO</h3>
                            <div className="progress">
                                <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                     aria-valuemin="0" aria-valuemax="100" >
                                    80%
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>

            </div>
        )
    }
}

export default Skills;