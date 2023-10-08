import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
  Navigate,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Error from './Components/Error/Error';
function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route
              path='/checkout'
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            ></Route>
            <Route
              path='/'
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            ></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
