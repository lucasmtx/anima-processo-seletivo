<script lang="ts" setup>
  defineProps<{
    showMenu: boolean
    links: {
      id: number
      text: string
      to: string
    }[]
  }>()

  defineEmits(['close'])
</script>

<template>
  <div class="default-menu">
    <div
      class="default-menu__backdrop"
      :class="{ 'show-backdrop': showMenu }"
      @click="$emit('close')"
    ></div>
    <div class="default-menu__layout">
      <div class="default-menu__buttons">
        <button
          class="default-menu__close-button"
          :class="{ 'show-button': showMenu }"
          @click="$emit('close')"
        >
          <i class="icon-close" />
        </button>
      </div>
      <div class="default-menu__content" :class="{ 'show-content': showMenu }">
        <ul class="default-menu__link-list">
          <li
            v-for="link in links"
            :key="link.id"
            class="default-menu__link-item"
            @click="$emit('close')"
          >
            <a :href="link.to" class="default-menu__link">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
