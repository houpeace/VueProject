<template>
    <div class="reviewManager-wrap">
        <div class="panel panel-default cui-panel"> 
           <div class="panel-heading">
               <span class="heading-title">审核管理</span>
            </div>
            <div class="panel-body">
                <el-form ref="form" :inline="true" :model="form" label-width="100px">
                  <el-form-item label="发送人">
                      <el-input v-model="form.sender" placeholder="发送人" ></el-input>
                    </el-form-item>
                  </el-form-item>
                    <el-form-item label="提交时间">
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
                      <el-form-item label="消息类型">
                        <el-select v-model="form.messageType"  filterable placeholder="消息类型">
                            <el-option v-for="item in messageList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-form-item>

                      <el-form-item>
                        <el-button type="primary" @click="queryList()">查询</el-button>
                        <el-button type="success" @click="resolve()">同意</el-button>
                        <el-button type="danger" @click="reject()">拒绝</el-button>
                      </el-form-item>
                </el-form>
            </div>
        </div> 
        <div class="panel panel-default cui-panel"> 
            <div class="panel-body">
               <el-table :data="listData" border style="width: 100%" @select="handleSelection" @select-all="handleSelection">
                 <el-table-column
                      type="selection"
                      width="55"></el-table-column>
                    <el-table-column prop="no" label="序号" width="200"></el-table-column>
                    <el-table-column prop="sender" label="发送人" width="400"></el-table-column>
                    <el-table-column prop="uploadTime" label="提交时间" width="200"></el-table-column>
                    <el-table-column prop="messageType" label="消息类型" width="100"></el-table-column>
                    <el-table-column label="消息内容" width="auto">
                       <template slot-scope="scope"> 
                          <a class="list-ctrl" @click="view(scope.row.id)">详情</a>
                        </template>
                    </el-table-column>
               </el-table>
               <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageParam.pageNo" :page-size="pageParam.pageSize" :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="pageParam.totalCount"></el-pagination>
            </div>
          </div> 
    </div>
</template>
<script> 
let mockData = [
    {
        id:1,
        no:1,
        sender:'tom1',
        uploadTime:"2017-10-10 10:10:10",
        messageType:1,
    },
    {
        id:2,
        no:2,
        sender:'tom2',
        uploadTime:"2017-12-10 10:10:10",
        messageType:2,
    },
]
export default {
    name: '',
    components:{

    },
    props: {},
    data() {
        return {
            form:{

            },
            listData:mockData,
            messageList:[
                {
                    id:1,name:"中邮钱包"
                },
                {
                    id:2,name:"微信"
                },
                {
                    id:3,name:"短信"
                },
            ],
            pageParam: {
                pageNo: 1,
                pageSize: 10,
                totalCount: 4
            },
            multipleSelection:[]
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        queryList(){

        },
        resolve(){
            this.excute("");
        },
        reject(){
            this.excute("");
        },
        getSelectIds(){
            return new Promise((resolve,reject)=>{
                let ids = [];
                if (this.multipleSelection.length >0) {
                    ids = getIds(this.multipleSelection)
                    resolve(ids);
                }else{
                    this.errorMsg('你还没选择数据');
                    reject();
                }
            })  
            function getIds(dataList) {
                let ids = [];
                dataList.forEach(data=>{
                    ids.push(data.id);
                })
                return ids;
            }

        },
        excute(link){
            this.getSelectIds().then(ids=>{
                this.$http.post(link,{ids:ids}).then(res=>{
                    this.successMsg('操作成功');
                    this.queryList();

                })
            })
            .catch((e)=>{

            })
        },
        view(id){

        },
        handleSelection(val){
            console.log(val)
            this.multipleSelection = val;
        },
    },
    created() { 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';

</style>
