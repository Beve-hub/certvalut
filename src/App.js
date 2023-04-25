import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Design from './pages/Design';
import Credentials from './pages/Credentials'


function App() {
  return (
   <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route index element={<Home/>} />
       <Route path='design' element={<Design/>} />
       <Route path='credentials' element={<Credentials/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
