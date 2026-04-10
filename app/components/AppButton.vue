<template>
  <button
    v-bind="$attrs"
    :type="type"
    :disabled="disabled || loading"
    :class="[baseClasses, variantClasses[variant], sizeClasses[size], { 'opacity-60 cursor-not-allowed': disabled || loading }]"
  >
    <span v-if="loading" class="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppButton' })

withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    loading: false,
  }
)

const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variantClasses = {
  primary:   'bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary',
  secondary: 'bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500',
  accent:    'bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent',
  outline:   'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus-visible:ring-primary',
  ghost:     'text-primary bg-transparent hover:bg-bg focus-visible:ring-primary',
}

const sizeClasses = {
  sm:  'px-3 py-1.5 text-sm gap-1.5',
  md:  'px-5 py-2.5 text-base gap-2',
  lg:  'px-7 py-3.5 text-lg gap-2.5',
}
</script>
