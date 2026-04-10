<template>
  <div class="min-h-full bg-gray-50/60 p-3 sm:p-8">
    <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-950 via-green-800 to-green-600 shadow-xl mb-7">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
      <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-sm" />
      <div class="absolute -bottom-28 left-1/3 w-80 h-80 rounded-full bg-black/10 blur-sm" />

      <div class="relative px-5 sm:px-10 py-8 sm:py-11">
        <div class="max-w-3xl">
          <p class="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-green-200/95 mb-3">
            ZooCultura | Painel Colaborativo
          </p>
          <h1 class="text-2xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight">
            Cuidar dos animais
            <span class="text-green-200">com organização e propósito</span>
          </h1>
          <p class="mt-4 text-sm sm:text-base text-green-100/90 leading-relaxed max-w-2xl">
            Este painel foi feito para o time operar com clareza todos os dias: vender melhor,
            manter estoque saudável, organizar clientes e garantir que nenhuma tarefa financeira fique para trás.
          </p>
        </div>

        <div class="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div class="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p class="text-[10px] uppercase tracking-widest text-green-200 font-semibold">Clientes</p>
            <p class="text-xl sm:text-2xl font-black text-white mt-1">{{ resumoLoading ? '...' : totalClientes }}</p>
          </div>
          <div class="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p class="text-[10px] uppercase tracking-widest text-green-200 font-semibold">Clientes Ativos</p>
            <p class="text-xl sm:text-2xl font-black text-white mt-1">{{ resumoLoading ? '...' : clientesAtivos }}</p>
          </div>
          <div class="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p class="text-[10px] uppercase tracking-widest text-green-200 font-semibold">Pedidos do Mês</p>
            <p class="text-xl sm:text-2xl font-black text-white mt-1">{{ resumoLoading ? '...' : vendasMes }}</p>
          </div>
          <div class="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p class="text-[10px] uppercase tracking-widest text-green-200 font-semibold">Caixa do Mês</p>
            <p class="text-sm sm:text-lg font-black text-white mt-2 truncate">
              {{ resumoLoading ? '...' : formatCurrency(faturamentoMes) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-4 px-1">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-lg sm:text-xl font-black text-gray-800 tracking-tight">Atalhos Rápidos</h2>
        <span class="text-xs font-semibold text-gray-400 uppercase tracking-widest">Navegação</span>
      </div>
      <p class="text-sm text-gray-500 mt-1">
        Acesse as áreas principais do sistema com um clique.
      </p>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
      <NuxtLink
        v-for="atalho in atalhosVisiveis"
        :key="atalho.to"
        :to="atalho.to"
        class="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-gradient-to-br from-white via-white to-gray-50 px-4 py-4 shadow-[0_6px_20px_rgba(16,24,40,0.06)] hover:shadow-[0_14px_35px_rgba(16,24,40,0.12)] transition-all duration-300 hover:-translate-y-1"
      >
        <div class="absolute inset-x-0 top-0 h-1.5" :class="atalho.accent" />
        <div class="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-gray-100/70 to-transparent blur-md pointer-events-none group-hover:scale-110 transition-transform duration-300" />
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.10),transparent_60%)]" />

        <div class="relative flex items-start justify-between gap-3">
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-105"
            :class="atalho.iconBg"
          >
            <AppNavIcon :name="atalho.icon" class="w-8 h-8" :class="atalho.iconColor" />
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border border-black/5"
            :class="atalho.badge"
          >
            {{ atalho.adminOnly ? 'Admin' : 'Equipe' }}
          </span>
        </div>

        <h3 class="relative mt-3 text-[15px] sm:text-base font-black text-gray-800 tracking-tight">
          {{ atalho.title }}
        </h3>
        <p class="relative mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
          {{ atalho.description }}
        </p>

        <div class="relative mt-3 inline-flex items-center gap-1 text-sm font-black text-emerald-700 group-hover:text-emerald-800">
          Acessar
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
        </div>
      </NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useAdmin } from '~/composables/useAdmin'
import { createSupabaseClient } from '~/lib/supabase'
import AppNavIcon from '~/components/AppNavIcon.vue'

const supabase = createSupabaseClient()
const { isAdmin } = useAdmin()

const resumoLoading = ref(true)
const totalClientes = ref(0)
const clientesAtivos = ref(0)
const vendasMes = ref(0)
const faturamentoMes = ref(0)

onMounted(async () => {
  const [clientesResp, vendasResp] = await Promise.all([
    supabase.from('clientes').select('ativo'),
    supabase.from('vendas').select('valor_total, data_venda, status'),
  ])

  if (!clientesResp.error) {
    const clientes = clientesResp.data ?? []
    totalClientes.value = clientes.length
    clientesAtivos.value = clientes.filter(c => c.ativo !== false).length
  }

  if (!vendasResp.error) {
    const vendas = vendasResp.data ?? []
    const now = new Date()
    const vendasNoMes = vendas.filter(v => {
      if (!v.data_venda) return false
      const d = new Date(v.data_venda)
      return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
    })

    vendasMes.value = vendasNoMes.length
    faturamentoMes.value = vendasNoMes
      .filter(v => v.status !== 'cancelada')
      .reduce((sum, v) => sum + Number(v.valor_total ?? 0), 0)
  }

  resumoLoading.value = false
})

function formatCurrency(val: number): string {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const atalhos = [
  {
    to: '/clientes',
    icon: 'identification',
    title: 'Clientes',
    description: 'Gerencie cadastros, contatos e informações de relacionamento.',
    adminOnly: false,
    accent: 'bg-violet-500',
    iconBg: 'bg-violet-50 border-violet-100',
    iconColor: 'text-violet-600',
    badge: 'bg-violet-50 text-violet-700',
  },
  {
    to: '/vendas',
    icon: 'receipt',
    title: 'Vendas',
    description: 'Registre vendas com itens e subtotais de forma rápida e segura.',
    adminOnly: false,
    accent: 'bg-orange-500',
    iconBg: 'bg-orange-50 border-orange-100',
    iconColor: 'text-orange-600',
    badge: 'bg-orange-50 text-orange-700',
  },
  {
    to: '/produtos',
    icon: 'package',
    title: 'Produtos',
    description: 'Acompanhe estoque, categorias, preços e status dos itens.',
    adminOnly: false,
    accent: 'bg-blue-500',
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700',
  },
  {
    to: '/funcionarios',
    icon: 'users',
    title: 'Funcionários',
    description: 'Organize dados da equipe e mantenha o controle operacional.',
    adminOnly: true,
    accent: 'bg-emerald-500',
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700',
  },
  {
    to: '/contas-pagar',
    icon: 'wallet',
    title: 'Contas a Pagar',
    description: 'Monitore vencimentos, status e planejamento financeiro.',
    adminOnly: true,
    accent: 'bg-rose-500',
    iconBg: 'bg-rose-50 border-rose-100',
    iconColor: 'text-rose-600',
    badge: 'bg-rose-50 text-rose-700',
  },
] as const

const atalhosVisiveis = computed(() =>
  atalhos.filter(item => !item.adminOnly || isAdmin.value)
)
</script>
