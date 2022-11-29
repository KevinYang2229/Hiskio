<template>
  <div class="bg-white w-full h-full">
    <ul class="py-6">
      <li v-if="isLogin" class="flex items-center p-4 border-b">
        <img class="rounded-3xl w-10" :src="memberInfo.avatar" alt="" />

        <span class="ml-2">{{ memberInfo.username }}</span>
      </li>
      <template v-if="isLogin">
        <li
          v-for="item in menu"
          :key="item.id"
          class="px-3 py-4 hover:bg-neutral-200 cursor-pointer"
        >
          {{ item.name }}
        </li>
      </template>
      <li v-if="!isLogin" class="p-4 hover:bg-neutral-200 cursor-pointer">探索課程</li>
      <li v-if="!isLogin" class="p-4 hover:bg-neutral-200 cursor-pointer">企業方案</li>
      <li
        v-if="!isLogin"
        class="p-4 hover:bg-neutral-200 cursor-pointer border-t"
        @click="enterLogin"
      >
        登入
      </li>
      <li v-if="isLogin" class="p-4 hover:bg-neutral-200 cursor-pointer border-t" @click="logout">
        登出
      </li>
      <li v-if="!isLogin" class="p-4 hover:bg-neutral-200 cursor-pointer">註冊</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'SideMenu',
  data() {
    return {
      menu: [
        { id: 'M01', name: '我的課程' },
        { id: 'M02', name: '我的抵用券' },
        { id: 'M03', name: '任務板' },
        { id: 'M04', name: '訂單記錄' },
        { id: 'M05', name: '帳戶設定' },
        { id: 'M06', name: '我開設的課' },
      ],
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      memberInfo: state => state.memberInfo,
    }),
  },
  methods: {
    ...mapMutations({
      setIsOpenLogin: 'setIsOpenLogin',
      setIsOpenSideMenu: 'setIsOpenSideMenu',
      setIsLogin: 'setIsLogin',
    }),
    enterLogin() {
      this.setIsOpenLogin(true)
    },
    logout() {
      sessionStorage.removeItem('token')
      this.setIsLogin(false)
      this.setIsOpenSideMenu(false)
    },
  },
}
</script>
