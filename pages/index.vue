<template>
  <div class="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-12">
    <div class="tw-relative tw-isolate tw-mt-40 tw-w-full tw-max-w-4xl">
      <img
        class="tw-absolute tw-left-1/2 tw-top-0 -tw-z-50 tw-w-1/2 tw-min-w-[350px] -tw-translate-x-1/2 -tw-translate-y-3/4"
        src="/ina_reading.webp"
        alt=""
      >
      <div class="tw-flex tw-w-full tw-flex-col tw-gap-2 tw-rounded-xl tw-bg-white tw-p-4 tw-shadow-md">
        <QInput
          v-model="filters.search"
          filled
          clearable
          label="Search"
        >
          <template #prepend>
            <Icon name="ph:magnifying-glass-duotone" />
          </template>
        </QInput>
        <div class="tw-flex tw-flex-row tw-flex-wrap">
          <QToggle
            v-model="filters.show3D"
            color="accent"
            keep-color
            label="Show 3D submissions"
          />
          <QToggle
            v-model="filters.showFullBody"
            color="accent"
            keep-color
            label="Show full body submissions"
          />
          <QToggle
            v-model="filters.showGesture"
            color="accent"
            keep-color
            label="Show gesture submissions"
          />
        </div>
      </div>
    </div>
    <div class="tw-columns-auto tw-gap-4 sm:tw-columns-2 md:tw-columns-3 lg:tw-columns-4 xl:tw-columns-5">
      <ArtCard
        v-for="(sub, i) in filteredSubmissions"
        :key="i"
        class="tw-mb-4 tw-break-inside-avoid"
        :submission="sub"
        @open-image-viewer="openImageDialog"
        @open-model-viewer="openModelDialog"
        @clicked-tako="takoWah"
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
      transition-show="fade"
      transition-hide="fade"
    >
      <div class="tw-relative">
        <ModelViewer
          class="tw-absolute tw-left-1/2 tw-top-1/2 tw-aspect-square tw-max-h-[85vh] tw-max-w-[95vw] -tw-translate-x-1/2 -tw-translate-y-1/2"
          :model="modelUrl"
        />
        <QBtn
          class="tw-absolute tw-right-1 tw-top-1 tw-z-50 tw-cursor-pointer tw-text-accent tw-drop-shadow-md"
          flat
          round
          icon="mdi-close"
          @click="showModelDialog = false"
        />
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

const filters = ref({
  search: '',
  show3D: true,
  showGesture: true,
  showFullBody: true,
})

const submissions = ref<(ArtSubmission)[]>(submissionJson.submissions)

const filteredSubmissions = computed(() => submissions.value.filter((submission) => {
  const filterNames = !filters.value.search ||
    submission.discord.trim().toLowerCase().includes(filters.value.search) ||
    submission?.twitter?.trim()?.toLowerCase()?.includes(filters.value.search)

  const threeD = filters.value.show3D ? true : submission.is_3d == false

  return filterNames && threeD
}))

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

const audio = new Audio('/ina-wah.mp3')
function takoWah() {
  audio.volume = 0.2
  audio.play()
}

</script>

<style scoped>

</style>