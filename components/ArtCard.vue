<template>
  <div>
    <div class="tw-flex tw-w-[20rem] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-md tw-bg-slate-200 tw-shadow-md">
      <div
        v-if="submission.illustration"
        class="illustration-wrapper tw-relative tw-aspect-square tw-w-full tw-overflow-clip"
      >
        <NuxtImg
          :key="`${illustration_path}-small`"
          fit="cover"
          class="tw-absolute tw-top-0 tw-h-full tw-w-full tw-cursor-pointer tw-overflow-clip tw-blur-lg"
          width="120px"
          height="120px"
          format="webp"
          :src="illustration_path"
        />
        <NuxtImg
          :key="`${illustration_path}-big`"
          loading="lazy"
          fit="contain"
          class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-cursor-pointer tw-overflow-clip"
          sizes="lg:320px"
          format="webp"
          :src="illustration_path"
          @click="onImageClick"
        />
        <div class="tw-absolute tw-bottom-2 tw-left-2 tw-flex tw-flex-row tw-gap-1 tw-text-cyan-500">
          <div
            v-if="submission.is_3d"
            title="3D Model"
          >
            <Icon
              class="tw-drop-shadow-md"
              size="24px"
              name="ph:cube-duotone"
            />
            <QTooltip>3D Model</QTooltip>
          </div>
          <div
            v-if="submission.meta == 'fullbody'"
            title="Fullbody"
          >
            <Icon
              class="tw-drop-shadow-md"
              size="24px"
              name="ic:round-emoji-people"
            />
            <QTooltip>Fullbody</QTooltip>
          </div>
          <div
            v-if="submission.meta == 'gesture'"
            title="Gesture"
          >
            <Icon
              class="tw-drop-shadow-md"
              size="24px"
              name="ic:round-sports-martial-arts"
            />
            <QTooltip>Gesture pose</QTooltip>
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-2 tw-p-2">
        <div class="tw-flex tw-flex-row tw-items-center tw-gap-2">
          <NuxtImg
            v-if="tako_pfp_path"
            class="tw-cursor-pointer tw-rounded-[100%] tw-bg-white tw-transition-all tw-duration-500"
            width="45px"
            height="45px"
            sizes="sm:32px md:64px"
            :src="tako_pfp_path"
            :title="`${submission.discord}'s wah`"
            @click="emits('clickedTako')"
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
            <div
              v-if="submission.twitter"
              class="tw-flex tw-flex-col"
            >
              <a
                v-for="(username, idx) in submission.twitter.split(',')"
                :key="idx"
                class="tw-flex tw-items-center tw-gap-1 tw-text-sm"
                target="_blank"
                rel="noopener noreferrer"
                :href="`https://twitter.com/${username}`"
              >
                <Icon name="ph:twitter-logo" />
                <h2
                  class="tw-my-0 tw-text-sm"
                >
                  {{ username }}
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div
          v-if="submission.message"
          class="divider"
        />
        <p
          v-if="submission.message"
          class="tw-whitespace-pre-line"
        >
          {{ submission.message?.trim() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArtSubmission } from '~/types/gallery-types'

const emits = defineEmits<{
  (e: 'openImageViewer', image_url: string): void,
  (e: 'openModelViewer', model_url: string): void,
  (e: 'clickedTako'): void,
}>()

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
const illustration_path = computed(() => props.submission.illustration ? `/submissions/illustrations/${props.submission.illustration}` : '')
const tako_pfp_path = computed(() => props.submission.tako_pfp ? `/submissions/pfp/${props.submission.tako_pfp}` : '')
const model_path = computed(() => props.submission.model ? `/submissions/3d-models/${props.submission.model}` : '')
const twitter_username = computed(() => props.submission.twitter ? props.submission.twitter?.trim().toLowerCase().replaceAll('@', '').replaceAll(' ', '_') : '')

function onImageClick() {
  if (props.submission.is_3d) {
    emits('openModelViewer', model_path.value)
  } else {
    console.log('Emit open image')
    emits('openImageViewer', illustration_path.value)
  }
}

</script>

<style scoped>

.divider {
  @apply tw-h-[2px] tw-bg-slate-300 tw-rounded-full
}

</style>