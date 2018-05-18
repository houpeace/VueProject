<template>
<el-form :model="form" :rules="rules" ref="form" label-width="140px">
    <el-form-item label="角色名称" prop="roleName">
      <el-input v-model="form.roleName" placeholder="请输入角色名称" ></el-input>
    </el-form-item>
    <el-form-item label="角色描述" prop="roleDesc">
      <el-input v-model="form.roleDesc" placeholder="请输入角色描述" ></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="save">提交</el-button>
        <el-button @click="forward">取消</el-button>
    </el-form-item>
</el-form>
</template>
<script> 
export default {
    name: 'roleDetail',
    components:{

    },
    props: {
        pageType:{
            type:String,
            default:"add",
        },
        id:{
            type:[Number,String],
            default:-1,
        },
    },
    data() {
        return {
            form:{
                roleName:"",
                roleDesc:"",
            },
            rules:{
                roleName: [{
                    required: true,
                    message: '请输入角色名称',
                    trigger: "blur",
                }],
                roleDesc: [{
                    required: true,
                    message: '请输入角色描述',
                    trigger: "blur",
                }],
            }
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
        if (this.pageType=="edit") {
            this.getDetail(this.id);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';

</style>
