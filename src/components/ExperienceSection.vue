<template>
  <section class="section" id="experience">
    <div class="shell">
      <div class="section-heading reveal">
        <p class="section-kicker">Experience</p>
        <h2>Production engineering across banking, payments, hospitality, APIs, and automation.</h2>
      </div>

      <div class="experience-grid">
        <article
          class="experience-card reveal"
          v-for="(role, index) in experience"
          :key="role.company"
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <div class="company-logos" v-if="role.logos.length">
            <img v-for="logo in role.logos" :key="logo.src" :src="logo.src" :alt="logo.alt">
          </div>

          <div class="experience-body">
            <div class="item-head">
              <div>
                <h3>{{ role.title }}</h3>
                <p class="role-company">
                  <Building2 :size="16" />
                  {{ role.company }}
                </p>
              </div>
              <span class="badge">
                <CalendarDays :size="15" />
                {{ role.period }}
              </span>
            </div>

            <ul class="impact-list">
              <li v-for="point in role.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Building2, CalendarDays } from "lucide-vue-next";

defineProps({
  experience: {
    type: Array,
    required: true,
  },
});
</script>
