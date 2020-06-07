<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!--:collapse="isCollapse"-->
      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <!--绑定到sidebarItem中的props item和basePath上 key在for循环中必须唯一-->
        <sidebar-item
          v-for="route in routes"
          :item="route"
          :base-path="route.path"
          :key="route.path">
       </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'
  export default {
    name: "index",
    components:{
      SidebarItem
    },
    computed: {
      routes() {
        // router是实例 获取路由配置 有route.path 和 route.query只读属性
        return this.$router.options.routes
      },
      activeMenu() {
        // route当前路由对象 和 router实例不同
        const route = this.$route;
        const { meta, path } = route;
        // 高亮设置
        // if (meta.activeMenu) {
        //   return meta.activeMenu
        // }
        return path
      },
      // isCollapse() {
      //   return !this.sidebar.opened
      // }
    }
  }
</script>

<style scoped>

</style>
