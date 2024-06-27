import React, { useState } from 'react';
import '../css/object.css';

function ObjectComponent() {
    // Object state
    const [currentObjects, setNewObj] = useState([
        {},
    ]);

    // Add prop btn state
    const [isDisabled, setIsDisabled] = useState([true, null]);
    const [selected, setSelected] = useState(null);  // Tracks the object selected index
    const [showPopUp, setPopUp] = useState(false); // Track popup

    function renderObject(objects) {
        let colors = {
            0: '#FFDE95',
            1: '#ADD899',
            2: '#BC5A94',
        }

        if (objects.length === 0) { return };
        return (
            objects.map((obj, i) => {
                let style = {
                    backgroundColor: colors[i],
                };
                return (
                    <div>
                        <div key={i} className='object-parent' onClick={() => objSelector(i)} style={style}>{
                            Object.entries(obj).map(([key, value], i) => {
                                return (
                                    <div key={key}>
                                        <button className='btn btn-sm objectElement'>{value}</button>
                                        <span className='btn-label'>{key}</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <span className='btn-label'>Object: {i + 1}</span>
                        {selected === i ? (<div className='showPopUp' style={{ position: 'absolute', bottom: '100px', left: '50', backgroundColor: colors[i], padding: '5px', border: '2px solid black', fontSize: '10px', borderRadius: '5px', fontWeight: '900' }}>
                            Object {i + 1} has been selected!
                        </div>) : <></>}
                    </div>
                )
            })
        )
    }

    function addObject() {
        if (currentObjects.length > 2) { alert('Object holder full'); return; };
        setNewObj([...currentObjects, {}]);
    }

    function objSelector(index) {
        setSelected(index);
        setIsDisabled([false, index]);
        setTimeout(() => setSelected(null), 2000);
    }

    function addObjectProp() {
        let key = document.getElementById('newObj-prop-key').value;
        let value = document.getElementById('newObj-prop-value').value;
        if (!key || !value) { alert('Enter Key and Value'); return; }
        currentObjects[isDisabled[1]][key] = value;
        setNewObj([...currentObjects])
    }

    function reset() {
        setNewObj([{}])
    }

    return (
        <div className='container object-container'>
            <div className='object-child-one'>
                <div className="object-visualizer">{renderObject(currentObjects)}</div>
                <div className="mt-1 object-controls">
                        <div><button className='btn btn-add arr-btn-unshift object-addBtn' onClick={addObject}>Add Object</button></div>
                        <div>
                            <input type='text' className='form-control object-addKey' id="newObj-prop-key" placeholder='Enter Key' />
                            <input type='text' className='form-control object-addValue' id="newObj-prop-value" placeholder='Enter Value' />
                            <div title={isDisabled[0] ? "Select an object first!" : ""}><button className='btn btn-add arr-btn-unshift object-addBtn' id="newObj-prop-AddBtn" onClick={addObjectProp} disabled={isDisabled[0]} >Insert</button></div>
                        </div>
                        <div><button className='btn btn-remove arr-btn-shift object-addBtn' onClick={reset}>Reset</button></div>
                </div>
            </div>
            <div className="object-child-two">
                <h3>Object</h3>
                <p>In JavaScript, the object data structure is one of the most frequently used. It allows us to store collections of data and more complex entities.</p>
                <p>We can define an object in many ways:</p>
                <code>let object1 = {'{}'};</code>
                or
                <code>let object1 = new Object();</code><br />
                <h5>Objects & properties</h5>
                <p>An object can contain nested objects or properties or different data structures. This flexbility allows us to store and work with different kinds of data efficiently. </p>
                <h5>Properties in an object can be accessed using many ways:</h5><br />
                <ol>
                    <li>
                        <h6>Dot Notation</h6>
                        <p>Properties of an object can be accessed using dot(.) notation</p>
                        <code>let object1 = {'{name:"xyz"}'};<br />
                            document.write(object1.name);
                        </code><br />
                    </li>
                    <li>
                        <h6>Bracket Notation</h6>
                        <p>Besides dot notation, properties can also be accessed using bracket notation, which is particularly useful when property names are dynamic or not valid identifiers for dot notation.</p>
                        <code>let object1 = {'{name:"xyz"}'};
                            document.write(object1["name"])</code><br />
                    </li>
                    <li>
                        <h6>Adding and Deleting Properties</h6>
                        <p>JavaScript objects are dynamic, meaning you can add properties to them anytime. Similarly, properties can be removed using the delete keyword.</p>
                        <code>let object1 = {'{name:"xyz"}'};<br />
                            object1.age = 25;<br />
                            delete object1.name;
                        </code><br />
                    </li>
                </ol>
                <div className='reference-div'>
                <p>For more detailed documentation, visit: <a target='_blank' href='https://javascript.info/object'>JavaScript.info: Objects</a></p>
                </div>
            </div>
        </div>
    )

}

export default ObjectComponent;