<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  PhCheck,
  PhCloudCheck,
  PhCode,
  PhCompass,
  PhShieldCheck,
} from '@phosphor-icons/vue'
import { AnimatePresence, motion, useReducedMotion } from 'motion-v'

const props = defineProps({
  capabilities: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(0)
const storyRoot = ref(null)
const reduceMotion = useReducedMotion()
let observer

const activeCapability = computed(() => props.capabilities[activeIndex.value])
const capabilityIcons = {
  'product-engineering': PhCode,
  'cloud-operations': PhCloudCheck,
  'security-infrastructure': PhShieldCheck,
  'technology-advisory': PhCompass,
}

onMounted(() => {
  const steps = storyRoot.value?.querySelectorAll('[data-capability-step]')
  if (!steps?.length) return

  observer = new globalThis.IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) activeIndex.value = Number(visible.target.dataset.index)
    },
    { rootMargin: '-30% 0px -46% 0px', threshold: [0, 0.25, 0.5, 0.75] },
  )

  steps.forEach((step) => observer.observe(step))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="storyRoot"
    class="capability-story lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-12"
  >
    <div class="relative z-10">
      <article
        v-for="(capability, index) in capabilities"
        :id="capability.id"
        :key="capability.id"
        :data-index="index"
        data-capability-step
        class="capability-step scroll-mt-28 py-10 lg:flex lg:min-h-[58vh] lg:flex-col lg:justify-center lg:py-16"
        :class="activeIndex === index ? 'is-active' : ''"
      >
        <div class="flex items-start gap-5">
          <span
            class="capability-icon mt-1 grid size-11 shrink-0 place-items-center rounded-xl"
          >
            <component
              :is="capabilityIcons[capability.id]"
              :size="22"
              weight="duotone"
              aria-hidden="true"
            />
          </span>
          <div>
            <h3
              class="text-2xl leading-tight font-semibold tracking-[-0.045em] sm:text-3xl"
            >
              {{ capability.title }}
            </h3>
            <p class="text-muted mt-3 max-w-lg leading-relaxed">
              {{ capability.description }}
            </p>
            <ul class="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              <li
                v-for="service in capability.services"
                :key="service"
                class="text-muted flex items-center gap-2 text-sm"
              >
                <PhCheck
                  :size="16"
                  weight="bold"
                  class="text-accent"
                  aria-hidden="true"
                />
                {{ service }}
              </li>
            </ul>
          </div>
        </div>

        <motion.img
          :src="capability.image"
          :alt="capability.imageAlt"
          class="mx-auto mt-8 h-auto w-full max-w-xl object-contain lg:hidden"
          :initial="reduceMotion ? false : { opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 0.35 }"
          :transition="{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          }"
          width="1536"
          height="1024"
          loading="lazy"
        />
      </article>
    </div>

    <div
      class="sticky top-24 hidden h-[calc(100dvh-7rem)] min-h-[36rem] items-center lg:flex"
      aria-live="polite"
    >
      <div class="relative h-[86%] w-full">
        <div
          class="capability-orbit capability-orbit-wide"
          aria-hidden="true"
        ></div>
        <div
          class="capability-orbit capability-orbit-tight"
          aria-hidden="true"
        ></div>
        <motion.div
          class="capability-light"
          aria-hidden="true"
          :animate="
            reduceMotion
              ? {}
              : { opacity: [0.2, 0.42, 0.2], scale: [0.94, 1.05, 0.94] }
          "
          :transition="
            reduceMotion
              ? {}
              : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          "
        />
        <AnimatePresence mode="wait" :initial="false">
          <motion.div
            :key="activeCapability.id"
            class="absolute inset-0"
            :initial="
              reduceMotion ? false : { opacity: 0, y: 24, scale: 0.965 }
            "
            :animate="{ opacity: 1, y: 0, scale: 1 }"
            :exit="
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -18, scale: 1.015 }
            "
            :transition="{
              duration: reduceMotion ? 0 : 0.5,
              ease: [0.16, 1, 0.3, 1],
            }"
          >
            <motion.img
              :src="activeCapability.image"
              :alt="activeCapability.imageAlt"
              class="h-full w-full object-contain"
              :animate="
                reduceMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                      rotate: [0, -0.7, 0.35, 0],
                      scale: [0.99, 1.012, 0.99],
                    }
              "
              :transition="
                reduceMotion
                  ? {}
                  : { duration: 8.5, repeat: Infinity, ease: 'easeInOut' }
              "
              width="1536"
              height="1024"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        <div
          class="absolute right-[5%] bottom-[10%] flex items-center gap-2 text-xs font-semibold text-white/55"
        >
          <span class="bg-accent h-px w-10" aria-hidden="true"></span>
          {{ activeCapability.summary }}
        </div>
      </div>
    </div>
  </div>
</template>
