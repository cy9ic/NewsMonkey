import './App.css';
import Navbar from './Component/Navbar';
import React, {useState } from 'react'
import News from './Component/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




const App = (props)=>{
 
  // apiKey=process.env.REACT_API_KEY
  
  const [progress, setProgress] = useState(0)
  const [apiKey, setKey] = useState("db7707dfe50145d1a4eca81c114dea7a")
  
    return (
      <div >
        <Router>
        <Navbar />
      
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/home" element={<News apiKey={apiKey} setProgress={setProgress}key='home' pageSize={15} country={"in"} category='sports'/>}></Route>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress}key='startup' pageSize={15} country={"in"} category='sports'/>}></Route>
          <Route exact path="/business"  element={<News apiKey={apiKey} setProgress={setProgress}key={'business'} pageSize={15} country={"in"} category='business'/>}></Route>
          <Route exact path="/entertainment"  element={<News apiKey={apiKey} setProgress={setProgress}key={'entertainment'} pageSize={15} country={"in"} category='entertainment'/>}></Route>
          <Route exact path="/general"      element={<News setProgress={setProgress} apiKey={apiKey}  key={'general'}   pageSize={15} country={"in"} category='general'/>}></Route>
          <Route exact path="/health"      element={<News setProgress={setProgress}   apiKey={apiKey} key={'health'}   pageSize={15} country={"in"} category='health'/>}></Route>
          <Route exact path="/science"      element={<News setProgress={setProgress} apiKey={apiKey}  key={'science'}   pageSize={15} country={"in"} category='science'/>}></Route>
          <Route exact path="/sports"      element={<News setProgress={setProgress}  apiKey={apiKey}  key={'sports'}   pageSize={15} country={"in"} category='sports'/>}></Route>
          <Route exact path="/technology"  element={<News setProgress={setProgress} apiKey={apiKey}  key={'technology'}  pageSize={15} country={"in"} category='technology'/>}></Route>


        </Routes>

        </Router>
        </div>
    )
  }

export default App;