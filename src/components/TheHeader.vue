<template>
  <el-menu
    class="menu"
    mode="horizontal"
    router
    default-active="/"
  >
    <div>WDMD</div>
    <div class="menu-right">
      <el-menu-item index="/">HOME</el-menu-item>
      <el-menu-item index="/participation">CALL FOR PARTICIPATION</el-menu-item>
      <el-menu-item index="/papers">CALL FOR PAPERS</el-menu-item>
      <el-menu-item index="/keynote/specakers">KEYNOTE SPECAKERS</el-menu-item>
      <el-menu-item index="/committees">COMMITTEES</el-menu-item>
      <el-menu-item index="/attending">ATTENDING</el-menu-item>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.menu {
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  .menu-right {
    display: flex;
  }
}
</style>