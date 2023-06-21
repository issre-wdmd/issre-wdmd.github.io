<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue';
import TheBanner from '@/components/TheBanner.vue';
</script>

<template>
  <div class="common-layout">
    <TheHeader />
    <TheBanner />

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 24px 30px;
  }
}
</style>
