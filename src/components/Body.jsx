import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { addUser } from '../redux/slices/userSlice';
import { BASE_URL } from '../utils/constants';
import Footer from './Footer';
import Navbar from './Navbar';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchUser = async () => {
      if (user) return;
      try {
        const res = await axios.get(BASE_URL + 'profile/view', { withCredentials: true });
        dispatch(addUser(res.data.data));
      } catch (error) {
        if (error.status === 401) {
          navigate('/login');
        }
        console.log(error);
      }
    };
    fetchUser();
  }, [dispatch, navigate, user]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
