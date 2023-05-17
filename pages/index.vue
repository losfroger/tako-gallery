<template>
  <div class="tw-relative tw-flex tw-justify-center">
    <div class="tw-columns-4 tw-gap-4">
      <template
        v-for="(sub, i) in test"
        :key="i"
      >
        <ArtCard
          class="tw-mb-4 tw-break-inside-avoid"
          :submission="sub"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArtSubmission } from '~/types/gallery-types'
import submissionJson from './inaBdaySubmissions2023.json'


const test = ref<(ArtSubmission)[]>(submissionJson.submissions)

</script>

<style scoped>

</style>