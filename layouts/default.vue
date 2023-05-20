<template>
  <QLayout view="hHh lpR fFf">
    <QHeader
      reveal
      elevated
      class="bg-primary text-white"
    >
      <QToolbar>
        <QToolbarTitle class="tw-flex tw-flex-row tw-items-center tw-gap-4">
          <img
            src="/takoicon.png"
            class="tw-mb-1 tw-w-9 tw-object-contain"
          >
          Tako Gallery
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <QPage padding>
        <slot />
      </QPage>
    </QPageContainer>
    <footer
      class="tw-relative tw-mt-20 tw-bg-gradient-to-b tw-from-[#ffbb48] tw-from-5% tw-via-accent tw-via-60% tw-to-[#d67d24] tw-p-6 tw-text-tertiary tw-shadow-2xl"
    >
      <NuxtImg
        src="/AOPatternFilledIn.png"
        class="tw-absolute -tw-top-[82px] tw-left-1/2 -tw-translate-x-1/2 tw-drop-shadow-sm"
        width="90px"
      />
      <div class="tw-mt-4 tw-flex tw-flex-col tw-items-center tw-gap-2 md:tw-flex-row">
        <ul class="social-media-links tw-list-none tw-text-lg">
          <li>
            <a
              href="https://twitter.com/ninomaeinanis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                size="1.5rem"
                name="ph:twitter-logo-fill"
              />
              <span>
                @ninomaeinanis
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@NinomaeInanis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                size="1.5rem"
                name="ph:youtube-logo-fill"
              />
              <span>
                Ninomae Ina'nis Ch.
              </span>
            </a>
          </li>
        </ul>
        <p class="tw-mx-auto tw-mt-auto tw-text-center">
          This is a fan project. We are not affiliated with or endorsed by Cover Corporation.
        </p>
        <NuxtImg
          src="/Credits.png"
          height="100px"
          class="tw-cursor-pointer"
          @click="showCreditsDialog = true"
        />
      </div>
    </footer>
    <QDialog
      v-model="showCreditsDialog"
      transition-show="fade"
      transition-hide="fade"
    >
      <QCard>
        <QCardSection>
          <div class="text-h6">
            Credits
          </div>
        </QCardSection>
        <QCardSection class="tw-flex tw-flex-col">
          <p>
            This website was made by the Ninomae Ina'nis Discord fan server. Thanks everyone for sending such amazing submissions!
          </p>
          <p>
            Website developed by:
          </p>
          <ul class="tw-mt-0 tw-pl-6">
            <li>1st_Killer: Planning, General contribution</li>
            <li>Losfroger: Developer, design</li>
          </ul>
          <QImg
            src="/wah.png"
            class="tw-mx-auto tw-mt-8 tw-max-w-[200px]"
          />
        </QCardSection>
      </QCard>
    </QDialog>
  </QLayout>
</template>

<script setup lang="ts">

const showCreditsDialog = ref(false)

</script>

<style scoped lang="scss">

.social-media-links > li > a {
  @apply tw-flex tw-flex-row tw-items-center tw-gap-1 tw-no-underline tw-text-tertiary hover:tw-text-primary tw-transition-colors;
}

</style>
