<!-- eslint-disable max-len -->
<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="props.isNew || editMode">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block mt-1 text-gray w-full h-6 pl-2 border border-gray-ultra-light rounded-sm"
              placeholder="Enter name"
              pattern="[a-zA-Z0-9]+" minlength="2" maxlength="50"
              required
              @input="validation"
            >
            <input
              v-model="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full h-6 pl-2 border border-gray-ultra-light rounded-sm"
              placeholder="Enter description"
              required
              @input="validation"
            >
            <input
              id="url"
              v-model="localContact.image"
              type="url"
              class="block mt-1 text-gray w-full h-6 border pl-2 border-gray-ultra-light rounded-sm"
              placeholder="https://example.com"
              pattern="https://.*" size="30"
              required
              @input="validation"
            >
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>
        <img
          v-if="!props.isNew"
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="props.isNew || editMode">
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onCancel"
          >
            Cancel
          </button>

          <button
            ref="saveRef"
            class="text-blue-500 font-medium text-xs cursor-pointer disabled:text-gray hover:underline hover:disabled:no-underline;"
            @click="props.isNew ? onCreate() : onSave()"
          >
            {{ props.isNew ? 'Create' : 'Save' }}
          </button>
        </template>

        <template v-else>
          <button
            class="text-sky-600 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >
            Edit
          </button>

          <button
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >
            Delete
          </button>
        </template>
      </div>
    </div>

    <div v-if="!props.isNew" class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
  isNew?: boolean
}>()

const emit = defineEmits(['delete', 'save', 'create', 'cancel'])

const inputRef = ref<HTMLInputElement>()
const saveRef = ref<HTMLButtonElement>()
const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  validation()
  inputRef.value?.focus()
}

onMounted(() => {
  if (props.isNew) {
    validation()
  }
})

function onCreate () {
  emit('create', localContact.value)
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

function onCancel () {
  emit('cancel')
  editMode.value = false
}

function validation () {
  const nameValue = localContact.value.name
  const nameRGEX = /^([a-z]+[a-z '-.,]*){0,32}$/i
  const nameResult = nameRGEX.test(nameValue)
  console.log(nameResult)

  const linkValue = localContact.value.name
  const linkRGEX = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g
  const linkResult = linkRGEX.test(linkValue)
  console.log(linkResult)

  const { name, description, image } = localContact.value
  if (!saveRef.value) return
  saveRef.value.disabled = !(name.trim() !== '' && nameRGEX && description.trim() !== '' && image.trim() !== '' && linkRGEX)
}
</script>
