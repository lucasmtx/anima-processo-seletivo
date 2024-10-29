<script lang="ts" setup>
  import type { SectionCarouselDefaultData } from '~/types/SectionCarouselDefaultData'

  defineProps<{
    data: SectionCarouselDefaultData
  }>()

  const { carouselRef } = useCarouselAutoPlay()
</script>

<template>
  <section :id="data.id" class="default-carousel">
    <div class="default-carousel__container">
      <UCarousel
        ref="carouselRef"
        :items="data.images"
        :ui="{
          container: 'rounded-lg overflow-hidden h-full',
          item: 'snap-start basis-full',
          arrows: {
            wrapper: 'absolute top-0 left-0 w-full h-full items-center',
          },
          indicators: {
            wrapper: 'absolute bottom-5 right-8 justify-end',
          },
        }"
        class="default-carousel__carousel"
        arrows
        indicators
      >
        <template #default="{ item }">
          <picture>
            <source
              :srcset="`/images/wide-${item.src}`"
              media="(min-width: 768px)"
            />
            <img :src="`/images/square-${item.src}`" :alt="item.alt" />
          </picture>
        </template>

        <template #prev="{ onClick, disabled }">
          <button
            :disabled="disabled"
            class="default-carousel__left-arrow"
            @click="onClick"
          >
            <i class="icon-chevron-left" />
          </button>
        </template>

        <template #next="{ onClick, disabled }">
          <button
            :disabled="disabled"
            class="default-carousel__right-arrow"
            @click="onClick"
          >
            <i class="icon-chevron-right" />
          </button>
        </template>

        <template #indicator="{ onClick, page, active }">
          <UButton
            :variant="active ? 'solid' : 'outline'"
            size="xs"
            class="default-carousel__indicator"
            :class="active ? 'default-carousel__indicator--active' : ''"
            role="tab"
            :aria-label="`Aba ${page}`"
            @click="onClick(page)"
          />
        </template>
      </UCarousel>
    </div>
  </section>
</template>
