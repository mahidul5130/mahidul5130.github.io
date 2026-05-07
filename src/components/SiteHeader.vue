<template>
  <header class="site-header">
    <div class="scroll-progress" aria-hidden="true"></div>
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="#home" @click.prevent="goTo('home')">
        <span class="brand-mark" aria-hidden="true">
          <Sparkles :size="18" stroke-width="2.4" />
        </span>
        <span>
          <strong>Md. Mahidul Haque</strong>
          <small>Laravel / Vue Engineer</small>
        </span>
      </a>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-menu"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="21" />
        <Menu v-else :size="21" />
      </button>

      <div id="primary-menu" class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="'#' + link.id"
          :class="{ active: activeSection === link.id }"
          @click.prevent="goTo(link.id)"
        >
          {{ link.label }}
        </a>
        <a class="nav-cta" href="/Md_Mahidul_Haque_Laravel_Vue_CV.pdf">
          <Download :size="16" />
          CV
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { Download, Menu, Sparkles, X } from "lucide-vue-next";

const props = defineProps({
  activeSection: {
    type: String,
    default: "home",
  },
  navLinks: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["navigate"]);
const menuOpen = ref(false);

const goTo = (id) => {
  menuOpen.value = false;
  emit("navigate", id);
};

watch(
  () => props.activeSection,
  () => {
    menuOpen.value = false;
  },
);
</script>
