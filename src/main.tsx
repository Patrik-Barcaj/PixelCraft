import React from 'react' // Import React library
import ReactDOM from 'react-dom/client' // Import ReactDOM client
import App from './App.tsx' // Import App component
import './index.css' // Import global stylesheet

ReactDOM.createRoot(document.getElementById('root')!).render( // Find root div and create render target
  <React.StrictMode>
    <App />
  </React.StrictMode>, // Close StrictMode tag
) // Close render function call
