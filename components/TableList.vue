<template>
  <div>
    <table class="w-full">
      <thead class="border-b">
        <tr class="flex items-center p-3">
          <td class="w-[340px] flex">項目</td>
          <td class="mx-5 w-[74px] text-center">售價</td>
          <td class="flex-1 text-right min-w-[74px]">結帳金額</td>
          <td class="w-[48px]"></td>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="(cart, i) in carts" :key="cart.id" class="flex items-center px-3 py-5" :class="{'border-t': i !== 0 }">
          <td class="flex w-[340px]">
            <img class="w-[120px]" :src="cart.image" alt="pic">
            <span class="ml-3">{{ cart.title }}</span>
          </td>
          <td class="mx-5 w-[74px] text-center">{{ cart.price }}</td>
          <td class="flex-1 text-right">{{ cart.price }}</td>
          <td class="w-[48px]">
            <svg class="mx-auto cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="remove(cart)">
              <path d="M5.84879 19.4667C5.84879 20.64 6.79265 21.6 7.94627 21.6H16.3362C17.4898 21.6 18.4337 20.64 18.4337 19.4667V8.79999C18.4337 7.62666 17.4898 6.66666 16.3362 6.66666H7.94627C6.79265 6.66666 5.84879 7.62666 5.84879 8.79999V19.4667ZM18.4337 3.46666H15.8118L15.0672 2.70933C14.8784 2.51733 14.6058 2.39999 14.3331 2.39999H9.94936C9.67669 2.39999 9.40402 2.51733 9.21524 2.70933L8.47064 3.46666H5.84879C5.27198 3.46666 4.80005 3.94666 4.80005 4.53333C4.80005 5.11999 5.27198 5.59999 5.84879 5.59999H18.4337C19.0105 5.59999 19.4824 5.11999 19.4824 4.53333C19.4824 3.94666 19.0105 3.46666 18.4337 3.46666Z" fill="#BFBFBF"/>
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableList',
  props: {
    carts: {
      type: Array,
      default: () => [],
    }
  },
  mounted() {
    console.log(this.carts)
  },
  methods: {
    remove({ id }) {
      this.$emit('delete', id)
    }
  },
}

</script>

<style lang="scss" scoped>

</style>
