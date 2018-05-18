<template>
    <div class="chart-wrap">
         <div class="chart"></div>
    </div>
</template>
<script> 
import echarts from 'echarts'
const option = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['2017.05', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [8200, 93200, 9001, 93124, 1293330, 13230, 13220],
        type: 'line'
    }]
};

export default {
    name: '',
    components:{

    },
    props: {
        index:{
            type:Number,
            default:0,
        },
        xAxisData:{
            type:Array,
            default(){
                return ['2017.05', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11']
            }
        },
        dataList:{
            type:Array,
            default() {
                return []
            }
        },
    },
    data() {
        return {
            chartView:null,
        }
    },
    computed: { 
    },
    watch:{
       dataList(){
            this.chartView.clear();
            this.setOption();
       }  
    },
    methods: {
        initChart(){
            this.initChartWidth();
            this.chartView = echarts.init(
              document.querySelectorAll('.chart')[this.index]
            )
            this.setOption();
        },
        initChartWidth(){
            let chartWrap = document.querySelector('.chart-wrap');
            let cWidth = chartWrap.clientWidth;
            let chart = document.querySelectorAll('.chart')[this.index];
            chart.style.width = cWidth + 'px';
        },
        setOption(){
            let option = this.getOption();
            this.chartView.setOption(option)
        },
        getOption(){
            let cacheOption = JSON.parse(JSON.stringify(option));
            this.initSeriesData(cacheOption);
            cacheOption.xAxis.data = this.xAxisData;
            return cacheOption;
        },
        initSeriesData(option){
            option.series[0].data = this.dataList;
        }
    },
    mounted() {
        this.initChart();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
.chart{
    height:400px;
}
</style>
