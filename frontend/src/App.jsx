import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import TokenPurchase from './pages/Token/TokenPurchase';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/token-purchase' element={<TokenPurchase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
