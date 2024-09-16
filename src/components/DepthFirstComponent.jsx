import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import '../css/binarysearchtree.css'

class Node {
    constructor(data, animate = false, index) {
        this.data = data;
        this.right = null;
        this.left = null;
        this.animate = animate;
        this.index = index
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    insert(data, animate, index) {
        if (this.root === null) {
            let newNode = new Node(data, animate, index);
            this.root = newNode;
            return this.root;
        }
        else {
            const insertion = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        let newNode = new Node(data, animate, index);
                        node.left = newNode;
                    }
                    else {
                        insertion(node.left)
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        let newNode = new Node(data, animate, index);
                        node.right = newNode;
                    }
                    else {
                        insertion(node.right)
                    }
                }
            }
            insertion(this.root);
            return this.root;
        }
    }
}


function DepthFirstComponent() {

    const bst_arr = [[20, false], [17, false], [25, false],
    [13, false], [22, false], [33, false], [10, false],
    [14, false], [30, false], [45, false], [21, false]];

    const [binaryTree, setBinaryTree] = useState(new Bst());
    const [arr, setArr] = useState([...bst_arr]);
    const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        const bst = new Bst();
        arr.forEach((node, index) => bst.insert(node[0], node[1], index));
        setBinaryTree(bst);
    }, [arr]);

    function nodeGenerator(root) {
        if (!root) return null;
        return (
            <div key={root.data}>
                <span className='data' style={{ background: root.animate ? '#AF47D2' : '#ebdaea' }}>{root.data}</span>
                {root.left && nodeGenerator(root.left, 'left')}
                {root.right && nodeGenerator(root.right, 'right')}
            </div>
        );
    }

    function animateNode(index) {
        let animateArr = [...arr];
        animateArr[index][1] = true;
        setArr(animateArr);

        setTimeout(() => {
            animateArr[index][1] = false;
            setArr(animateArr);
            processNextNode();
        }, 1200);
    }

    function processNextNode() {
        if (!stack.length) {
            setArr([...bst_arr]);
            setDisabled(false);
            return;
        };
        let current = stack.pop();
        stack.push(...[current.right, current.left].filter(n => n));
        animateNode(current.index);
    }

    let stack = [];

    function depthValues(bst) {
        if (!bst) return;
        stack = [bst];
        setDisabled(true);
        processNextNode();
    }

    return (
        <div className='container bst-container'>
            <div className='bst-child-one'>
                <div className="bst-visualizer">{nodeGenerator(binaryTree.root)}</div>
                <div className="mt-1 bst-controls">
                    <Button className='btn arr-btn-unshift' variant='success' size='sm' onClick={() => depthValues(binaryTree.root)} disabled={disabled}>Start &#10148;</Button>
                </div>
            </div>
            <div className="bst-child-two">
                <h3>Depth First Search</h3>
                <Badge bg="dark">Pre-Order Traversal*</Badge><br/>
                <p>
                    The Depth-First Search (DFS) algorithm is a fundamental approach used in traversing or searching through a data structure like a binary search tree (BST).
                    It explores each branch as deep as possible before backtracking, which makes it an excellent choice for tasks that needs exploring all the paths in a structure.
                </p>
                <h5>Key points:</h5>
                <ol>
                    <li>
                        <h6>Start at the Root</h6>
                        <p>Begin the search at the root node of the BST.</p>
                    </li>
                    <li>
                        <h6>Traverse Left</h6>
                        <p>Go to the left child and continue traversing left until you reach a leaf node.</p>
                    </li>
                    <li>
                        <h6>Backtrack and Traverse Right</h6>
                        <p>Once you reach a leaf or a node without a left child, backtrack and explore the right subtree.</p>
                    </li>
                    <li>
                        <h6>Repeat</h6>
                        <p>Continue this pattern until all nodes in the tree have been visited.</p>
                    </li>
                </ol>
                <h5>Types of DFS</h5>
                <p>Depth-First Search in binary trees can be performed in three primary ways</p>
                <ol>
                    <li>
                        <h6>In-Order Traversal</h6>
                        <p>Visit the left branch - Visit the node - Visit the right branch.
                            This method visits nodes in a BST in ascending order (from smallest to largest).</p>
                    </li>
                    <li>
                        <h6>Pre-Order Traversal</h6>
                        <p>Visit the node - Visit the left branch - Visit the right branch. This method is useful for creating a copy of the tree.
                        </p>
                    </li>
                    <li>
                        <h6>Post-Order Traversal</h6>
                        <p>Visit the left branch - Visit the right branch - Visit the node. Often used for deleting or freeing nodes starting from the leaves back to the root.</p>
                    </li>
                </ol>
                <div className='reference-div'>
                    <p>For more detailed documentation, visit: <a target='_blank' href='https://vishalrana9915.medium.com/depth-first-search-dfs-using-javascript-d59c5c200c7d'>medium.com: Depth First Search Js</a></p>
                </div>
            </div>
        </div>
    )
}

export default DepthFirstComponent;