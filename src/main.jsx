import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './modern-normalize.css';

// Function to detect if the device is a mobile or tablet
function isMobileOrTablet() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

if (!isMobileOrTablet()) {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
} else {
  root.render(
    <React.StrictMode>
        <>
          <div className='noSupport'>Handheld devices are not supported &#128528;</div>
        </>
    </React.StrictMode>,
);
}
