
import Header from './components/Header';
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Project"
import Footer from "./components/Footer"
import {Routes,Route} from "react-router-dom"
import HomePage from './HomePage'
function App() {
  return (
   <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/project' element={<Projects />} />
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
