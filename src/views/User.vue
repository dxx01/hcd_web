<template>
  <div id="lrf-user">
    <div class="lrf-logo">HCD</div>
    <!-- 路由占位符-->
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
#lrf-user {
  background-color: #f3f3f3;
  height: 100%;
}
.lrf-logo {
  width: 30%;
  min-width: 400px;
  height: 100px;
  font-size: 60px;
  font-weight: bolder;
  position: absolute;  /* 绝对定位 */
  left: 50%;
  right: 50%;
  transform: translate(-50%, 40px);
  text-align: center;
  line-height: 100px;
}
</style>
