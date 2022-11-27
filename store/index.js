export const state = () => ({
  isOpenLogin: false,
  isLogin: false,
  isOpenSideMenu: false,
})

export const mutations = {
  setIsOpenLogin(state, stateValue) {
    state.isOpenLogin = stateValue
  },
  setIsLogin(state, stateValue) {
    state.isLogin = stateValue
  },
  setIsOpenSideMenu(state, stateValue) {
    state.isOpenSideMenu = stateValue
  },
}
