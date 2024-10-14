import { User } from "../types/user.type"

export const LocalStorageEventTarget = new EventTarget()
type ActionToken = 'access_token' | 'refresh_token' | 'profile'
export const useSetDataToLS = (actionToken: ActionToken, data: string | User) => {
  const item = typeof data !== 'string' ? JSON.stringify(data) : data;
  localStorage.setItem(actionToken, item)
}

export const getDataFromLS = (action: ActionToken) => {
  return localStorage.getItem(action)
}

export const getUserProfile = () => {
  const userProfile = localStorage.getItem('profile');
  if (userProfile) return JSON.parse(userProfile) as User;
}
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('profile')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}


