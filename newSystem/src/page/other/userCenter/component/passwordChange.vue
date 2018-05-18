<template>
<el-dialog
  title="提示"
  :visible.sync="visible"
  width="50%" >
    <el-form :model="form" :rules="rules" ref="form" label-width="140px">
        <el-form-item label="新密码" prop="password1">
          <el-input v-model="form.password1" placeholder="请输入新密码" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input v-model="form.password2" placeholder="请再次输入新密码" ></el-input>
        </el-form-item>
    </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="submit()">确 定</el-button>
  </div>
</el-dialog>
</template>
<script> 
export default {
    name: 'passwordChange',
    components:{

    },
    props: {
        id:{
            type:[Number,String],
            default:-1,
        }
    },
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
                password1:"",
                password2:"",
            },
            rules:{
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
        id(){
           this.resetFormData(); 
        } 
    },
    methods: {
        show(){
            this.visible = true;
        },
        resetFormData(){
            console.log(this.$refs.form)
            this.$refs.form.resetFields();
            // this.form.password1 = "";
            // this.form.password2 = "";
        },
        submit(){
            this.$refs.form.validate(valid => {
                valid&&this.$http.post("",{postData:this.getPostData()}).then(res=>{
                    this.successMsg('修改成功');
                })
            })
        },
        getPostData(){
            let postData = {
                id:this.id,
                password1:this.password1,
                password2:this.password2,
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

</style>
