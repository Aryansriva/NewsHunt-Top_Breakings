import './App.css';
import Navbar from './components/Navbar';
 import React, { useState } from 'react'
import News from './components/News';
import { 
  Routes,
  Route } from 'react-router-dom';
  import LoadingBar from 'react-top-loading-bar'
 
  const App = ()=> { 
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress,setProgress] = useState(0);

  // setProgress(props.progress);
     return (
       <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path='/' element = {<News setProgress={setProgress}  apiKey={apiKey} key="home" pageSize={6} country="us"/>}/>
          <Route exact path='/general' element = {<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={6} country="us" category="general"/>}/>
          <Route exact path='/business' element = {<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={6} country="us" category="business"/>}/>
          <Route exact path='/entertainment' element = {<News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={6} country="us" category="entertainment"/>}/>
          <Route exact path='/health' element = {<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={6} country="us" category="health"/>}/>
          <Route exact path='/science' element = {<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={6} country="us" category="science"/>}/>
          <Route exact path='/sports' element = {<News setProgress={setProgress}  apiKey={apiKey}  key="sports" pageSize={6} country="us" category="sports"/>}/>
          <Route exact path='/technology' element = {<News setProgress={setProgress}  apiKey={apiKey}  key="technology" pageSize={6} country="us" category="technology"/>}/>


        </Routes>
       </div>
     );
   }
 

  export default App;
 
