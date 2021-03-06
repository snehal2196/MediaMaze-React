import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router,HashRouter, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react'

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0)

  return (

    <div>
      <HashRouter>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={2}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setprogress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
          <Route exact path="/business" element={<News setProgress={setprogress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
          <Route exact path="/health" element={<News setProgress={setprogress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
          <Route exact path="/science" element={<News setProgress={setprogress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
          <Route exact path="/sports" element={<News setProgress={setprogress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
          <Route exact path="/technology" element={<News setProgress={setprogress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )

}

export default App


