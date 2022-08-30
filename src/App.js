import React from 'react';
import './App.css';
import { Header } from "./containers/Header/Header"
import { Posts } from "./features/Posts/Posts"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Posts />
      </div>
    </div>
  );
}

export default App;
