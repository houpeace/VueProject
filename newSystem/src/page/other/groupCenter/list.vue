<template>
    <div>
         <div class="panel panel-default cui-panel groupCenter-list-wrap"> 
            <div class="panel-heading">
               <span class="heading-title">用户分组</span>
            </div>
            <div class="panel-body">
                 <el-form ref="form" :inline="true" :model="queryParam">
                  <el-form-item label="模板名称">
                    <el-input v-model="queryParam.groupName" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="queryList">搜索</el-button>
                    <el-button type="success" @click="add">添加分组</el-button>
                   </el-form-item>
                </el-form>
            </div>
            <div class="panel-body">
                <el-table :data="listData" border style="width: 100%">
                    <el-table-column prop="groupName" label="名称" width="200"></el-table-column>
                    <el-table-column prop="groupLocation" label="省市地区" width="200"></el-table-column>
                    <el-table-column prop="groupAttr" label="用户属性" width="200"></el-table-column>
                    <el-table-column prop="groupTag" label="应用标签" width="200"></el-table-column>
                    <el-table-column prop="groupCount" label="预估人数" width="200"></el-table-column>
                    <el-table-column label="操作" width="auto">
                       <template slot-scope="scope"> 
                          <a class="list-ctrl" @click="push(scope.row.id)">推送消息</a>|
                          <a class="list-ctrl" @click="edit(scope.row.id)">编辑</a>|
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
    id:1,
    groupName:"名称1",
    groupLocation:"地区1",
    groupAttr:"属性1",
    groupTag:"标签1",
    groupCount:1000,
},{
    id:2,
    groupName:"名称2",
    groupLocation:"地区2",
    groupAttr:"属性2",
    groupTag:"标签2",
    groupCount:2000,
},{
    id:3,
    groupName:"名称3",
    groupLocation:"地区3",
    groupAttr:"属性3",
    groupTag:"标签3",
    groupCount:3000,
},{
    id:4,
    groupName:"名称4",
    groupLocation:"地区4",
    groupAttr:"属性4",
    groupTag:"标签4",
    groupCount:4000,
},]
export default {
    name: 'groupCenterList',
    components:{

    },
    props: {},
    data() {
        return {
          queryParam:{
            groupName:""
          },
          listData:mockData,
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
            let postData = {};
            this.$http.post("", postData, {
              emulateJSON: true
            })
            .then(res => {
              if (res.data.success) {
                this.listData = res.data.data.rows
                this.pageParam.totalCount = res.data.data.totalCount
              }
            })
        },
        add(){
            this.$router.push({
                name:"groupAdd"
            })  
        },
        push(id){
            
        },
        edit(id){
            
        },
        remove(id){

        }
    },
    created() { 
        // this.queryList();
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
