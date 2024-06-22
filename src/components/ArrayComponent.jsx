import { useState } from 'react'

import '../css/array.css'


function ArrayComponent() {
    const keyrendrer = () => {
        return Math.random();
    }

    let colors = {
        1: '#FFDE95',
        2: '#ADD899',
        3: '#BC5A94',
        4: '#F075AA',
        5: '#83B4FF',
        6: '#A1DD70',
    }

    const arr = [
        { value: 1, color: colors[2], isVisible: true },
        { value: 3, color: colors[1], isVisible: true },
    ];
    const [currentElements, setElements] = useState(arr);

    function arrElementRenderer(arr) {
        return arr.map((e, i) => {
            let style = {
                backgroundColor: e.color,
                color: 'black',
                opacity: e.isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease, background-color 0.8s ease',
            };
           
            return (
                <div key={keyrendrer()}>
                    <button className='btn btn-sm arrayElement' style={style}>{e.value}</button>
                    <span className='btn-label'>{i}</span>
                </div>)
        });
    }

    function add(last) {
        if (currentElements.length > 5) { alert("Array size full"); return; }
        let newValue = Math.floor(Math.random() * 6) + 1;
        let newColor = colors[Math.floor(Math.random() * 6) + 1];
        let newElement = { value: newValue, color: newColor, isVisible: true };

        last != null ? setElements([...currentElements, newElement]) : setElements([newElement, ...currentElements]);
    }

    function remove(last) {
        const newElements = [...currentElements];
        if (newElements.length == 0) { alert('No more elements to remove'); return; }
        last != null ? newElements[newElements.length - 1].isVisible = false : newElements[0].isVisible = false;
        setElements([...newElements]);

        // Set a timeout to remove the element after the transition
        setTimeout(() => {
            last != null ? currentElements.pop() : currentElements.shift();
            setElements(prev => [...currentElements]);
        }, 500);
    }


    return (
        <div className='array-container'>
            <div className='array-child-one'>
                <div className="array-visualizer">{arrElementRenderer(currentElements)}</div>
                <div className="mt-1 array-controls">
                    <div>
                        <button className="btn arr-btn-unshift" onClick={() => add(null)}>Unshift</button>
                        <button className="btn arr-btn-shift" onClick={() => remove(null)}>Shift</button>
                    </div>
                    <div>
                        <button className="btn arr-btn-push" onClick={() => add(true)}>Push</button>
                        <button className="btn arr-btn-pop" onClick={() => remove(true)}>Pop</button>
                    </div>
                </div>
            </div>
            <div className="array-child-two">
                <h3>Array</h3>
                <p>In JavaScript, arrays are dynamic structures that allow us to store any kind of values. Array offer various methods like push(), pop(), shift(), unshift()
                    that allows us to manipulate the array and perform operations.
                    Elements in the array are stored sequentially in a contiguous block of memory, and each element is referenced by an index that starts at 0.</p>
                <p>We can define an array in many ways:</p>
                <code>let arr = [];</code>
                or <br />
                <code>let arr = new Array(6); </code><br />
                <h4>Methods:</h4>
                <h5>push()</h5>
                <p>push method adds an element or multiple values to the end of the array. This modifies the array and returns the new length of the array.
                    <code>arr.push(2);</code>
                </p>
                <h5>unshift()</h5>
                <p>unshift method adds an element or multiple values to the first index of the array. This modifies the array and returns the new length of the array.
                    <code>arr.unshift(2);</code>
                </p>
                <h5>pop()</h5>
                <p>pop method removes an element from the last index of the array and returns the removed element.
                    <code>arr.pop();</code>
                </p>
                <h5>shift()</h5>
                <p>shift method remove an element from the first index of the array and returns the value.
                    <code>arr.shift();</code>
                </p>
                <h4>Reference:</h4>
                <p>For more detailed documentation, visit: <a target='_blank' href='https://javascript.info/array'>JavaScript.info: Arrays</a></p>
            </div>
        </div>
    )
}

export default ArrayComponent;