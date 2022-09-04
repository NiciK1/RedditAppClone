import React from 'react';
import './App.css';
import { Header } from "./containers/Header/Header"
import HomePost from './containers/Home/HomePost';
import SubredditHome from './containers/Home/SubredditHome';
import {selectHasError, selectIsLoading} from "./app/Store/redditSlice"
import { useSelector } from 'react-redux';
import HasErrorDiv from './isLoadingHasErrorHandle/PostsHasErrorIsLoading/HasErrorDivPosts';
import IsLoading from './isLoadingHasErrorHandle/PostsHasErrorIsLoading/IsLoading';

function App() {
  const hasError = useSelector(selectHasError)
  const isLoading = useSelector(selectIsLoading)
  return (
    <div className="App" >
      <Header />
      <div className="Main">
          {!hasError&& !isLoading? <HomePost /> : ""}
          {hasError && <HasErrorDiv />}
          {isLoading && <IsLoading />}
          <SubredditHome />
      </div>
    </div>
  );
}


export default App;


