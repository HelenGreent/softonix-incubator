<template>
  <img
    v-if="isObserved"
    :src="contact.image"
    :alt="contact.name || contact.description"
    @error="$emit('error')"
    @load="$emit('load')"
  >
  <div
    v-else
    ref="imgError"
    class="w-[300px] h-[300px] bg-white"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  contact: IContact
}>()
defineEmits(['error', 'load'])

const isObserved = ref(false)
const imgError = ref<HTMLDivElement>()

const observer = new IntersectionObserver(loadingImg, { rootMargin: '300px' })

function loadingImg (entries: any, observer: any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      console.log(props.contact.image, 'observe test')
      observer.unobserve(entry.target)
      isObserved.value = true
    }
  })
}

watch(() => imgError.value, newValue => {
  if (!newValue) return
  observer.observe(newValue)
})
</script>
