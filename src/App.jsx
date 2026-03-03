import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar will go here */}
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-gray-100">
            Professional Vehicle Sales Platform
          </h1>
        </main>
        {/* Footer will go here */}
      </div>
    </Router>
  );
}

export default App;
