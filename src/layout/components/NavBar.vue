<template>
  <div class="nav-bar">

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <!--用户小图标-->
        <div class="avatar-wrapper">
          <img src="../../assets/userLog.jpg" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <!--下拉菜单-->
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <!--其他链接-->
<!--          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">-->
<!--            <el-dropdown-item>Docs</el-dropdown-item>-->
<!--          </a>-->
          <a target="_blank" href="https://www.baidu.com">
            <el-dropdown-item>Baidu</el-dropdown-item>
          </a>
          <!--divided显示分割线-->
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Breadcrumb from '../../components/Breadcrumb/index'
  export default {
    name: "NavBar",
    components: {
      Breadcrumb
    },
    computed: {
        // ...mapGetters([
        //   'sidebar'
        // ])
    },
    methods:{
      async logout() {
        await this.$store.dispatch('user/logout');
        //this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        await this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
 .nav-bar {
   height: 50px;
   overflow:hidden;
   position: relative;
   background: white;
   box-shadow: 0 1px 4px rgba(0,21,41,.08);
 }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor:pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
  }

  .breadcrumb-container {
    float: left;
  }

 .right-menu {
    float: right;
    height: 100%;
   line-height: 50px;
 }
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;
  }
  .avatar-container {
    margin-right:30px;
  }
  .avatar-container {
    margin-right: 30px;
  }
  .avatar-wrapper {
    margin-top: 5px;
    position: relative;
  }
  .user-avatar {
    cursor: pointer;
    width:40px;
    height:40px;
    border-radius:10px;
  }
  .el-icon-caret-bottom {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 25px;
    font-size: 12px;
  }
</style>
