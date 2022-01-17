import './intro.scss'
import Nexticon from '../nexticon/Nexticon';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 80,
            strings: ['Ethereum Dev', 'Programmer', 'Software Dev' ],
        });
    }, []);

    return (
        <div className='intro' id="intro">
            <div className='left'> 
                <div className="intromessage">
                        Allow me to introduce myself!
                </div>
                <div className="imgcontainer">
                    <img src="/assets/belaysq.jpeg" alt="me climbing" className='belaypic'></img>
                </div>
            </div>

            
            <div className="right">
                <div className="righttitle">Where I've Been:</div>
                <div className="flow-wrapper">
                    <div className="left-one">
                        <img src="assets/left-arrow.png" alt="" className='larrow'></img>
                    </div>
                    <div className="left-two">
                        <img src="assets/left-arrow.png" alt="" className='larrow'></img>
                    </div>
                    <div className="one">
                        <a href="https://www.utk.edu/">
                            <img src="/assets/UTK.png" alt="Univeristy of Tennessee logo"></img>
                        </a>
                    </div>
                    <div className="two">
                        <a href="https://touchstoneclimbing.com/mission-cliffs/">
                            <img src="/assets/touchstonelogo.png" alt="touchstone climbing gym logo"></img>
                        </a>
                    </div>
                    <div className="three">
                        <a href="https://www.tesla.com/energy">
                            <img src="/assets/teslalogo.png" alt="tesla motors logo"></img>
                        </a>
                    </div>
                    <div className="four">
                        <a href="https://www.theodinproject.com/">
                            <img src="/assets/odintrans.png" alt="The odin project logo"></img>
                        </a>
                    </div>
                    <div className="five">
                        <a href="https://www.chainshot.com/">
                            <img src="/assets/chainshotlogo.png" alt="chainshot logo"></img>
                        </a>
                    </div>
                    <div className="six">
                        <span ref={textRef}></span>
                    </div>
                    <div className="right-one"><img src="assets/right-arrow.png" alt="" className='rarrow'></img></div>
                    <div className="right-two"><img src="assets/right-arrow.png" alt="" className='rarrow'></img></div>
                    <div className="right-three"><img src="assets/right-arrow.png" alt="" className='rarrow'></img></div>
                </div>

                <Nexticon />
            </div>
        </div>
    )
}
