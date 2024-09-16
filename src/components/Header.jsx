import "../css/header.css"
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header({ onSelect }) {
    return (
        <Navbar variant="dark" bg="dark" expand="sm" className="shadow navbar">
            <Container fluid>
                <Navbar.Brand href="/" className="algo-view-title">AlgoView</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-0">
                    <Nav>
                        <NavDropdown data-bs-theme="dark" id="nav-dropdown-dark-ds"
                            title="Data Structures"
                            menuVariant="dark">
                            <NavDropdown.Item href="#" onClick={() => onSelect('Array')}>Array</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => onSelect('Object')}>Object</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => onSelect('LinkedList')}>Linked List</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => onSelect('BinaryTree')}>Binary Tree</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => onSelect('BinarySearchTree')}>Binary Search Tree</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown data-bs-theme="dark" id="nav-dropdown-dark-al"
                            title="Algorithms"
                            menuVariant="dark">
                            {/* Sorting Algorithms */}
                            <NavDropdown.Header className="dropdown-header">Sorting</NavDropdown.Header>
                            <NavDropdown.Item href="#" onClick={() => onSelect('BubbleSort')}>Bubble Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => onSelect('MergeSort')}>Merge Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => onSelect('QuickSort')}>Quick Sort</NavDropdown.Item>

                            {/* Divider */}
                            <NavDropdown.Divider />

                            {/* Searching Algorithms */}
                            <NavDropdown.Header className="dropdown-header">Searching</NavDropdown.Header>
                            <NavDropdown.Item href="#" onClick={() => onSelect('DepthFirst')}>Depth First Search</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => onSelect('BreadthFirst')}>Breadth First Search</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
