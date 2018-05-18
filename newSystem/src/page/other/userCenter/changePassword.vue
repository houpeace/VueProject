<template>
    <div>
        <div class="panel panel-default cui-panel changePassword-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">修改密码</span>
            </div>
            <div class="panel-body">
                <el-form :model="form" :rules="rules" ref="form" label-width="140px">
                    <el-form-item label="旧密码" prop="oldPasswrod">
                      <el-input v-model="form.oldPasswrod" placeholder="请输入旧密码" ></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="password1">
                      <el-input v-model="form.password1" placeholder="请输入新密码" ></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="password2">
                      <el-input v-model="form.password2" placeholder="请再次输入新密码" ></el-input>
                    </el-form-item>
                    <el-form-item>                      
                        <el-button type="primary" @click="submit()">确 定</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div> 
    </div>
</template>
<script> 
export default {
    name: '',
    components:{

    },
    props: {},
    data() {
         var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.form.password2 !== '') {
                this.$refs.form.validateField('password2');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password1) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
        return {
            visible:false,
            form:{
                oldPasswrod:"",
                password1:"",
                password2:"",
            },
            rules:{
                oldPasswrod: [
                    { required: true, message:"请输入旧密码",trigger: 'blur' }
                ],
                password1: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                password2: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
    },
    created() { 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';

</style>
