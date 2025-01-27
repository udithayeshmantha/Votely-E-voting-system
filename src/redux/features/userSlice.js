import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    role: null,
    email: null,
    token:null,
    firstname : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.firstname = action.payload.firstname;
    },
    clearUser: (state) => {
      state.uid = null;
      state.role = null;
      state.email = null;
      state.token = null;
      state.token = null;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser,clearUser } = userSlice.actions

export default userSlice.reducer