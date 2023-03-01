import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
// import { fetchCount } from './counterAPI';

interface USER {
  displayName:string;
  photoUrl:string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:{uid:'',photUrl:'',displayName:''},
  },
  reducers: {
    login: (state,action) => {

      state.user = action.payload;
    },
    logout: (state) => {
      state.user={uid:'',photUrl:'',displayName:''};
    },
    updateUserProfile:(state,actiion: payloadAction<USER>=>{
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    })

  },
 
});

export const { login, logout } = userSlice.actions;


export const selectUser = (state: RootState) => state.user.user;


export default userSlice.reducer;