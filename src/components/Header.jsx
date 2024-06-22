import "../css/header.css"
import React, { useState } from 'react';

function Header({ onSelect }) {
    const [showSorting, setShowSorting] = useState(false);
    const [showSearching, setShowSearching] = useState(false);
    const [showOthers, setShowOthers] = useState(false);

    return (
        <div className="shadow-sm p-3" id="header-container">
            <label className="algo-view-title" href="#">Algo-View</label>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">DATA STRUCTURES</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => onSelect('Array')}>Array</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => onSelect('Object')}>Object</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => onSelect('LinkedList')}>Linked List</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => onSelect('BinaryTree')}>Binary Tree</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => onSelect('BinarySearchTree')}>Binary Search Tree</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="algorithmsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ALGORITHMS
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="algorithmsDropdown">
                        <li className="dropdown-submenu" onMouseEnter={() => setShowSorting(true)} onMouseLeave={() => setShowSorting(false)}>
                            <a className="dropdown-item" href="#">Sorting <i class="fas fa-caret-right"></i></a>
                            {showSorting && (
                                <div className="submenu">
                                    <li><a className="dropdown-item" href="#" onClick={() => onSelect('MergeSort')}>Merge Sort</a></li>
                                </div>
                            )}
                        </li>
                        <li className="dropdown-submenu" onMouseEnter={() => setShowSearching(true)} onMouseLeave={() => setShowSearching(false)}>
                            <a className="dropdown-item" href="#" >Searching <i class="fas fa-caret-right"></i></a>
                            {showSearching && (
                                <div className="submenu">
                                    <li><a className="dropdown-item" href="#" onClick={() => onSelect('DepthFirst')}>Depth First Search</a></li>
                                </div>
                            )}
                        </li>
                        <li className="dropdown-submenu" onMouseEnter={() => setShowOthers(true)} onMouseLeave={() => setShowOthers(false)}>
                            <a className="dropdown-item" href="#" >Others <i class="fas fa-caret-right"></i></a>
                            {showOthers && (
                                <div className="submenu">
                                    <li><a className="dropdown-item" href="#">...</a></li>
                                </div>
                            )}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}


export default Header;
