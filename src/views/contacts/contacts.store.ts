export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 0,
      name: 'Abbey',
      description: 'British',
      image: 'http://placekitten.com/90/90'
    }, {
      id: 1,
      name: 'Ashley',
      description: 'Bengal',
      image: 'http://placekitten.com/90/80'
    }, {
      id: 2,
      name: 'Cori',
      description: 'Scottish',
      image: 'http://placekitten.com/70/80'
    },
    {
      id: 3,
      name: 'Dolly',
      description: 'British',
      image: 'http://placekitten.com/80/70'
    }, {
      id: 4,
      name: 'Brendy',
      description: 'Bengal',
      image: 'http://placekitten.com/80/90'
    }, {
      id: 5,
      name: 'Elvis',
      description: 'Scottish',
      image: 'http://placekitten.com/80/88'
    },
    {
      id: 6,
      name: 'Cooper',
      description: 'British',
      image: 'http://placekitten.com/80/70'
    }, {
      id: 7,
      name: 'Guffy',
      description: 'Bengal',
      image: 'http://placekitten.com/80/71'
    }, {
      id: 8,
      name: 'Marty',
      description: 'Scottish',
      image: 'http://placekitten.com/80/72'
    },
    {
      id: 9,
      name: 'Noel',
      description: 'British',
      image: 'http://placekitten.com/80/73'
    }, {
      id: 10,
      name: 'Bruno',
      description: 'Bengal',
      image: 'http://placekitten.com/80/74'
    }, {
      id: 11,
      name: 'Tobby',
      description: 'Scottish',
      image: 'http://placekitten.com/80/75'
    },
    {
      id: 12,
      name: 'Ray',
      description: 'British',
      image: 'http://placekitten.com/75/80'
    }, {
      id: 13,
      name: 'Felix',
      description: 'Bengal',
      image: 'http://placekitten.com/80/76'
    }, {
      id: 14,
      name: 'Cori',
      description: 'Scottish',
      image: 'http://placekitten.com/80/78'
    },
    {
      id: 15,
      name: 'Mia',
      description: 'British',
      image: 'http://placekitten.com/80/79'
    }, {
      id: 16,
      name: 'Kelly',
      description: 'Bengal',
      image: 'http://placekitten.com/79/80'
    }, {
      id: 17,
      name: 'Loki',
      description: 'Scottish',
      image: 'http://placekitten.com/78/80'
    },
    {
      id: 18,
      name: 'Roxy',
      description: 'British',
      image: 'http://errror-img'
    }, {
      id: 19,
      name: 'Gabby',
      description: 'Bengal',
      image: 'http://errror-img'
    }, {
      id: 20,
      name: 'Shelby',
      description: 'Scottish',
      image: 'https://errror-img'
    }
  ])

  const getContacts = () => {
    if (contacts.value.length) return Promise.resolve()

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
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
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
