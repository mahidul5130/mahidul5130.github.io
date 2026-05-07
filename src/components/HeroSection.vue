<template>
  <section class="hero-section" id="home">
    <div class="hero-grid shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">
          <Radio :size="16" />
          Open to remote, hybrid, local, and visa-supported on-site roles
        </p>
        <h1>
          <span>Md. Mahidul Haque</span>
          <span>builds payment-ready Laravel and Vue systems.</span>
        </h1>
        <p class="lead">
          Full-stack software engineer in Dhaka turning Laravel APIs, Vue dashboards, queues,
          payments, admin panels, and third-party integrations into fast-moving production products.
        </p>

        <div class="hero-actions" aria-label="Primary links">
          <a class="button primary" href="/Md_Mahidul_Haque_Laravel_Vue_CV.pdf">
            <Download :size="18" />
            Download CV
          </a>
          <a class="button ghost" href="mailto:mahidul5130@gmail.com">
            <Mail :size="18" />
            Email
          </a>
          <a class="button ghost" href="https://www.linkedin.com/in/md-mahidul-haque" target="_blank" rel="noopener">
            <Linkedin :size="18" />
            LinkedIn
          </a>
          <a class="button ghost" href="https://github.com/mahidul5130" target="_blank" rel="noopener">
            <Github :size="18" />
            GitHub
          </a>
        </div>

        <div class="availability-row" aria-label="Availability">
          <span v-for="(item, index) in availability" :key="item">
            <component :is="availabilityIcons[index] || MapPin" :size="15" />
            {{ item }}
          </span>
        </div>
      </div>

      <div
        class="hero-visual reveal"
        aria-label="Profile and career proof"
        :style="visualVars"
        @pointermove="tiltVisual"
        @pointerleave="resetTilt"
      >
        <div class="kinetic-ring" aria-hidden="true"></div>
        <figure class="portrait-frame">
          <img src="/profile.png" width="900" height="1125" alt="Md. Mahidul Haque">
        </figure>

        <div class="hero-code-card" aria-hidden="true">
          <span class="window-dots"><i></i><i></i><i></i></span>
          <p><span>php artisan</span> queue:work --payments</p>
          <p><span>api</span> /remittance/transactions/verify</p>
          <p><span>vue</span> dashboard synced</p>
        </div>

        <div class="signal-board">
          <div class="signal" v-for="(item, index) in heroSignals" :key="item.label">
            <component :is="signalIcons[index]" :size="20" />
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  BriefcaseBusiness,
  CreditCard,
  Download,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Plane,
  Radio,
  ServerCog,
  Smartphone,
} from "lucide-vue-next";

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

const visualTilt = ref({ x: 0, y: 0, glowX: 50, glowY: 50 });
const availabilityIcons = [MapPin, Globe2, BriefcaseBusiness, Plane];
const signalIcons = [ServerCog, CreditCard, Smartphone];

const visualVars = computed(() => ({
  "--tilt-x": `${visualTilt.value.x}deg`,
  "--tilt-y": `${visualTilt.value.y}deg`,
  "--glow-x": `${visualTilt.value.glowX}%`,
  "--glow-y": `${visualTilt.value.glowY}%`,
}));

const tiltVisual = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  visualTilt.value = {
    x: (0.5 - y) * 10,
    y: (x - 0.5) * 12,
    glowX: Math.round(x * 100),
    glowY: Math.round(y * 100),
  };
};

const resetTilt = () => {
  visualTilt.value = { x: 0, y: 0, glowX: 50, glowY: 50 };
};
</script>
