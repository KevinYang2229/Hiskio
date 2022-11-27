<template>
  <div class="relative">
    <BaseHeader class="sticky top-0 z-sticky sm:static" />
    <div class="flex justify-center w-full bg-neutral-100 min-h-screen sm:pt-10">
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
