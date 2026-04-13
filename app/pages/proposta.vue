<template>
  <div class="font-sans bg-white text-gray-900 overflow-x-hidden">

    <!-- ══════════════════════════════════════════════
         NAVBAR
    ══════════════════════════════════════════════ -->
    <header class="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <span class="font-black text-gray-900 text-lg tracking-tight">ZooCultura</span>
        </div>

        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#sistema" class="hover:text-green-700 transition-colors">Sistema</a>
          <a href="#assessoria" class="hover:text-green-700 transition-colors">Assessoria</a>
          <a href="#marketing" class="hover:text-green-700 transition-colors">Marketing</a>
          <a href="#planos" class="hover:text-green-700 transition-colors">Planos</a>
          <a href="#contato" class="hover:text-green-700 transition-colors">Contato</a>
        </nav>

        <a
          href="#contato"
          class="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors shadow"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/>
          </svg>
          Falar com Consultor
        </a>
      </div>
    </header>

    <!-- ══════════════════════════════════════════════
         HERO
    ══════════════════════════════════════════════ -->
    <section class="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
      <!-- BG gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-500" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,112,16,0.22),transparent_55%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,77,142,0.20),transparent_60%)]" />

      <!-- decorative circles -->
      <div class="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white/[0.03] pointer-events-none" />
      <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <!-- Left -->
        <div class="flex flex-col items-start gap-6">
          <span class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            <span class="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Proposta Comercial Exclusiva
          </span>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Sua casa de ração<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">organizada, lucrativa</span><br />
            e pronta para<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-white">crescer de verdade</span>
          </h1>

          <p class="text-base sm:text-lg text-green-100/90 max-w-md leading-relaxed">
            Sistema de gestão completo + assessoria empresarial + marketing digital — tudo integrado para sua casa de ração e mercado pet crescer com controle e estratégia.
          </p>

          <div class="flex flex-wrap gap-3 mt-2">
            <a
              href="#planos"
              class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black px-6 py-3.5 rounded-2xl text-base shadow-lg transition-all hover:scale-105"
            >
              Ver Planos e Preços
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
              </svg>
            </a>
            <a
              href="#sistema"
              class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-6 py-3.5 rounded-2xl text-base transition-all"
            >
              Conhecer o Sistema
            </a>
          </div>

          <!-- badges -->
          <div class="flex flex-wrap gap-3 mt-2">
            <div v-for="b in badges" :key="b" class="flex items-center gap-1.5 text-xs font-semibold text-green-100">
              <svg class="w-4 h-4 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>
              {{ b }}
            </div>
          </div>
        </div>

        <!-- Right: hero card mockup -->
        <div class="hidden md:flex flex-col gap-4">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
            <p class="text-[10px] font-bold text-green-300 uppercase tracking-widest mb-3">Dashboard</p>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="stat in heroStats" :key="stat.label" class="bg-white/10 rounded-2xl px-4 py-3 border border-white/10">
                <p class="text-[10px] font-bold uppercase tracking-widest" :class="stat.color">{{ stat.label }}</p>
                <p class="text-2xl font-black text-white mt-0.5">{{ stat.value }}</p>
                <p class="text-[10px] text-green-200/70 mt-0.5">{{ stat.sub }}</p>
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-orange-500/30 border border-orange-400/30 flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] font-bold text-orange-300 uppercase tracking-widest">Crescimento</p>
                  <p class="text-lg font-black text-white">+47%</p>
                </div>
              </div>
            </div>
            <div class="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-blue-500/30 border border-blue-400/30 flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Clientes</p>
                  <p class="text-lg font-black text-white">+320</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- wave bottom -->
      <div class="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         PROBLEMAS (DOR)
    ══════════════════════════════════════════════ -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <span class="text-xs font-black text-orange-500 uppercase tracking-widest">Você se identifica?</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Os problemas que travam o<br class="hidden sm:block" /> crescimento da sua casa de ração
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="p in problemas" :key="p.title" class="flex gap-4 p-5 rounded-2xl bg-red-50 border border-red-100">
            <div class="w-10 h-10 flex-shrink-0 rounded-xl bg-red-100 flex items-center justify-center">
              <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
              </svg>
            </div>
            <div>
              <p class="font-bold text-gray-800 text-sm">{{ p.title }}</p>
              <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">{{ p.desc }}</p>
            </div>
          </div>
        </div>

        <div class="mt-12 rounded-3xl bg-gradient-to-r from-green-600 to-green-800 p-8 text-center text-white shadow-xl">
          <p class="text-lg font-black">A boa notícia? Temos a solução para cada um desses problemas.</p>
          <p class="text-green-200 text-sm mt-1">Sistema + Assessoria + Marketing = Mercado Pet Lucrativo</p>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         SISTEMA ZOOCULTUA
    ══════════════════════════════════════════════ -->
    <section id="sistema" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <!-- Header -->
        <div class="text-center mb-14">
          <span class="text-xs font-black text-green-600 uppercase tracking-widest">Módulo 1</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900">Sistema ZooCultura</h2>
          <p class="mt-3 text-gray-500 max-w-2xl mx-auto">
            Plataforma web completa para gestão da sua casa de ração e mercado pet. Acesse de qualquer dispositivo, em tempo real, com tudo centralizado em um só lugar.
          </p>
        </div>

        <!-- Modules Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="mod in modulos"
            :key="mod.title"
            class="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" :class="mod.iconBg">
              <component :is="'span'" v-html="mod.icon" class="w-6 h-6" :class="mod.iconColor" />
            </div>
            <h3 class="font-black text-gray-800 text-base">{{ mod.title }}</h3>
            <p class="text-xs text-gray-500 mt-1.5 leading-relaxed">{{ mod.desc }}</p>
            <ul class="mt-4 flex flex-col gap-2">
              <li v-for="f in mod.features" :key="f" class="flex items-start gap-2 text-xs text-gray-600">
                <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Banner access -->
        <div class="mt-10 rounded-3xl overflow-hidden">
          <div class="relative bg-gradient-to-br from-green-900 via-green-700 to-green-600 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(240,112,16,0.18),transparent_60%)]" />
            <div class="relative z-10">
              <p class="text-2xl font-black text-white">Acesso 100% na nuvem</p>
              <p class="text-green-200 text-sm mt-1">Sem instalação. Funciona no celular, tablet e computador.</p>
            </div>
            <a
              href="#contato"
              class="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-white text-green-700 font-black text-sm px-6 py-3 rounded-2xl shadow hover:bg-green-50 transition-colors"
            >
              Solicitar Demonstração
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         ASSESSORIA EMPRESARIAL
    ══════════════════════════════════════════════ -->
    <section id="assessoria" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <div class="grid lg:grid-cols-2 gap-14 items-center">
          <!-- Left text -->
          <div>
            <span class="text-xs font-black text-blue-600 uppercase tracking-widest">Módulo 2</span>
            <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Assessoria<br />Empresarial
            </h2>
            <p class="mt-4 text-gray-500 leading-relaxed">
              Acompanhamento estratégico mensal para estruturar, organizar e escalar o seu negócio. Mais do que gestão, é um parceiro de crescimento ao seu lado.
            </p>

            <div class="mt-8 flex flex-col gap-4">
              <div v-for="s in assessoriaServicos" :key="s.title" class="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/40 transition-colors">
                <div class="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <span v-html="s.icon" class="text-blue-600" />
                </div>
                <div>
                  <p class="font-bold text-gray-800 text-sm">{{ s.title }}</p>
                  <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">{{ s.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: highlight cards -->
          <div class="flex flex-col gap-5">
            <div class="rounded-3xl bg-gradient-to-br from-navy-500 to-accent bg-[#254d8e] p-7 text-white shadow-xl" style="background: linear-gradient(135deg,#254d8e,#0a1c39)">
              <p class="text-xs font-black uppercase tracking-widest text-blue-300 mb-3">O que você recebe</p>
              <ul class="flex flex-col gap-3">
                <li v-for="item in assessoriaReceive" :key="item" class="flex items-center gap-3 text-sm font-semibold">
                  <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-2 gap-5">
              <div v-for="m in assessoriaMetrics" :key="m.label" class="rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center shadow-sm">
                <p class="text-3xl font-black" :class="m.color">{{ m.value }}</p>
                <p class="text-xs font-semibold text-gray-500 mt-1">{{ m.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         ASSESSORIA DE MARKETING
    ══════════════════════════════════════════════ -->
    <section id="marketing" class="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <div class="text-center mb-14">
          <span class="text-xs font-black text-orange-500 uppercase tracking-widest">Módulo 3</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900">Assessoria de Marketing</h2>
          <p class="mt-3 text-gray-500 max-w-2xl mx-auto">
            Presença digital profissional, campanhas segmentadas e conteúdo estratégico para atrair mais tutores e fidelizar seus clientes.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div
            v-for="s in marketingServicos"
            :key="s.title"
            class="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center"
          >
            <div class="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4">
              <span v-html="s.icon" class="text-orange-500" />
            </div>
            <h3 class="font-black text-gray-800 text-sm">{{ s.title }}</h3>
            <p class="text-xs text-gray-500 mt-2 leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>

        <!-- Entregáveis -->
        <div class="rounded-3xl bg-white border border-orange-100 shadow-sm p-7 sm:p-10">
          <p class="text-base font-black text-gray-800 mb-6">O que é entregue mensalmente:</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="e in marketingEntregas" :key="e" class="flex items-start gap-3 text-sm text-gray-600">
              <div class="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <span>{{ e }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         COMO FUNCIONA (PROCESSO)
    ══════════════════════════════════════════════ -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <span class="text-xs font-black text-green-600 uppercase tracking-widest">Processo</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900">Como começamos juntos</h2>
        </div>

        <div class="relative">
          <!-- connector line (desktop) -->
          <div class="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-200 via-orange-200 to-blue-200" />

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(step, i) in etapas" :key="step.title" class="flex flex-col items-center text-center gap-3">
              <div class="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-md z-10" :class="step.bg">
                <span v-html="step.icon" :class="step.iconColor" class="w-8 h-8" />
                <span class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 text-xs font-black flex items-center justify-center" :class="step.numColor">{{ i + 1 }}</span>
              </div>
              <p class="font-black text-gray-800 text-sm">{{ step.title }}</p>
              <p class="text-xs text-gray-500 leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         PLANOS E PREÇOS
    ══════════════════════════════════════════════ -->
    <section id="planos" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <span class="text-xs font-black text-green-600 uppercase tracking-widest">Investimento</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900">Escolha o seu plano</h2>
          <p class="mt-3 text-gray-500">Planos flexíveis que crescem junto com o seu negócio.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 items-stretch">
          <div
            v-for="plano in planos"
            :key="plano.name"
            class="relative flex flex-col rounded-3xl border transition-transform hover:-translate-y-1 duration-200"
            :class="plano.featured
              ? 'bg-gradient-to-b from-green-700 to-green-900 border-green-600 shadow-2xl scale-[1.02]'
              : 'bg-white border-gray-100 shadow-sm'"
          >
            <!-- badge popular -->
            <div v-if="plano.featured" class="absolute -top-3.5 inset-x-0 flex justify-center">
              <span class="bg-orange-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow">Mais Popular</span>
            </div>

            <div class="p-7 flex flex-col gap-5 flex-1">
              <!-- header -->
              <div>
                <p class="text-xs font-black uppercase tracking-widest" :class="plano.featured ? 'text-green-300' : 'text-gray-400'">{{ plano.label }}</p>
                <h3 class="text-xl font-black mt-1" :class="plano.featured ? 'text-white' : 'text-gray-900'">{{ plano.name }}</h3>
                <p class="text-xs mt-1 leading-relaxed" :class="plano.featured ? 'text-green-200' : 'text-gray-500'">{{ plano.desc }}</p>
              </div>

              <!-- price -->
              <div>
                <div class="flex items-end gap-1">
                  <span class="text-sm font-bold" :class="plano.featured ? 'text-green-300' : 'text-gray-400'">R$</span>
                  <span class="text-5xl font-black leading-none" :class="plano.featured ? 'text-white' : 'text-gray-900'">{{ plano.price }}</span>
                  <span class="text-sm font-semibold pb-1" :class="plano.featured ? 'text-green-300' : 'text-gray-400'">/mês</span>
                </div>
                <p class="text-xs mt-1" :class="plano.featured ? 'text-green-300/70' : 'text-gray-400'">+ implantação única {{ plano.implantacao }}</p>
              </div>

              <!-- includes -->
              <ul class="flex flex-col gap-2.5 flex-1">
                <li v-for="item in plano.includes" :key="item.text" class="flex items-start gap-2.5 text-xs" :class="item.active ? (plano.featured ? 'text-green-100' : 'text-gray-700') : (plano.featured ? 'text-green-700/50' : 'text-gray-300')">
                  <svg
                    class="w-4 h-4 flex-shrink-0 mt-0.5"
                    :class="item.active ? 'text-green-400' : (plano.featured ? 'text-green-800' : 'text-gray-200')"
                    fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
                  >
                    <path v-if="item.active" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  {{ item.text }}
                </li>
              </ul>

              <!-- CTA -->
              <a
                href="#contato"
                class="mt-2 block text-center font-black text-sm px-5 py-3 rounded-2xl transition-all"
                :class="plano.featured
                  ? 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg'
                  : 'bg-green-600 hover:bg-green-700 text-white'"
              >
                {{ plano.cta }}
              </a>
            </div>
          </div>
        </div>

        <p class="text-center text-xs text-gray-400 mt-8">* Preços sujeitos a reajuste. Consulte condições especiais de contrato anual.</p>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         POR QUE NOS ESCOLHER
    ══════════════════════════════════════════════ -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <span class="text-xs font-black text-green-600 uppercase tracking-widest">Diferenciais</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900">Por que a ZooCultura?</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="d in diferenciais" :key="d.title" class="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-100 hover:bg-green-50/30 transition-colors">
            <div class="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center" :class="d.iconBg">
              <span v-html="d.icon" :class="d.iconColor" />
            </div>
            <div>
              <p class="font-bold text-gray-800 text-sm">{{ d.title }}</p>
              <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">{{ d.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         DEPOIMENTOS
    ══════════════════════════════════════════════ -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <span class="text-xs font-black text-green-600 uppercase tracking-widest">Depoimentos</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-gray-900">O que nossos clientes dizem</h2>
        </div>

        <div class="grid sm:grid-cols-3 gap-5">
          <div
            v-for="d in depoimentos"
            :key="d.name"
            class="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
          >
            <!-- stars -->
            <div class="flex gap-0.5">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-sm text-gray-600 italic leading-relaxed flex-1">"{{ d.text }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white" :class="d.avatarBg">{{ d.initials }}</div>
              <div>
                <p class="font-bold text-gray-800 text-xs">{{ d.name }}</p>
                <p class="text-[10px] text-gray-400">{{ d.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         FAQ
    ══════════════════════════════════════════════ -->
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <span class="text-xs font-black text-green-600 uppercase tracking-widest">Dúvidas</span>
          <h2 class="mt-2 text-3xl font-black text-gray-900">Perguntas Frequentes</h2>
        </div>

        <div class="flex flex-col gap-3">
          <div
            v-for="faq in faqs"
            :key="faq.q"
            class="rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              @click="toggleFaq(faq.q)"
            >
              <span class="font-bold text-gray-800 text-sm">{{ faq.q }}</span>
              <svg
                class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
                :class="openFaq === faq.q ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
              </svg>
            </button>
            <div v-if="openFaq === faq.q" class="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
              <p class="pt-3">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         CTA FINAL / CONTATO
    ══════════════════════════════════════════════ -->
    <section id="contato" class="py-20 bg-gradient-to-br from-green-900 via-green-700 to-green-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(240,112,16,0.2),transparent_55%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,77,142,0.22),transparent_60%)]" />

      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <span class="text-xs font-black text-orange-300 uppercase tracking-widest">Próximo Passo</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black text-white leading-tight">
            Pronto para transformar<br />sua casa de ração?
          </h2>
          <p class="mt-3 text-green-100/80 max-w-lg mx-auto">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas para apresentar uma proposta personalizada.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-7 sm:p-10 shadow-2xl">
          <form @submit.prevent="enviarFormulario" class="grid sm:grid-cols-2 gap-5">
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Nome Completo *</label>
              <input
                v-model="form.nome"
                type="text"
                required
                placeholder="Seu nome"
                class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Nome do Estabelecimento *</label>
              <input
                v-model="form.petshop"
                type="text"
                required
                placeholder="Nome do estabelecimento"
                class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">WhatsApp *</label>
              <input
                v-model="form.whatsapp"
                type="tel"
                required
                placeholder="(00) 00000-0000"
                class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">E-mail</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="seu@email.com"
                class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <div class="flex flex-col gap-1.5 sm:col-span-2">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Interesse Principal</label>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="opt in interesseOpts"
                  :key="opt"
                  type="button"
                  @click="toggleInteresse(opt)"
                  class="text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all"
                  :class="form.interesses.includes(opt)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-green-400'"
                >
                  {{ opt }}
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-1.5 sm:col-span-2">
              <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Mensagem</label>
              <textarea
                v-model="form.mensagem"
                rows="3"
                placeholder="Conte um pouco sobre o seu negócio e o que busca melhorar..."
                class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
              />
            </div>

            <!-- submit -->
            <div class="sm:col-span-2">
              <button
                type="submit"
                :disabled="enviando"
                class="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-black text-base px-8 py-4 rounded-2xl transition-all shadow-lg"
              >
                <svg v-if="!enviando" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                </svg>
                <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                {{ enviando ? 'Enviando...' : 'Quero Transformar Meu Negócio' }}
              </button>
            </div>
          </form>

          <!-- success message -->
          <div v-if="enviado" class="mt-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-sm text-green-700 font-semibold">Recebemos sua solicitação! Entraremos em contato em breve.</p>
          </div>
        </div>

        <!-- WhatsApp direto -->
        <div class="mt-8 text-center">
          <p class="text-green-200/80 text-sm mb-3">Ou prefere falar agora?</p>
          <a
            href="https://wa.me/5500000000000?text=Olá!%20Vi%20a%20proposta%20da%20ZooCultura%20e%20quero%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20c45a] text-white font-black px-7 py-3.5 rounded-2xl text-sm transition-all shadow-lg hover:scale-105"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════
         FOOTER
    ══════════════════════════════════════════════ -->
    <footer class="bg-gray-900 text-gray-400 py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-green-600 flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
            </svg>
          </div>
          <span class="text-white font-black">ZooCultura</span>
        </div>
        <p class="text-xs text-center">© {{ new Date().getFullYear() }} ZooCultura. Todos os direitos reservados.</p>
        <p class="text-xs">Sistema · Assessoria · Marketing</p>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

// ─── Reactive state ───────────────────────────────────────────────────────────
const openFaq = ref<string | null>(null)
const enviando = ref(false)
const enviado = ref(false)

const form = reactive({
  nome: '',
  petshop: '',
  whatsapp: '',
  email: '',
  interesses: [] as string[],
  mensagem: '',
})

// ─── Data ─────────────────────────────────────────────────────────────────────
const badges = [
  'Sem contrato de fidelidade',
  'Suporte humanizado',
  'Implantação assistida',
  'Atualizações incluídas',
]

const heroStats = [
  { label: 'Vendas', value: 'R$42k', sub: 'este mês', color: 'text-green-300' },
  { label: 'Clientes', value: '318', sub: 'ativos', color: 'text-blue-300' },
  { label: 'Produtos', value: '1.2k', sub: 'em estoque', color: 'text-purple-300' },
  { label: 'Tarefas', value: '97%', sub: 'concluídas', color: 'text-orange-300' },
]

const problemas = [
  { title: 'Sem controle financeiro', desc: 'Não sabe ao certo quanto entra, quanto sai e qual é o lucro real do mês.' },
  { title: 'Clientes perdidos', desc: 'Sem um cadastro organizado, você perde o histórico e deixa de fidelizar.' },
  { title: 'Estoque descontrolado', desc: 'Falta de produto na hora errada ou mercadoria parada sem giro.' },
  { title: 'Equipe desalinhada', desc: 'Funcionários sem tarefas claras, gerando retrabalho e baixa produtividade.' },
  { title: 'Invisibilidade digital', desc: 'Seus concorrentes têm presença online e você ainda não chegou lá.' },
  { title: 'Decisão no escuro', desc: 'Sem relatórios e indicadores, cada decisão é um palpite arriscado.' },
]

const modulos = [
  {
    title: 'Gestão de Clientes',
    desc: 'Cadastro completo dos tutores e seus pets, histórico de atendimentos e muito mais.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>',
    features: ['Ficha completa do cliente e pet', 'Histórico de compras e serviços', 'Aniversário e lembretes automáticos'],
  },
  {
    title: 'Controle de Produtos',
    desc: 'Cadastre produtos, controle estoque e receba alertas de reposição em tempo real.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>',
    features: ['Catálogo com fotos e preços', 'Alerta de estoque mínimo', 'Controle de fornecedores'],
  },
  {
    title: 'Gestão de Vendas',
    desc: 'Registre vendas, emita recibos e acompanhe o desempenho do seu faturamento.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/></svg>',
    features: ['PDV rápido e intuitivo', 'Relatório de vendas por período', 'Formas de pagamento múltiplas'],
  },
  {
    title: 'Gestão de Funcionários',
    desc: 'Cadastre sua equipe, controle cargos e permissões de acesso ao sistema.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>',
    features: ['Perfis e permissões por cargo', 'Controle de ponto e jornada', 'Histórico de ações no sistema'],
  },
  {
    title: 'Contas a Pagar',
    desc: 'Organize seus pagamentos, evite esquecimentos e tenha visão clara do fluxo de caixa.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    features: ['Calendário de vencimentos', 'Categorias de despesa', 'Relatório de fluxo de caixa'],
  },
  {
    title: 'Gestão de Atividades',
    desc: 'Distribua tarefas para a equipe, acompanhe o progresso e elimine gargalos.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>',
    features: ['Kanban de tarefas por funcionário', 'Prioridade e prazo', 'Notificações automáticas'],
  },
]

const assessoriaServicos = [
  {
    title: 'Planejamento Estratégico',
    desc: 'Definição de metas, OKRs e roadmap de crescimento para a sua casa de ração e mercado pet.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/></svg>',
  },
  {
    title: 'Análise Financeira',
    desc: 'Demonstrativos mensais, análise de margem e ponto de equilíbrio do negócio.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/></svg>',
  },
  {
    title: 'Processos e Organização',
    desc: 'Mapeamento e otimização de processos internos para ganhar escala com qualidade.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/></svg>',
  },
  {
    title: 'Gestão de Equipes',
    desc: 'Treinamentos, alinhamento de cultura e ferramentas para liderar melhor.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>',
  },
]

const assessoriaReceive = [
  'Reunião mensal de estratégia (1h)',
  'Relatório executivo mensal',
  'Análise de indicadores KPI',
  'Plano de ação com prazos',
  'Suporte via WhatsApp prioritário',
  'Acesso a templates e ferramentas',
]

const assessoriaMetrics = [
  { value: '3x', label: 'Média de crescimento em 12 meses', color: 'text-green-600' },
  { value: '68%', label: 'Redução de retrabalho nos processos', color: 'text-blue-600' },
  { value: '40%', label: 'Aumento médio na margem de lucro', color: 'text-orange-500' },
  { value: '90%', label: 'Clientes satisfeitos com o serviço', color: 'text-purple-600' },
]

const marketingServicos = [
  {
    title: 'Presença Digital',
    desc: 'Configuração e otimização do Google Meu Negócio, perfil profissional e SEO local.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>',
  },
  {
    title: 'Redes Sociais',
    desc: 'Gestão estratégica do Instagram e Facebook com conteúdo nativo para o público pet.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/></svg>',
  },
  {
    title: 'Campanhas Pagas',
    desc: 'Anúncios segmentados no Google, Instagram e Facebook para atrair clientes na sua região.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>',
  },
  {
    title: 'Identidade Visual',
    desc: 'Criação de artes, logos e materiais visuais que transmitem profissionalismo e confiança.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/></svg>',
  },
]

const marketingEntregas = [
  '12 a 20 posts no feed (Instagram/Facebook)',
  '8 a 15 stories interativos por semana',
  'Gestão de campanhas com créditos do cliente',
  'Relatório de alcance e engajamento',
  'Planejamento de conteúdo estratégico',
  'Atendimento a comentários e DMs',
  '2 artes personalizadas por mês',
  'Otimização contínua do perfil',
  'Análise de concorrência local',
]

const etapas = [
  {
    title: 'Reunião de Diagnóstico',
    desc: 'Entendemos o seu negócio, desafios e objetivos em uma reunião online gratuita.',
    bg: 'bg-green-600',
    iconColor: 'text-white',
    numColor: 'text-green-600 border-green-200',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>',
  },
  {
    title: 'Proposta Personalizada',
    desc: 'Montamos um plano sob medida com o conjunto de soluções ideal para você.',
    bg: 'bg-orange-500',
    iconColor: 'text-white',
    numColor: 'text-orange-500 border-orange-200',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>',
  },
  {
    title: 'Implantação Assistida',
    desc: 'Treinamos sua equipe e configuramos o sistema com os seus dados reais.',
    bg: 'bg-blue-600',
    iconColor: 'text-white',
    numColor: 'text-blue-600 border-blue-200',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/></svg>',
  },
  {
    title: 'Acompanhamento Contínuo',
    desc: 'Suporte humanizado, reuniões periódicas e otimizações constantes no seu negócio.',
    bg: 'bg-purple-600',
    iconColor: 'text-white',
    numColor: 'text-purple-600 border-purple-200',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>',
  },
]

const planos = [
  {
    label: 'Para começar',
    name: 'Essencial',
    desc: 'Sistema completo para organizar sua casa de ração e mercado pet do zero.',
    price: '497',
    implantacao: 'R$ 1.997',
    featured: false,
    cta: 'Começar com Essencial',
    includes: [
      { text: 'Sistema ZooCultura completo', active: true },
      { text: 'Até 3 usuários', active: true },
      { text: 'Todos os 6 módulos', active: true },
      { text: 'Suporte via e-mail', active: true },
      { text: 'Assessoria Empresarial', active: false },
      { text: 'Assessoria de Marketing', active: false },
      { text: 'Reunião estratégica mensal', active: false },
    ],
  },
  {
    label: 'Crescimento',
    name: 'Profissional',
    desc: 'Sistema + assessoria empresarial para escalar com estratégia.',
    price: '1.297',
    implantacao: 'R$ 2.297',
    featured: true,
    cta: 'Quero o Profissional',
    includes: [
      { text: 'Sistema ZooCultura completo', active: true },
      { text: 'Usuários ilimitados', active: true },
      { text: 'Todos os 6 módulos', active: true },
      { text: 'Suporte via WhatsApp', active: true },
      { text: 'Assessoria Empresarial', active: true },
      { text: 'Reunião estratégica mensal', active: true },
      { text: 'Assessoria de Marketing', active: false },
    ],
  },
  {
    label: 'Solução completa',
    name: 'Premium',
    desc: 'Tudo que sua casa de ração precisa para dominar o mercado local.',
    price: '2.297',
    implantacao: 'R$ 3.997',
    featured: false,
    cta: 'Quero o Premium',
    includes: [
      { text: 'Sistema ZooCultura completo', active: true },
      { text: 'Usuários ilimitados', active: true },
      { text: 'Todos os 6 módulos', active: true },
      { text: 'Suporte prioritário 24/7', active: true },
      { text: 'Assessoria Empresarial', active: true },
      { text: 'Reunião estratégica mensal', active: true },
      { text: 'Assessoria de Marketing', active: true },
    ],
  },
]

const diferenciais = [
  {
    title: 'Feito para o mercado pet',
    desc: 'Desenvolvido 100% para as necessidades reais de casas de ração e mercados pet.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>',
  },
  {
    title: 'Implantação sem sofrimento',
    desc: 'Nossa equipe configura tudo, treina sua equipe e acompanha os primeiros 30 dias.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>',
  },
  {
    title: 'Suporte humanizado',
    desc: 'Fale com pessoas reais via WhatsApp, sem chatbots ou filas de atendimento.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg>',
  },
  {
    title: 'Dados 100% seguros',
    desc: 'Hospedagem em nuvem com backup automático, criptografia e acesso protegido.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
  },
  {
    title: 'Atualizações gratuitas',
    desc: 'Novos recursos e melhorias constantes sem custo adicional para os assinantes.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>',
  },
  {
    title: 'Resultado garantido',
    desc: 'Se em 30 dias você não ver melhorias, devolvemos o valor da implantação integralmente.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/></svg>',
  },
]

const depoimentos = [
  {
    text: 'Antes eu vivia no caos total. Não sabia quanto gastava, quanto entrava, nem quantos clientes tinha. Com a ZooCultura, tudo ficou claro em menos de um mês.',
    name: 'Mariana Costa',
    role: 'Proprietária — PetAmigo',
    initials: 'MC',
    avatarBg: 'bg-green-600',
  },
  {
    text: 'A assessoria de marketing mudou completamente minha presença nas redes. Em 60 dias dobramos o número de seguidores e as consultas via Instagram triplicaram.',
    name: 'Roberto Lima',
    role: 'Veterinário — ClínicaPet',
    initials: 'RL',
    avatarBg: 'bg-blue-600',
  },
  {
    text: 'O suporte é sensacional. Sempre tem alguém disponível para ajudar. E a assessoria empresarial me ajudou a precificar corretamente os serviços. Aumentei minha margem em 35%.',
    name: 'Fernanda Souza',
    role: 'Sócia — BicoFeliz Casa de Ração',
    initials: 'FS',
    avatarBg: 'bg-orange-500',
  },
]

const faqs = [
  {
    q: 'Preciso ter conhecimento técnico para usar o sistema?',
    a: 'Não. O ZooCultura foi desenvolvido para ser intuitivo. Nossa equipe faz a implantação, configura tudo com seus dados e treina você e sua equipe. Em poucos dias já estará usando naturalmente.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Sim! O sistema é 100% responsivo e funciona perfeitamente no smartphone, tablet e computador. Você acessa de qualquer lugar com internet.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim, não há fidelidade obrigatória nos planos mensais. Para contratos anuais, há condições especiais de cancelamento descritas no contrato.',
  },
  {
    q: 'O que acontece com meus dados se eu cancelar?',
    a: 'Você pode exportar todos os seus dados em formato CSV ou planilha antes de cancelar. Seus dados são retidos por 90 dias após o cancelamento e depois excluídos definitivamente.',
  },
  {
    q: 'A assessoria de marketing inclui criação de conteúdo?',
    a: 'Sim! Nos planos que incluem marketing, entregamos criação de posts, stories, artes e legendas. Tudo aprovado por você antes de publicar.',
  },
  {
    q: 'Qual é o prazo de implantação?',
    a: 'Em média 5 a 10 dias úteis após a assinatura. Dependendo da complexidade e do volume de dados a importar, pode variar.',
  },
]

// ─── Methods ─────────────────────────────────────────────────────────────────
function toggleFaq(q: string) {
  openFaq.value = openFaq.value === q ? null : q
}

function toggleInteresse(opt: string) {
  const idx = form.interesses.indexOf(opt)
  if (idx >= 0) form.interesses.splice(idx, 1)
  else form.interesses.push(opt)
}

const interesseOpts = ['Sistema de Gestão', 'Assessoria Empresarial', 'Assessoria de Marketing', 'Pacote Completo']

async function enviarFormulario() {
  enviando.value = true
  // Simulate send (replace with real API call / WhatsApp redirect as needed)
  await new Promise(r => setTimeout(r, 1500))
  enviando.value = false
  enviado.value = true
  // Reset
  form.nome = ''
  form.petshop = ''
  form.whatsapp = ''
  form.email = ''
  form.interesses = []
  form.mensagem = ''
}
</script>
