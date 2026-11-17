<script setup>
import { PhArrowUpRight, PhBracketsCurly } from '@phosphor-icons/vue'
</script>

<template>
  <main class="bg-surface text-ink min-h-[100dvh]">
    <header
      class="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8"
    >
      <a
        class="flex items-center gap-3 font-semibold tracking-[-0.02em]"
        href="#top"
      >
        <span
          class="bg-ink text-surface grid size-9 place-items-center rounded-xl"
        >
          <PhBracketsCurly :size="19" :weight="'bold'" aria-hidden="true" />
        </span>
        Dape Technologies
      </a>

      <span class="text-muted hidden text-sm sm:block">Website discovery</span>
    </header>

    <section
      id="top"
      class="mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:px-8"
    >
      <div class="max-w-3xl">
        <p class="text-accent mb-6 text-sm font-medium">
          Building the foundation
        </p>
        <h1
          class="text-5xl leading-[0.96] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl"
        >
          Digital systems, shaped around real needs.
        </h1>
        <p class="text-muted mt-7 max-w-xl text-lg leading-relaxed">
          The technical foundation is ready. Next, we will define the story,
          services, and character of Dape Technologies.
        </p>
      </div>

      <aside
        id="discovery"
        class="border-line bg-panel rounded-3xl border p-6 shadow-[0_28px_90px_rgba(31,50,43,0.08)] sm:p-8"
      >
        <p class="text-muted text-sm font-medium">Our next conversation</p>
        <h2
          class="mt-3 text-2xl leading-tight font-semibold tracking-[-0.035em]"
        >
          What should visitors understand about Dape in the first ten seconds?
        </h2>
        <a
          class="bg-accent mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-px"
          href="#discovery"
        >
          Start a conversation
          <PhArrowUpRight :size="17" :weight="'bold'" aria-hidden="true" />
        </a>
      </aside>
    </section>
  </main>
</template>
