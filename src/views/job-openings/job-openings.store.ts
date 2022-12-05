import { jobOpenings, type IJobOpening } from '@/_homework/job-openings'
import { type IDepartment, departments } from '@/_homework/departments'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpeningStore = ref<IJobOpening[]>(jobOpenings)
  const departmentsStore = ref<IDepartment[]>(departments)

  return { jobOpeningStore, departmentsStore }
})
