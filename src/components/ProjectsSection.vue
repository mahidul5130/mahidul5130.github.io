<template>
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
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const activeCategory = ref("All");

const projectCategories = computed(() => [
  "All",
  ...new Set(props.projects.map((project) => project.category)),
]);

const filteredProjects = computed(() => {
  if (activeCategory.value === "All") {
    return props.projects;
  }

  return props.projects.filter((project) => project.category === activeCategory.value);
});
</script>
