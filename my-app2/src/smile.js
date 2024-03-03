import { useState } from "react";
import './smile.css'

export default function Smile({smile}){
    const [count, setCount] = useState(0);
   
    return (
        <div className="smile-box">
            <img src={smile} alt="smile" id={smile} />
            <p className="counter">{count}</p>
            <button onClick={() => setCount(count + 1)}>Тиць</button>
        </div>
    )
}