<script setup>
import { ref } from 'vue'
import { PhList, PhX } from '@phosphor-icons/vue'
import BrandMark from '@/components/BrandMark.vue'

const emit = defineEmits(['open-contact'])
const menuOpen = ref(false)

const navigation = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Impact', href: '#impact' },
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
]

const closeMenu = () => {
  menuOpen.value = false
}

const openContact = () => {
  closeMenu()
  emit('open-contact')
}
</script>

<template>
  <header
    class="border-line/80 bg-surface/90 sticky top-0 z-30 border-b backdrop-blur-xl"
  >
    <nav
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"
      aria-label="Primary navigation"
    >
      <a
        href="#top"
        class="text-paper transition-opacity hover:opacity-90"
        aria-label="Dape Technologies home"
        @click="closeMenu"
      >
        <BrandMark />
      </a>

      <div class="hidden items-center gap-8 lg:flex">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="text-muted hover:text-paper text-sm font-medium transition-colors"
        >
          {{ item.label }}
        </a>
        <button class="button-primary" type="button" @click="openContact">
          Request a quotation
        </button>
      </div>

      <button
        class="border-line text-paper grid size-11 place-items-center rounded-xl border lg:hidden"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        @click="menuOpen = !menuOpen"
      >
        <PhX v-if="menuOpen" :size="22" weight="bold" aria-hidden="true" />
        <PhList v-else :size="22" weight="bold" aria-hidden="true" />
      </button>
    </nav>

    <div
      v-if="menuOpen"
      id="mobile-navigation"
      class="border-line bg-surface border-t px-5 py-5 lg:hidden"
    >
      <div class="mx-auto grid max-w-7xl gap-1">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="text-paper hover:bg-elevated rounded-xl px-3 py-3 text-base font-medium"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <button
          class="button-primary mt-3 justify-center"
          type="button"
          @click="openContact"
        >
          Request a quotation
        </button>
      </div>
    </div>
  </header>
</template>
