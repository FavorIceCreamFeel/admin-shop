<template>
  <div class="home">
    <!-- home 页面布局容器 -->
    <el-container>

      <el-header class="home_header">
        <el-menu
          :default-active="activeIndex"
          class=""
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened=true
        >
          <el-menu-item index="1">SMXR</el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">Administration</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu> -->
          <el-menu-item index="2">Administration</el-menu-item>
          <el-menu-item index="3">My Blog</el-menu-item>

        </el-menu>
      </el-header>

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
  data(){
    return {
      // 默认选中  值为 1 的
      activeIndex: '1',
    }
  },
  methods: {
    // sub-menu 展开的回调
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      // sub-menu 收起的回调
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 菜单激活回调	index: 选中菜单项的 index, indexPath: 选中菜单项的 index path
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      activeIndexs(oldVal,newVal){
        console.log('旧值：'+oldVal);
        console.log('新值：'+newVal);
      }
    },
    // watch:{
    //   activeIndex: 'activeIndexs'
    // }
};
</script>
<style lang="less" scoped>
.home {
  margin: 0px;
  padding: 0px;
  height: 100%;
}
.home_header{
  padding: 0px;
}
</style>