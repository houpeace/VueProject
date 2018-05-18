<template>
    <div>
        <div class="panel panel-default cui-panel userCenter-add-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">添加操作员账户</span>
            </div>
            <div class="panel-body">
                <el-form :model="form" :rules="rules" ref="form" label-width="140px">
                    <el-form-item label="员工号" prop="userId">
                      <el-input v-model="form.userId" placeholder="请输入员工号" ></el-input>
                    </el-form-item>
                    <el-form-item label="公司邮箱" prop="email">
                      <el-input v-model="form.email" placeholder="请输入公司邮箱" ></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="userName">
                      <el-input v-model="form.userName" placeholder="员工号为姓名全拼" ></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码" prop="userTel">
                      <el-input v-model="form.userTel" placeholder="请输入电话号码" ></el-input>
                    </el-form-item>
                    <el-form-item label="所属部门" prop="userGroup">
                      <el-select v-model="form.userGroup"  filterable placeholder="请选择所属部门">
                        <el-option v-for="item in filterList" :key="item.id" :label="item.groupName" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="角色名称" prop="userType">
                      <el-select v-model="form.userType"  filterable placeholder="请选择角色名称">
                        <el-option v-for="item in filterList" :key="item.id" :label="item.groupName" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                     <el-form-item>
                    <el-button type="primary" @click="save">提交</el-button>
                    <el-button @click="back">取消</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </div> 
    </div>
</template>
<script> 
export default {
    name: 'add',
    components:{

    },
    props: {},
    data() {
        return {
            form:{

            },
            rules:{
                userId: [{
                    required: true,
                    message: '请输入员工号',
                    trigger: "blur",
                }],
                email: [{
                    required: true,
                    message: '请输入公司邮箱',
                    trigger: "blur",
                }],
                userName: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: "blur",
                }],
                userTel: [{
                    required: true,
                    message: '请输入联系电话',
                    trigger: "blur",
                }],
                userGroup: [{
                    required: true,
                    message: '请选择所属部门',
                    trigger: "change",
                }],
                userType: [{
                    required: true,
                    message: '请选择角色名称',
                    trigger: "change",
                }],
            }
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        save(){
            this.$refs.form.validate(valid => {
                valid&&this.$http.post('xxx',{
                    data:this.getPostData()
                }).then(res=>{
                    this.successMsg('创建成功');
                    setTimeout(()=>{
                        this.back();
                    })
                })
            })
        },
        getPostData(){
            let data = {}
            return data;
        },
        back(){
            this.$router.push({
                name:"userCenter"
            })
        }
    },
    created() { 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss"> 
 @import '~scss/mixin.scss';
.userCenter-add-wrap{
    .el-select{
        width: 100%;
    }
}
</style>
