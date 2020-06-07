<template>
  <component v-bind="linkProps(to)">
    <!--匿名插槽,相当于占了个坑-->
    <slot/>
  </component>
</template>

<script>
  import { isExternal } from '../../../utils/validate'
  export default {
    name: "Link",
    props: {
      // resolvePath(oneShowingChild.path)
      to: {
        type:String,
        required: true
      }
    },
    methods: {
      linkProps(url) {
        // 是否为外部链接 a标签
        if (isExternal(url)) {
          return {
            is:'a',
            href: url,
            // target: '_blank',
            // rel: 'noOpener'
          }
        }
        return {
          // 内部链接 router-link
          is:'router-link',
          to:url
        }
      }
    }
  }
</script>

<style scoped>

</style>
