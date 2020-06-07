<template>
  <div class="layout">
    <div class="nav-bar">
      <Nav-bar />
    </div>
    <Side-bar class="sidebar-container" />
<!--    <button v-on:click="getRouter">遍历路由</button>-->
    <App-main class="AppMain-container"/>
<!--    <el-menu-->
<!--      :default-active="activeMenu">-->
<!--    </el-menu>-->
<!--    <button @click="hasOneShowingChild([],routes)">textFiler</button>-->
<!--    <p v-for="route in routes" :key="route.path" :item="route">{{route.path}}&#45;&#45;{{route.children}}</p>-->
<!--    <p v-for="ch in child">{{ch.name}}-&#45;&#45;{{ch.meta}}</p>-->
  </div>
</template>

<script>
import SideBar from './components/Sidebar/index'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import router from '../router'
export default {
  name: "Layout",
  components:{
    NavBar,
    SideBar,
    AppMain
  },
  data() {
    return {
      // onlyOneChild:null
    }
  },
  computed:{
    routes() {
      return this.$router.options.routes
    },
    // activeMenu() {
    //   const route = this.$route;
    //   console.log(route);
    //   const {meta , path} = route;
    //   console.log(meta);
    //   console.log(path)
    // }
    // child() {
    //   let route = this.$router.options.routes;
    //   var arr = [];
    //   for (let i=0;i<route.length;i++){
    //     if (route[i].children){
    //       for (let j=0;j<route[i].children.length;j++){
    //         arr.push(route[i].children[j])
    //       }
    //     }
    //   }
    //   console.log(arr);
    //   return arr
    // }
  },
  methods: {
    // hasOneShowingChild(children = [], parent) {
    //   const showingChildren = children.filter(obj => {
    //     //console.log(obj);
    //     if (obj.hidden) {
    //       console.log('不会打印');
    //       //showingChildren为空
    //       return false
    //     } else {
    //       this.onlyOneChild = obj;
    //       //console.log(this.onlyOneChild);
    //       return true
    //     }
    //   });
    //   //console.log(showingChildren);
    //   if (showingChildren.length === 1) {
    //     return true
    //   }
    //   if (showingChildren.length === 0) {
    //     this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
    //     //console.log(this.onlyOneChild);
    //     return true
    //   }
    //   return false
    // },
    getRouter() {
      let routes= this.$router.options.routes;
      //afterHooks,beforeHooks,app,apps,mode,options等
      //console.log(this.$router);
      //mode,routes
      //console.log(this.$router.options);
      //路由信息
      console.log(routes);

      //子路由信息
      for (let i=0;i<routes.length;i++){
        //路由下每一个根item信息
        let item = routes[i];
        if (item){
          //console.log(item);
          //console.log(item.path)
        }
        //根下子路由children中信息
        let child = item.children;
        if (child){
          for (let j=0;j<child.length;j++){
            //console.log(child[j].path);
            if (child[j].meta){
              //console.log(child[j].meta.title+child[j].meta.icon)
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  .layout {
    position: relative;
    height: 100%;
    width: 100%;
  }

</style>
