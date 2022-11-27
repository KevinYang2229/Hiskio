export const state = () => ({
  isLogin: false,
})

export const mutations = {
  setIsLogin(state, stateValue) {
    state.isLogin = stateValue
  },
}
