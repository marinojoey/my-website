import './intro.scss'
import { ArrowDownward } from '@material-ui/icons';

export default function intro() {
    return (
        <div className='intro' id="intro">
            <div className='left'> 
                <div className="top">
                    <img src="assets/dronepic3.jpg" alt="Sav Duke and I" class="dronepic"></img>
                </div>
                <div className='bottom'>
                    <img src="assets/belaysq.jpeg" alt="me climbing"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, my name is:</h2>
                    <h1>Joey Marino.</h1>
                    <h3>I am a person.</h3>
                </div>
                <a href="#portfolio" >
                    <span className='linktext'>Take a look at what I have made </span>
                    <ArrowDownward className='arrow'/>
                </a>
            </div>
        </div>
    )
}
