import React ,{Component} from 'react'

class Experience extends Component{
    render(){
        return(
            <div className="experienceSection text-left">
                <span className="heading-meta title">Experience</span>
                <h2 className="subheading title">Work Experience</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div className="timeline-entry-inner">

                                    <div className="timeline-icon color-1">
                                        <i className="glyphicon glyphicon-briefcase"></i>
                                    </div>

                                    <div className="timeline-label">
                                        <h2><a href="#">Full Stack Developer</a> <span>2017-2018</span></h2>
                                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and
                                            offered prepare how cordial two promise. Greatly who affixed suppose but
                                            enquire compact prepare all put. Added forth chief trees but rooms think
                                            may.</p>
                                    </div>
                                </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-2">
                                        <i className="glyphicon glyphicon-briefcase"></i>
                                    </div>
                                    <div className="timeline-label">
                                        <h2><a href="#">Front End Developer at Google Company</a> <span>2017-2018</span>
                                        </h2>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic life One day however a small line of blind text by the
                                            name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    </div>
                                </div>
                            </article>
                            <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-none">
                                    </div>
                                </div>
                            </article>
                        </div>

                        </div>
                </div>
            </div>
        )
    }
}

export default Experience;