import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import TokenPurchase from './pages/Token/TokenPurchase';
import TokenStaking from './pages/Token/TokenStaking';
import Publish from './pages/Publish/Publish';
import HelpCenter from './pages/Help/HelpCenter';
import Allocation from './pages/Allocation/Allocation';
import Realese from './pages/Release/Realese';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/token-purchase' element={<TokenPurchase />} />
        <Route path='/token-staking' element={<TokenStaking />} />
        <Route path='/publish' element={<Publish />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/unlock-allocation' element={<Allocation />} />
        <Route path='/my-releases' element={<Realese />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
