import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


import '../css/binarytree.css'
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();

            if (!node.left) {
                node.left = newNode;
                return;
            } else {
                queue.push(node.left);
            }

            if (!node.right) {
                node.right = newNode;
                return;
            } else {
                queue.push(node.right);
            }
        }
    }
}



function BinaryTreeComponent() {
    const bt_arr = [];
    const [binaryTree, setBinaryTree] = useState(new BinaryTree());
    const [values, setValues] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    const [arr, setArr] = useState(bt_arr);

    useEffect(() => {
        const bst = new BinaryTree();
        arr.forEach(e => bst.insert(e));
        setBinaryTree(bst);
    }, [arr]);

    function insertion() {
        if (!values.length) { return; };
        setArr([...arr, values.shift()]);
    }

    function reset() {
        setValues(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        setArr([...bt_arr]);
    }

    function depthValues(root) {
        if (!root) return null;
        return (
            <div key={root.data}>
                <span className='data '>{root.data}</span>
                {root.left && depthValues(root.left, 'left')}
                {root.right && depthValues(root.right, 'right')}
            </div>
        );
    }

    return (
        <div className='container bs-container'>
            <div className='bs-child-one'>
                <div className="bs-visualizer">{depthValues(binaryTree.root)}</div>
                <div className="mt-1 bst-controls">
                    <Button className='btn arr-btn-unshift' variant='success' size='sm' onClick={insertion}>Insert &#8677; {values[0]}</Button>
                    <Button className="btn arr-btn-shift" variant='danger' size='sm' onClick={reset}>reset</Button>
                </div>
            </div>
            <div className="bs-child-two">
                <h3>Binary Tree</h3>
                <p>A binary tree is a tree-like data structure where each node can have at most two children, usually referred to as the left child and the right child.
                    It is used extensively in various computer science applications.</p>
                <h5>Key Points:</h5>
                <ol>
                    <li>
                        <h6>Nodes:</h6>
                        <p>It is the fundamental component of a binary tree. Each node contains data and may have up to two children.</p>
                    </li>
                    <li>
                        <h6>Root:</h6>
                        <p>The topmost node in a tree.</p>
                    </li>
                    <li>
                        <h6>Leaf:</h6>
                        <p>A node that does not have any children.</p>
                    </li>
                    <li>
                        <h6>Subtree:</h6>
                        <p>A node in a binary tree, along with its children, forms a subtree.</p>
                    </li>
                </ol>
                <h4>Implementation:</h4>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordHead'>Code</Accordion.Header>
                        <Accordion.Body>
                            <pre>
                                {`class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();

            if (!node.left) {
                node.left = newNode;
                return;
            } else {
                queue.push(node.left);
            }

            if (!node.right) {
                node.right = newNode;
                return;
            } else {
                queue.push(node.right);
            }
        }
    }
}
`}
                            </pre>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='reference-div'>
                    <p>For more detailed documentation, visit: <a target='_blank' href='https://www.naukri.com/code360/library/binary-tree-javascript'>Naukri.com: Binary Tree</a></p>
                </div>

            </div>
        </div >
    )
}

export default BinaryTreeComponent;