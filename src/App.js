
import './App.css';
import LandingPage from './adminPages/LandingPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SideNavbar from './util/SideNavbar';
import Home from './userPages/Home';
import Navbar from './util/Navbar';
import LoginPage from './Components/LoginPage';



const MainContent = () => {
  const location = useLocation();
  const showSidebar = !['/', '/login'].includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/emplist' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </main>
      {showSidebar && <SideNavbar />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;



