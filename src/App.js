import TagManager from 'react-gtm-module';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Router from "./pages/Router"

const tagManagerArgs = {
  gtmId: 'GTM-KBK553CC'
}

TagManager.initialize(tagManagerArgs);



function App() {

  return (
    <div className='App'>
      <div className="title-nav">
        <h4>React blog</h4>
      </div>
      <Router />
    </div>
  );
}

export default App;
