import React from 'react';
import './App.css';
import { Header } from "./containers/Header/Header"
import Home from './containers/Home/Home';
import SubredditsDiv from './features/Subreddits/SubredditsDiv';


function App() {
  return (
    <div className="App" >
      <Header />
      <div className="Main">
        <div className="Posts-div">
          <Home />
        </div>
          <SubredditsDiv />
      </div>
    </div>
  );
}


export default App;
