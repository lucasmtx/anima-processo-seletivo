<script lang="ts" setup>
  /**
   * Pega o conteudo de content/[ nome da pagina ].json para renderizar a página dinamicamente.
   * Isso permite que qualquer pagina seja criada no site.
   *
   * Para que qualquer pagina exista, basta um json valido com o nome dela existir na content.
   */
  const route = useRoute()
  const content = await queryContent(String(route.params.page)).findOne()

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
