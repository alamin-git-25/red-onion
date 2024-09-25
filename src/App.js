import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Heder/Header';
import Breakfast from './Pages/Brakfast/Breakfast';
import Lunch from './Pages/Lunch/Lunch';
import Dinner from './Pages/Dinner/Dinner';
import Footer from './Pages/Footr/Footer';
import Singup from '../src/Pages/Singup/Singup';
import Login from './Pages/Singup/Login';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div>
      <Header/>  
   <Routes>
    <Route path='/breakfast' element={<Breakfast/>}></Route>
    <Route path='/lunch' element={<Lunch/>}></Route>
    <Route path='/dinner' element={<Dinner/>}></Route>
    <Route path='/singup' element={<Singup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/order' element={<Order/>}></Route>
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
