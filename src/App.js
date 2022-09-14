
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add/Add';
import ContactList from './Components/ContactList/ContactList';
import Edit from './Components/Edit/Edit';
import NavBar from './Components/NavBar/NavBar';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route  path='/contactlist' element={<ContactList/>}/>
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path="/add" element={<Add/>}/>

      </Routes>

    </div>
  );
}

export default App;
