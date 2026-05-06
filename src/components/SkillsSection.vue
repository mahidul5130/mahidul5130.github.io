<template>
  <section class="section capability-section" id="skills">
    <div class="shell two-column">
      <div class="section-heading sticky-heading">
        <p class="section-kicker">Capabilities</p>
        <h2>Backend ownership with enough frontend range to ship the full workflow.</h2>
        <p class="section-note">
          Best fit: Laravel backend, Laravel/Vue full-stack, REST API/platform engineering,
          fintech/payment systems, admin panels, and client-facing web products.
        </p>
      </div>

      <div class="skill-grid">
        <article class="skill-panel" v-for="group in skillGroups" :key="group.title">
          <h3>{{ group.title }}</h3>
          <div class="chip-list">
            <span v-for="skill in group.items" :key="skill">{{ skill }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  skillGroups: {
    type: Array,
    required: true,
  },
});
</script>
