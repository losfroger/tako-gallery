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
          Tako Gallery (Proof of Concept)
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <QPage padding>
        <slot />
      </QPage>
      Footer?
    </QPageContainer>
  </QLayout>
</template>