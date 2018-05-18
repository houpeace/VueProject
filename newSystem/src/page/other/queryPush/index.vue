<template>
    <div>
        <div class="panel panel-default cui-panel queryPush-wrap"> 
            <div class="panel-heading">
               <span class="heading-title">推送记录</span>
            </div>
            <div class="panel-body">
                <el-form ref="form" :inline="true" :model="form" label-width="100px">
                    <div>
                      <el-form-item label="推送时间">
                        <el-date-picker
                          v-model="form.startDate"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker> -
                        <el-date-picker
                          v-model="form.endDate"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                        <a class="queryPush-dateQuick" @click="rangeDate(3)">3天</a>
                        <a class="queryPush-dateQuick" @click="rangeDate(7)">7天</a>
                        <a class="queryPush-dateQuick" @click="rangeDate(30)">30天</a>
                    </div>
                  <el-form-item label="目标用户">
                    <el-select v-model="form.userGroup"  filterable placeholder="请选择所属部门">
                        <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form-item>

                  <el-form-item label="后续动作">
                    <el-select v-model="form.action"  filterable placeholder="请选择所属部门">
                        <el-option v-for="item in actionList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form-item>
                  <el-form-item label="推送状态">
                    <el-select v-model="form.pushSate" placeholder="请选择地区">
                      <el-option v-for="item in stateList" :key="item.id"  :label="item.name" :value="item.id"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="queryList">搜索</el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="clear">重置</el-button>
                  </el-form-item>
            </el-form>
            </div>
        </div> 
        <div class="panel panel-default cui-panel queryPush-wrap"> 
            <div class="panel-body">
               <el-table :data="listData" border style="width: 100%">
                    <el-table-column prop="recomentTime" label="推送时间" width="200"></el-table-column>
                    <el-table-column prop="group" label="目标用户" width="400"></el-table-column>
                    <el-table-column prop="action" label="后续动作" width="200"></el-table-column>
                    <el-table-column prop="recomentState" label="推送状态" width="100"></el-table-column>
                    <el-table-column label="操作" width="auto">
                       <template slot-scope="scope"> 
                          <a class="list-ctrl" @click="view(scope.row.id)">详情</a>|
                          <a class="list-ctrl" @click="sendOther(scope.row.id)">转发</a>|
                          <a class="list-ctrl" @click="remove(scope.row.id)">删除</a>
                        </template>
                    </el-table-column>
               </el-table>
               <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageParam.pageNo" :page-size="pageParam.pageSize" :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="pageParam.totalCount"></el-pagination>
            </div>
          </div> 

    </div>
</template>
<script> 
let mockData = [{
        id: 1,
        recomentTime: "2018-05-01  18：05：03",
        group: "特定用户1",
        action: "打开链接1",
        recomentState: "成功"
    }, {
        id: 2,
        recomentTime: "2018-05-02  18：05：03",
        group: "特定用户2",
        action: "打开链接2",
        recomentState: "成功"
    }, {
        id: 3,
        recomentTime: "2018-05-03  18：05：03",
        group: "特定用户3",
        action: "打开链接3",
        recomentState: "成功"
}];
export default {
    name: 'queryPush',
    components:{

    },
    props: {},
    data() {
        return {
            form:{
                startDate:"",
                endDate:"",
            },
            groupList:[],
            actionList:[],
            stateList:[],
            listData:[],
            pageParam: {
                pageNo: 1,
                pageSize: 10,
                totalCount: 4
            },

        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        rangeDate(days){
            this.form.endDate = new Date();
            
            this.form.startDate = new Date(this.form.endDate.getTime()-days*24*3600*1000);
            
        },
        queryList(){
            this.listData = mockData;
        },
        view(id){

        },
        sendOther(id){

        },
        async remove(id){
            await this.$http.get('?id='+id);
            this.queryList;
        }
    },
    created() { 
        this.queryList();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
.queryPush{
    &-dateQuick{
        margin: 14px;
        cursor: pointer;
        line-height: 40px;
    }
}
.list-ctrl{
    margin: 10px;
    cursor: pointer;
}
</style>
