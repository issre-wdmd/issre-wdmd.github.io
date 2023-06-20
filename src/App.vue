<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue';
import TheBanner from '@/components/TheBanner.vue';
</script>

<template>
  <div>
    <TheHeader />
    <TheBanner />

    <RouterView />
  </div>
</template>

<style lang="less" scoped>
</style>
