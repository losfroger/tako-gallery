<template>
  <QBtn
    round
    color="primary"
    size="lg"
    icon="mdi-arrow-up"
    @click="scrollToTop"
  >
    <QTooltip
      anchor="center left"
      self="center right"
      :offset="[10, 10]"
    >
      <span class="tw-text-base">
        Scroll to top
      </span>
    </QTooltip>
  </QBtn>
</template>

<script setup lang="ts">

function scrollToTop() {
  window.scroll({ top: 0, behavior: 'smooth'})
}

</script>

<style scoped>

</style>