import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login';
import Events from './pages/Events/Events';
import Register from './pages/Register';
import Dashboard from './Dashboard/Dashboard';
import VolunteerTable from './Dashboard/VolunteerTable';
import AddEvent from './Dashboard/AddEvent';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='volunteer-list' element={<VolunteerTable />} />
          <Route path='add-event' element={<AddEvent />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
