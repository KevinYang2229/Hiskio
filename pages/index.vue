<template>
  <div class="md:w-[72vw] w-full">
    <div class="bg-neutral-100 p-4 sm:flex w-full sm:w-auto">
      <div class="mb-8 sm:mr-4 md:flex-1">
        <h2 class="font-bold text-xl mb-5">購物車</h2>
        <div class=" bg-white shadow-borderBottom">
          <CardList></CardList>
        </div>
      </div>

      <div class="sm:w-[380px] w-full">
        <h2 class="font-bold text-xl mb-5">小計</h2>
        <div class="bg-white p-3 rounded-lg shadow-borderBottom">
          <div class="border-b mb-4">
            <div class="text-gray-500">輸入折扣代碼</div>
            <input class="border rounded w-full h-10" type="text">
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
              <span class="text-gray-600">$7,960</span>
            </div>
            <div class="text-3xl text-right mb-4">$7,060</div>
            <button class="bg-secondary-default text-white w-full p-3 rounded mb-3">前往結帳</button>
            <small class="text-gray-500 text-xs">點擊上方按鈕即表示您已閱讀並同意「 HiSKIO購買與退費政策」</small>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <h2 class="font-bold text-xl">購物車</h2>
      <div v-for="(n, i) in 4" :key="n" >
        <Card :idx="i"></Card>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'StandardLayout',
}
</script>
