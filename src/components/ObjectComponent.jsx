import React, { useState } from 'react';
import '../css/object.css';

function ObjectComponent() {
    // Object state
    const [currentObjects, setNewObj] = useState(
        [{}]
    );

    // key value state
    const [keyValue, setkeyvalue] = useState(["", ""]);

    // Add prop btn state
    const [isDisabled, setIsDisabled] = useState([true, null]);
    const [selectedObj, setSelectedObj] = useState(null);  // Tracks the object selected index

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
                        {selectedObj === i ? (<div className='showPopUp' style={{ position: 'absolute', bottom: '100px', left: '50', backgroundColor: colors[i], padding: '5px', border: '2px solid black', fontSize: '10px', borderRadius: '5px', fontWeight: '900' }}>
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
        setSelectedObj(index);
        setIsDisabled([false, index]);
        setTimeout(() => setSelectedObj(null), 2000);
    }

    function addObjectProp() {

        let chosenObj = currentObjects[isDisabled[1]];
        let key = keyValue[0].replaceAll(' ', '');
        let value = keyValue[1].replaceAll(' ', '');

        if (key === "" || value === "" || key.length > 10 || value.length > 10) {
            alert('Please enter a valid Key and Value');
            setkeyvalue(["", ""]);
            return;
        }

        if (Object.keys(chosenObj).length > 2) {
            alert('Object full');
            Object.preventExtensions(chosenObj);
            return;
        }

        chosenObj[key] = value;
        Object.defineProperty(chosenObj, key, {
            writable: false,
        });

        setNewObj([...currentObjects]);
        setkeyvalue(["", ""]);
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
                        <input type='text' className='form-control object-addKey' id="newObj-prop-key" placeholder='Enter Key' onChange={(e) => { setkeyvalue([e.target.value, keyValue[1]]) }} value={keyValue[0]} />
                        <input type='text' className='form-control object-addValue' id="newObj-prop-value" placeholder='Enter Value' onChange={(e) => { setkeyvalue([keyValue[0], e.target.value]) }} value={keyValue[1]} />
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