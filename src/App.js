import React from 'react';
import './App.css';
import { Header } from "./containers/Header/Header"
import HomePost from './containers/Home/HomePost';
import Subreddits from './features/Subreddits/Subreddits';
import SubredditHome from './containers/Home/SubredditHome';


function App() {
  return (
    <div className="App" >
      <Header />
      <div className="Main">
          <HomePost />
          <SubredditHome />
      </div>
    </div>
  );
}


export default App;
