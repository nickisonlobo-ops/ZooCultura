<template>
  <div class="h-screen bg-gradient-to-br from-green-700 via-green-500 to-orange-400 flex items-center justify-center px-4">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/LoginForm.vue'

definePageMeta({ layout: false })
</script>
