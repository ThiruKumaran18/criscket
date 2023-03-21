import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './component/Home';
import NavBars from './component/NavBar';
import MasterList from './component/MasterList';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBars />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="master-list" element={<MasterList />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
