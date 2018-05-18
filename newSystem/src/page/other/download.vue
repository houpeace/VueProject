<template>
    <div>
        <div class="panel panel-default cui-panel login-wrap"> 
            <div class=" ">
                <img :src="logo" alt="" class="login-logo">
                <div class="login-form">
                    <h1 class="login-title">欢迎使用统一消息中心</h1>
                    <p class="login-text">请登录您的账号</p>
                    <p class="login-error" v-show="UI.errorLogin">您输入的账号或密码错误，请重新输入。</p>
                    <el-form  class="login-form-info" ref="form" :inline="false" :model="form" label-width="100px" :rules="rules">
                        <el-form-item label="账号" prop="account">
                            <el-input v-model="form.account" placeholder="输入账号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="form.password" placeholder="输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="login">登 录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div> 
    </div>
</template>
<script> 
import logo from 'src/assets/logo.jpg'
export default {
    name: 'login',
    props: {},
    data() {
        return {
            logo:logo,
            UI:{
                errorLogin:true,
            },
            form:{
               account:'',
               password:'', 
            },
            rules:{
                 account: [{
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                }, ],
                 password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }, ],
            }
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
         login(){
            this.$http.get('/message/list').then((response)=>{
                console.log(response)
            })
         }
    },
    created() { 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
.login{
    &-wrap{
        padding:0 40px 40px 40px;
        width:500px;
        margin: 0 auto;
        text-align: center;
    }
    &-logo{
        @include wh(300px,120px);
        display: block;
        margin: 0 auto;
    }
    &-form{
        padding: 5px;line-height: 2;
        background: #f6f6f6;
        &-info{
            padding-right: 40px;
            margin-top: 10px;
        }
    }
    &-title{
        font-size: 24px;
    }
    &-error{
        color:red;
    }
    .el-form-item{
        margin-bottom: 25px;
    }
}
</style>
