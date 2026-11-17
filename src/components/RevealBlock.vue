<script setup>
import { computed } from 'vue'
import { motion, useReducedMotion } from 'motion-v'

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  distance: {
    type: Number,
    default: 28,
  },
})

const reduceMotion = useReducedMotion()
const initial = computed(() =>
  reduceMotion.value ? false : { opacity: 0, y: props.distance },
)
const transition = computed(() => ({
  duration: reduceMotion.value ? 0 : 0.65,
  delay: reduceMotion.value ? 0 : props.delay,
  ease: [0.16, 1, 0.3, 1],
}))
</script>

<template>
  <motion.div
    :initial="initial"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true, amount: 0.18 }"
    :transition="transition"
  >
    <slot />
  </motion.div>
</template>
