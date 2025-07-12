import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Blog from '../components/blog/Blog';
import BlogItem from '../components/blog/BlogItem';

function App() {

  return (
    <>
      <div>
 <Router>
        <Routes>
           <Route path="/" element={<Blog/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>      
      </div>
    </>
  )
}

export default App
