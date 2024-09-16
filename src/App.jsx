import { useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


import viteLogo from '/vite.svg'
import Header from './components/Header';
import ArrayComponent from './components/ArrayComponent';
import ObjectComponent from './components/ObjectComponent';
import LinkedlistComponent from './components/LinkedlistComponent';
import MergesortComponent from './components/MergesortComponent';
import QuickSortComponent from './components/QuickSortComponent';
import BubbleSortComponent from './components/BubbleSortComponent';
import BinarySearchTreeComponent from './components/BinarySearchTreeComponent';
import BinaryTreeComponent from './components/BinaryTreeComponent';
import DepthFirstComponent from './components/DepthFirstComponent';
import Footer from './components/Footer';

import './App.css'
import algoView from '/algo-view.svg';


function App() {

  const [selectedItem, setSelectedItem] = useState(null);
  const [init, setInit] = useState(false);

  // Component Object Map
  const components = {
    'Array': ArrayComponent,
    'Object': ObjectComponent,
    'LinkedList': LinkedlistComponent,
    'MergeSort': MergesortComponent,
    'BinaryTree': BinaryTreeComponent,
    'BinarySearchTree': BinarySearchTreeComponent,
    'DepthFirst': DepthFirstComponent,
    'QuickSort': QuickSortComponent,
    'BubbleSort': BubbleSortComponent,
  };

  // Setting component
  const SelectedComponent = selectedItem ? components[selectedItem] : null;
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#fff", // Background color
      },
    },
    fpsLimit: 100,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#f33495",
      },
      links: {
        color: "#df79ad",
        distance: 190,
        enable: true,
        opacity: 0.4,
        width: 0.5,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "center",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 200,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "null",
      },
      size: {
        value: { min: 1, max: 7 },
      },
    },
    detectRetina: false,
  };

  return (
    <>
      <Header onSelect={handleSelect} />
      <main>
        <div id='particleContainer'>
          <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesOptions}
          style={{ position: 'absolute' }}></Particles>
        </div>
        {selectedItem ? (SelectedComponent ? <SelectedComponent /> : <p>No component found for {selectedItem}</p>) : (
          <div className='container Empty-Content'>
            <p>Visualize JavaScript Data structures and Algorithms</p>
            <img id="algo-view-png" src={algoView} draggable='false' />
            <p className='info'>Select from the above dropdown</p>
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
