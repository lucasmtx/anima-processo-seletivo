<script lang="ts" setup>
  import type { SectionCardsDefaultData } from '~/types/SectionCardsDefaultData'

  const props = defineProps<{
    data: SectionCardsDefaultData
  }>()

  const { secureHtml } = useSecureHTML()
</script>

<template>
  <section :id="data.id" class="default-cards">
    <div class="default-cards__container">
      <component :is="data.title.type" class="default-cards__title">
        <span v-html="secureHtml(props.data.title.text)" />
      </component>
      <div class="default-cards__cards">
        <div
          v-for="card in data.cards"
          :key="card.id"
          class="default-cards__card"
        >
          <div class="default-cards__icon-wrapper">
            <div class="default-cards__icon">
              <i :class="card.icon" />
            </div>
          </div>
          <component :is="card.title.type" class="default-cards__card-title">
            <span v-html="secureHtml(card.title.text)" />
          </component>
          <p
            class="default-cards__card-paragraph"
            v-html="card.paragraph.text"
          />
        </div>
      </div>
    </div>
  </section>
</template>
