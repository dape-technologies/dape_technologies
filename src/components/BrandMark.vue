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
      :class="compact ? 'text-2xl' : 'text-[2.15rem] sm:text-[2.25rem]'"
    >
      DAPE
      <span
        class="bg-accent absolute -top-0.5 -right-2 h-1.5 w-5"
        aria-hidden="true"
      />
    </span>
    <span
      v-if="!compact"
      class="text-silver mt-1 text-[0.58rem] leading-none font-bold tracking-[0.24em] uppercase"
    >
      Technologies
    </span>
  </span>
</template>
