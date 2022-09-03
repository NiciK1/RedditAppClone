import React from 'react';
import './App.css';
import { Header } from "./containers/Header/Header"
import Home from './containers/Home/Home';
import Subreddits from './features/Subreddits/Subreddits';


function App() {
  return (
    <div className="App" >
      <Header />
      <div className="Main">
        <div className="Posts-div">
          <Home />
        </div>
          <Subreddits />
      </div>
    </div>
  );
}


export default App;
