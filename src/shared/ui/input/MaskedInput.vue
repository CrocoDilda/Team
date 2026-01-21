<script setup lang="ts">
import { watch } from 'vue'
import VInput from './VInput.vue'
import type { StyleValue } from 'vue'

type Props = {
  placeholder?: string
  idDisabled?: boolean
  tabindex?: number
  max?: number
  customStyles?: StyleValue
  separator?: string
}

const props = withDefaults(defineProps<Props>(), { separator: ' ' })

const model = defineModel<string>()

const addSpaces = (value: string) => value.replace(/\B(?=(\d{3})+(?!\d))/g, props.separator)

watch(model, () => {
  if (model.value) {
    const max = props.max ?? Infinity
    if (model.value.length >= max) return (model.value = model.value.slice(0, -1))
    const cleanedValue = model.value.replace(/[^0-9]/g, '')
    model.value = addSpaces(cleanedValue)
  }
})
</script>

<template>
  <VInput
    v-model="model"
    :placeholder="placeholder"
    type="text"
    :style="customStyles"
    :disabled="idDisabled"
  />
</template>
