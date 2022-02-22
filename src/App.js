
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BasicSearch from './components/BasicSearch';
import Navbar from './components/Navbar';
import TableSearch from './components/TableSearch';
import { Users } from './users';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className='my-3'>
        <Routes>
          <Route path='/' element={<BasicSearch data={Users} />} />
          <Route path='/table-search' element={<TableSearch data={Users}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
