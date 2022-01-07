import './topbar.scss'
import { MailOutline } from '@material-ui/icons'


export default function topbar() {
    return (
        <div className='topbar' id="topbar">
            <div className='wrapper'>
                <div className="left">
                    <a href='#intro' className='lefttext'>Joey Marino</a>
                </div>
                <div className='center'>
                   
                </div>
                <div className="right">
                    <MailOutline className='mailicon'/>
                    <a href='#contact' className='righttext'>Contact me</a>
                </div>
            </div>
        </div>
    )
}
