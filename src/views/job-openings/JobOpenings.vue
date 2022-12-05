<template>
  <section class="w-2/5 p-3 border border-[#d3d3d3] rounded-md bg-white">
    <p class="py-1 text-[#696969]">Departments:</p>

    <template v-if="!selectMode">
      <input
        type="text" placeholder="Select" class="w-full min-h-[35px] p-1 border border-[#d3d3d3] rounded"
        @click="(selectMode = true)"
      >
    </template>

    <template v-else>
      <select
        v-model="randomModelValue"
        multiple class="w-full min-h-[35px] p-1 border border-[#d3d3d3] rounded"
      >
        <option
          v-for=" (department, value) in departmentsStore"
          :key="value"
          :name="department.name"
          :value="department.value"
        >
          {{ department.name }}
        </option>
      </select>
      <span class="py-2 block text-[#707070]">Showing 1092 job openings</span>
      <span class="text-sm">To select multiple hold Control(Ctrl) key on your keyboard</span>
      <hr class="my-3 border-[#d3d3d3]">
      <ul>
        <li>{{ randomModelValue }}</li>
      </ul>
    </template>
  </section>
</template>

<script setup lang="ts">
import { useJobOpeningsStore } from './job-openings.store'
import { ref } from 'vue'

const { departmentsStore } = useJobOpeningsStore()
const randomModelValue = ref([departmentsStore[2].value, departmentsStore[20].value])

const selectMode = ref(false)

</script>

<!-- <template>
  <section class="w-2/5 p-3 border border-[#d3d3d3] rounded-md bg-white">
    <p class="py-1 text-[#696969]">Departments:</p>
    <AppDropdown v-model="departmentFilter" :options="options" multiple />
    <p
      v-for="item in filteredDepartments"
      :key="item.value"
    >
      {{ item.name }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { useJobOpeningsStore } from './job-openings.store'
import AppDropdown from '@/components/app-dropdown/AppDropdown.vue'

const { departmentsStore, departmentFilter, filteredDepartments } = useJobOpeningsStore()

const options = computed(() => {
  return departmentsStore.map(item => ({
    label: item.name,
    value: item.value
  }))
})

const filteredDepartments = computed(() => {
  return departmentsStore.value.filter(item => !departmentFilter.value.includes(item.value))
})

</script> -->
