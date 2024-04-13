import React from 'react'
import ReactDOM from 'react-dom/client'
import { FeatureList } from './components/FeatureList'
import { DarkModeToggle } from './components/DarkModeToggle';
import './index.css';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4 fixed top-0 right-0 z-50">
        <DarkModeToggle />
      </div>
      <div className="pt-16">
        <FeatureList />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);