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
import UserContextProvider from './context/userContext';

function App() {

  return (
    <UserContextProvider>
      <MenuContextProvider>
        <div className="App w-full">
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='user' element={<LandingPage />}>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='menu' element={<Menu />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </MenuContextProvider>
    </UserContextProvider>
  )
}

export default App
