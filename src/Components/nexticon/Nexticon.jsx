import './nexticon.scss'
import { ArrowDownward } from '@material-ui/icons';

export default function nexticon() {
    return (
        <div>
            <a href="#portfolio" className='nextbtncontainer'>
                <span className='linktext'>Take a look at what I have made </span>
                <ArrowDownward className='arrow'/>
            </a>
        </div>
    )
}
