<template>
  <PageComponent title="About">
    About page!
  </PageComponent>
</template>
<script setup>
  import PageComponent from '../components/PageComponent.vue';
</script>

<style> 
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
