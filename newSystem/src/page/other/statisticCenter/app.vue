<template>
    <div>
        <div class="panel panel-default cui-panel staticApp-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">数据统计</span>
                  <span class="heading-ctrl">
                    <el-select v-model="form.platform" placeholder="请选择" @change="getStatiData()">
                        <el-option  v-for="item in platformList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                      </el-select>
                    <el-select v-model="form.version" placeholder="请选择" @change="getStatiData()">
                        <el-option  v-for="item in versionList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                      </el-select>
                    <el-select v-model="form.time" placeholder="请选择" @change="getStatiData()">
                        <el-option  v-for="item in timeList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                      </el-select>
                  </span>
           </div>
           <div class="panel-body chart-wrap">
                <div class="chart-head">
                    <span class="chart-title">推送统计</span>
                    <el-button class="fr" type="primary" @click="exportExcel()">导出</el-button>
                </div>
                <el-tabs v-model="pushCart" type="card" @tab-click="">
                    <el-tab-pane label="推送数量" name="first">
                        <chart-view :xAxisData="xAxisData0" :dataList="chartData0" :index="0"></chart-view>
                    </el-tab-pane>
                    <el-tab-pane label="用户点击数" name="second">
                        <chart-view :xAxisData="xAxisData1" :dataList="chartData1" :index="1"></chart-view>
                    </el-tab-pane>
                  </el-tabs>
                  <over-view :dataList ="[chartData0,chartData1]" :types="['推送数量','用户点击数']"></over-view>
           </div>
           <div class="panel-body chart-wrap">
               <div class="chart-head">
                    <span class="chart-title">推送用户</span>
                    <el-button class="fr" type="primary" @click="exportExcel()">导出</el-button>
                </div>
                <el-tabs v-model="userCart" type="card" @tab-click="">
                    <el-tab-pane label="新增用户" name="first">
                        <chart-view :xAxisData="xAxisData3" :dataList="chartData3" :index="2"></chart-view>
                    </el-tab-pane>
                    <el-tab-pane label="在线用户" name="second">
                        <chart-view :xAxisData="xAxisData4" :dataList="chartData4" :index="3"></chart-view>
                    </el-tab-pane>
                  </el-tabs>
                  <over-view :dataList ="[chartData3,chartData4]" :types="['推送新增','在线用户']"></over-view> 
           </div>
        </div> 
    </div>
</template>
<script> 

import chartView from './component/chartView.vue'
import overView from './component/overView.vue'
export default {
    name: 'staticApp',
    components:{
        chartView,overView
    },
    props: {},
    data() {
        return {
            form:{
                platform:-1,
                version:-1,
                time:1,
            },
            pushCart:"first",
            userCart:"first",
            xAxisData0:['2017.04', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11'],
            xAxisData1:['2017.05', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11'],
            chartData0:[800, 93200, 900, 93124, 1293330, 13230, 13220],
            chartData1:[200, 9200, 9001, 93124, 129330, 13230, 13220],
            xAxisData3:['2017.04', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11'],
            xAxisData4:['2017.05', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11'],
            chartData3:[8000, 93200, 900, 93124, 1293330, 13230, 13220],
            chartData4:[2000, 9200, 9001, 93124, 129330, 13230, 13220],
            platformList:[
                {
                    name:"全部平台",
                    id:-1
                },
                {
                    name:"Andrews",
                    id:1
                },
                {
                    name:"ios",
                    id:2
                },
            ],
            versionList:[
                {
                    name:"全部版本号",
                    id:-1
                },
                {
                    name:"1.1",
                    id:1
                },
                {
                    name:"2.1",
                    id:2
                },
            ],
            timeList:[
                {
                    name:"当天",
                    id:1
                },
                {
                    name:"最近7天",
                    id:2
                },
                {
                    name:"最近1月",
                    id:3
                },
                {
                    name:"最近3月",
                    id:4
                },
                {
                    name:"自定义",
                    id:5
                },
            ]
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        exportExcel(){
            let url = "";
            window.open(url);
        },
        getStatiData(){
            this.$http.post("",{data:getParam()});
        },
        getParam(){
            return this.form;
        }
    },
    created() { 
        this.getStatiData();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
 .panel-heading{
    height: 60px;
    line-height: 60px;
 }
.heading-ctrl{
    float: right;
}
.chart-head{
    margin-bottom: 30px;
}
</style>
