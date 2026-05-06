<template>
  <section class="section" id="experience">
    <div class="shell">
      <div class="section-heading">
        <p class="section-kicker">Experience</p>
        <h2>Production engineering across banking, payments, hospitality, APIs, and automation.</h2>
      </div>

      <div class="experience-grid">
        <article class="experience-card" v-for="role in experience" :key="role.company">
          <div class="company-logos" v-if="role.logos.length">
            <img v-for="logo in role.logos" :key="logo.src" :src="logo.src" :alt="logo.alt">
          </div>

          <div class="experience-body">
            <div class="item-head">
              <div>
                <h3>{{ role.title }}</h3>
                <p>{{ role.company }}</p>
              </div>
              <span class="badge">{{ role.period }}</span>
            </div>

            <ul>
              <li v-for="point in role.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  experience: {
    type: Array,
    required: true,
  },
});
</script>
