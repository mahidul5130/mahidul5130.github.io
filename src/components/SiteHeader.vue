<template>
  <header class="site-header">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="#home" @click.prevent="emit('navigate', 'home')">
        <span class="brand-mark">MH</span>
        <span>Md. Mahidul Haque</span>
      </a>

      <div class="nav-links">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="'#' + link.id"
          @click.prevent="emit('navigate', link.id)"
        >
          {{ link.label }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  navLinks: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["navigate"]);
</script>
