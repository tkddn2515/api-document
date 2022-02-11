import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";

import Login from './pages/Login';
import Main from './pages/Main';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/Main' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
