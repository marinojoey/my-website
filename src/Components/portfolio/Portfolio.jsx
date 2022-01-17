import './portfolio.scss';
import Nexticon from '../nexticon/Nexticon';


export default function portfolio() {
    return (
        <div className='portfolio' id="portfolio">
            <div className="grid-container">
                <div className='main-title'>What I've made:</div>
                <div className="left-one">
                    <div className="l1wrapper">
                        <img src='/assets/RPS.png' alt="img of my rock paper scissors app" className='rpsicon'></img>
                        <div className='rpstitle'>Rock Paper Scissors</div>
                        <a href='google.com' className='rpsgrepo'>Github Repo</a>
                        <a href='google.com' className='rpslink'>Live link</a>
                    </div>
                </div>
                <div className="right-one">
                    <div className="r1wrapper">
                        <img src="/assets/menpup.jpg" alt="tic-tac-toe board" className='ttticon'></img>
                        <div className='ttttitle'>Tic-Tac-Toe</div>
                        <a href="google.com" className='tttgrepo'>Github Repo</a>
                        <a href="google.com" className='tttlink'>Live link</a>
                    </div>
                </div>
                <div className="left-two">
                    <div className="l2wrapper">
                        <img src="/assets/dronepic3.jpg" alt="me" className='wicon'></img>
                        <div className='wtitle'>Weather app</div>
                        <a href="google.com" className='wgrepo'>Github link</a>
                        <a href="google.com" className='wlink'>Live link</a>
                    </div>
                </div>
                <div className="right-two">
                    <div className="r2wrapper">
                        <img src="/assets/mensav.jpg" alt="me and savanah" className='ficon'></img>
                        <div className='ftitle'>Facebook Clone</div>
                        <a href="google.com" className='fgrepo'>Github repo</a>
                        <a href="google.com" className='flink'>Live link</a>
                    </div>
                </div>
                <div className="left-three">
                    <div className="l3wrapper">
                        <img src="/assets/portrait.jpg" alt="me" className='bicon'></img>
                        <div className='btitle'>Battleship </div>
                        <a href="google.com" className='bgrepo'>Github repo</a>
                        <a href="google.com" className='blink'>Live link</a>
                    </div>
                </div>
                <div className="right-three">
                    <div className="r3wrapper">
                        <img src="/assets/haircut.jpg" alt="me with a haircut" className='etchicon'></img>
                        <div className='etchtitle'>Etch-A-Sketch</div>
                        <a href="google.com" className='etchgrepo'>Github Repo</a>
                        <a href="google.com" className='etchlink'>Live link</a>
                    </div>
                </div>
                <Nexticon />
            </div>
        </div>
    )
}
