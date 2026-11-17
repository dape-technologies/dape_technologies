<script setup>
import { ref } from 'vue'
import {
  PhArrowRight,
  PhArrowUpRight,
  PhBracketsCurly,
  PhCode,
  PhCube,
  PhEnvelopeSimple,
  PhFlowArrow,
  PhGithubLogo,
  PhGlobeHemisphereWest,
  PhHardDrives,
  PhLightbulb,
  PhMapPin,
  PhPhone,
  PhShieldCheck,
  PhWhatsappLogo,
} from '@phosphor-icons/vue'
import { motion, useReducedMotion } from 'motion-v'
import BrandMark from '@/components/BrandMark.vue'
import RevealBlock from '@/components/RevealBlock.vue'
import SiteHeader from '@/components/SiteHeader.vue'

const reduceMotion = useReducedMotion()
const activeService = ref(0)

const services = [
  {
    title: 'Software development',
    icon: PhCode,
    summary:
      'Purpose-built web and software products shaped around how your organization actually works.',
    detail:
      'From early requirements to deployment, we build maintainable systems with clear ownership and room to grow.',
  },
  {
    title: 'Frontend and backend',
    icon: PhBracketsCurly,
    summary:
      'Responsive interfaces and dependable application logic built as one coherent product.',
    detail:
      'We connect thoughtful user experiences to secure APIs, databases, integrations, and business rules.',
  },
  {
    title: 'Hosting and security',
    icon: PhShieldCheck,
    summary:
      'Managed server environments with practical safeguards for availability and data protection.',
    detail:
      'We help select, configure, monitor, and maintain infrastructure that matches the needs of each system.',
  },
  {
    title: 'DevOps',
    icon: PhFlowArrow,
    summary:
      'Delivery pipelines and operational practices that make releases safer and more repeatable.',
    detail:
      'Automation, environments, deployment processes, and observability are treated as part of the product.',
  },
  {
    title: 'Multi-tenant systems',
    icon: PhCube,
    summary:
      'Shared platforms designed to serve multiple organizations without losing control or clarity.',
    detail:
      'We plan tenant separation, permissions, configuration, billing readiness, and scale from the architecture stage.',
  },
  {
    title: 'Technology consulting',
    icon: PhLightbulb,
    summary:
      'Direct technical guidance for ideas, product decisions, and digital transformation priorities.',
    detail:
      'We turn broad goals into practical roadmaps, helping teams choose what to build and how to approach it.',
  },
  {
    title: 'Hardware and infrastructure',
    icon: PhHardDrives,
    summary:
      'Technology hardware selected with the wider system and the people using it in mind.',
    detail:
      'We support sourcing decisions and connect physical technology needs to the software and infrastructure around them.',
  },
]

const projects = [
  { name: 'Almax Predictions', area: 'Prediction platform' },
  { name: 'BK Predictions', area: 'Prediction platform' },
  { name: 'Go Fresh Shoe Laundry', area: 'Service business' },
  { name: 'Msabagabo', area: 'Digital platform' },
  { name: 'ID All Stars FC', area: 'Sports platform' },
  { name: 'Poultry IQ', area: 'Agriculture technology' },
  { name: 'Mwari Safaris', area: 'Travel experience' },
]

const process = [
  [
    'Listen',
    'We understand the problem, the people affected, and the outcome you need.',
  ],
  [
    'Shape',
    'We define priorities, technical direction, scope, and a quotation that fits the work.',
  ],
  [
    'Build',
    'You see progress, test decisions, and stay involved while the system takes form.',
  ],
  [
    'Improve',
    'We deploy, learn from real use, and strengthen the product as needs evolve.',
  ],
]

const team = [
  {
    initials: 'KM',
    name: 'Kitumba Mark Demotricius',
    role: 'Founder and DevOps Lead',
    bio: 'Guides the company vision and builds the infrastructure and delivery practices behind reliable products.',
  },
  {
    initials: 'KP',
    name: 'Kitibwa Paphra',
    role: 'Co-Founder and Head of Sales',
    bio: 'Connects client needs to the team, shaping strong relationships and clear commercial direction.',
  },
  {
    initials: 'KA',
    name: 'Kasole Ahmed',
    role: 'Lead Software Engineer and Systems Architect',
    bio: 'Designs system foundations and leads backend engineering for products built to remain useful as they grow.',
  },
  {
    initials: 'NS',
    name: 'Namukose Shanitah Isa',
    role: 'Marketing and Public Relations Lead, Software Developer',
    bio: 'Shapes how Dape communicates while contributing a developer perspective to the products and stories behind them.',
  },
]

