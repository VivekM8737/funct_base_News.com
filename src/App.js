import React, { useState } from 'react'
import  Navbar from './component/Navbar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API;
  const pageSize = 9;
  const country = 'in';
  const [progress, setprogress] = useState(10)
  const setProgress=(progress)=>{
    setprogress(progress)
  }

    return (

      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <div><Navbar />
          </div>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country={country} category={'general'} pageSize={pageSize} />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country={country} category={'business'} pageSize={pageSize} />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country={country} category={'sports'} pageSize={pageSize} />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" country={country} category={'science'} pageSize={pageSize} />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country={country} category={'technology'} pageSize={pageSize} />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country={country} category={'entertainment'} pageSize={pageSize} />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" country={country} category={'health'} pageSize={pageSize} />} />
          </Routes>
        </Router>


      </div>

    )
}

export default App