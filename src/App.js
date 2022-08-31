import React from 'react';
import './App.css';
import { Header } from "./containers/Header/Header"
import { Posts } from "./features/Posts/Posts"
import Subreddits from "./features/Subreddits/Subreddits"

function App() {
  return (
    <div className="App" >
      <Header />
      <div className="Main">
        <div className="Posts-div">
          <Posts />
        </div>
        <div className="Subreddits-div">
          <Subreddits />
        </div>
      </div>
    </div>
  );
}

export default App;
