import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

const Body = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
