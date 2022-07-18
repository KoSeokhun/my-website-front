import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Example1 from './components/Example/Example1';
import Example2 from './components/Example/Example2';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
