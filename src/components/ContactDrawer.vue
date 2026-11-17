<script setup>
import { nextTick, ref, watch } from 'vue'
import {
  PhEnvelopeSimple,
  PhGithubLogo,
  PhPhone,
  PhWhatsappLogo,
  PhX,
} from '@phosphor-icons/vue'
import { contact } from '@/data/site'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:open'])
const dialog = ref(null)

watch(
  () => props.open,
  async (isOpen) => {
    await nextTick()
    if (isOpen && !dialog.value?.open) dialog.value?.showModal()
    if (!isOpen && dialog.value?.open) dialog.value?.close()
  },
  { immediate: true },
)

const close = () => {
  dialog.value?.close()
  emit('update:open', false)
}
</script>

<template>
  <dialog
    ref="dialog"
    class="contact-dialog bg-panel text-paper backdrop:bg-navy/75 m-0 ml-auto h-[100dvh] max-h-none w-full max-w-xl border-0 p-0 backdrop:backdrop-blur-sm"
    aria-labelledby="contact-title"
    @close="emit('update:open', false)"
    @click.self="close"
  >
    <div class="flex min-h-full flex-col p-6 sm:p-10">
      <div class="flex items-center justify-between">
        <p class="text-accent text-sm font-semibold">Request a quotation</p>
        <button
          type="button"
          class="border-line text-paper hover:bg-paper/8 grid size-11 place-items-center rounded-xl border transition-colors"
          aria-label="Close contact panel"
          @click="close"
        >
          <PhX :size="21" weight="bold" aria-hidden="true" />
        </button>
      </div>

      <div class="my-auto py-16">
        <h2
          id="contact-title"
          class="max-w-md text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-5xl"
        >
          Tell us what your organization needs to move.
        </h2>
        <p class="text-muted mt-5 max-w-md leading-relaxed">
          Share the problem, the opportunity, or the system you want to improve.
          Every engagement begins with a focused conversation and a custom
          quotation.
        </p>

        <div class="mt-10 grid gap-3">
          <a class="contact-link" :href="`mailto:${contact.email}`">
            <PhEnvelopeSimple :size="23" weight="duotone" aria-hidden="true" />
            <span>
              <span class="text-muted block text-xs font-semibold">Email</span>
              <span class="mt-1 block font-semibold">{{ contact.email }}</span>
            </span>
          </a>
          <a
            class="contact-link"
            :href="contact.whatsappHref"
            target="_blank"
            rel="noreferrer"
          >
            <PhWhatsappLogo :size="23" weight="duotone" aria-hidden="true" />
            <span>
              <span class="text-muted block text-xs font-semibold"
                >WhatsApp</span
              >
              <span class="mt-1 block font-semibold">{{
                contact.phoneDisplay
              }}</span>
            </span>
          </a>
          <a class="contact-link" :href="contact.phoneHref">
            <PhPhone :size="23" weight="duotone" aria-hidden="true" />
            <span>
              <span class="text-muted block text-xs font-semibold">Call</span>
              <span class="mt-1 block font-semibold">{{
                contact.phoneDisplay
              }}</span>
            </span>
          </a>
          <a
            class="contact-link"
            :href="contact.githubHref"
            target="_blank"
            rel="noreferrer"
          >
            <PhGithubLogo :size="23" weight="duotone" aria-hidden="true" />
            <span>
              <span class="text-muted block text-xs font-semibold">GitHub</span>
              <span class="mt-1 block font-semibold">View our public work</span>
            </span>
          </a>
        </div>
      </div>

      <p class="text-muted text-sm">Based in Uganda. Working beyond borders.</p>
    </div>
  </dialog>
</template>
