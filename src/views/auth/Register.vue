<template>
  <div class="max-w-[500px] m-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">Sign Up</p>
      </template>

      <el-form ref="formRef" label-position="top" :rules="formRules" :model="formModel" @submit.prevent="submit">
        <el-form-item label="Email" prop="email">
          <el-input v-model="formModel.email" type="email" placeholder="DanielRaynolds@gmail.com" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>

        <p class="pb-2.5 text-sm font-normal">
          Already a user?
          <router-link
            class="text-sky-700 uppercase hover:underline ease-in-out duration-300"
            :to="{ name: $routeNames.login }">
            Login
          </router-link>
        </p>

        <el-button native-type="submit" :type="$elComponentType.primary">
          Sign Up
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()
const { register } = useAuthStore()

const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: ''
})
const loading = ref(false)

const formRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)]
})

function submit () {
  formRef.value?.validate(isValid => {
    if (isValid) {
      loading.value = true

      register(formModel)
        .then(() => router.push({ name: $routeNames.login }))
        .finally(() => (loading.value = false))
    }
  })
}
</script>
