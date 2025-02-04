import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Users from './Users';
import Contests from './Contests';
import SingleContests from './SingleContests';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <div>
      {/* <Header/>
      <Home/>
      <Footer/> */}

      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contests" element={<Contests/>}></Route>
        <Route path="/singlecontest" element={<SingleContests/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
