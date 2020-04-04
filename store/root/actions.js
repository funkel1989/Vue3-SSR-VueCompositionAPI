import { splitCookies } from '~/common/Cookies/cookies'
import { SET_USER_AUTH, SET_USER_TOKEN } from '~/store/auth/mutationTypes'

export default {
  nuxtServerInit({ commit }, { req }) {
    const cookies = req && req?.headers?.cookie
    if (cookies) {
      const splittedCookies = splitCookies(cookies)
      const token = splittedCookies.token
      if (token && token.length > 0) {
        commit(SET_USER_AUTH, true)
        commit(SET_USER_TOKEN, token)
      }
    }
  }
}
