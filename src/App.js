
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetails from './EmpDetails';

function App() {
  return (
    <div className='App'>
      <h1>React Js CRUD Json server</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListing/>} />
        <Route path='/employee/create' element={<EmpCreate/>}/>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
        <Route path='/employee/details/:empid' element={<EmpDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
