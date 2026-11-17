<script setup>
defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <span class="inline-flex flex-col" aria-label="Dape Technologies">
    <span
      class="font-display relative w-fit leading-[0.88] font-bold tracking-[-0.075em] text-current"
      :class="compact ? 'text-2xl' : 'text-[2.6rem] sm:text-[2.8rem]'"
    >
      DAPE
      <span
        class="bg-accent absolute -top-1 -right-2.5 h-2 w-6"
        aria-hidden="true"
      />
    </span>
    <span
      v-if="!compact"
      class="text-silver mt-1.5 text-[0.65rem] leading-none font-bold tracking-[0.22em] uppercase"
    >
      Technologies
    </span>
  </span>
</template>
