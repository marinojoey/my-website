import './contact.scss'
import { MailOutline } from '@material-ui/icons'

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className='contact-container'>
                <div className="email">
                    <MailOutline className='mailicon'/>
                    <a href="mailto:marinojoey@pm.me" className='emailaddress'>Marinojoey@pm.me</a>
                </div>
                <div className="linked-in">
                    <img src="/assets/linked-in.png" alt="linked-in logo" className='linked-in-logo'></img>
                    <a href="https://www.linkedin.com/in/joeymarino1994/" className='linked-in-address'>Linked-in</a>
                </div>
                <div className="github">
                    <img src="/assets/githublogo.png" alt="github logo" className='github-logo'></img>
                    <a href="https://github.com/marinojoey" className='github-link'>Github</a>
                </div>
                <div className="ENS">
                    <img src="/assets/ethlogo.png" alt="ethereum diamond" className='ethlogo'></img>
                    <a href="https://etherscan.io/address/0xa23d143e9ee88f7982c7f1136459962c09ba7dc7" className='etherscan'>Marinojoey.Eth</a>
                </div>
            </div>
        </div>
    )
}
