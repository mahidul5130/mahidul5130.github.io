<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <SiteHeader :nav-links="navLinks" @navigate="scrollTo" />

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
</template>

<script setup>
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

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>
