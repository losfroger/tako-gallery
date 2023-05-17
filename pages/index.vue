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


const test = ref<(ArtSubmission)[]>([
  {
    date: new Date(),
    discord: 'Geroniny/Cassini#4540',
    twitter: '@geroniny',
    tako_pfp: 'TakoGero - Zhi Ying (Geroniny).png',
    message: `Happy Birthday, Ina!

Thank you for being there for me, during a few of my hard times. I will continue to try my best to overcome those challenges with you, and the Tentacult, one step at a time.

May your wishes be heard and come true by the stars!`,
    is_3d: false,
    illustration: 'InabirthdayAggieGero - Zhi Ying (Geroniny).png'
  },
  {
    date: new Date(),
    discord: 'wild tako🐙⏳🪶#2002',
    twitter: 'Wild Tako',
    tako_pfp: 'IMG_0091 - Wild takodachi.jpeg',
    message: `Happy Birthday Ina! I hope you have an amazing birthday! Thank you for being the best Tako for us Takodachis for years and making our days more comfy! Happy birthday Ina!
`,
    is_3d: false,
    illustration: 'IMG_0089 - Wild takodachi.jpeg'
  },
  {
    date: new Date(),
    discord: 'Cole_kg5#5227',
    twitter: '@cole_kg5',
    tako_pfp: '',
    message: `HBD! Can't believe it's another year for our priestess! I can't say everything you've done for us in 250 characters but the gist of it is: You're the best, comfiest hooman we could ever wish for. Here's to another year on our quest for world do-!
`,
    is_3d: false,
    illustration: ''
  },
  {
    date: new Date(),
    discord: 'teamakite#5686',
    twitter: 'teamakite',
    tako_pfp: '',
    message: `I wish you a Happy Birthday, Ina! Here's to another fun and exciting year with you and tako community. Wish you the very best ^^
`,
    is_3d: false,
    illustration: 'Ina BD 2023 - Alexander Niemi.png'
  },
  {
    date: new Date(),
    discord: 'Kurosagi#6680',
    twitter: '',
    tako_pfp: 'takofrench - Kurosagi x.png',
    message: `Started drawing last year because of your stream and i finally got hooked on it and don't plain to let it go yet !

Happy Birthday !!
`,
    is_3d: false,
    illustration: 'inabd2023 - Kurosagi x.png'
  },
])

</script>

<style scoped>

</style>