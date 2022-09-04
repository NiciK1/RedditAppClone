import React from 'react';
import './App.css';
import { Header } from "./containers/Header/Header"
import HomePost from './containers/Home/HomePost';
import SubredditHome from './containers/Home/SubredditHome';
import {selectHasError, selectIsLoading} from "./app/Store/redditSlice"
import { useSelector } from 'react-redux';
import HasErrorDiv from './isLoading/hasError/HasErrorDiv';
import IsLoading from './isLoading/IsLoading';

function App() {
  const hasError = useSelector(selectHasError)
  const isLoading = useSelector(selectIsLoading)
  return (
    <div className="App" >
      <Header />
      <div className="Main">
          {!hasError&& <HomePost />}
          {hasError && <HasErrorDiv />}
          {isLoading && <IsLoading />}
          <SubredditHome />
      </div>
    </div>
  );
}


export default App;
