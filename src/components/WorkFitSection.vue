<template>
  <section class="section" id="fit">
    <div class="shell">
      <div class="section-heading">
        <p class="section-kicker">Work fit</p>
        <h2>Built for distributed teams, local teams, and product work that needs ownership.</h2>
      </div>

      <div class="fit-grid">
        <article class="fit-card" v-for="mode in workModes" :key="mode.title">
          <span>{{ mode.number }}</span>
          <h3>{{ mode.title }}</h3>
          <p>{{ mode.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  workModes: {
    type: Array,
    required: true,
  },
});
</script>
