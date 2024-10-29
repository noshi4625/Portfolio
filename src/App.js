import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';
import Projects from './Projects';
import Blog from './Blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Whole from './Whole';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'    element={<Whole/>       }/>
          <Route path='/home'    element={<Home/>       }/>
          <Route path='/About'    element={<About/>     }/>
          <Route path='/Skill'    element={ <Skill/>    }/>
          <Route path='/Services' element={<Services/>  }/>
          <Route path='/Projects'  element={ <Projects/> }/>
          <Route path='/Blog'     element={<Blog/>      }/>
          <Route path='/Contact'  element={<Contact/>   }/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
