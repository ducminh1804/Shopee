import { createSlice } from '@reduxjs/toolkit';
// https://dev.to/raaynaldo/redux-toolkit-setup-tutorial-5fjf
interface AuthProps {
  isAuth: boolean
}

const initialState: AuthProps = {
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    isLogin: (state) => {
      state.isAuth = !state
    }
  }
})

export const { isLogin } = authSlice.actions;
const authReducer = authSlice.reducer
export default authReducer

