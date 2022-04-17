import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Account/Login/Login';
import Signup from './components/Account/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
