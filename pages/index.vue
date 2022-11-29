<template>
  <div class="relative md:w-[72vw] w-full">
    <SideMenu
      class="fixed transition-all"
      :class="isOpenSideMenu ? 'top-[60px]' : 'top-full'"
    ></SideMenu>
    <div class="bg-neutral-100 p-4 sm:flex w-full sm:w-auto">
      <div class="mb-8 sm:mr-4 md:flex-1">
        <h2 class="font-bold text-xl mb-5">購物車</h2>
        <div class="bg-white shadow-borderBottom">
          <CardList class="sm:hidden block" :carts="cartList" @delete="deleteRec"></CardList>
          <TableList class="hidden sm:block" :carts="cartList" @delete="deleteRec"></TableList>
        </div>
      </div>

      <div class="sm:w-[380px] w-full">
        <h2 class="font-bold text-xl mb-5">小計</h2>
        <div class="bg-white p-3 rounded-lg shadow-borderBottom">
          <div class="border-b mb-4">
            <div class="text-gray-500">輸入折扣代碼</div>
            <input class="border rounded w-full h-10 px-2" type="text" />
            <div class="flex items-center mt-5 mb-20 sm:mb-3">
              <a class="mr-[2px] text-gray-600 underline underline-offset-2" href="#">選擇抵用卷</a>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.18902 0.711765L14.14 5.66274L14.14 7.04902L9.18902 12L7.78294 10.6137L11.0308 7.34608L-2.03429e-07 7.34608L-2.89995e-07 5.36569L11.0308 5.36569L7.76314 2.09804L9.18902 0.711765Z"
                  fill="#595959"
                />
              </svg>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-12 sm:mb-3">
              <span class="text-gray-500">金額</span>
              <span class="text-gray-600">${{ totalAmt }}</span>
            </div>
            <div class="text-3xl text-right mb-4">${{ totalAmt }}</div>
            <button class="bg-secondary-default text-white w-full p-3 rounded mb-3">
              前往結帳
            </button>
            <small class="text-gray-500 text-xs"
              >點擊上方按鈕即表示您已閱讀並同意「 HiSKIO購買與退費政策」</small
            >
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <h2 class="font-bold text-xl mb-3">募資課程</h2>
      <div class="block sm:flex sm:gap-3">
        <div v-for="(item, i) in currData" :key="item.id">
          <MobileCard
            class="sm:hidden block cursor-pointer"
            :idx="i"
            :product="item"
            @click.native="addRec(item)"
          ></MobileCard>
          <TableCard
            class="hidden sm:block cursor-pointer"
            :idx="i"
            :product="item"
            @click.native="addRec(item)"
          ></TableCard>
        </div>
      </div>
    </div>

    <Login v-show="isOpenLogin"></Login>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  layout: 'StandardLayout',
  async asyncData({ app, error }) {
    const res = await axios({
      method: 'get',
      baseURL: 'https://api.hiskio.com/v2',
      url: '/courses/fundraising',
      'Content-Type': 'application/json',
    })
    const currData = res.data.map(item => {
      return {
        id: item.id,
        image: item.image,
        name: item.title,
        subtotal: item.price,
        total: item.price,
        fixedPrice: item.fixed_price,
        fundraisingTickets: item.fundraising_tickets,
        consumers: item.consumers,
        lecturers: item.lecturers,
        estimateDuration: item.estimate_duration,
      }
    })
    return { currData }
  },
  data() {
    return {
      cartList: [],
    }
  },
  computed: {
    ...mapState({
      isOpenLogin: state => state.isOpenLogin,
      isOpenSideMenu: state => state.isOpenSideMenu,
    }),
    totalAmt() {
      let sum = 0
      for (const cart of this.cartList) {
        sum += cart.total
      }
      return sum
    },
  },
  async mounted() {
    const token = JSON.parse(sessionStorage.getItem('token')) || ''
    const res = await axios({
      method: 'post',
      baseURL: 'https://api.hiskio.com/v2',
      url: '/carts',
      'Content-Type': 'application/json',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    })
    const carts = JSON.parse(localStorage.getItem('cartList')) || []
    console.log(res.data.data)
    this.cartList = carts
    // this.cartList = carts.concat(res.data.data)
  },
  methods: {
    addRec(item) {
      const matchItem = this.cartList.find(cart => cart.id === item.id)
      matchItem ? this.deleteRec(item.id) : this.cartList.push(item)
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
    },
    deleteRec(e) {
      const currIndex = this.cartList.findIndex(cart => cart.id === e)
      this.cartList.splice(currIndex, 1)
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
    },
  },
}
</script>
