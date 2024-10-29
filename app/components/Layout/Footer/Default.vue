<script lang="ts" setup>
  import type { FooterData } from '~/types/FooterData'

  defineProps<{
    data: FooterData
  }>()
</script>

<template>
  <footer class="footer-default">
    <div class="footer-default__container">
      <div class="footer-default__logo">
        <i :class="data.logo" @click="navigateTo('#hero')" />
      </div>
      <div class="footer-default__right-items">
        <a :href="data.link.to" class="footer-default__navigation-button">{{
          data.link.text
        }}</a>
        <ul class="footer-default__medias">
          <li
            v-for="media in data.medias"
            :key="media.id"
            class="footer-default__media-item"
          >
            <a class="footer-default__media" :href="media.to">
              <i :class="media.icon" :aria-label="media.icon"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
