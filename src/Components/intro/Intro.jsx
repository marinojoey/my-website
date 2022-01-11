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
                        This is filler text! Ill adjust CSS to lengthhh
                    </div>
                </div>
                <div className="imgcontainer">
                    <img src="assets/belaysq.jpeg" alt="me climbing" className='belaypic'></img>
                </div>
            </div>
            <div className="right">
                <Nexticon />
            </div>
        </div>
    )
}
