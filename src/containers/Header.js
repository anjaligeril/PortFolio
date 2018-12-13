import React ,{Component} from 'react'
import Video from './images/background.mp4'

class Header extends Component{
    render(){
        return(
            <div className="headerSection">

                <h2 className="title">Hi!<br/>I'm Anjali</h2>
                <video autoPlay muted loop className="video1">
                    <source src={Video} type="video/mp4" />
                </video>

            </div>

        )
    }
}

export default Header;