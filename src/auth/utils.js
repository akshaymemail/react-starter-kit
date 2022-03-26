import { STORAGE_TOKEN_KEY_NAME } from './jwtDefaultConfig'

export const isUserLoggedIn = () => {
  return (
    localStorage.getItem('userData') &&
    localStorage.getItem(STORAGE_TOKEN_KEY_NAME)
  )
}

export const getUserData = () => JSON.parse(localStorage.getItem('user'))
