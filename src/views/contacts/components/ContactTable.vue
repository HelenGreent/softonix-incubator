<template>
  <el-table :data="tableInfo" class="flex items-start" @row-click="$emit( 'edit', $event.id)">
    <el-table-column prop="image" label="Image">
      <template #default="{ row }">
        <div
          class="flex items-center justify-center w-[100px] h-[100px] m-auto p-2"
        >
          <span
            v-if="row.imageHasError || !row.image"
            class="font-semibold uppercase"
          >
            {{ nameAbbrv(row) }}
          </span>
          <img
            v-else
            :src="row.image"
            :alt="row.name"
            @error="row.imageHasError = true"
            @load="row.imageHasError = false"
          >
        </div>
      </template>
    </el-table-column>

    <el-table-column prop="name" label="Name">
      <template #default="{ row }">
        <p v-if="!row.editMode" class="font-medium text-[#707070]">{{ row.name }}</p>

        <el-input v-else type="text" @click.stop />
      </template>
    </el-table-column>

    <el-table-column prop="description" label="Description">
      <template #default="{ row }">
        <p v-if="!row.editMode" class="font-medium text-[#707070]">{{ row.description }}</p>

        <el-input v-else type="text" @click.stop />
      </template>
    </el-table-column>

    <el-table-column label="Actions">
      <template #default="{ row }">
        <div class="flex flex-row justify-start">
          <div v-if="!row.editMode">
            <el-button :type="$elComponentType.info" plain size="small">Edit</el-button>
            <el-button
              :type="$elComponentType.danger" size="small"
              @click.stop="deleteContact(row)"
            >
              Delete
            </el-button>
          </div>

          <div v-else>
            <el-button
              :type="$elComponentType.primary"
              size="small"
            >
              Save
            </el-button>
            <el-button
              :type="$elComponentType.danger"
              size="small"
            >
              Cancel
            </el-button>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">

defineEmits<{
  (t: 'edit', id: number): void
}>()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)

const tableInfo = computed(() => {
  return contacts.value
    .map(
      ({ name, description, id, image }) => ({ name, description, id, image, editMode: false, imageHasError: false })
    ) as any []
})

const { deleteContact } = contactsStore

</script>
