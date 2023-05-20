<template>
  <div class="tw-relative tw-flex tw-justify-center">
    <div class="tw-columns-auto tw-gap-4 sm:tw-columns-2 md:tw-columns-3 lg:tw-columns-4 xl:tw-columns-5">
      <ArtCard
        v-for="(sub, i) in test"
        :key="i"
        class="tw-mb-4 tw-break-inside-avoid"
        :submission="sub"
        @open-image-viewer="openImageDialog"
        @open-model-viewer="openModelDialog"
      />
    </div>
    <QDialog
      v-model="showImageDialog"
      maximized
      auto-close
      class="tw-relative"
      transition-show="fade"
      transition-hide="fade"
    >
      <div class="tw-relative tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center">
        <img
          class="tw-max-h-[85vh] tw-w-auto tw-max-w-[95vw] tw-rounded-md tw-bg-white tw-object-contain"
          :src="imageUrl"
        >
        <QBtn
          class="tw-absolute tw-right-1 tw-top-1 tw-z-50 tw-cursor-pointer tw-text-accent tw-drop-shadow-md"
          flat
          round
          icon="mdi-close"
          @click="showImageDialog = false"
        />
      </div>
    </QDialog>
    <QDialog
      v-model="showModelDialog"
      maximized
      @click="showModelDialog = false"
    >
      <div class="3d-viewer tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center">
        <div class="tw-overflow-clip tw-rounded-md tw-bg-white">
          <ModelViewer
            :model="modelUrl"
            class="tw-aspect-square tw-h-[85vh]"
          />
        </div>
      </div>
    </QDialog>
  </div>
</template>

<script setup lang="ts">
import { ArtSubmission } from '~/types/gallery-types'
import submissionJson from './inaBdaySubmissions2023.json'

useHead({
  title: 'Tako gallery',
  meta: [
    { name: 'description', content: 'A wonderful gallery for takos to show their support with messages, illustrations and 3D models!' }
  ],
})

const test = ref<(ArtSubmission)[]>(submissionJson.submissions)

const showImageDialog = ref(false)
const imageUrl = ref('')
async function openImageDialog(url: string) {
  console.log('Open image', url)

  imageUrl.value = url

  await new Promise(r => setTimeout(r, 100))
  showImageDialog.value = true
}

const showModelDialog = ref(false)
const modelUrl = ref('')
async function openModelDialog(url: string) {
  console.log('Open image', url)

  modelUrl.value = url

  await new Promise(r => setTimeout(r, 100))
  showModelDialog.value = true
}

</script>

<style scoped>

</style>