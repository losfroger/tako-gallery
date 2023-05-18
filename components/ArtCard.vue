<template>
  <div>
    <div class="tw-flex tw-w-[20rem] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-md tw-bg-slate-200 tw-shadow-md">
      <div
        v-if="submission.illustration"
        class="illustration-wrapper tw-relative tw-aspect-square tw-w-full tw-overflow-clip"
      >
        <NuxtImg
          fit="cover"
          class="tw-absolute tw-top-0 tw-h-full tw-w-full tw-cursor-pointer tw-overflow-clip tw-blur-lg"
          width="120px"
          height="120px"
          format="webp"
          :src="illustration_path"
        />
        <NuxtImg
          fit="contain"
          class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-cursor-pointer tw-overflow-clip"
          sizes="lg:320px"
          format="webp"
          :src="illustration_path"
          @click="showDialog = true"
        />
        <QIcon
          v-if="submission.is_3d"
          class="tw-absolute tw-bottom-2 tw-left-2 tw-ml-auto tw-drop-shadow-md"
          size="sm"
          color="cyan-12"
          name="mdi-cube-outline"
        />
      </div>
      <div class="tw-flex tw-flex-col tw-gap-2 tw-p-2">
        <div class="tw-flex tw-flex-row tw-items-center tw-gap-2">
          <NuxtImg
            v-if="tako_pfp_path"
            class="tw-rounded-[100%] tw-bg-white tw-transition-all tw-duration-500"
            format="webp"
            sizes="sm:32px md:64px"
            :src="tako_pfp_path"
          />
          <Icon
            v-else
            name="ph:confetti"
            size="40px"
            class="tw-my-auto tw-text-accent"
          />
          <div>
            <h1 class="tw-my-0 tw-text-lg">
              {{ submission.discord }}
            </h1>
            <a
              v-if="submission.twitter"
              class="tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-accent tw-no-underline tw-transition-colors hover:tw-text-primary"
              target="_blank"
              rel="noopener noreferrer"
              :href="`https://twitter.com/${twitter_username}`"
            >
              <Icon name="ph:twitter-logo" />
              <h2
                class="tw-my-0 tw-text-sm"
              >
                {{ twitter_username }}
              </h2>
            </a>
          </div>
        </div>
        <div class="divider" />
        <p class="tw-whitespace-pre-line">
          {{ submission.message?.trim() }}
        </p>
      </div>
    </div>
    <QDialog
      v-model="showDialog"
      maximized
      @click="showDialog = false"
    >
      <div
        v-if="submission.is_3d"
        class="3d-viewer tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center"
      >
        <div class="tw-overflow-clip tw-rounded-md tw-bg-white">
          <ModelViewer
            :model="model_path"
            class="tw-aspect-square tw-h-[85vh]"
          />
        </div>
      </div>
      <div
        v-else
        class="2d-viewer tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center"
      >
        <img
          class="tw-h-[85vh] tw-w-auto tw-rounded-md tw-bg-white"
          :src="illustration_path"
        >
      </div>
    </QDialog>
  </div>
</template>

<script setup lang="ts">
import { ArtSubmission } from '~/types/gallery-types'

const props = defineProps({
  submission: {
    type: Object as PropType<ArtSubmission>,
    required: true,
    default: (): ArtSubmission => ({
      index: 0,
      date: new Date().toISOString(),
      discord: '',
      is_3d: false,
    })
  }
})

const showDialog = ref(false)

const illustration_path = computed(() => props.submission.illustration ? `/submissions/illustrations/${props.submission.illustration}` : '')
const tako_pfp_path = computed(() => props.submission.tako_pfp ? `/submissions/pfp/${props.submission.tako_pfp}` : '')
const model_path = computed(() => props.submission.model ? `/submissions/3d-models/${props.submission.model}` : '')
const twitter_username = computed(() => props.submission.twitter ? props.submission.twitter?.trim().toLowerCase().replaceAll('@', '').replaceAll(' ', '_') : '')

</script>

<style scoped>

.divider {
  @apply tw-h-[2px] tw-bg-slate-300 tw-rounded-full
}

</style>