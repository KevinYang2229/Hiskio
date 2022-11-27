<template>
  <div class="md:w-[72vw] w-full">
    <div class="bg-neutral-100 p-4 sm:flex w-full sm:w-auto">
      <div class="mb-8 sm:mr-4 md:flex-1">
        <h2 class="font-bold text-xl mb-5">購物車</h2>
        <div class=" bg-white shadow-borderBottom">
          <CardList class="sm:hidden block" :carts="cartList" @delete="deleteRec"></CardList>
          <TableList class="hidden sm:block" :carts="cartList" @delete="deleteRec"></TableList>
        </div>
      </div>

      <div class="sm:w-[380px] w-full">
        <h2 class="font-bold text-xl mb-5">小計</h2>
        <div class="bg-white p-3 rounded-lg shadow-borderBottom">
          <div class="border-b mb-4">
            <div class="text-gray-500">輸入折扣代碼</div>
            <input class="border rounded w-full h-10 px-2" type="text">
            <div class="flex items-center mt-5 mb-20 sm:mb-3">
              <a class="mr-[2px] text-gray-600 underline underline-offset-2" href="#">選擇抵用卷</a>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.18902 0.711765L14.14 5.66274L14.14 7.04902L9.18902 12L7.78294 10.6137L11.0308 7.34608L-2.03429e-07 7.34608L-2.89995e-07 5.36569L11.0308 5.36569L7.76314 2.09804L9.18902 0.711765Z" fill="#595959"/>
              </svg>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-12 sm:mb-3">
              <span class="text-gray-500">金額</span>
              <span class="text-gray-600">${{ totalAmt.price }}</span>
            </div>
            <div class="text-3xl text-right mb-4">${{ totalAmt.price }}</div>
            <button class="bg-secondary-default text-white w-full p-3 rounded mb-3">前往結帳</button>
            <small class="text-gray-500 text-xs">點擊上方按鈕即表示您已閱讀並同意「 HiSKIO購買與退費政策」</small>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <h2 class="font-bold text-xl mb-3">募資課程</h2>
      <div class="block sm:flex sm:gap-3">
        <div v-for="(item, i) in data" :key="item.id" >
          <MobileCard class="sm:hidden block cursor-pointer" :idx="i" :product="item" @click.native="add(item)"></MobileCard>
          <TableCard class="hidden sm:block cursor-pointer" :idx="i" :product="item" @click.native="add(item)"></TableCard>
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
    const { data } = await axios({
      method: 'get',
      baseURL: 'https://api.hiskio.com/v2',
      url: '/courses/fundraising',
      'Content-Type': 'application/json',
    })

    return { data }
  },
  data() {
    return {
      cartList: []
    }
  },
  computed: {
    ...mapState({
      isOpenLogin: state => state.isOpenLogin,
    }),
    totalAmt() {
      return this.cartList.reduce((accumulator, currentValue) => {
        return {price: Number(accumulator.price) + Number(currentValue.price)}
      }, {price: 0})
    }
  },
  methods: {
    add(item) {
      const matchItem = this.cartList.find(cart => cart.id === item.id)
      matchItem ? this.deleteRec(item.id) : this.cartList.push(item)
    },
    deleteRec(e) {
      const currIndex = this.cartList.findIndex(cart => cart.id === e)
      this.cartList.splice(currIndex, 1)
    }
  },
}
</script>
