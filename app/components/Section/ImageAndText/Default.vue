<script lang="ts" setup>
  import type { SectionImageAndTextDefaultData } from '~/types/SectionImageAndTextDefaultData'

  const props = defineProps<{
    data: SectionImageAndTextDefaultData
  }>()

  const { secureHtml } = useSecureHTML()
</script>

<template>
  <section :id="data.id" class="default-text-and-image">
    <div class="default-text-and-image__container">
      <component :is="data.title.type" class="default-text-and-image__title">
        <span v-html="secureHtml(props.data.title.text)" />
      </component>
      <div class="default-text-and-image__grid">
        <div class="default-text-and-image__image-wrapper">
          <img :src="data.image.src" :alt="data.image.alt" />
        </div>

        <div class="default-text-and-image__right-items">
          <component
            :is="data.subtitle.type"
            class="default-text-and-image__subtitle"
          >
            <span v-html="secureHtml(props.data.subtitle.text)" />
          </component>
          <p
            class="default-text-and-image__paragraph"
            v-html="secureHtml(props.data.paragraph.text)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
