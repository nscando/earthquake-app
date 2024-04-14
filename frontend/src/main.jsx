import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hero } from './components/Hero';
import { FeatureList } from './components/FeatureList'
import { DarkModeToggle } from './components/DarkModeToggle';

import './index.css';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero title={"Earthquake App"} />
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      <div className="flex flex-col items-center pt-24">
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