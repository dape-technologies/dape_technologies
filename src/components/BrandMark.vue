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
      class="relative w-fit font-semibold tracking-[-0.08em] text-current"
      :class="compact ? 'text-xl' : 'text-2xl'"
    >
      DAPE
      <span
        class="bg-accent absolute top-0 -right-1 h-1 w-3"
        aria-hidden="true"
      />
    </span>
    <span
      v-if="!compact"
      class="text-muted -mt-0.5 text-[0.5rem] leading-none font-semibold tracking-[0.26em] uppercase"
    >
      Technologies
    </span>
  </span>
</template>
