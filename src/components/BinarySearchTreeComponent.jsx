import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


import '../css/binarysearchtree.css'

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root === null) {
            let newNode = new Node(data);
            this.root = newNode;
            return this.root;
        }
        else {
            const insertion = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        let newNode = new Node(data);
                        node.left = newNode;
                    }
                    else {
                        insertion(node.left)
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        let newNode = new Node(data);
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


function BinarySearchTreeComponent() {

    const bst_arr = [];
    const [binaryTree, setBinaryTree] = useState(new Bst());
    const [values, setValues] = useState([20, 17, 25, 13, 22, 33, 10, 14, 30, 45, 21]);
    const [arr, setArr] = useState(bst_arr);

    useEffect(() => {
        const bst = new Bst();
        arr.forEach(e => bst.insert(e));
        setBinaryTree(bst);
    }, [arr]);

    function depthValues(root, l = null) {
        if (!root) return null;
        return (
            <div key={root.data}>
                <span className='data' style={{ background: l === 'left' ? '#F6F193' : l === 'right' ? "#A1EEBD" : '' }}>{root.data}</span>
                {root.left && depthValues(root.left, 'left')}
                {root.right && depthValues(root.right, 'right')}
            </div>
        );
    }

    function insertion() {
        setArr([...arr, values.shift()]);
    }

    function reset() {
        setValues([20, 17, 25, 13, 22, 33, 10, 14, 30, 45, 21]);
        setArr([...bst_arr]);
    }

    return (
        <div className='container bst-container'>
            <div className='bst-child-one'>
                <div className="bst-visualizer">{depthValues(binaryTree.root)}</div>
                <div className="mt-1 bst-controls">
                    <Button className='btn arr-btn-unshift' variant='success' size='sm' onClick={insertion}>Insert &#8677; {values[0]}</Button>
                    <Button className="btn arr-btn-shift" variant="danger" size='sm' onClick={reset}>reset</Button>
                </div>
            </div>
            <div className="bst-child-two">
                <h3>Binary Search Tree</h3>
                <p>A Binary Search Tree is a type of binary tree where each node has up to two children (left child and right child).
                    What distinguishes a BST from a regular binary tree is how it organizes data.</p>
                <h5>Key Points:</h5>
                <ol>
                    <li>
                        <h6>Ordered Structure:</h6>
                        <p>In a BST, the key (or value) in the left child is less than the value of it's parent node, and the value in the right child is greater than the value in the parent node.</p>
                    </li>
                    <li>
                        <h6>Efficiency:</h6>
                        <p>This type of ordering allows operations such as search, insertion, and deletion to be performed efficiently.</p>
                    </li>
                    <li>
                        <h6>Binary Property:</h6>
                        <p>Each node has no more than two children.</p>
                    </li>
                    <li>
                        <h6>Dynamic Size:</h6>
                        <p>The structure can grow or shrink dynamically, allowing efficient insertion and deletion of elements.</p>
                    </li>
                </ol>
                <h4>Implementation</h4>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordHead'>Code</Accordion.Header>
                        <Accordion.Body>
                            <pre>{`class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root === null) {
            let newNode = new Node(data);
            this.root = newNode;
            return this.root;
        }
        else {
            const insertion = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        let newNode = new Node(data);
                        node.left = newNode;
                    }
                    else {
                        insertion(node.left)
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        let newNode = new Node(data);
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
`}</pre>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='reference-div'>
                    <p>For more detailed documentation, visit: <a target='_blank' href='https://www.freecodecamp.org/news/binary-tree-algorithms-for-javascript-beginners/'>freecodecamp.org: Binary Search Tree</a></p>
                </div>
            </div>
        </div>
    )
}

export default BinarySearchTreeComponent;