<template>
  <div class="banner">
    <div class="background"></div>
    <div class="text">
      <h2 class="title">WDMD 2023: 2nd International Workshop on Dependability Modeling and Design Co-located ISSRE 2023</h2>
      <div class="tip">October 2023 - Florence, Italy</div>
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
    padding: 0 48px;
    color: #fff;
    .title {
      font-size: 32px;
      font-weight: bold;
      font-family: Lato, Arial;
      line-height: 1.2;
    }
    .tip {
      margin-top: 10px;
      font-size: 24px;
      color: #f3f3f3;
      font-family: Merriweather, Arial;
      font-style: italic;
    }
  }
}
</style>