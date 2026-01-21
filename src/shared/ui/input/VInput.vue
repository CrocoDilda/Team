<script setup lang="ts">
import type { StyleValue } from 'vue'

type Props = {
  placeholder?: string
  idDisabled?: boolean
  type?: 'number' | 'text'
  tabindex?: number
  min?: number
  max?: number
  customStyles?: StyleValue
}

withDefaults(defineProps<Props>(), {
  tabindex: 0,
  idDisabled: false,
  type: 'text',
})

const model = defineModel<string | number>()
</script>

<template>
  <input
    v-model="model"
    :placeholder="placeholder"
    :type="type"
    class="h-11 rounded-md border font-medium text-[1.125rem] px-1.75 v-input"
    :min="min"
    :max="max"
    :style="customStyles"
    :disabled="idDisabled"
  />
</template>

<style scoped>
.v-input {
  border-color: var(--light-grey);
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--mid-grey);
  }

  &:focus-visible {
    border-color: var(--primary-light);
  }
}
</style>
