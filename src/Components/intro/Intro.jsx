import './intro.scss'
import Nexticon from '../nexticon/Nexticon';

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
                    
                </div>
                <Nexticon />
            </div>
        </div>
    )
}
