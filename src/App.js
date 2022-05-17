import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import User from './Components/User/User';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/user' element={<User></User>}></Route>
      </Routes>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
