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
                    <img src="/assets/belaysq.jpeg" alt="me climbing" className='belaypic'></img>
                </div>
            </div>

            
            <div className="right">
                <div className="righttitle">Where I've Been:</div>
                <div class="flow-wrapper">
                    <div class="left-one">
                        <img src="assets/left-arrow.png" alt="" className='larrow'></img>
                    </div>
                    <div class="left-two">
                        <img src="assets/left-arrow.png" alt="" className='larrow'></img>
                    </div>
                    <div class="one">
                        <a href="https://www.utk.edu/">
                            <img src="/assets/UTK.png" alt="Univeristy of Tennessee logo"></img>
                        </a>
                    </div>
                    <div class="two">
                        <a href="https://touchstoneclimbing.com/mission-cliffs/">
                            <img src="/assets/touchstonelogo.png" alt="touchstone climbing gym logo"></img>
                        </a>
                    </div>
                    <div class="three">
                        <a href="https://www.tesla.com/energy">
                            <img src="/assets/teslalogo.png" alt="tesla motors logo"></img>
                        </a>
                    </div>
                    <div class="four">
                        <a href="https://www.theodinproject.com/">
                            <img src="/assets/odintrans.png" alt="The odin project logo"></img>
                        </a>
                    </div>
                    <div class="five">
                        <a href="https://www.chainshot.com/">
                            <img src="/assets/chainshotlogo.png" alt="chainshot logo"></img>
                        </a>
                    </div>
                    <div class="six">
                        <img src="/assets/odinlogo.png" alt="The odin project logo"></img>
                    </div>
                    <div class="right-one"><img src="assets/right-arrow.png" alt="" className='rarrow'></img></div>
                    <div class="right-two"><img src="assets/right-arrow.png" alt="" className='rarrow'></img></div>
                    <div class="right-three"><img src="assets/right-arrow.png" alt="" className='rarrow'></img></div>
                </div>

                <Nexticon />
            </div>
        </div>
    )
}
