import React, { useState, useEffect, useRef } from 'react';
import '../css/mergesort.css';

function QuickSortComponent() {
    const initialArray = [[3, false], [2, false], [11, false], [1, false], [6, false],
    [4, false], [10, false], [5, false], [9, false], [12, false], [8, false], [7, false]];
    const [arr, setArr] = useState(initialArray);
    const [isSorting, setIsSorting] = useState(false);

    const quickSortRenderer = (arr) => {
        return (
            <div className="sub-array">
                {arr.map((element, j) => (
                    <div key={j} className="element" style={{
                        backgroundColor: element[1] ? '#3FA2F6' : '#FFC7ED',
                        color: 'black',
                        transition: element[1] ? 'all 0.8s ease' : '',
                        width: '50px',
                        height: element[0] * 22,
                        border: '1px solid var(--Black)',
                    }}>
                        {element[0]}
                    </div>
                ))}
            </div>
        );
    }

    const quickSort = async (arr, low, high) => {
        if (low < high) {
            const pivotIndex = await partition(arr, low, high);
            await quickSort(arr, low, pivotIndex - 1);
            await quickSort(arr, pivotIndex + 1, high);
        }
    }

    const partition = async (arr, low, high) => {
        let pivot = arr[high];
        pivot[1] = true; // Highlight pivot
        setArr([...arr]);
        await new Promise(resolve => setTimeout(resolve, 800));

        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j][0] < pivot[0]) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArr([...arr]);
                await new Promise(resolve => setTimeout(resolve, 800));
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        pivot[1] = false; // Unhighlight pivot
        setArr([...arr]);
        await new Promise(resolve => setTimeout(resolve, 800));
        return i + 1;
    }

    const startSorting = async () => {
        if (isSorting) return;
        setIsSorting(true);
        await quickSort(arr, 0, arr.length - 1);
        setIsSorting(false);
        reset();
        alert('Sorted');
    }

    const reset = () => {
        setArr(initialArray.map(item => [item[0], false]));
        setIsSorting(false);
    }

    return (
        <div className='container quicksort-container'>
            <div className='quicksort-child-one'>
                <div className="quicksort-visualizer">{quickSortRenderer(arr)}</div>
                <div className="mt-1 quicksort-controls">
                    <button className="btn arr-btn-unshift" onClick={startSorting} disabled={isSorting}>Start &#10148;</button>
                </div>
            </div>
            <div className="quicksort-child-two">
                <h3>Quick Sort</h3>
                <p>
                    Quick Sort is one of the sorting algorithms. Just like merge sort it follows the divide and conquer strategy.
                    It works by selecting a 'pivot' element and partitioning the array around the pivot.
                    Elements lesser than the pivot value are moved to the left, and elements greater than the pivot are moved to the right.
                    This is applied recursively to the sub-arrays formed by partitioning.
                </p>
                <p>
                    The main advantage of Merge Sort algorithm is its faster performance with a time complexity of O(n log n) in all cases, making it highly predictable and reliable.
                </p>
                <h5>Advantages</h5>
                <p>
                    <ol>
                        <li>
                            Efficiency: Quick sort is faster compared to other sorting algorithms like merge sort and bubble sort.
                        </li>
                        <li>In place sorting: It sorts the array in place with no additional memory requirement.</li>
                        <li>Efficient for large Data</li>
                    </ol>
                </p>
                <h5>Disadvantages</h5>
                <p>
                    <ol>
                        <li>
                            Inefficiency: If the selected pivot is poor (too small or too large), it results in poor time complexity.
                        </li>
                        <li>
                            Unstable: It does not preserve the relative order of equal elements.
                        </li>
                    </ol>
                </p>
                <div className='reference-div'>
                    <p>For more detailed documentation, visit: <a target='_blank' href='https://www.freecodecamp.org/news/how-to-write-quick-sort-algorithm-with-javascript/'>FreeCodeCamp.com: Quick Sort</a></p>
                </div>
            </div>
        </div>
    );
}

export default QuickSortComponent;
