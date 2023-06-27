import News from './components/News';
import Navbar from './components/navbar';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <div >
        <Routes>
        <Route exact path="/" element={<News key="general" category='general'></News>}/>
        <Route exact path="/business" element={<News  key="business" category='business'></News>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" category='entertainment'></News>}/>
        <Route exact path="/health" element={<News key="health" category='health'></News>}/>
        <Route exact path="/sports" element={<News key="sports" category='sports'></News>}/>
        <Route exact path="/technology" element={<News  key="technology" category='technology'></News>}/>
        <Route exact path="/science" element={<News key="science" category='science'></News>}/>
        </Routes>
      </div>
      </Router>
      
    )
  }
}

