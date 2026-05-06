<template>
  <section class="hero-section" id="home">
    <div class="hero-grid shell">
      <div class="hero-copy">
        <p class="eyebrow">Open to remote, hybrid, local, and visa-supported on-site roles</p>
        <h1>Laravel and Vue.js engineer for production APIs, payment flows, and useful web platforms.</h1>
        <p class="lead">
          I build reliable backend-heavy products with clean Laravel APIs, Vue interfaces, queues,
          integrations, admin panels, and enough delivery discipline to keep teams moving across time zones.
        </p>

        <div class="hero-actions" aria-label="Primary links">
          <a class="button primary" href="/Md_Mahidul_Haque_Laravel_Vue_CV.pdf">Download CV</a>
          <a class="button ghost" href="mailto:mahidul5130@gmail.com">Email</a>
          <a class="button ghost" href="https://www.linkedin.com/in/md-mahidul-haque" target="_blank" rel="noopener">LinkedIn</a>
          <a class="button ghost" href="https://github.com/mahidul5130" target="_blank" rel="noopener">GitHub</a>
        </div>

        <div class="availability-row" aria-label="Availability">
          <span v-for="item in availability" :key="item">{{ item }}</span>
        </div>
      </div>

      <div class="hero-visual" aria-label="Profile and career proof">
        <figure class="portrait-frame">
          <img src="/profile-portfolio.jpg" width="900" height="1125" alt="Md. Mahidul Haque">
        </figure>

        <div class="signal-board">
          <div class="signal" v-for="item in heroSignals" :key="item.label">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  availability: {
    type: Array,
    required: true,
  },
  heroSignals: {
    type: Array,
    required: true,
  },
});
</script>
