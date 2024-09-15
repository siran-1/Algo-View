import React, { useState, useEffect, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import '../css/mergesort.css';

function MergesortComponent() {
    // Initial array state
    const initialArray = [3, 2, 11, 1, 6, 4, 10, 5, 9, 12, 8, 7];
    const [arr, setArr] = useState([initialArray]);
    const [history, setHistory] = useState([]);
    const [animate, setAnimate] = useState(false);
    const [recursion, setRecursion] = useState(null);

    const isInitialMount = useRef(true);
    const isDisabled = useRef(false);
    const isSorting = useRef(false);
    const colors = {
        1: '#FFDE95', 2: '#ADD899', 3: '#BC5A94', 4: '#F075AA',
        5: '#83B4FF', 6: '#A1DD70', 7: '#9B86BD', 8: '#FF76CE',
        9: '#FF7F3E', 10: '#FFFF80',
    };

    // Creates History of every split 
    useEffect(() => {
        if (isSorting.current) {
            return;
        };

        if (isInitialMount.current) {
            isInitialMount.current = false;
            setHistory([]);
        } else {
            setHistory(prevHistory => [...prevHistory, arr]);
        }
    }, [arr]);

    // Renders the given array
    const arrElementRenderer = () => {
        return arr.map((subArray, i) => (
            <div key={i} className="sub-array" style={{
                border: '1.5px solid lightgrey',
                borderRadius: '5px',
            }}>
                {subArray.map((element, j) => (
                    <div key={j} className="element" style={{
                        backgroundColor: animate ? 'green' : colors[((element - 1) % 10) + 1],
                        color: 'black',
                        transition: animate ? 'all 0.8s ease' : '',
                        width: '50px',
                        height: element * 22,
                        border: '1px solid var(--Black)',
                    }}>
                        {element}
                    </div>
                ))}
            </div>
        ));
    };

    // Splits the array
    const splitArray = () => {
        if (recursion > 0) {
            let newarr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].length === 1) {
                    newarr.push([...arr[i]]);
                    continue;
                }
                let midPos = Math.floor(arr[i].length / 2);
                let leftArr = arr[i].slice(0, midPos);
                let rightArr = arr[i].slice(midPos);
                newarr.push(leftArr, rightArr);
            }
            setArr(newarr);
            setRecursion(recursion - 1);
        }
    };

    // Recursion Scheduler
    useEffect(() => {
        // Splits array recursively
        if (recursion !== null && recursion > 0) {
            const timer = setTimeout(() => {
                splitArray();
            }, 1200);
            return () => clearTimeout(timer);
        }

        // Schedules backtrack sorting recursively
        if (recursion === 0 && history.length) {
            const timer = setTimeout(() => {
                sortHistory();
            }, 1200);
            return () => clearTimeout(timer);
        }
        else if (recursion === 0 && history.length === 0) {
            alert('Array Sorted');
            reset();
            return;
        }

    }, [recursion, history]);


    // Sorts Backtracking
    const sortHistory = async () => {
        isSorting.current = true;
        let sortingArr = history[history.length - 1];

        if (!sortingArr) {
            alert('Array sorted');
            reset();
            return;
        }

        // SORTING AND SETTING THE ANIMATION ON 
        sortingArr.map((arr, i) => {
            setAnimate(true);
            return arr.sort((a, b) => a - b);
        });

        setArr([...sortingArr]);

        // SETTING THE ANIMATION OFF
        setTimeout(() => {
            setAnimate(false);
            setHistory(prevHistory => [...prevHistory].slice(0, history.length - 1));
        }, 1200);

    }

    // Reset
    const reset = () => {
        setArr([initialArray]);
        setHistory([]);
        setRecursion(null);
        setAnimate(false);
        isSorting.current = false;
        isDisabled.current = false;
    };

    // Main method
    const sortInitiate = () => {
        isDisabled.current = true;
        const levels = Math.ceil(Math.log2(initialArray.length));
        setRecursion(levels);
    }

    return (
        <div className='container mergesort-container'>
            <div className='mergesort-child-one'>
                <div className="mergesort-visualizer">{arrElementRenderer()}</div>
                <div className="mt-1 mergesort-controls">
                    <button className="btn arr-btn-unshift" onClick={sortInitiate} disabled={isDisabled.current}>Start &#10148;</button>
                    <button className="btn arr-btn-shift" onClick={reset}>reset</button>
                </div>
            </div>
            <div className="mergesort-child-two">
                <h3>Merge Sort</h3>
                <p>
                    Merge Sort is a sorting algorithm that follows the divide and conquer strategy.
                    It divides the input array into equal subarrays, and does this recursively getting deeper in the stack on each subarray until each subarray contains only one element.
                    Once this is achieved, it merges each subarray while sorting them, repeating this process until every subarray is merged and sorted.</p>
                <p>
                    The main advantage of Merge Sort algorithm is its faster performance with a time complexity of O(n log n) in all cases, making it highly predictable and reliable.
                </p>
                <h5>Advantages</h5>
                <p>
                    <ol>
                        <li>
                            Stable Sorting: Equal elements retain their original positions relative to each other
                        </li>
                        <li>Consistent Performance</li>
                        <li>Efficient for large Data</li>
                    </ol>
                </p>
                <h5>Disadvantages</h5>
                <p>
                    <ol>
                        <li>
                            Space Inefficiency: Requires additional space proportional to the array being sorted
                        </li>
                        <li>
                            Slower for smaller tasks
                        </li>
                    </ol>
                </p>
                <div className='reference-div'>
                    <p>For more detailed documentation, visit: <a target='_blank' href='https://medium.com/analytics-vidhya/implement-merge-sort-algorithm-in-javascript-7402b7271887'>Medium.com: Merge Sort</a></p>
                </div>

            </div>
        </div>
    );
}

export default MergesortComponent;
