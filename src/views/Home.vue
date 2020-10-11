<template>
  <div class="home">
    <!-- home 页面布局容器 -->
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
};
</script>
<style lang="less" scoped>
.home {
  margin: 0px;
  padding: 0px;
}
</style>