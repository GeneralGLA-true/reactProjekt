import './App.css';
import smile1 from './images/smile1.png';
import smile2 from './images/smile2.png';
import smile3 from './images/smile3.png';
import smile4 from './images/smile4.png';
import smile5 from './images/smile5.png';
import Smile from './smile.js';
import WinButton from './getWinner.js'

const smilesArray = [smile1, smile2, smile3, smile4, smile5]




export default function App(){
    return (
        <div>
            <div className='smiles-container'>
                {smilesArray.map((e)=><Smile smile={e} key={smilesArray.indexOf(e)}/>)}
                
            </div>
            <WinButton/>
        </div>
    )
}



        