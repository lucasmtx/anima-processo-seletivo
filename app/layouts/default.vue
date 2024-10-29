<script lang="ts" setup>
  const content = await queryContent('/').findOne()
</script>

<template>
  <div>
    <component
      :is="content.header.type"
      v-if="'header' in content"
      :data="content.header.data"
    />
    <slot />
    <component
      :is="content.footer.type"
      v-if="'footer' in content"
      :data="content.footer.data"
    />
  </div>
</template>
