import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser } from '../redux/slices/userSlice';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('P@ssword@123');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + 'auth/login',
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong');
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + 'auth/signup',
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate('/profile');
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='flex justify-center my-10'>
      <div className='card bg-base-300 w-96 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title justify-center'>{isLoginForm ? 'Login' : 'Sign Up'}</h2>
          <div>
            {!isLoginForm && (
              <>
                <label className='form-control w-full max-w-xs my-2'>
                  <div className='label'>
                    <span className='label-text'>First Name</span>
                  </div>
                  <input
                    type='text'
                    value={firstName}
                    className='input input-bordered w-full max-w-xs'
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className='form-control w-full max-w-xs my-2'>
                  <div className='label'>
                    <span className='label-text'>Last Name</span>
                  </div>
                  <input
                    type='text'
                    value={lastName}
                    className='input input-bordered w-full max-w-xs'
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}
            <label className='form-control w-full max-w-xs my-2'>
              <div className='label'>
                <span className='label-text'>Email ID:</span>
              </div>
              <input
                type='text'
                value={emailId}
                className='input input-bordered w-full max-w-xs'
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className='form-control w-full max-w-xs my-2'>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <input
                type='password'
                value={password}
                className='input input-bordered w-full max-w-xs'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className='text-red-500'>{error}</p>
          <div className='card-actions justify-center m-2'>
            <button className='btn btn-primary' onClick={isLoginForm ? handleLogin : handleSignUp}>
              {isLoginForm ? 'Login' : 'Sign Up'}
            </button>
          </div>

          <p className='m-auto cursor-pointer py-2' onClick={() => setIsLoginForm((value) => !value)}>
            {isLoginForm ? 'New User? Signup Here' : 'Existing User? Login Here'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
