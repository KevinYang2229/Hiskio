<template>
  <div class="">
    <BaseHeader />
    <div class="flex justify-center w-full bg-neutral-100 min-h-screen sm:pt-20">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SimpleLayout',
  scrollToTop: true,
  computed: {
    ...mapState({
      loading: state => state.loading,
    }),
  },
}
</script>
