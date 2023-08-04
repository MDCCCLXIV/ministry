import './App.css';
import Header from './components/navbar/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/menu' element={<Menu  />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
