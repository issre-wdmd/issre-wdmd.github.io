<template>
  <el-menu
    class="menu"
    mode="horizontal"
    router
    :default-active="route.path"
  >
    <div class="logo">WDMD 2023</div>
    <div class="menu-right">
      <el-menu-item index="/">HOME</el-menu-item>
      <el-menu-item index="/papers">CALL FOR PAPERS</el-menu-item>
      <el-menu-item index="/participation">CALL FOR PARTICIPATION</el-menu-item>
      <el-menu-item index="/keynote/speakers">KEYNOTE SPEAKERS</el-menu-item>
      <el-menu-item index="/committees">COMMITTEES</el-menu-item>
      <!-- <el-menu-item index="/attending">ATTENDING</el-menu-item> -->
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="less" scoped>
.menu {
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 58px;
    line-height: 58px;
  }

  .menu-right {
    display: flex;
  }
}
</style>