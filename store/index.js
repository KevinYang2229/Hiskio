export const state = () => ({
  isOpenLogin: false,
  isLogin: false,
  isOpenSideMenu: false,
  memberInfo: {},
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
  setMemberInfo(state, stateValue) {
    state.memberInfo = stateValue
  },
}
