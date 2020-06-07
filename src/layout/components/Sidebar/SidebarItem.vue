<template>
  <!--login,register,404等页面忽略 不设置hidden的-->
  <div v-if="!item.hidden">
    <!-- 是否只有一个子路由 -->
    <div v-if="hasOneShowingChild(item.children,item) ">
      <!-- oneShowingChild 有 meta -->
      <Link v-if="oneShowingChild.meta" :to="resolvePath(oneShowingChild.path)">
        <!-- el-menu-item 单个 -->
        <el-menu-item :index="resolvePath(oneShowingChild.path)">
          <!--取该title和icon-->
          <Item :icon="oneShowingChild.meta.icon || item.meta.icon" :title="oneShowingChild.meta.title"></Item>
        </el-menu-item>
      </Link>
    </div>

    <!--el-submenu 嵌套路由 多个子路由;popper-append-to-body 防止多级菜单跑到外边-->
    <div v-else ref="subMenu">
      <el-submenu :index="resolvePath(item.path)" popper-append-to-body>
        <div v-if="item.meta" slot="title">
<!--          <svg-icon icon-class={item.meta.icon} />-->
<!--          <span slot='title'>{title}</span>-->
          <!--取该title和icon-->
          <Item :icon="item.meta.icon" :title="item.meta.title"></Item>
        </div>
        <sidebar-item
          v-for="child in item.children"
          :item="child"
          :base-path="resolvePath(child.path)"
          :key="child.path"
        />
      </el-submenu>
    </div>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '../../../utils/validate'
import Item from './Item'
import Link from './Link'
export default {
  name: "SidebarItem",
  components: {
    Item,
    Link
  },
  props:{
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      oneShowingChild: null
    }
  },
  methods: {
    //children = item.children , parent = item (route in this.$router.options.route)
    hasOneShowingChild(children = [], parent) {
      //在template双花括号中或者v-bind中绑定的对象,这里对children进行过滤
      const showingChildren = children.filter(obj => {
        //console.log(obj);
        //hidden没有 不走
        if (obj.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.oneShowingChild = obj;
          // return 到哪里??
          return true
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        // hasOneShowingChild=true
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        // 给onlyOneChild赋值 继承parent 就是 item (route in this.$router.options.route)
        this.oneShowingChild = { ...parent, path: '', noShowingChildren: true };
        return true
      }
      return false
    },
    // 绑定菜单item中 index动态绑定
    resolvePath(routePath) {
      // 是否为外部链接
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      //path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径 /basePath/routePath
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style scoped>

</style>
