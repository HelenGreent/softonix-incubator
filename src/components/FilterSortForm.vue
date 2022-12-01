<template>
  <div class="flex gap-3">
    <label
      v-for="role in roleList"
      :key="role"
      class="flex align-center"
    > {{ role }}
      <input v-model="searchParams.roles" class="ml-1" type="checkbox" :value="role">
    </label>
    <div class="ml-7">
      <label> ascending
        <input v-model="searchParams.sort" type="radio" value="asc">
      </label>
      <label> descending
        <input v-model="searchParams.sort" type="radio" value="dsc">
      </label>
      <label> default
        <input v-model="searchParams.sort" type="radio" value="def">
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ISortParams } from '@/types'
import { useContactsStore } from '@/store/modules/contacts.store'

const props = defineProps<{
  modelValue?: ISortParams
}>()

const contactsStore = useContactsStore()
const { roleList } = contactsStore

const emit = defineEmits(['update:modelValue'])

const searchParams = ref<ISortParams>(props.modelValue || {
  sort: 'def',
  roles: [],
  search: ''
})

watch(() => searchParams.value, (newValue) => {
  console.log(newValue)
  emit('update:modelValue', newValue)
})
</script>
