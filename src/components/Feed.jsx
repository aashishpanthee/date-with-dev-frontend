import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../redux/slices/feedSlice';
import { BASE_URL } from '../utils/constants';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFeed = async () => {
      if (feed) return;
      try {
        const res = await axios.get(BASE_URL + 'user/feed', {
          withCredentials: true,
        });
        dispatch(addFeed(res?.data?.data));
      } catch (error) {
        //TODO: handle error
        console.log(error?.response?.data?.message || 'Something went wrong while fetching feed');
      }
    };
    getFeed();
  }, [dispatch, feed]);
  if (!feed) return;

  if (feed.length <= 0) return <h1 className='flex justify-center my-10'>No new users found!</h1>;

  return (
    feed && (
      <div className='flex justify-center my-10'>
        <UserCard user={feed[0]} />
      </div>
    )
  );
};
export default Feed;
