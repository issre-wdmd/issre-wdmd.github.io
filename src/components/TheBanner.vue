<template>
  <div class="banner">
    <div class="background"></div>
    <div class="text">
      <h2 class="title font-lato">WDMD 2023: 2nd International Workshop on </h2>
      <h2 class="title font-lato">Dependability Modeling and Design</h2>
      <div class="subtitle">Co-located with ISSRE 2023</div>
      <div class="tip font-merri">October 9-12, Florence, Italy</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.banner {
  height: 340px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: url('@/assets/image/italy.jpg') no-repeat center / cover;

    &::before {
      content: '';
      display: block;
      background-color: rgba(33, 33, 33, 1);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.5;
    }
  }
  
  .text {
    max-width: 1000px;
    padding: 0 30px;
    color: #fff;
    .title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
    }
    .subtitle {
      text-align: center;
      margin-top: 10px;
      font-size: 24px;
      color: #f3f3f3;
      font-style: italic;
    }
    .tip {
      margin-top: 12px;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>