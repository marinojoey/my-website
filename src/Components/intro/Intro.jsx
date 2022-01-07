import './intro.scss'
import belaying from '../../assets/belaying.jpg'
import mensav from '../../assets/mensav.jpg'
import menpup from '../../assets/menpup.jpg'

export default function intro() {
    return (
        <div className='intro' id="intro">
            <div className='leftcontainer'>
                <div className='leftleft'>
                    <p className='personalintro'>
                        If the weather is clear you can find me climbing
                    </p>
                    <img className='mensav' src={mensav} alt="me and my partner"></img>
                    <p className='pupintro'>
                        But... I might just be playing with puppies
                    </p>
                </div>
                <div className='leftright'>
                    <img className='belaypic' src=      {belaying} alt="me climbing"></img>
                    <p className="mtbtext">
                        Or possibly mountainbiking
                    </p>
                    <img className='puppic' src={menpup} alt="me and a puppy"></img>
                </div>
            </div>
            <div className='rightcontainer'>
                <h3 className='header'>
                    Professional Expereience:
                </h3>
                <p className='text1'>
                    I graduated from U.T. Knoxville in 2017 with a B.S. in Animal Science. Immediately following that, I move to San Fransisco where I lived for 5 years. During that time I worked at R.E.I.'s SF location, a local climbing gym, and Tesla Energy. It was while working at Tesla that I set my mind to learning web-development. WILL BE EDITED!
                </p>
                <p className='text2'>
                    My partner and I relocated to my home state of TN so that we could both pursue careers in software development. After sinking my teeth in and gaining front-end experience, I decided to enroll myself in an ethereum development bootcamp, Chainshot, which begins January 2022.
                    WILL BE EDITED! 
                </p>
                <p className='text3'>
                    If you would like to reach me you can find my information at the bottom of this page.  WILL BE EDITED!WILL BE EDITED!WILL BE EDITED!WILL BE EDITED!WILL BE EDITED!
                </p>
            </div>
        </div>
    )
}
