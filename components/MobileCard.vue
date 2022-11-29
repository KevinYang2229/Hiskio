<template>
  <div class="p-3 rounded-md bg-white mt-3 shadow-borderBottom">
    <div class="flex">
      <img class="w-[140px] mr-3" :src="product.image" alt="pic" />
      <div class="flex flex-col justify-between">
        <div>{{ fundraisingString }}</div>
        <div class="w-full bg-neutral-200 rounded-full h-2.5 mb-4">
          <div
            class="bg-secondary-default h-2.5 rounded-full"
            :style="{ width: `${fundraising > 100 ? 100 : fundraising}%` }"
          ></div>
        </div>
        <div>
          <span class="mr-1 font-medium text-gray-700">${{ product.total }}</span>
          <span class="text-state-disabled line-through">${{ product.fixedPrice }}</span>
        </div>
      </div>

      <div class="flex ml-auto items-start">
        <div
          v-for="teacher in product.lecturers"
          :key="teacher.id"
          class="flex items-center ml-auto"
        >
          <img class="w-6 rounded-3xl mr-1" :src="teacher.avatar" alt="" />
        </div>
      </div>

      <!-- <img class="rounded ml-auto mb-auto" src="@/static/images/p1.svg" alt="pic"> -->
    </div>
    <div class="mt-3 font-medium">{{ product.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'MobileCard',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    fundraising() {
      return Math.ceil((this.product.consumers / this.product.fundraisingTickets) * 100)
    },
    fundraisingString() {
      return `已募資 ${this.fundraising} %`
    },
  },
}
</script>

<style lang="scss" scoped></style>
