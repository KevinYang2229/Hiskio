<template>
  <div>
    <div
      v-for="(cart, i) in carts"
      :key="cart.id"
      class="flex justify-between p-3 sm:p-4"
      :class="{ 'border-t': i !== 0 }"
    >
      <div>
        <div class="flex">
          <img class="w-[62px] rounded" :src="cart.image" alt="pic" />
          <div class="text-sm ml-2 font-medium">{{ cart.name }}</div>
        </div>
        <div class="text-xs mt-2">
          <span class="text-gray-500 mr-1">{{ cart.subtotal }}</span>
          <span class="text-gray-700 border border-black rounded">募資優惠</span>
        </div>
      </div>
      <div class="flex flex-col justify-between items-end">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="remove(cart)"
        >
          <path
            d="M5.84879 19.4667C5.84879 20.64 6.79265 21.6 7.94627 21.6H16.3362C17.4898 21.6 18.4337 20.64 18.4337 19.4667V8.79999C18.4337 7.62666 17.4898 6.66666 16.3362 6.66666H7.94627C6.79265 6.66666 5.84879 7.62666 5.84879 8.79999V19.4667ZM18.4337 3.46666H15.8118L15.0672 2.70933C14.8784 2.51733 14.6058 2.39999 14.3331 2.39999H9.94936C9.67669 2.39999 9.40402 2.51733 9.21524 2.70933L8.47064 3.46666H5.84879C5.27198 3.46666 4.80005 3.94666 4.80005 4.53333C4.80005 5.11999 5.27198 5.59999 5.84879 5.59999H18.4337C19.0105 5.59999 19.4824 5.11999 19.4824 4.53333C19.4824 3.94666 19.0105 3.46666 18.4337 3.46666Z"
            fill="#BFBFBF"
          />
        </svg>
        <div>{{ cart.total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    carts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    remove({ id }) {
      this.$emit('delete', id)
    },
  },
}
</script>
