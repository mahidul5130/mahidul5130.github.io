<template>
  <section class="section capability-section" id="skills">
    <div class="shell two-column">
      <div class="section-heading sticky-heading reveal">
        <p class="section-kicker">Capabilities</p>
        <h2>Backend ownership with enough frontend range to ship the full workflow.</h2>
        <p class="section-note">
          Best fit: Laravel backend, Laravel/Vue full-stack, REST API/platform engineering,
          fintech/payment systems, admin panels, and client-facing web products.
        </p>
      </div>

      <div class="skill-grid">
        <article
          class="skill-panel reveal"
          v-for="(group, index) in skillGroups"
          :key="group.title"
          :style="{ '--reveal-delay': `${index * 70}ms` }"
        >
          <div class="skill-head">
            <component :is="skillIcons[index] || Boxes" :size="22" />
            <h3>{{ group.title }}</h3>
          </div>
          <div class="chip-list">
            <span v-for="skill in group.items" :key="skill">{{ skill }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Boxes, Cable, Code2, DatabaseZap, ServerCog } from "lucide-vue-next";

defineProps({
  skillGroups: {
    type: Array,
    required: true,
  },
});

const skillIcons = [ServerCog, Code2, DatabaseZap, Cable];
</script>
