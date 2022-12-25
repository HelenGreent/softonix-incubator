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
    ref="smth"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  contact: IContact
}>()
defineEmits(['error', 'load'])

const isObserved = ref(false)
const smth = ref<HTMLDivElement>()

const observer = new IntersectionObserver(loadingImg)

function loadingImg (entries: any, observer: any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      console.log(props.contact.image, 'observe test')
      observer.unobserve(entry.target)
      isObserved.value = true
    }
  }, {
    rootMargin: '300px'
  })
}

watch(() => smth.value, newValue => {
  if (!newValue) return
  observer.observe(newValue)
})
</script>
