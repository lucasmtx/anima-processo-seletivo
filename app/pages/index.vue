<script lang="ts" setup>
  /**
   * Pega o conteudo de content/index.json para renderizar a página dinamicamente.
   */
  const content = await queryContent('/').findOne()

  useSeoMeta({
    title: content.meta.title,
    ogTitle: content.meta.ogTitle,
    description: content.meta.description,
    ogDescription: content.meta.ogDescription,
  })
</script>

<template>
  <div>
    <component
      :is="section.type"
      v-for="section in content.sections"
      :key="section.id"
      :data="section.data"
    />
  </div>
</template>
