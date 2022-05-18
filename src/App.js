import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Pages/AddTask/AddTask';
import Congrat from './Pages/Congrat/Congrat';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/addtask' element={<AddTask></AddTask>}></Route>
      <Route path='/congrats' element={<Congrat></Congrat>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  </div>
  );
}

export default App;
