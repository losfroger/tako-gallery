<template>
  <div class="tw-relative tw-flex tw-justify-center">
    <div class="tw-columns-auto tw-gap-4 sm:tw-columns-2 md:tw-columns-3 lg:tw-columns-4 xl:tw-columns-5">
      <template
        v-for="(sub, i) in test"
        :key="i"
      >
        <ArtCard
          class="tw-mb-4 tw-break-inside-avoid"
          :submission="sub"
          @open-image-viewer="openImageDialog"
          @open-model-viewer="openModelDialog"
        />
      </template>
      <QDialog
        v-model="showImageDialog"
        maximized
        @click="showImageDialog = false"
      >
        <div class="2d-viewer tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center">
          <img
            class="tw-h-[85vh] tw-w-auto tw-rounded-md tw-bg-white"
            :src="imageUrl"
          >
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
  </div>
</template>

<script setup lang="ts">
import { ArtSubmission } from '~/types/gallery-types'
import submissionJson from './inaBdaySubmissions2023.json'


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