const contactMethods = [
  {
    label: 'Email',
    value: 'hello@dapetechnologies.com',
    href: 'mailto:hello@dapetechnologies.com',
    icon: PhEnvelopeSimple,
  },
  {
    label: 'WhatsApp',
    value: 'Number to be connected',
    href: null,
    icon: PhWhatsappLogo,
  },
  {
    label: 'Phone',
    value: 'Number to be connected',
    href: null,
    icon: PhPhone,
  },
  {
    label: 'GitHub',
    value: 'Organization link coming soon',
    href: null,
    icon: PhGithubLogo,
  },
]

const heroInitial = reduceMotion.value ? false : { opacity: 0, y: 24 }
const heroImageInitial = reduceMotion.value
  ? false
  : { opacity: 0, scale: 0.96, x: 22 }
</script>

<template>
  <main id="top" class="bg-surface text-ink min-h-[100dvh] overflow-hidden">
    <SiteHeader />

    <section
      class="mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-10 md:grid-cols-[0.92fr_1.08fr] md:py-14 lg:gap-14 lg:px-8"
    >
      <motion.div
        :initial="heroInitial"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{
          duration: reduceMotion ? 0 : 0.75,
          ease: [0.16, 1, 0.3, 1],
        }"
        class="relative z-10 max-w-2xl"
      >
        <p class="text-accent-strong mb-5 text-sm font-semibold">
          Uganda based. Built for anywhere.
        </p>
        <h1
          class="max-w-3xl text-[clamp(3rem,6.4vw,5.9rem)] leading-[0.93] font-semibold tracking-[-0.065em]"
        >
          Build what your business needs next.
        </h1>
        <p class="text-muted mt-6 max-w-xl text-lg leading-relaxed">
          Software, infrastructure, and practical technology shaped with you
          from first idea to dependable delivery.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a class="button-primary" href="#contact">
            Start a project
            <PhArrowRight :size="18" weight="bold" aria-hidden="true" />
          </a>
          <a class="button-secondary" href="#projects">View projects</a>
        </div>
      </motion.div>

      <motion.div
        :initial="heroImageInitial"
        :animate="{ opacity: 1, scale: 1, x: 0 }"
        :transition="{
          duration: reduceMotion ? 0 : 0.9,
          delay: reduceMotion ? 0 : 0.12,
          ease: [0.16, 1, 0.3, 1],
        }"
        class="relative min-h-[24rem] md:min-h-[34rem]"
      >
        <div
          class="border-line bg-navy absolute inset-y-2 right-0 -left-16 overflow-hidden rounded-[2rem] border shadow-[0_32px_100px_rgba(3,30,53,0.2)] md:inset-y-0 md:-right-24 md:-left-10"
        >
          <img
            src="/images/dape-systems-hero.webp"
            alt="Interconnected modules representing Dape Technologies systems engineering"
            class="h-full w-full object-cover object-center"
            width="1752"
            height="897"
            fetchpriority="high"
          />
        </div>
      </motion.div>
    </section>

    <section class="border-line bg-panel/55 border-y">
      <div
        class="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.25fr_0.75fr_0.75fr] md:items-center lg:px-8"
      >
        <RevealBlock>
          <p
            class="max-w-2xl text-2xl leading-tight font-semibold tracking-[-0.035em] sm:text-3xl"
          >
            Built with you, not just for you.
          </p>
        </RevealBlock>
        <div class="border-line md:border-l md:pl-8">
          <p class="text-ink text-sm font-semibold">Full client involvement</p>
          <p class="text-muted mt-2 text-sm leading-relaxed">
            Decisions stay visible from planning through delivery.
          </p>
        </div>
        <div class="border-line md:border-l md:pl-8">
          <p class="text-ink text-sm font-semibold">Value tied to effort</p>
          <p class="text-muted mt-2 text-sm leading-relaxed">
            Every engagement begins with a custom quotation.
          </p>
        </div>
      </div>
    </section>

    <section id="about" class="section-space scroll-mt-24">
      <div
        class="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:items-center lg:gap-20 lg:px-8"
      >
        <RevealBlock>
          <div class="bg-panel overflow-hidden rounded-[2rem]">
            <img
              src="/images/dape-origin-story.webp"
              alt="Four university friends collaborating around a table"
              class="aspect-[4/3] w-full object-cover"
              width="1672"
              height="941"
              loading="lazy"
            />
          </div>
        </RevealBlock>

        <RevealBlock :delay="0.08">
          <p class="text-accent-strong text-sm font-semibold">
            From shared study sessions to shared ambition
          </p>
          <h2
            class="mt-4 max-w-xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-5xl"
          >
            Chemistry that became a company.
          </h2>
          <div
            class="text-muted mt-7 space-y-5 text-base leading-relaxed sm:text-lg"
          >
            <p>
              Dape began with friends at Makerere University who studied for
              exams, discussed ideas, and took on small technology projects
              together.
            </p>
            <p>
              Good work led to recommendations, larger systems, and a clear
              purpose. In 2025, the company was formally registered to solve
              practical problems and give promising ideas a working life.
            </p>
          </div>
          <div class="text-ink mt-8 flex flex-wrap gap-5 text-sm font-semibold">
            <span class="inline-flex items-center gap-2">
              <PhMapPin
                :size="19"
                class="text-accent-strong"
                aria-hidden="true"
              />
              Based in Uganda
            </span>
            <span class="inline-flex items-center gap-2">
              <PhGlobeHemisphereWest
                :size="19"
                class="text-accent-strong"
                aria-hidden="true"
              />
              Serving globally
            </span>
          </div>
        </RevealBlock>
      </div>
    </section>

    <section id="services" class="section-space bg-panel/45 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealBlock>
          <p class="eyebrow">Capabilities</p>
          <h2
            class="mt-4 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-6xl"
          >
            Technology that works as one system.
          </h2>
          <p class="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
            One team can help move an idea from product thinking to software,
            infrastructure, security, and ongoing improvement.
          </p>
        </RevealBlock>

        <div class="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div class="grid gap-2" aria-label="Technology services">
            <button
              v-for="(service, index) in services"
              :key="service.title"
              class="group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-colors"
              :class="
                activeService === index
                  ? 'bg-navy text-paper'
                  : 'text-ink hover:bg-panel'
              "
              type="button"
              :aria-pressed="activeService === index"
              @click="activeService = index"
            >
              <span class="flex items-center gap-4">
                <component
                  :is="service.icon"
                  :size="22"
                  weight="duotone"
                  aria-hidden="true"
                />
                <span class="font-semibold">{{ service.title }}</span>
              </span>
              <PhArrowRight
                :size="18"
                weight="bold"
                aria-hidden="true"
                class="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <motion.div
            :key="activeService"
            :initial="reduceMotion ? false : { opacity: 0, y: 12 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: reduceMotion ? 0 : 0.35 }"
            class="bg-navy text-paper relative flex min-h-[25rem] flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:p-10"
            aria-live="polite"
          >
            <component
              :is="services[activeService].icon"
              :size="48"
              weight="duotone"
              class="text-accent"
              aria-hidden="true"
            />
            <div>
              <h3
                class="max-w-lg text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl"
              >
                {{ services[activeService].summary }}
              </h3>
              <p class="text-paper/70 mt-5 max-w-xl leading-relaxed">
                {{ services[activeService].detail }}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealBlock>
          <h2
            class="max-w-2xl text-4xl leading-[1.04] font-semibold tracking-[-0.05em] sm:text-5xl"
          >
            A process that keeps you close.
          </h2>
          <p class="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
            Client involvement is not an approval step at the end. It is part of
            how the work gets better.
          </p>
        </RevealBlock>

        <div
          class="border-line bg-line mt-12 grid gap-px overflow-hidden rounded-[2rem] border md:grid-cols-2 xl:grid-cols-4"
        >
          <div
            v-for="(item, index) in process"
            :key="item[0]"
            class="bg-surface p-7 sm:p-8"
          >
            <span class="text-accent-strong text-sm font-semibold"
              >0{{ index + 1 }}</span
            >
            <h3 class="mt-12 text-2xl font-semibold tracking-[-0.035em]">
              {{ item[0] }}
            </h3>
            <p class="text-muted mt-3 text-sm leading-relaxed">{{ item[1] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="projects"
      class="section-space border-line bg-navy text-paper scroll-mt-24 border-y"
    >
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealBlock>
          <p class="eyebrow text-accent">Selected work</p>
          <h2
            class="mt-4 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-6xl"
          >
            Real products across different industries.
          </h2>
          <p class="text-paper/65 mt-5 max-w-2xl text-lg leading-relaxed">
            Our work includes released platforms, live websites, internal
            systems, and prototypes still being developed.
          </p>
        </RevealBlock>

        <div
          class="project-scroller mt-12 flex snap-x gap-4 overflow-x-auto pb-4"
        >
          <article
            v-for="project in projects"
            :key="project.name"
            class="group border-paper/15 bg-paper/[0.04] hover:bg-paper/[0.08] flex min-h-64 min-w-[82vw] snap-start flex-col justify-between rounded-[2rem] border p-7 transition-colors sm:min-w-[23rem]"
          >
            <span class="text-paper/55 text-sm font-medium">{{
              project.area
            }}</span>
            <div>
              <h3 class="text-2xl font-semibold tracking-[-0.035em]">
                {{ project.name }}
              </h3>
              <span class="text-accent mt-4 inline-flex text-sm font-semibold">
                Details available on request
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="team" class="section-space scroll-mt-24">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealBlock>
          <h2
            class="max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-6xl"
          >
            Different strengths. One committed team.
          </h2>
          <p class="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
            Four friends built trust before they built a company. That chemistry
            now shapes every client collaboration.
          </p>
        </RevealBlock>

        <div class="border-line mt-12 grid border-t md:grid-cols-2">
          <article
            v-for="(member, index) in team"
            :key="member.name"
            class="border-line grid min-h-80 grid-rows-[auto_1fr] border-b py-8 md:px-8"
            :class="index % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'"
          >
            <span
              class="text-accent/75 text-5xl font-semibold tracking-[-0.07em]"
              aria-hidden="true"
            >
              {{ member.initials }}
            </span>
            <div class="self-end">
              <h3 class="text-2xl font-semibold tracking-[-0.035em]">
                {{ member.name }}
              </h3>
              <p class="text-accent-strong mt-2 text-sm font-semibold">
                {{ member.role }}
              </p>
              <p class="text-muted mt-4 max-w-md text-sm leading-relaxed">
                {{ member.bio }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="scroll-mt-24 px-5 pb-5 lg:px-8 lg:pb-8">
      <div
        class="bg-accent text-navy mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 sm:px-10 lg:px-16 lg:py-20"
      >
        <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <RevealBlock>
            <h2
              class="max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.055em] sm:text-6xl"
            >
              Bring us the problem. We will shape the path forward together.
            </h2>
            <p class="text-navy/75 mt-5 max-w-xl text-lg leading-relaxed">
              Every engagement starts with a conversation, then a custom scope
              and quotation.
            </p>
            <a
              class="button-dark mt-8"
              href="mailto:hello@dapetechnologies.com"
            >
              Start a project
              <PhArrowUpRight :size="18" weight="bold" aria-hidden="true" />
            </a>
          </RevealBlock>

          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <component
              :is="method.href ? 'a' : 'div'"
              v-for="method in contactMethods"
              :key="method.label"
              :href="method.href || undefined"
              class="border-navy/15 bg-paper/35 flex items-center gap-4 rounded-2xl border px-5 py-4 transition-colors"
              :class="method.href ? 'hover:bg-paper/55' : 'opacity-65'"
            >
              <component
                :is="method.icon"
                :size="23"
                weight="duotone"
                aria-hidden="true"
              />
              <span>
                <span class="block text-sm font-semibold">{{
                  method.label
                }}</span>
                <span class="text-navy/65 mt-0.5 block text-sm">{{
                  method.value
                }}</span>
              </span>
            </component>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8"
    >
      <BrandMark compact />
      <p class="text-muted text-sm">
        Dape Technologies. Practical technology, built together.
      </p>
      <a
        href="#top"
        class="text-ink hover:text-accent-strong text-sm font-semibold"
        >Back to top</a
      >
    </footer>
  </main>
</template>
