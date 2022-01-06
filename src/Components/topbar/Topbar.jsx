import './topbar.scss'
import { MailOutline } from '@material-ui/icons'


export default function topbar() {
    return (
        <div className='topbar' id="topbar">
            <div className='wrapper'>
                <div className="left">
                    <a href='#portfolio' className='lefttext'>Welcome to my portfolio</a>
                </div>
                <div className='center'>
                    <a href='#intro' className='centertext'>Joey Marino</a>
                </div>
                <div className="right">
                    <MailOutline className='mailicon'/>
                    <a href='#contact' className='righttext'>Contact me</a>
                </div>
            </div>
        </div>
    )
}
