<script lang="ts" setup>
  import type { HeaderData } from '~/types/HeaderData'

  defineProps<{
    data: HeaderData
  }>()

  /**
   * Estado do menu (Modal)
   */
  const showMenu = ref(false)
</script>

<template>
  <header class="header-default">
    <div class="header-default__container">
      <div class="header-default__logo">
        <i :class="data.logo" @click="navigateTo('#hero')" />
      </div>
      <nav class="header-default__right-items">
        <ul class="header-default__items">
          <li
            v-for="link in data.links"
            :key="link.id"
            class="header-default__link-item"
          >
            <a class="header-default__link" :href="link.to">{{ link.text }}</a>
          </li>
          <li>
            <a :href="data.action.to" class="header-default__action">{{
              data.action.text
            }}</a>
          </li>
        </ul>

        <button class="header-default__menu-button" @click="showMenu = true">
          <i class="icon-menu" aria-label="menu" />
        </button>
      </nav>
    </div>

    <LayoutHeaderDefaultMenu
      :show-menu="showMenu"
      :links="data.links"
      @close="showMenu = false"
    />
  </header>
</template>
