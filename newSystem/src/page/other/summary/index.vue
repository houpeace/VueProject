<template>
    <div>
        <div class="panel panel-default cui-panel history-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">历史发送消息一览</span>
                  <span class="heading-ctrl">
                        <el-button type="danger" @click="changeType('week')">每周</el-button>
                        <el-button type="primary" @click="changeType('mounth')">每月</el-button>
                        <el-button type="primary" @click="changeIndividual()">自定义</el-button>
                  </span>
           </div>

            <div class="panel-body">
                <div class="content">
                    <!-- <chart-view :dataList="historyMessage" :xAxisData="historyXData"></chart-view> -->
                    <chart-view></chart-view>
                </div>
            </div>
        </div>
        <div class="panel panel-default cui-panel edit-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">最近编辑</span>
                  <span class="gray">历史编辑信息仅保留7天</span>
           </div>
            <div class="panel-body">
                <div class="content">
                   <edit-item data></edit-item>
                   <edit-item data></edit-item>
                   <edit-item data></edit-item>
                   <edit-item data></edit-item>
                   <edit-item data></edit-item>
                  <!--  <template v-for="item in editDatas" :key="id">
                       <edit-item :id="item.id" :itemType="item.itemType" :imgSrc="item.imgSrc" :title="item.title"></edit-item>
                   </template>  -->                  
                </div>
            </div>
        </div> 
        <el-dialog
          title="提示"
          :visible.sync="timeDialog.visible"
          width="30%" >
           <el-date-picker v-model="timeDialog.startTime" type="datetime" placeholder="开始时间">
            </el-date-picker> -
            <el-date-picker v-model="timeDialog.endTime" type="datetime" placeholder="结束时间">
            </el-date-picker>
          <div slot="footer" class="dialog-footer">
            <el-button @click="timeDialog.visible = false">取 消</el-button>
            <el-button type="primary" @click="validateTime()">确 定</el-button>
          </div>
        </el-dialog>
    </div>

</template>
<script> 
import chartView from './component/chart.vue'
import editItem from './component/editItem.vue'
export default {
    name: 'summary',
    components:{
        chartView,editItem
    },
    props: {},
    data() {
        return {
            historyMessage:[],
            historyXData:[],
            historyDataType:'week',
            editDatas:[],
            timeDialog:{
                visible:false,
                startTime:'',
                endTime:'',
            },
            dataTime:"",
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        getHistoryMessage(){
            this.$http.get('',{type:this.historyDataType}).then(response=>{
                let data = response.data;
                this.historyMessage = data;
                this.historyXData = this.getHistoryXData(data);
            })
        },
        changeType(type){
           
        },
        changeIndividual(type){
            this.timeDialog.visible = true;
        },
        validateTime(){
            if (this.timeDialog.startTime < this.timeDialog.endTime
                &&this.timeDialog.startTime 
                &&this.timeDialog.endTime) {
                this.timeDialog.visible = false;
                this.changeType('time');
            }else{
                this.errorMsg("结束时间要大于开始时间")
            }
        },
        getEditDatas(){
            this.$http.get('').then(response=>{
                this.editDatas = response.data;
            })
        },
    },
    created() { 
        //this.getHistoryMessage();
        //this.getEditDatas();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<style rel="stylesheet/scss" lang="scss" scoped> 
@import '~scss/mixin.scss';
.history-wrap{
    .panel-heading{
        height: 40px;
        padding:10px;
    }
    .heading{
        overflow: hidden;
        padding: 10px 0;
        &-title{
            line-height: 40px;
        }
        &-ctrl{
            float: right;
        }
    }
}
.edit-wrap{
    .heading-title{
        margin-right: 20px;
    }
}

</style>
