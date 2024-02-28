function getResults() {
    const counters = document.getElementsByClassName('counter');
    const array = Array.from(counters)
    array.sort(sortCounters)
    const losers = array.slice(1)
    losers.map((e) => e.parentElement.classList.add('disp-none'))
    
};

function sortCounters (a, b) {
    if(a.innerText > b.innerText) return -1;
    if(a.innerText < b.innerText) return 1;
    return 0;
};

export default function WinButton(){
    return (
        <div className='win-btn'>
            <button onClick={getResults}>Результати</button>
        </div>
    )
}