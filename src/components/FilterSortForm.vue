<template>
  <div class="flex gap-3">
    <SearchForm v-model="searchParams.search" />
    <label> ascending
      <input v-model="radio" type="radio" value="asc">
    </label>
    <label> descending
      <input v-model="radio" type="radio" value="dsc">
    </label>
    <label> default
      <input v-model="radio" type="radio" value="def">
    </label>
    <label> 333
      <input v-model="checkboxes" type="checkbox" value="rol1">
    </label>
    <label> 4
      <input v-model="checkboxes" type="checkbox" value="rol2">
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ISortParams } from '@/types'

const props = defineProps<{
  modelValue?: ISortParams
}>()

const emit = defineEmits(['update:modelValue'])
const checkboxes = ref<string[]>([])
const searchParams = ref<ISortParams>(props.modelValue || {
  sort: 'def',
  roles: [],
  search: ''
})
const radio = ref('')

watch(() => searchParams.value.sort, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
