<template>
  <div id="BarChart" :style="{height:height,width:width}">

  </div>
</template>

<script>
  export default {
    name: "BarChart",
    props: {
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: "400px"
      }
    },
    data() {
      return {
        chart:null,
        categories:[],
        ydata:[],
        chartData:{
          // categories: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
          // data: [5, 20, 36, 10, 10, 20]
        }
      }
    },
    mounted() {
      this.init();
      // this.chart.setOption({
      //   xAxis: {
      //     data: this.chartData.categories
      //   },
      //   series: [{
      //     // 根据名字对应到相应的系列
      //     name: '销量',
      //     data: this.chartData.data
      //   }]
      // });
      // console.log(this.categories);
      // console.log(this.ydata);
      this.fetchData();
    },
    watch:{
      categories:'setOptionNew',
      ydata:'setOptionNew'
    },
    methods:{
      init(){
        this.chart = this.$echarts.init(document.getElementById('BarChart'));
        this.setOption();
      },
      setOption(){
        this.chart.setOption({
          title: {
            text: '柱状图'
          },
          tooltip: {
          },
          legend: {
            data: ['销量']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: []
          },
          yAxis: {
          },
          series: [
            {
              name: '销量',
              type: 'bar',
              data: []
            }
          ]
        })
      },
      setOptionNew(){
        this.chart.setOption({
          xAxis: {
            data: this.categories
          },
          series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            data: this.ydata
          }]
        });
        // console.log(this.categories);
        // console.log(this.ydata);
      },
      fetchData() {
        setTimeout(()=>{
          this.categories = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"];
          this.ydata = [5, 20, 36, 10, 10, 20]
          },1000)
      },
    }
  }
</script>

<style scoped>

</style>
