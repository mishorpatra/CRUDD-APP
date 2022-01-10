import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import NavBar from  './components/NavBar'
import Home from './components/Home'
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser'
import NotFound from './components/NotFound'
import EditUser from './components/EditUser'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/all' element={<AllUsers />} />
      <Route exact path='/add' element={<AddUser />} />
      <Route exact path='/edit/:id' element={<EditUser />} />
      <Route path='*' exact={true} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
