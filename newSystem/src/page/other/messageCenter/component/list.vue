<template>
    <div class="messageCenter-wrap">
        <div class="messageCenter-ctrl" v-if="type=='all'">
            <el-button type="danger" @click="remove">删 除</el-button>
            <el-button type="primary" @click="read">标记已读</el-button>
            <el-button type="primary" @click="mutilRead">全部已读</el-button>
        </div>
        <el-table :data="listData" border style="width: 100%" @select="handleSelection" @select-all="handleSelection">
         <el-table-column
              type="selection"
              width="55"></el-table-column>
            <el-table-column prop="uploadDate" label="提交时间" width="600"></el-table-column>
            <el-table-column label="消息内容" width="auto">
               <template slot-scope="scope">
                  <span @click="showDetail(scope.row)">{{scope.row.message}}</span>
                </template>
            </el-table-column>
       </el-table>
       <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageParam.pageNo" :page-size="pageParam.pageSize" :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="pageParam.totalCount"></el-pagination>

       <detail-dialog :messageid="detailId" :desc="detailDesc" ref="detailDialog"></detail-dialog>
    </div>
</template>
<script> 
import detailDialog from './detailDialog.vue'
let mockData = [
  {
    "id":1,
    "message": "message1",
    "uploadDate": "2018-05-13",
    "statue": 1
  },
  {
    "id":2,
    "message": "message2",
    "uploadDate": "2018-05-14",
    "statue": 0
  },
  {
    "id":3,
    "message": "message3",
    "uploadDate": "2018-05-15",
    "statue": 1
  },
  {
    "id":4,
    "message": "message4",
    "uploadDate": "2018-05-16",
    "statue": 1
  }
]
const map = [{
    name: 'resolve',
    id: 1
}, {
    name: 'pedding',
    id: 0
}]
export default {
    name: 'messageCenter',
    components:{
        detailDialog
    },
    props: {
        type:{
            type:String,
            default:'all'
        }
    },
    data() {
        return {
            listData:mockData,
            pageParam: {
                pageNo: 1,
                pageSize: 10,
                totalCount: 4
            },
            multipleSelection:[],
            detailId:-1,
            detailDesc:'',
        }
    },
    computed: { 
    },
    watch:{ 
        'type'(val,oldVal){
            this.queryList(val);
            this.multipleSelection = [];
        }
    },
    methods: {
         // queryList(){
         //    let param = getParam();
         //    this.$http.post('',param).then(response=>{
         //        let data  = response.data;
         //        this.listData = data.data;
         //        this.pageParam.totalCount = data.totalCount;
         //    })
         // },
         queryList(){
            if (this.type=='all') {
                this.listData = mockData;
            }else{
                let id = this.queryVauleByMap(map,this.type,'id','name');
                this.listData = mockData.filter(value=>{
                    return value.statue == id;
                })
            }
         },
         getParam(){
            return Object.assign({},this.pageParam,{type:this.type});
         },
         handleSelection(val){
            console.log(val)
            this.multipleSelection = val;
         },
         remove(){
            this.getSelectIds().then(ids=>{
                this.$http.post('message/delete',{ids:ids}).then(response=>{
                    this.successMsg('删除成功');
                    this.queryList();
                })
            })
         },
         read(){
            this.getSelectIds().then(ids=>{
                this.$http.post('message/read',{ids:ids}).then(response=>{
                    this.successMsg('操作成功');
                    this.queryList();
                })
            })
         },
         mutilRead(){
            this.getSelectIds().then(ids=>{
                this.$http.post('message/mutilRead').then(response=>{
                    this.successMsg('操作成功');
                    this.queryList();
                })
            })
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
         showDetail(data){
            this.detailId = data.id;
            this.detailDesc = data.message;
            this.$refs.detailDialog.show();
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
.messageCenter{
    &-wrap{
        padding:10px 30px;
    }
    &-ctrl{
        padding-bottom: 30px;
    }
}
</style>
