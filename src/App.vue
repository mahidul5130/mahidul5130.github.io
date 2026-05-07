<template>
  <div class="portfolio-app" :style="appVars" @pointermove="trackPointer">
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="ambient-grid" aria-hidden="true"></div>

    <SiteHeader
      :active-section="activeSection"
      :nav-links="navLinks"
      @navigate="scrollTo"
    />

    <main id="main">
      <HeroSection :availability="availability" :hero-signals="heroSignals" />
      <ProofStrip :stats="stats" />
      <ExperienceSection :experience="experience" />
      <ProjectsSection :projects="projects" />
      <SkillsSection :skill-groups="skillGroups" />
      <WorkFitSection :work-modes="workModes" />
      <ContactSection />
    </main>

    <SiteFooter :current-year="currentYear" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import ContactSection from "./components/ContactSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import HeroSection from "./components/HeroSection.vue";
import ProofStrip from "./components/ProofStrip.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SkillsSection from "./components/SkillsSection.vue";
import WorkFitSection from "./components/WorkFitSection.vue";
import {
  availability,
  experience,
  heroSignals,
  navLinks,
  projects,
  skillGroups,
  stats,
  workModes,
} from "./data/portfolio";

const currentYear = new Date().getFullYear();
const activeSection = ref("home");
const pointer = ref({ x: 50, y: 28 });
let revealObserver;
let ticking = false;
let revealFallbackTimer;
let sections = [];

const appVars = computed(() => ({
  "--pointer-x": `${pointer.value.x}%`,
  "--pointer-y": `${pointer.value.y}%`,
}));

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const trackPointer = (event) => {
  pointer.value = {
    x: Math.round((event.clientX / window.innerWidth) * 100),
    y: Math.round((event.clientY / window.innerHeight) * 100),
  };
};

const updateScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));

  const currentSection = sections
    .filter((section) => section.getBoundingClientRect().top <= 180)
    .at(-1);

  activeSection.value = currentSection?.id || "home";
  ticking = false;
};

const requestScrollProgress = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollProgress);
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", requestScrollProgress, { passive: true });
  window.addEventListener("resize", requestScrollProgress);
  document.body.classList.add("motion-ready");
  const revealElements = [...document.querySelectorAll(".reveal")];
  sections = [...document.querySelectorAll("main > section[id]")];
  updateScrollProgress();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  revealFallbackTimer = window.setTimeout(() => {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }, 900);

});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", requestScrollProgress);
  window.removeEventListener("resize", requestScrollProgress);
  window.clearTimeout(revealFallbackTimer);
  document.body.classList.remove("motion-ready");
  revealObserver?.disconnect();
});
</script>
