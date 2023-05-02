import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Design from './pages/Design';
import Credentials from './pages/Credentials'
import Modal from './pages/modal/Modal';
import Csvpage from './pages/modal/Csvpage';
import Csvlayout from './pages/modal/Csvlayout';
import Viewmodal from './pages/modal/Viewmodal';
import History from './pages/modal/History';





function App() {
  return (
   <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route index element={<Home/>} />
       <Route path='design' element={<Design/>} />
       <Route path='credentials' element={<Credentials/>}/>
       <Route path='modal' element={<Modal/>}/>
       <Route path='csvpage' element={<Csvpage/>}/>
       <Route path='csvlayout' element={<Csvlayout/>}/>
       <Route path='viewmodal' element={<Viewmodal/>}/>
       <Route path='History' element={<History/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
