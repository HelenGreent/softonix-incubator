import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IContact, ISortParams } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      role: 'Employee',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id: 5,
      name: 'Wednesday',
      description: 'Developer',
      role: 'Employee',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      role: 'Contributor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id: 3,
      name: 'James Ostrict',
      description: 'Product Directives Officer',
      role: 'Manager',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    }
  ])

  const roleList = computed(() => {
    return contacts.value.reduce((acc, curr) => {
      if (!curr.role) return acc
      if (acc.includes(curr.role)) {
        return acc
      } else return [...acc, curr.role]
    }, [] as string[])
  })

  function sortByAscDsc (params: Partial<ISortParams>) {
    const filtered = [...contacts.value].filter(contact => {
      if (!contact.role) return false

      if (!params.roles || params.roles.length === 0) return true

      return params.roles.includes(contact.role)
    })

    if (!params.sort || params.sort === 'def') return filtered
    if (params.sort === 'asc') return filtered.sort((a, b) => a.name.localeCompare(b.name))
    return filtered.sort((a, b) => b.name.localeCompare(a.name))
  }

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  return {
    contacts,
    addContact,
    deleteContact,
    updateContact,
    sortByAscDsc,
    roleList
  }
})
