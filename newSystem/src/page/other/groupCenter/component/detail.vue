<template>
    <div class="panel panel-default cui-panel groupCenter-detail-wrap"> 
       <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item label="分析任务名称" prop="taskName">
            <el-input v-model="form.taskName" placeholder="请输入内容" :maxlength="15"></el-input>
          </el-form-item>
           <p class="panel-tip">
               <i class="icon el-icon-info"></i>分组结果：当前你选中了 98 位用户。
           </p>
          <el-form-item>
                <el-button type="primary" @click="save">提交</el-button>
                <el-button @click="forward">取消</el-button>
            </el-form-item>
        </el-form>
    </div> 
</template>
<script> 
export default {
    name: 'groupCenterDetail',
    components:{

    },
    props: {
        pageType:{
            type:String,
            default:'add'
        }
    },
    data() {
        return {
            form:{
                taskName:""
            },
            rules:{}
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        getDetail(id){
            this.$http.get("?id="+id).then(res=>{

            })
        },
        save(){
            this.$refs.form.validate(valid => {
                valid&&this.$http.post("",{postData:this.getPostData()}).then(res=>{
                    this.successMsg('修改成功');
                })
            })
        },
        getPostData(){
            let postData = {
                roleName:this.roleName,
                roleDesc:this.roleDesc,
            }
            if (this.pageType == "edit") {
                postData.id = this.id;
            }
            return postData;
        }
    },
    created() { 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
.groupCenter-detail-wrap{
    padding: 10px;
}
</style>
