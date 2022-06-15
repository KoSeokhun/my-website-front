import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Example1 from './components/Example/Example1';
import Example2 from './components/Example/Example2';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
