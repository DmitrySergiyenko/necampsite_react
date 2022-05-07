import React from 'react';
import Header from './components/Header';
import CampsitesList from './features/CampsitesList';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
