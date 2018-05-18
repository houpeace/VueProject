<template>
    <div class="chart-wrap">
         <div class="chart"></div>
    </div>
</template>
<script> 
import echarts from 'echarts'
const option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['中邮钱包','支付宝服务窗','微信','邮件','短信']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'中邮钱包',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'支付宝服务窗',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'微信',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'邮件',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'短信',
            type:'line',
            stack: '总量',
            data:[]
        }
    ]
};

export default {
    name: '',
    components:{

    },
    props: {
        xAxisData:{
            type:Array,
            default(){
                return ['周一','周二','周三','周四','周五','周六','周日'];
            }
        },
        dataList:{
            type:Array,
            default() {
                return [
                    [120, 132, 101, 134, 90, 230, 210],
                    [220, 182, 191, 234, 290, 330, 310],
                    [150, 232, 201, 154, 190, 330, 410],
                    [320, 332, 301, 334, 390, 330, 320],
                    [820, 932, 901, 934, 1290, 1330, 1320]
                ]
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
            option.series.forEach((single,index)=>{
                single.data = this.dataList[index];
            })
        }
    },
    mounted() {
        console.log('mounted')
        this.chartView = echarts.init(
          document.querySelectorAll('.chart')[0]
        )
        this.setOption() 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
.chart{
    @include wh(100%,400px);
}
</style>
