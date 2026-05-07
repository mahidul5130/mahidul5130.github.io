<template>
  <section class="section work-section" id="projects">
    <div class="shell">
      <div class="section-heading split reveal">
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
            @click="setCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="project-layout">
        <aside class="project-focus reveal" :style="{ '--accent': highlightedProject.accent }">
          <div class="focus-label">
            <Zap :size="17" />
            Featured now
          </div>
          <h3>{{ highlightedProject.title }}</h3>
          <p>{{ highlightedProject.points[0] }}</p>
          <div class="focus-stack">
            <span v-for="item in stackItems(highlightedProject).slice(0, 6)" :key="item">{{ item }}</span>
          </div>
        </aside>

        <div class="project-grid">
          <article
            class="project-card reveal"
            v-for="(project, index) in filteredProjects"
            :key="project.title"
            :class="{ featured: highlightedProject.title === project.title }"
            :style="{ '--accent': project.accent, '--reveal-delay': `${index * 70}ms` }"
            tabindex="0"
            @focusin="highlight(project)"
            @mouseenter="highlight(project)"
          >
            <div class="project-topline">
              <span>
                <Layers :size="15" />
                {{ project.type }}
              </span>
              <span>
                <CalendarDays :size="15" />
                {{ project.period }}
              </span>
            </div>
            <h3>{{ project.title }}</h3>
            <div class="project-stack">
              <span v-for="item in stackItems(project)" :key="item">{{ item }}</span>
            </div>

            <ul class="impact-list">
              <li v-for="point in project.points" :key="point">{{ point }}</li>
            </ul>

            <div class="project-links" v-if="project.links.length">
              <a v-for="link in project.links" :key="link.href" :href="link.href" target="_blank" rel="noopener">
                {{ link.label }}
                <ExternalLink :size="15" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CalendarDays, ExternalLink, Layers, Zap } from "lucide-vue-next";
import { computed, ref } from "vue";

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const activeCategory = ref("All");
const highlightedTitle = ref(props.projects[0]?.title || "");

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

const highlightedProject = computed(() => (
  filteredProjects.value.find((project) => project.title === highlightedTitle.value)
  || filteredProjects.value[0]
  || props.projects[0]
));

const setCategory = (category) => {
  activeCategory.value = category;
  highlightedTitle.value = filteredProjects.value[0]?.title || props.projects[0]?.title || "";
};

const highlight = (project) => {
  highlightedTitle.value = project.title;
};

const stackItems = (project) => project.stack.split(",").map((item) => item.trim()).filter(Boolean);
</script>
