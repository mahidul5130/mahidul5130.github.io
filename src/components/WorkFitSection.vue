<template>
  <section class="section" id="fit">
    <div class="shell">
      <div class="section-heading reveal">
        <p class="section-kicker">Work fit</p>
        <h2>Built for distributed teams, local teams, and product work that needs ownership.</h2>
      </div>

      <div class="fit-grid">
        <article
          class="fit-card reveal"
          v-for="(mode, index) in workModes"
          :key="mode.title"
          :style="{ '--reveal-delay': `${index * 80}ms` }"
        >
          <span>{{ mode.number }}</span>
          <component :is="fitIcons[index]" :size="25" />
          <h3>{{ mode.title }}</h3>
          <p>{{ mode.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Globe2, MapPinned, PlaneTakeoff } from "lucide-vue-next";

defineProps({
  workModes: {
    type: Array,
    required: true,
  },
});

const fitIcons = [Globe2, MapPinned, PlaneTakeoff];
</script>
