import { useState } from 'react'

import viteLogo from '/vite.svg'
import Header from './components/Header';
import ArrayComponent from './components/ArrayComponent';
import ObjectComponent from './components/ObjectComponent';
import LinkedlistComponent from './components/LinkedlistComponent';
import MergesortComponent from './components/MergesortComponent';
import BinarySearchTreeComponent from './components/BinarySearchTreeComponent';
import BinaryTreeComponent from './components/BinaryTreeComponent';
import DepthFirstComponent from './components/DepthFirstComponent';
import Footer from './components/Footer';

import './App.css'
import algoView from '/algo-view.svg';


function App() {

  const [selectedItem, setSelectedItem] = useState(null);

  // Component Object Map
  const components = {
    'Array': ArrayComponent,
    'Object': ObjectComponent,
    'LinkedList': LinkedlistComponent,
    'MergeSort': MergesortComponent,
    'BinaryTree': BinaryTreeComponent,
    'BinarySearchTree': BinarySearchTreeComponent,
    'DepthFirst': DepthFirstComponent,
  };

  // Setting component
  const SelectedComponent = selectedItem ? components[selectedItem] : null;
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Header onSelect={handleSelect} />
      <main>
        {selectedItem ? (
          SelectedComponent ? <SelectedComponent /> : <p>No component found for {selectedItem}</p>
        ) : (
          <div className='container Empty-Content'>
            <p>Visualize JavaScript Data structures and Algorithms</p>
            <img id="algo-view-png" src={algoView} />
            <p className='info'>Select from the above dropdown</p>
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
