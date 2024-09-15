import React, { useState, useEffect, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import '../css/mergesort.css';


function BubbleSortComponent() {
    // Initial array state
    const initialArray = [
        [11, "lightgrey"], [2, "lightgrey"], [3, "lightgrey"], [1, "lightgrey"],
        [6, "lightgrey"], [12, "lightgrey"], [10, "lightgrey"], [5, "lightgrey"],
        [9, "lightgrey"], [4, "lightgrey"], [8, "lightgrey"], [7, "lightgrey"]
    ];
    const [arr, setArr] = useState(initialArray);
    const [animate, setAnimate] = useState(false);
    const isDisabled = useRef(false);
    const [speed, setSpeed] = useState('fast');
    const cancelSort = useRef(false);

    // Renders the given array
    const arrElementRenderer = () => {
        return arr.map((subArray, i) => (
            <div key={i} className="sub-array">
                <div key={i} className="element" style={{
                    backgroundColor: animate ? 'green' : subArray[1],
                    color: 'black',
                    transition: 'background 0.2s ease',
                    width: '50px',
                    height: subArray[0] * 22,
                    border: '1px solid var(--Black)',
                    boxShadow: subArray[1] === 'lightgrey' ? 'none' : `0 0 10px 0.2rem ${subArray[1]}`,
                }}>
                    {subArray[0]}
                </div>
            </div>
        ));
    };

    const delay = async () => {
        let ms = null;
        if (speed == 'fast') ms = 50
        else ms = 400;

        await new Promise(resolve => setTimeout(resolve, ms));
    }

    const blink = async (arr, index1, index2, color) => {
        if (cancelSort.current) { return };
        const newArr = arr.map((subArray, idx) => {
            if (idx === index1 || idx === index2) {
                return [subArray[0], color];
            }
            return subArray;
        });
        setArr(newArr);
        await delay();
    }

    const bubbleSortStart = async () => {
        isDisabled.current = true;
        cancelSort.current = false;
        let curArr = arr.map(subArray => [...subArray]);

        for (let i = curArr.length; i > 0; i--) {

            let noSwap = true;

            for (let j = 0; j < i - 1; j++) {

                if (cancelSort.current) { return };

                if (curArr[j][0] > curArr[j + 1][0]) {
                    await blink(curArr, j, j + 1, 'lightyellow');
                    [curArr[j], curArr[j + 1]] = [curArr[j + 1], curArr[j]];
                    noSwap = false;
                    setArr(curArr);
                    await delay();
                }
                else {
                    await blink(curArr, j, j + 1, 'lightgreen');
                }
                await blink(curArr, j, j + 1, 'lightgrey');
            }
            if (noSwap) {
                break;
            }
        }
        alert('sorted :)');
    };

    // Reset
    const reset = () => {
        setArr(initialArray);
        setAnimate(false);
        isDisabled.current = false;
        cancelSort.current = true;
    };

    return (
        <div className='container bubblesort-container'>
            <div className='bubblesort-child-one'>
                <div className="bubblesort-visualizer">{arrElementRenderer()}</div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Speed
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={() => setSpeed('slow')}>Slow</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSpeed('fast')}>Fast</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="mt-1 bubblesort-controls">
                    <button className="btn arr-btn-unshift" onClick={bubbleSortStart} disabled={isDisabled.current}>Start &#10148;</button>
                    <button className="btn arr-btn-shift" onClick={reset}>stop / reset</button>
                </div>
            </div>
            <div className="bubblesort-child-two">
                <h3>Bubble Sort</h3>
                <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
                    This process is repeated until the list is sorted.
                    The algorithm gets its name because larger elements "bubble" to the top of the list with each pass.</p>
                <p>While simple, Bubble Sort is inefficient for large datasets because it compares every element in every iteration, resulting in a time complexity of O(n²) in the worst case.</p>
                <h5>Advantages</h5>
                <p>
                    <ol>
                        <li>
                            Simple and Easy to Implement
                        </li>
                        <li>In-Place Sorting</li>
                    </ol>
                </p>
                <h5>Disadvantages</h5>
                <p>
                    <ol>
                        <li>
                            Inefficient for Large Datasets
                        </li>
                        <li>
                            Unnecessary Comparisons
                        </li>
                    </ol>
                </p>
                <div className='reference-div'>
                    <p>For more detailed documentation, visit: <a target='_blank' href='https://medium.com/@haseenakhader.uk/bubble-sort-in-javascript-e79f1332dc51'>Medium.com: Bubble Sort</a></p>
                </div>

            </div>
        </div>
    );
}

export default BubbleSortComponent;