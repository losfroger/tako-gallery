<template>
  <div
    v-if="scrollPx > showAfterPx"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">

const scrollPx = ref(0)
const props = defineProps({
  showAfterPx: {
    type: Number,
    default: 40,
  }
})

function handleScroll() {
  scrollPx.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll))

onUnmounted(() => window.removeEventListener('scroll', handleScroll))

</script>

<style scoped>

</style>