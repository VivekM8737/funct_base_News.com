import React, { Component } from 'react'
import { Navbar } from './component/Navbar'
import { News } from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  pageSize = 9;
  country = 'in';
  state = {
    progress: 10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (

      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <div><Navbar />
          </div>
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country={this.country} category={'general'} pageSize={this.pageSize} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country={this.country} category={'business'} pageSize={this.pageSize} />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country={this.country} category={'sports'} pageSize={this.pageSize} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country={this.country} category={'science'} pageSize={this.pageSize} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country={this.country} category={'technology'} pageSize={this.pageSize} />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country={this.country} category={'entertainment'} pageSize={this.pageSize} />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country={this.country} category={'health'} pageSize={this.pageSize} />} />
          </Routes>
        </Router>


      </div>

    )
  }
}

export default App