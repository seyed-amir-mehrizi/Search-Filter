
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BasicSearch from './components/BasicSearch';
import Navbar from './components/Navbar';
import TableSearch from './components/TableSearch';
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className='my-3'>
        <Routes>
          <Route path='/' element={<BasicSearch />} />
          <Route path='/table-search' element={<TableSearch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
