import ToDoComp from "./todoshki.js";
import { useState } from "react";

function ToDoList() {

    const [item, setItem] = useState('');

    function getItem(e) {
        e.preventDefault();
        console.log(item)
    }

    return (
        <div className='list-container'>
            <ul>
                <li>{item}</li>
            </ul>
            <form action="#">
                <input placeholder="what to do?"
                    onChange={e => setItem(e.target.value)}
                    value={item}
                    type="text"
                />
                <button onClick={e => getItem(e)}>Submit</button>
            </form>
        </div>
    )
}


export default ToDoList;