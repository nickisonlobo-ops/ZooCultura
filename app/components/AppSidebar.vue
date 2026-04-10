<template>
  <aside
    class="shrink-0 bg-gradient-to-b from-green-900 via-green-700 to-green-600 flex flex-col min-h-0 overflow-hidden transition-all duration-300 ease-in-out"
    :class="expanded ? 'w-64' : 'w-16'"
    @mouseenter="expanded = true"
    @mouseleave="expanded = false"
  >
    <!-- Marca lateral -->
    <div class="px-4 py-5 border-b border-green-600 flex items-center gap-3 overflow-hidden">
      <AppNavIcon name="leaf" class="w-5 h-5 text-green-300 shrink-0" />
      <p
        class="text-xs font-semibold uppercase tracking-widest text-green-200 whitespace-nowrap transition-opacity duration-200"
        :class="expanded ? 'opacity-100' : 'opacity-0'"
      >
        Menu
      </p>
    </div>

    <!-- Links -->
    <nav class="flex-1 px-2 py-4 flex flex-col gap-1 overflow-y-auto overflow-x-hidden">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-green-600 transition-colors overflow-hidden"
        active-class="bg-green-800 text-white"
      >
        <AppNavIcon :name="item.icon" class="w-5 h-5 shrink-0" />
        <span
          class="whitespace-nowrap transition-opacity duration-200"
          :class="expanded ? 'opacity-100' : 'opacity-0'"
        >
          {{ item.label }}
        </span>
      </NuxtLink>
    </nav>

    <!-- Rodapé da sidebar -->
    <div class="px-4 py-4 border-t border-green-600 overflow-hidden">
      <p
        class="text-xs text-green-300 whitespace-nowrap transition-opacity duration-200"
        :class="expanded ? 'opacity-100' : 'opacity-0'"
      >
        v1.0.0
      </p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAdmin } from '~/composables/useAdmin'
import AppNavIcon from '~/components/AppNavIcon.vue'

defineOptions({ name: 'AppSidebar' })

const expanded = ref(false)
const { isAdmin } = useAdmin()

const allNavItems = [
  { to: '/',              icon: 'home',    label: 'Início',        adminOnly: false },
  { to: '/funcionarios',  icon: 'users',   label: 'Funcionários',  adminOnly: true  },
  { to: '/produtos',      icon: 'package',        label: 'Produtos',       adminOnly: true  },
  { to: '/clientes',      icon: 'identification', label: 'Clientes',       adminOnly: false },
  { to: '/contas-pagar',  icon: 'wallet',  label: 'Contas a Pagar', adminOnly: true  },
  { to: '/vendas',        icon: 'receipt',        label: 'Vendas',         adminOnly: true  },
]

const navItems = computed(() =>
  allNavItems.filter(item => !item.adminOnly || isAdmin.value)
)
</script>
