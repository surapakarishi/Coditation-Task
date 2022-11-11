import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';

// import SubCat from './subCat';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD OPERATIONS</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Create' element={<Create/>}/>
        <Route path='/Update/:id' element={<Update/>}/>
        
        {/* <Route path='/subCat/:id' element={<SubCat/>}/> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
