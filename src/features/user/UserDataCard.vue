<script setup lang="ts">
import { MaskedInput } from '@/shared/ui/input'
import type { UserData } from '@/entities/user/types'

defineProps<UserData>()

const model = defineModel<string>()
</script>

<template>
  <label class="grid grid-cols-[auto_1fr] gap-3 v-label">
    <div class="flex items-center justify-center p-0.75 rounded-[50%] w-22 image-circle">
      <img
        :src="image"
        alt="not found"
        class="h-20 w-20 object-cover rounded-[50%] aspect-square"
      />
    </div>

    <div class="flex flex-col justify-center gap-3">
      <p class="text-[1rem]/[15px] uppercase transition-colors user-name">{{ name }}</p>

      <div class="flex gap-3 items-center justify-start">
        <MaskedInput
          v-model="model"
          placeholder="123"
          custom-styles="
		  	field-sizing: content;
			min-width: 72px;
			max-width: 100%;"
          :max="20"
        />

        <p class="text-[1.125rem] text-nowrap">{{ metrics }}</p>
      </div>
    </div>
  </label>
</template>

<style scoped>
.image-circle {
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0);
  transition: border-color 0.2s;
}

.user-name {
  font-family: 'Koulen', sans-serif;
  color: black;
}

.v-label:focus-within .image-circle {
  border-color: var(--primary);
}

.v-label:focus-within .user-name {
  color: var(--primary);
}
</style>
