import './contact.scss'
import { MailOutline } from '@material-ui/icons'

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="title">
                Contact Me:
            </div>
            <div className="wrapper">
                <div className='grid-container'>
                    <div className="left-one">
                        <MailOutline className='mail-icon'/>
                    </div>
                    <div className="right-one">
                        <a href="mailto:marinojoey@pm.me" className='email-address'>Marinojoey@pm.me</a>
                    </div>
                    <div className="left-two">
                        <img src="/assets/linked-in.png" alt="linked-in logo" className='linked-in-logo'></img>
                    </div>
                    <div className="right-two">
                        <a href="https://www.linkedin.com/in/joeymarino1994/" className='linked-in-link'>linkedin.com/in/joeymarino1994/</a>
                    </div>
                    <div className="left-three">
                        <img src="/assets/githublogo.png" alt="github logo" className='github-logo'></img>
                    </div>
                    <div className="right-three">
                        <a href="https://github.com/marinojoey" className='github-link'>github.com/marinojoey</a>
                    </div>
                    <div className="left-four">
                        <img src="/assets/ethlogo.png" alt="ethereum diamond" className='eth-logo'></img>
                    </div>
                    <div className="right-four">
                        <a href="https://etherscan.io/address/0xa23d143e9ee88f7982c7f1136459962c09ba7dc7" className='eth-link'>Marinojoey.Eth</a>
                    </div>
                </div>
            </div>
        </div>
    )
}