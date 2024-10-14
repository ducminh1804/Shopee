import { createSlice } from '@reduxjs/toolkit';
import { Role, User } from '../types/user.type';
import { getDataFromLS, getUserProfile } from '../utils/auth';
// https://dev.to/raaynaldo/redux-toolkit-setup-tutorial-5fjf
interface AuthProps {
  isAuth: boolean,
  profile: User
}

const roles: Role[] = []
const initUserProfile: User = {
  _id: "",
  roles: roles,
  email: "",
  name: "",
  date_of_birth: "",
  avatar: "",
  address: "",
  phone: "",
  createdAt: "",
  updateAt: "",
  __v: 0
}

const initialState: AuthProps = {
  isAuth: Boolean(getDataFromLS('access_token')),
  profile: getUserProfile() || initUserProfile
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    isLogin: (state, action) => {
      state.isAuth = true;
      state.profile = action.payload
    },
    isLogOut: (state) => {
      state.isAuth = false
    }
  }
})

export const { isLogin,isLogOut } = authSlice.actions;
const authReducer = authSlice.reducer
export default authReducer

