import './intro.scss'
import Nexticon from '../nexticon/Nexticon';

export default function intro() {
    return (
        <div className='intro' id="intro">
            <div className='left'> 
                <div className="intromessage">
                    <div className="lineone">
                        Welcome to my page.
                    </div>
                    <div className="linetwo">
                        Take a look around and get in touch!
                    </div>
                </div>
                <div className="topimage">
                    <img src="assets/dronepic3.jpg" alt="Sav Duke and I" class="dronepic"></img>
                </div>
                <div className='bottomimage'>
                    <img src="assets/belaysq.jpeg" alt="me climbing" className='belaypic'></img>
                </div>
            </div>
            <div className="right">
                <Nexticon />
            </div>
        </div>
    )
}
