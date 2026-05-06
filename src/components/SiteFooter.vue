<template>
  <footer class="footer">
    <div class="shell">
      <span>&copy; {{ currentYear }} Md. Mahidul Haque.</span>
      <span>Laravel, Vue.js, APIs, payments, and practical product delivery.</span>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  currentYear: {
    type: Number,
    required: true,
  },
});
</script>
