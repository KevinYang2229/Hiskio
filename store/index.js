export const state = () => ({
  isOpenLogin: false,
  isLogin: false,
})

export const mutations = {
  setIsOpenLogin(state, stateValue) {
    state.isOpenLogin = stateValue
  },
  setIsLogin(state, stateValue) {
    state.isLogin = stateValue
  },
}
