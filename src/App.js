import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import PublicPage from './components/PublicPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    <Routes>
      <Route path='/public' element={<PublicPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
