<template>
  <section class="proof-strip" aria-label="Career highlights">
    <div class="proof-grid shell">
      <div class="proof-item" v-for="item in stats" :key="item.label">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
  },
});
</script>
