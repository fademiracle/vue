<template>
    <div class="echarts-container">
      <h3>echarts</h3>
      <div>
        <bar-chart />
      </div>
    </div>
</template>

<script>
  import barChart from '../../components/Echarts/barChart';
  export default {
    name: "index",
    components:{
      barChart
    },
    data() {
      return{
        barData:[]
      }
    }
  }
</script>

<style scoped>

</style>
