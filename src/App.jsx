import { BrowserRouter, Route, Routes } from 'react-router';
import Body from './components/Body';
import Connections from './components/Connections';
import Feed from './components/Feed';
import Login from './components/Login';
import Profile from './components/Profile';
import Requests from './components/Requests';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route path='/' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/connections' element={<Connections />} />
          <Route path='/requests' element={<Requests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
