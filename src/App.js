import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Pages/AddTask/AddTask';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/addtask' element={<AddTask></AddTask>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  </div>
  );
}

export default App;
