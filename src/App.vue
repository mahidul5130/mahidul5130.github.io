<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="#home" @click.prevent="scrollTo('home')">
        <span class="brand-mark">MH</span>
        <span>Md. Mahidul Haque</span>
      </a>

      <div class="nav-links">
        <a v-for="link in navLinks" :key="link.id" :href="'#' + link.id" @click.prevent="scrollTo(link.id)">
          {{ link.label }}
        </a>
      </div>
    </nav>
  </header>

  <main id="main">
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
            <a class="button primary" href="Md_Mahidul_Haque_Laravel_Vue_CV.pdf">Download CV</a>
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
            <img :src="profilePhoto" width="900" height="1125" alt="Md. Mahidul Haque">
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

    <section class="proof-strip" aria-label="Career highlights">
      <div class="proof-grid shell">
        <div class="proof-item" v-for="item in stats" :key="item.label">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </section>

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

    <section class="section work-section" id="projects">
      <div class="shell">
        <div class="section-heading split">
          <div>
            <p class="section-kicker">Selected work</p>
            <h2>Projects with real users, real integrations, and real operational pressure.</h2>
          </div>

          <div class="tabs" role="tablist" aria-label="Project filters">
            <button
              v-for="category in projectCategories"
              :key="category"
              type="button"
              :class="{ active: activeCategory === category }"
              :aria-pressed="activeCategory === category"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="project-grid">
          <article
            class="project-card"
            v-for="project in filteredProjects"
            :key="project.title"
            :style="{ '--accent': project.accent }"
          >
            <div class="project-topline">
              <span>{{ project.type }}</span>
              <span>{{ project.period }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p class="project-stack">{{ project.stack }}</p>

            <ul>
              <li v-for="point in project.points" :key="point">{{ point }}</li>
            </ul>

            <div class="project-links" v-if="project.links.length">
              <a v-for="link in project.links" :key="link.href" :href="link.href" target="_blank" rel="noopener">
                {{ link.label }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

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

    <section class="section contact-section" id="contact">
      <div class="shell contact-grid">
        <div>
          <p class="section-kicker">Contact</p>
          <h2>Available for remote roles worldwide, Bangladesh local/hybrid roles, and visa-supported on-site opportunities abroad.</h2>
        </div>

        <div class="contact-panel">
          <a href="mailto:mahidul5130@gmail.com">mahidul5130@gmail.com</a>
          <a href="tel:+8801705568901">+8801705568901</a>
          <a href="Md_Mahidul_Haque_Laravel_Vue_CV.pdf">Download CV</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="shell">
      <span>&copy; {{ currentYear }} Md. Mahidul Haque.</span>
      <span>Laravel, Vue.js, APIs, payments, and practical product delivery.</span>
    </div>
  </footer>
</template>

<script>
import {
  availability,
  experience,
  heroSignals,
  navLinks,
  projects,
  skillGroups,
  stats,
  workModes,
} from "./portfolio-data";
import profilePhoto from "../profile-portfolio.jpg";

export default {
  name: "App",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      activeCategory: "All",
      availability,
      experience,
      heroSignals,
      navLinks,
      profilePhoto,
      projects,
      skillGroups,
      stats,
      workModes,
    };
  },
  computed: {
    projectCategories() {
      return ["All", ...new Set(this.projects.map((project) => project.category))];
    },
    filteredProjects() {
      if (this.activeCategory === "All") {
        return this.projects;
      }

      return this.projects.filter((project) => project.category === this.activeCategory);
    },
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>
