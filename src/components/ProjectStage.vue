<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  PhArrowLeft,
  PhArrowRight,
  PhArrowUpRight,
  PhCode,
  PhPause,
  PhPlay,
  PhPulse,
} from '@phosphor-icons/vue'
import { AnimatePresence, motion, useReducedMotion } from 'motion-v'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(0)
const paused = ref(false)
const interacting = ref(false)
const pointerStart = ref(0)
const reduceMotion = useReducedMotion()
let rotationTimer

const activeProject = computed(() => props.projects[activeIndex.value])
const selectProject = (index) => {
  activeIndex.value = (index + props.projects.length) % props.projects.length
}

const moveProject = (direction) => {
  selectProject(activeIndex.value + direction)
}

const startRotation = () => {
  globalThis.clearInterval(rotationTimer)
  rotationTimer = globalThis.setInterval(() => {
    if (!paused.value && !interacting.value && !reduceMotion.value) {
      moveProject(1)
    }
  }, 5600)
}

const handlePointerDown = (event) => {
  pointerStart.value = event.clientX
}

const handlePointerUp = (event) => {
  const distance = event.clientX - pointerStart.value
  if (Math.abs(distance) > 45) moveProject(distance < 0 ? 1 : -1)
}

onMounted(startRotation)
onBeforeUnmount(() => globalThis.clearInterval(rotationTimer))
</script>

<template>
  <div
    class="project-stage relative min-h-[27rem] select-none sm:min-h-[34rem] lg:min-h-[39rem]"
    role="region"
    aria-label="Dape project showcase"
    @mouseenter="interacting = true"
    @mouseleave="interacting = false"
    @focusin="interacting = true"
    @focusout="interacting = false"
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  >
    <motion.img
      src="/images/dape-ambient-network.webp"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute -inset-x-20 -top-16 h-[108%] w-[122%] object-contain opacity-50 mix-blend-screen"
      :animate="
        reduceMotion
          ? {}
          : { y: [0, -10, 0], rotate: [-0.8, 0.8, -0.8], scale: [1, 1.02, 1] }
      "
      :transition="
        reduceMotion
          ? {}
          : { duration: 12, repeat: Infinity, ease: 'easeInOut' }
      "
      width="1792"
      height="1024"
      fetchpriority="high"
    />

    <div class="stage-orbit stage-orbit-one" aria-hidden="true"></div>
    <div class="stage-orbit stage-orbit-two" aria-hidden="true"></div>

    <div
      class="system-window-wrap absolute top-[7%] right-[2%] h-[72%] w-[94%] sm:right-[4%] sm:w-[88%] lg:right-[2%] lg:h-[76%] lg:w-[92%]"
    >
      <div class="system-depth system-depth-back" aria-hidden="true"></div>
      <div class="system-depth system-depth-mid" aria-hidden="true"></div>

      <AnimatePresence mode="wait" :initial="false">
        <motion.a
          :key="activeProject.name"
          :href="activeProject.url"
          target="_blank"
          rel="noreferrer"
          class="system-window group"
          :initial="
            reduceMotion ? false : { opacity: 0, x: 34, y: 10, scale: 0.975 }
          "
          :animate="{ opacity: 1, x: 0, y: 0, scale: 1 }"
          :exit="
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: -30, y: -8, scale: 0.985 }
          "
          :transition="{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.16, 1, 0.3, 1],
          }"
          :aria-label="`Open ${activeProject.name}`"
        >
          <div class="system-window-bar">
            <span class="system-window-brand">
              <PhCode :size="15" weight="bold" aria-hidden="true" />
              Dape system
            </span>
            <span class="system-window-context">{{
              activeProject.category
            }}</span>
            <span class="system-window-state">
              <PhPulse :size="15" weight="bold" aria-hidden="true" />
              {{ activeProject.status }}
            </span>
          </div>
          <div class="system-window-screen">
            <img
              :src="activeProject.image"
              :alt="activeProject.imageAlt"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.012]"
              width="1440"
              height="1000"
              fetchpriority="high"
            />
            <span class="system-scan" aria-hidden="true"></span>
          </div>
        </motion.a>
      </AnimatePresence>
    </div>

    <div
      class="absolute right-6 bottom-0 left-0 z-10 flex items-end justify-between gap-4 sm:right-12 lg:right-20"
    >
      <div class="max-w-[72%] sm:max-w-md">
        <p
          class="text-accent text-xs font-semibold tracking-[0.14em] uppercase"
        >
          {{ activeProject.status }} project
        </p>
        <a
          :href="activeProject.url"
          target="_blank"
          rel="noreferrer"
          class="font-display mt-2 inline-flex items-center gap-2 text-lg leading-tight font-semibold tracking-[-0.03em] text-white sm:text-2xl"
        >
          {{ activeProject.name }}
          <PhArrowUpRight :size="18" weight="bold" aria-hidden="true" />
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="stage-control"
          aria-label="Previous project"
          @click="moveProject(-1)"
        >
          <PhArrowLeft :size="18" weight="bold" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="stage-control"
          :aria-label="
            paused ? 'Resume project rotation' : 'Pause project rotation'
          "
          @click="paused = !paused"
        >
          <PhPlay v-if="paused" :size="18" weight="fill" aria-hidden="true" />
          <PhPause v-else :size="18" weight="fill" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="stage-control"
          aria-label="Next project"
          @click="moveProject(1)"
        >
          <PhArrowRight :size="18" weight="bold" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      class="absolute bottom-16 left-0 z-10 hidden items-center gap-2 sm:flex"
      aria-label="Select a project"
    >
      <button
        v-for="(project, index) in projects"
        :key="project.name"
        type="button"
        class="h-1.5 rounded-full transition-[width,background-color] duration-300"
        :class="
          activeIndex === index
            ? 'bg-accent w-9'
            : 'bg-paper/25 hover:bg-paper/55 w-4'
        "
        :aria-label="`Show ${project.name}`"
        :aria-current="activeIndex === index ? 'true' : undefined"
        @click="selectProject(index)"
      ></button>
    </div>
  </div>
</template>
