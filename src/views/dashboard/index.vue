<template>
  <div class="dashboard-container">
    <div class="menu-router">
      <ul>
        <li>
          <router-link to="/homePage">首页统计</router-link>
        </li>
        <li>
          <router-link to="/commodity">商品管理</router-link>
        </li>
        <li>
          <router-link to="/order">订单管理</router-link>
        </li>
        <li>
          <router-link to="/market">营销管理</router-link>
        </li>
        <li>
          <router-link to="/system">系统管理</router-link>
        </li>
        <li>
          <router-link to="/property">物业管理</router-link>
        </li>
        <li>
          <router-link to="/shopping">分销商城</router-link>
        </li>
        <li>
          <router-link to="/util">工具测试</router-link>
        </li>
      </ul>
    </div>
    <div class="menu-view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>

