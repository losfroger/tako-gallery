<template>
  <QLayout view="hHh lpR fFf">
    <QHeader
      elevated
      class="bg-primary text-white"
    >
      <QToolbar>
        <QToolbarTitle class="tw-flex tw-flex-row tw-items-center tw-gap-4">
          <RouterLink to="/">
            <img
              src="/takoicon.png"
              class="tw-mt-1 tw-w-9 tw-object-contain"
              title="Home"
            >
          </RouterLink>
          Tako Gallery
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <QPage
        padding
        class="tw-min-h-[85vh]"
      >
        <slot />
      </QPage>
    </QPageContainer>
    <Transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <ShowOnScroll
        :show-after-px="160"
        class="tw-fixed tw-bottom-4 tw-right-4"
      >
        <ScrollToTopBtn />
      </ShowOnScroll>
    </Transition>
    <footer
      class="tw-relative tw-mt-20 tw-bg-gradient-to-b tw-from-[#ffbb48] tw-from-5% tw-via-accent tw-via-60% tw-to-[#d67d24] tw-p-6 tw-text-tertiary tw-shadow-2xl"
    >
      <RouterLink
        to="/ao-chan"
        class="tw-absolute -tw-top-[82px] tw-left-1/2 -tw-translate-x-1/2"
      >
        <NuxtImg
          src="/AOPatternFilledIn.png"
          class="tw-cursor-pointer tw-drop-shadow-sm hover:tw-animate-pulse"
          width="90px"
        />
      </RouterLink>
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
            <li>
              <div class="tw-flex tw-items-center">
                <a
                  href="https://twitter.com/WololoSensei"
                  class="tw-inline-flex tw-items-center tw-gap-1"
                >
                  <Icon name="ph:twitter-logo" /> 1st_Killer
                </a>:
                Planning, General contribution
              </div>
            </li>
            <li>
              <div class="tw-flex tw-items-center">
                <a
                  href="https://twitter.com/losfroger"
                  class="tw-inline-flex tw-items-center tw-gap-1"
                >
                  <Icon name="ph:twitter-logo" /> Losfroger
                </a>:
                Developer, Design
              </div>
            </li>
          </ul>
          <RouterLink
            to="/lagtrain"
            class="tw-mx-auto tw-mt-8 tw-max-w-[200px]"
          >
            <img
              src="/wah.png"
              class="tw-w-full"
              title="Lagtrain?"
            >
          </RouterLink>
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

<style>
a {
  @apply tw-text-accent tw-no-underline tw-transition-colors hover:tw-text-primary ;
}
</style>
