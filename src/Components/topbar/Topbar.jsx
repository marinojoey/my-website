import './topbar.scss'
import { MailOutline } from '@material-ui/icons'
import Ethlogo from "../.././assets/ethlogo.png"


export default function topbar() {
    return (
        <div className='topbar' id="topbar">
          <div className='wrapper'>
              <div className="left">
                <a href='#intro' className='title'>Joey Marino</a>
                <img src={Ethlogo} alt="Ethereum logo" className='ethlogo'></img>
                <span className='ethaddress'>marinojoey.eth</span>
                <p className='mailicon'> <MailOutline /></p>
                <span className='emailaddress'>marinojoey@pm.me</span>
              </div>
              <div className="right">
                <div className="hamburger">
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
              </div>
          </div>
        </div>
    )
}
