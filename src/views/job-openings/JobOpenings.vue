<template>
  <section class="w-2/5 p-3 border border-[#d3d3d3] rounded-md bg-white">
    <p class="py-1 text-[#696969]">Departments:</p>
    <el-select
      v-model="selectDepartments"
      multiple
      collapse-tags
      placeholder="Select departments"
      class="w-full"
    >
      <el-option
        v-for="department in departments "
        :key="department.value"
        :value="department.name"
      />
    </el-select>
    <p class="p-1 text-sm">
      Showing
      <span
        v-if="selectDepartments"
      >
        {{ selectDepartments.length }} out of
      </span>
      1458  job openings
    </p>
  </section>
</template>

<script setup lang="ts">
import { departments } from '@/_homework/departments'
import { ref } from 'vue'

const selectDepartments = ref<[]>([])
</script>
