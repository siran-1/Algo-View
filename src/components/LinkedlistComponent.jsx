import { useState } from 'react'

import '../css/linkedlist.css'

function LinkedlistComponent() {
    const [currentList, setList] = useState([['head', true]]);
    const [inputValue, setNewValue] = useState("");

    let colors = {
        0: '#FFDE95',
        1: '#ADD899',
    }

    let nodes = [['head']];

    const keyrendrer = () => {
        return Math.random();
    }
    const elementRenderer = () => {
        return (
            <>
                {currentList.map((e, i) => (
                    <div key={keyrendrer()}
                        className='node'
                        style={{
                            backgroundColor: i === 0 ? colors[0] : colors[1],
                            opacity: e[1] ? 1 : 0,
                            transition: 'opacity 0.4s ease, background-color 0.5s ease',
                        }}>
                        <div>{e[0]}</div>
                        <div>&rarr;</div>
                    </div>
                ))}
                <div key={"tailNode"} className='node' style={{ backgroundColor: colors[0] }}>null</div>
            </>
        );
    }



    const addFirst = () => {
        if (inputValue === "") { alert('Enter a value'); return; }
        if (currentList.length > 18) { alert('list holder at max'); return; }
        setList([...currentList.slice(0, 1), [inputValue, false], ...currentList.slice(1)]);
        setNewValue("");

        setTimeout(() => {
            setList(prevlist => {
                const updatelist = [...prevlist];
                updatelist[1][1] = true;
                return updatelist;
            });
        }, 400)
    }

    const addLast = () => {
        if (inputValue === "") { alert('Enter a value'); return; }
        if (currentList.size > 18) { alert('list holder at max'); return; }

        setList([...currentList, [inputValue, false]]);
        setNewValue("");

        setTimeout(() => {
            setList(prevlist => {
                const updatelist = [...prevlist];
                updatelist[updatelist.length - 1][1] = true;
                return updatelist;
            });
        }, 400)
    }

    const removeFirst = () => {
        if (currentList.length === 1) { return };

        setList(prevlist => {
            let updatelist = [...currentList];
            updatelist[1][1] = false;
            return updatelist;
        })
        setTimeout(() => {
            setList([...currentList.slice(0, 1), ...currentList.slice(2)]);
        }, 700)
    }

    const removeLast = () => {
        if (currentList.length === 1) { return };
        setList(prevlist => {
            let updatelist = [...currentList];
            updatelist[updatelist.length - 1][1] = false;
            return updatelist;
        })
        setTimeout(() => {
            setList([...currentList.slice(0, currentList.length - 1)]);
        }, 700)
    }


    const reset = () => {
        setList([['head', true]]);
    };

    return (
        <div className='container linkedlist-container'>
            <div className='linkedlist-child-one'>
                <div className="linkedlist-visualizer">{elementRenderer()}</div>
                <div className="mt-1 linkedlist-controls">
                    <div>
                        <input type='text' className='form-control' value={inputValue} onChange={(e) => setNewValue(e.target.value)}></input>
                        <button className="btn btn-add" onClick={() => addFirst()}>Add First</button>
                        <button className="btn btn-add" onClick={() => addLast()}>Add Last</button>
                    </div>
                    <div>
                        <button className="btn btn-remove" onClick={() => removeFirst()}>Remove First</button>
                        <button className="btn btn-remove" onClick={() => removeLast()}>Remove Last</button>
                    </div>
                    <div>
                        <button className="btn btn-remove" onClick={() => reset()}>Reset</button>
                    </div>
                </div>
            </div>
            <div className="linkedlist-child-two">
                <h3>Linked List</h3>
                <p>A Linked list is a fundamental data structure that is widely used in computer sceience to organize items sequentially.
                    Unlike Arrays, linked lists are not contiguous but each node holds a pointer that points the next node in the sequence. This structure
                    allows for dynamic memory allocation and efficient manipulation of elements.
                </p>
                <h5>Types of Linked Lists</h5>
                <p>
                    <ol>
                        <li>Singly Linked List</li>
                        <li>Doubly Linked List</li>
                        <li>Circular Linked List</li>
                    </ol>
                </p>
                <h5>Structure of a Linked list</h5>
                <p>A Linked list is linear data structure that consists of a sequence of elements called nodes. Each node has two parts:
                    <ol>
                        <li>Data: The actual data stored in the node</li>
                        <li>Next: A pointer to the next node in the sequence</li>
                    </ol>
                    Nodes are linked together with each node pointing to the next, starting from the head. The last node points to null, indicating the end of the list (often referred to as the tail).
                </p>
                <h5>Implementing Linked Lists in JavaScript</h5>
                <p>
                    Unlike other programming languages where there are built-in linkedlist data structure, JavaScript does not have built-in support for linked lists, but they can be implemented using custom classes.
                </p>
                <h5>Custom class</h5>
                <p> We can define a node using a custom class constructor.
                    <pre>
                        {`class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}`}
                    </pre>
                    <p>and add a custom class to perform operations like insertion, deletion, sorting, etc..</p>
                    <pre>
                        {`class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        if (this.head === null) {
            let node = new Node(data, null, true);
            this.head = node;
            this.size++;
            return this.head;
        }
        else {
            this.head = new Node(data, this.head, true);
            this.size++;
            return this.head;
        }
    }

    addLast(data) {
        if (this.head === null) {
            let node = new Node(data, null, true);
            this.head = node;
            this.size++;
            return this.head;
        }
        else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node(data, null, true);
            this.size++;
            return this.head;
        }
    }

    removeFirst() {
        if (this.head === null) { return };

        this.head = this.head.next;
        this.size--;
        return this.head;
    }

    removeLast() {
        if (this.head === null) { return };
        if (this.size === 1) {
            this.head = null;
            this.size--;
            return this.head;
        }
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
        return this.head;
    }
}`}
                    </pre>
                </p>
                <div className='reference-div'>
                    <p>For more detailed documentation, visit: <a target='_blank' href='https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/'>freecodecamp.org</a></p>
                </div>
            </div>
        </div>
    )
}

export default LinkedlistComponent;