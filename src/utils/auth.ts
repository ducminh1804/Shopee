import { json } from "stream/consumers"
import { User } from "../types/user.type"

export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const setRefreshTokenToLS = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token)
}

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

type ActionToken = 'access_token' | 'refresh_token' | 'profile'
export const useSetDataToLS = (actionToken: ActionToken, data: string | User) => {
  const item = typeof data !== 'string' ? JSON.stringify(data) : data;
  localStorage.setItem(actionToken, item)
}