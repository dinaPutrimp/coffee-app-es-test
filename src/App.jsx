import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'
import Home from './components/home/Home';
import LandingPage from './components/LandingPage';
import Login from './components/Login'
import Menu from './components/menu/Menu';
import MenuContextProvider from './context/menuContext';

function App() {

  return (
    <MenuContextProvider>
      <div className="App w-3xl">
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='user/:expires' element={<LandingPage />}>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='menu' element={<Menu />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </MenuContextProvider>
  )
}

export default App
