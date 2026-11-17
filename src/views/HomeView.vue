<script setup>
import { ref } from 'vue'
import {
  PhArrowRight,
  PhArrowUpRight,
  PhGithubLogo,
  PhPause,
  PhPlay,
} from '@phosphor-icons/vue'
import { motion, useReducedMotion } from 'motion-v'
import BrandMark from '@/components/BrandMark.vue'
import CapabilityStory from '@/components/CapabilityStory.vue'
import ContactDrawer from '@/components/ContactDrawer.vue'
import ProjectStage from '@/components/ProjectStage.vue'
import RevealBlock from '@/components/RevealBlock.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import {
  capabilities,
  contact,
  deliveryApproach,
  impactOutcomes,
  projects,
} from '@/data/site'

const contactOpen = ref(false)
const workPaused = ref(false)
const reduceMotion = useReducedMotion()

const openContact = () => {
  contactOpen.value = true
}
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <main
    id="top"
    class="site-shell bg-surface text-paper min-h-[100dvh] overflow-clip"
  >
    <SiteHeader @open-contact="openContact" />

    <section
      id="main-content"
      class="relative mx-auto grid max-w-[1440px] items-start gap-4 px-5 py-8 md:min-h-[42rem] md:grid-cols-[0.88fr_1.12fr] md:py-10 lg:px-8"
    >
      <motion.div
        :initial="reduceMotion ? false : { opacity: 0, y: 24 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{
          duration: reduceMotion ? 0 : 0.8,
          ease: [0.16, 1, 0.3, 1],
        }"
        class="relative z-10 max-w-2xl py-6"
      >
        <p class="hero-kicker text-accent mb-5 text-sm font-semibold">
          Software. Infrastructure. Progress.
        </p>
        <h1
          class="max-w-2xl text-[clamp(3rem,4.5vw,4.3rem)] leading-[0.94] font-semibold tracking-[-0.065em]"
        >
          Software moves business forward.
        </h1>
        <p class="text-muted mt-6 max-w-lg text-lg leading-relaxed">
          We build dependable digital products and infrastructure for
          organizations ready to grow.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <button class="button-primary" type="button" @click="openContact">
            Request a quotation
            <PhArrowRight :size="18" weight="bold" aria-hidden="true" />
          </button>
          <a class="button-secondary" href="#work">Explore work</a>
        </div>
      </motion.div>

      <motion.div
        :initial="reduceMotion ? false : { opacity: 0, x: 26 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{
          duration: reduceMotion ? 0 : 0.9,
          delay: reduceMotion ? 0 : 0.1,
          ease: [0.16, 1, 0.3, 1],
        }"
        class="relative min-w-0"
      >
        <ProjectStage :projects="projects" />
      </motion.div>
    </section>

    <section class="proof-rail" aria-label="Dape delivery strengths">
      <div
        class="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
      >
        <div class="proof-item">
          <strong>4 live products</strong>
          <span>Visible delivery, not a concept deck</span>
        </div>
        <div class="proof-item">
          <strong>Full-stack capability</strong>
          <span>Frontend, backend, cloud, and operations</span>
        </div>
        <div class="proof-item">
          <strong>Client-involved delivery</strong>
          <span>Decisions stay visible from scope to release</span>
        </div>
        <div class="proof-item">
          <strong>Uganda to the world</strong>
          <span>Entirely online and ready to work across borders</span>
        </div>
      </div>
    </section>

    <section id="capabilities" class="section-flow scroll-mt-24">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealBlock>
          <p class="eyebrow">What we do</p>
          <h2 class="section-title mt-4 max-w-3xl">
            One technology partner across the whole system.
          </h2>
          <p class="section-copy">
            Strategy, engineering, security, and operations work together so the
            result solves more than one part of the problem.
          </p>
        </RevealBlock>

        <CapabilityStory :capabilities="capabilities" />
      </div>
    </section>

    <section id="impact" class="impact-field scroll-mt-24">
      <div class="impact-visual" aria-hidden="true">
        <img
          src="/images/dape-societal-impact.webp"
          alt=""
          width="1717"
          height="916"
          loading="lazy"
        />
      </div>
      <div class="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <RevealBlock>
          <h2 class="section-title max-w-3xl">
            Technology should create practical opportunity.
          </h2>
          <p class="section-copy">
            We focus every system on useful outcomes for organizations, the
            people they serve, and the markets around them.
          </p>
        </RevealBlock>

        <div class="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
          <RevealBlock
            v-for="(outcome, index) in impactOutcomes"
            :key="outcome.title"
            :delay="index * 0.06"
          >
            <article class="impact-outcome">
              <h3
                class="text-xl leading-tight font-semibold tracking-[-0.035em]"
              >
                {{ outcome.title }}
              </h3>
              <p class="text-muted mt-3 text-sm leading-relaxed">
                {{ outcome.description }}
              </p>
            </article>
          </RevealBlock>
        </div>
      </div>
    </section>

    <section id="work" class="section-flow scroll-mt-24">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealBlock>
          <h2 class="section-title max-w-3xl">
            Systems already working in the world.
          </h2>
          <p class="section-copy">
            Real products across prediction services, operational software, and
            digital experiences show the range of our engineering work.
          </p>
        </RevealBlock>

        <button
          type="button"
          class="work-pause mt-7"
          :aria-label="
            workPaused ? 'Resume project sequence' : 'Pause project sequence'
          "
          :aria-pressed="workPaused"
          aria-controls="project-grid"
          @click="workPaused = !workPaused"
        >
          <PhPlay
            v-if="workPaused"
            :size="17"
            weight="fill"
            aria-hidden="true"
          />
          <PhPause v-else :size="17" weight="fill" aria-hidden="true" />
          {{ workPaused ? 'Resume projects' : 'Pause projects' }}
        </button>
      </div>

      <div
        id="project-grid"
        class="work-marquee mt-10"
        :class="{ 'is-paused': workPaused }"
        aria-label="Selected Dape projects"
      >
        <div class="work-marquee-track">
          <div
            v-for="copyIndex in 2"
            :key="copyIndex"
            class="work-row-set"
            :aria-hidden="copyIndex === 2 ? 'true' : undefined"
          >
            <a
              v-for="project in projects"
              :key="`${copyIndex}-${project.name}`"
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              class="work-slide group"
              :tabindex="copyIndex === 2 ? -1 : undefined"
              :aria-label="`Open ${project.name}`"
            >
              <div class="work-slide-visual">
                <img
                  :src="project.image"
                  :alt="copyIndex === 1 ? project.imageAlt : ''"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width="1440"
                  height="1000"
                  loading="lazy"
                />
              </div>
              <div class="work-slide-copy">
                <p
                  class="text-accent text-xs font-semibold tracking-[0.12em] uppercase"
                >
                  {{ project.category }}
                </p>
                <h3
                  class="mt-3 text-3xl leading-tight font-semibold tracking-[-0.045em] text-white"
                >
                  {{ project.name }}
                </h3>

                <dl class="mt-7 grid gap-5">
                  <div>
                    <dt>The need</dt>
                    <dd>{{ project.need }}</dd>
                  </div>
                  <div>
                    <dt>What we built</dt>
                    <dd>{{ project.built }}</dd>
                  </div>
                  <div>
                    <dt>Practical value</dt>
                    <dd>{{ project.value }}</dd>
                  </div>
                </dl>

                <span class="work-slide-link mt-6">
                  View live system
                  <PhArrowUpRight :size="16" weight="bold" aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <a
          :href="contact.githubHref"
          target="_blank"
          rel="noreferrer"
          class="text-accent hover:text-paper mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
        >
          <PhGithubLogo :size="20" weight="duotone" aria-hidden="true" />
          Explore public repositories
          <PhArrowUpRight :size="16" weight="bold" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section id="approach" class="section-flow approach-field scroll-mt-24">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealBlock>
          <h2 class="section-title max-w-3xl">
            Clear decisions from idea to operation.
          </h2>
          <p class="section-copy">
            Client involvement stays continuous while technical responsibility
            remains clear and accountable.
          </p>
        </RevealBlock>

        <div class="approach-track mt-12 grid md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="stage in deliveryApproach"
            :key="stage.title"
            class="approach-step"
          >
            <h3 class="text-2xl font-semibold tracking-[-0.035em]">
              {{ stage.title }}
            </h3>
            <p class="text-muted mt-4 text-sm leading-relaxed">
              {{ stage.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
      <motion.img
        src="/images/dape-ambient-network.webp"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute top-1/2 right-[-12rem] h-[42rem] w-[58rem] -translate-y-1/2 object-contain opacity-35 mix-blend-screen"
        :animate="
          reduceMotion ? {} : { rotate: [-1, 1, -1], scale: [1, 1.025, 1] }
        "
        :transition="
          reduceMotion
            ? {}
            : { duration: 12, repeat: Infinity, ease: 'easeInOut' }
        "
      />
      <div class="relative z-10 mx-auto max-w-7xl">
        <h2
          class="max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.055em] sm:text-6xl"
        >
          Bring us the opportunity. We will shape the technology around it.
        </h2>
        <p class="text-muted mt-5 max-w-xl text-lg leading-relaxed">
          Every engagement begins with a focused conversation and a custom
          quotation.
        </p>
        <button class="button-primary mt-8" type="button" @click="openContact">
          Request a quotation
          <PhArrowUpRight :size="18" weight="bold" aria-hidden="true" />
        </button>
      </div>
    </section>

    <footer class="footer-grid mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div>
        <BrandMark compact />
        <p class="text-muted mt-4 max-w-md text-sm leading-relaxed">
          Software, infrastructure, security, and technology advisory built from
          Uganda for organizations everywhere.
        </p>
      </div>
      <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
        <a
          :href="`mailto:${contact.email}`"
          class="text-muted hover:text-accent"
          >Email</a
        >
        <a
          :href="contact.whatsappHref"
          target="_blank"
          rel="noreferrer"
          class="text-muted hover:text-accent"
          >WhatsApp</a
        >
        <a
          :href="contact.githubHref"
          target="_blank"
          rel="noreferrer"
          class="text-muted hover:text-accent"
          >GitHub</a
        >
        <a href="#top" class="text-muted hover:text-accent">Back to top</a>
      </div>
    </footer>
  </main>

  <ContactDrawer v-model:open="contactOpen" />
</template>
