import { routeNames, router } from '@/router'
// need import routeNames

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('ref-token', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
      })
  }

  // after 1 hour when access token end log in again
  function logout () {
    localStorage.removeItem('si-token')
    localStorage.removeItem('ref-token')
    // redirect to log in and reload page for clear interface for new user
    window.location.href = router.resolve(routeNames.login).href
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
  }

  return {
    accessToken,
    refreshToken,
    login,
    logout,
    register,
    setToken,
    setRefreshToken
  }
})
