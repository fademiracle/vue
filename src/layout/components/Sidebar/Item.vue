<script>
  export default {
    name: "MenuItem",
    functional: true,
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    render(h,context) {
      const {icon ,title } = context.props;
      const vNodes = [];
      //菜单栏图标加载
      if (icon) {
        vNodes.push(<svg-icon icon-class={icon}/>)
      }
      //菜单栏名字加载
      if (title) {
        vNodes.push(<span slot='title'>{(title)}</span>)
      }
      return vNodes
    }
  }
</script>

<style scoped>

</style>
