import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Pages/AddTask/AddTask';
import Congrat from './Pages/Congrat/Congrat';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/registration' element={<Registration></Registration>}></Route>
      <Route path='/' element={
        <RequireAuth>
      <Home></Home>
      </RequireAuth>
      }></Route>
      <Route path='/home' element={
        <RequireAuth>
      <Home></Home>
      </RequireAuth>
      }></Route>
      <Route path='/addtask' element={<RequireAuth><AddTask></AddTask></RequireAuth>}></Route>
      <Route path='/congrats' element={<RequireAuth><Congrat></Congrat></RequireAuth>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  </div>
  );
}

export default App;
