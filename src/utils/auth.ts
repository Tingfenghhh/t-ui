import Cookies from 'js-cookie'

const TOKEN_KEY = '_tokenOfIndex'

const isLogin = () => {
  return !!Cookies.get(TOKEN_KEY)
}

const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 0.5 })
}

const clearToken = () => {
  Cookies.remove(TOKEN_KEY)
}

export { isLogin, getToken, setToken, clearToken }
