import './index.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default class App extends Component {

      mode = 'light';
      pageSize = 8

    

 toggleMode = async () => {
   if (this.mode === 'light') {
     this.setState({mode:'dark'});
     // document.body.style.backgroundColor = "#042743";
    } else {
      this.setState({mode:'light'});
      // document.body.style.backgroundColor = "white";
    }
    console.log(this.mode)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar mode={this.mode} toggleMode={this.toggleMode}  />
      <Routes>
          <Route path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
      </Routes>
    </BrowserRouter>
        
      </div>
    )
  }
}