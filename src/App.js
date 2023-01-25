import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EmployeeList } from './components/EmployeeList';
import { Home } from './components/Home';
import { Navigationbar } from './components/Navigationbar';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (
    <BrowserRouter>
    <Navigationbar></Navigationbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/register' element={<RegistrationForm></RegistrationForm>}></Route>
      <Route path='/employees-list' element={<EmployeeList></EmployeeList>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
