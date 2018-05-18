<template>
    <div>
        <div class="panel panel-default cui-panel userCenter-list-wrap"> 
            <div class="panel-heading">
               <span class="heading-title">操作员查询</span>
            </div>
            <div class="panel-body">
                <div style="padding-bottom:20px">
                    <el-button type="primary" @click="add">添加角色</el-button>
                </div>
                <el-table :data="listData" border style="width: 100%">
                    <el-table-column prop="roleName" label="角色名称" width="200"></el-table-column>
                    <el-table-column prop="roleDesc" label="角色描述" width="400"></el-table-column>
                    <el-table-column prop="creatTime" label="创建时间" width="400"></el-table-column>
                    <el-table-column label="操作" width="auto">
                       <template slot-scope="scope"> 
                          <a class="list-ctrl" @click="edit(scope.row.id)">修改</a>|
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
    id:"1",
    roleName:"tom1",
    roleDesc:"描述1",
    creatTime:"2015-1-1 15:30:30"
},{
    id:"2",
    roleName:"tom2",
    roleDesc:"描述2",
    creatTime:"2015-1-2 15:30:30"
},{
    id:"3",
    roleName:"tom3",
    roleDesc:"描述3",
    creatTime:"2015-1-3 15:30:30"
},{
    id:"4",
    roleName:"tom4",
    roleDesc:"描述4",
    creatTime:"2015-1-4 15:30:30"
},]
export default {
    name: 'roleList',
    components:{
         
    },
    props: {
        
    },
    data() {
        return {
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
        queryList(){
            // this.$http.get('').then(res=>{
            //     this.listData =  res.data.data
            // })
            this.listData = mockData;
        },
        add(){
            this.$router.push({
                name:'addRole'
            })
        },
        edit(id){
            this.$router.push({
                name:'editRole',
                params:{
                    id:id,
                }
            })
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
