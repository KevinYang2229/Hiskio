<template>
  <div class="w-[calc(100% / 4)] bg-white rounded-lg overflow-hidden">
    <img class="mr-3" :src="product.image" alt="pic" />
    <div class="p-3">
      <h4 class="text-xl font-medium mb-1">{{ product.title }}</h4>
      <div
        v-for="teacher in product.lecturers"
        :key="teacher.id"
        class="flex mt-2 mr-2 items-center"
      >
        <img class="w-8 rounded-3xl mr-1" :src="teacher.avatar" alt="" />
        <span class="text-neutral-500">{{ teacher.username }}</span>
      </div>

      <div class="flex justify-between mt-1">
        <span class="text-sm">{{ expiryDate }}</span>
        <span class="text-sm">{{ fundraisingString }}</span>
      </div>

      <div class="w-full bg-neutral-200 rounded-full h-2.5 mb-4">
        <div
          class="bg-secondary-default h-2.5 rounded-full"
          :style="{ width: `${fundraising}%` }"
        ></div>
      </div>
      <div class="flex items-center">
        <span class="mr-1 font-medium text-gray-700 text-xl">${{ product.price }}</span>
        <span class="text-state-disabled line-through text-sm">${{ product.fixed_price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableCard',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    expiryDate() {
      return `剩 ${this.product.estimate_duration / 60 / 60} 天`
    },
    fundraising() {
      return Math.ceil((this.product.consumers / this.product.students) * 100)
    },
    fundraisingString() {
      return `已募資 ${this.fundraising} %`
    },
  },
}
</script>

<style lang="scss" scoped></style>
