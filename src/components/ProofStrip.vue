<template>
  <section class="proof-strip reveal" aria-label="Career highlights">
    <div class="proof-shell">
      <div class="proof-track">
        <div class="proof-item" v-for="item in stats" :key="item.label">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </div>
        <div class="proof-item" v-for="item in stats" :key="`${item.label}-loop`" aria-hidden="true">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </div>
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
