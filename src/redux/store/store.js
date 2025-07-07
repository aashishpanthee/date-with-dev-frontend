import { configureStore } from '@reduxjs/toolkit';
import connectionSlice from '../slices/connectionSlice';
import feedSlice from '../slices/feedSlice';
import requestSlice from '../slices/requestSlice';
import userSlice from '../slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    connection: connectionSlice,
    request: requestSlice
  },
});

export default store;