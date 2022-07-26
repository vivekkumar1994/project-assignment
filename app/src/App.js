
import './App.css';
import Header from './components/header/Header';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Calculation from './components/calculation/Calculation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='cal' element={<Calculation/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
