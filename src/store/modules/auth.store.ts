import { routeNames, router } from '@/router'
// need import routeNames

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
      })
  }

  // after 1 hour when access token end log in again
  function logout () {
    localStorage.removeItem('si-token')
    // redirect to log in and reload page for clear interface for new user
    window.location.href = router.resolve(routeNames.login).href
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then(res => {
        setToken(res.access_token)
      })
  }

  return {
    accessToken,
    login,
    logout,
    register
  }
})
