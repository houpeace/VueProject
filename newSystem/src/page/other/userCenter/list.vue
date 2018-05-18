<template>
    <div>
        <div class="panel panel-default cui-panel userCenter-list-wrap"> 
            <div class="panel-heading">
               <span class="heading-title">操作员查询</span>
            </div>
            <div class="panel-body">
                <div style="padding-bottom:20px">
                    <el-button type="primary" @click="add">添加操作员账户</el-button>
                </div>
                <el-table :data="listData" border style="width: 100%">
                    <el-table-column prop="userName" label="用户名" width="200"></el-table-column>
                    <el-table-column prop="email" label="邮箱" width="400"></el-table-column>
                    <el-table-column prop="creatTime" label="创建时间" width="400"></el-table-column>
                    <el-table-column label="操作" width="auto">
                       <template slot-scope="scope"> 
                          <a class="list-ctrl" @click="setting(scope.row.id)">权限管理</a>|
                          <a class="list-ctrl" @click="resetPassword(scope.row.id)">密码重置</a>|
                          <a class="list-ctrl" @click="remove(scope.row.id)">删除</a>
                        </template>
                    </el-table-column>
               </el-table>
               <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageParam.pageNo" :page-size="pageParam.pageSize" :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="pageParam.totalCount"></el-pagination>
            </div>
        </div> 
        <password-dialog :id="passwordDetailId" ref="passwordDialog"></password-dialog>
    </div>
</template>
<script> 
let mockData = [{
    id:"1",
    userName:"tom1",
    email:"tom1@tom.com",
    creatTime:"2015-1-1 15:30:30"
},{
    id:"2",
    userName:"tom2",
    email:"tom1@tom.com",
    creatTime:"2015-1-2 15:30:30"
},{
    id:"3",
    userName:"tom3",
    email:"tom1@tom.com",
    creatTime:"2015-1-3 15:30:30"
},{
    id:"4",
    userName:"tom4",
    email:"tom1@tom.com",
    creatTime:"2015-1-4 15:30:30"
},]
import passwordDialog from './component/passwordChange.vue'
export default {
    name: 'list',
    components:{
        passwordDialog 
    },
    props: {
        
    },
    data() {
        return {
            listData:[],
            passwordDetailId:-1,
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
        queryList(){
            // this.$http.get('').then(res=>{
            //     this.listData =  res.data.data
            // })
            this.listData = mockData;
        },
        add(){
            this.$router.push({
                name:'addUser'
            })
        },
        setting(id){

        },
        resetPassword(id){
            this.passwordDetailId = id;
            this.$refs.passwordDialog.show();
        },
        remove(id){
            this.$confirm("你确定要删除吗？").then(()=>{
                this.$http.get('?id='+id).then(()=>{
                    this.queryList();
                })
            }).catch((e)=>{
                console.log(e)
            })
        },
    },
    created() { 
        this.queryList();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
.list-ctrl{
    margin: 10px;
    cursor: pointer;
}
</style>
