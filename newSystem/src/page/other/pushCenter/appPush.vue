<template>
    <div>
        <div class="panel panel-default cui-panel appPush-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">推送内容</span>
            </div>
            <div class="panel-body">
                <el-form :model="form" :rules="rules" ref="form" label-width="140px">
                  <el-form-item label="推送形式" prop="pushType">
                    <el-radio-group v-model="form.pushType">
                        <el-radio :label="1">文字</el-radio>
                        <el-radio :label="2">图片</el-radio>
                        <el-radio :label="3">图文消息</el-radio>
                      </el-radio-group>
                  </el-form-item>
                  <el-form-item label="平台" prop="platform">
                    <el-radio-group v-model="form.platform">
                        <el-radio :label="1">andrew</el-radio>
                        <el-radio :label="2">iso</el-radio>
                      </el-radio-group>
                  </el-form-item>
                  <el-form-item label="后续动作" prop="action">
                    <el-radio-group v-model="form.action">
                        <el-radio v-for="item in actionList" :label="item.id" :key="item.id">{{item.name}}</el-radio>
                      </el-radio-group>
                  </el-form-item>
                  <el-form-item label="发送对象" prop="group">
                    <el-radio-group v-model="form.group">
                        <el-radio v-for="item in groupList" :label="item.id" :key="item.id">{{item.name}}</el-radio>
                      </el-radio-group>
                  </el-form-item>
                  <el-form-item label="推送方式" prop="recommendType">
                    <el-radio-group v-model="form.recommendType">
                        <el-radio v-for="item in recommendList" :label="item.id" :key="item.id">{{item.name}}</el-radio>
                      </el-radio-group>
                  </el-form-item>
                  <el-form-item label="消息有效期" prop="isLongterm">
                    <el-radio-group v-model="form.isLongterm">
                        <el-radio v-for="item in isLongtermList" :label="item.id" :key="item.id">{{item.name}}</el-radio>
                      </el-radio-group>
                  </el-form-item>
                  <el-form-item label="过期时间" prop="offlineExpired">
                    <el-date-picker v-model="form.offlineExpired" :picker-options="pickerOptions1" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item>
                        <el-button type="primary" @click="submit()">确定</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </div> 
    </div>
</template>
<script> 

import CONSTANT from 'src/config/constant.js';
export default {
    name: '',
    components:{

    },
    props: {},
    data() {
        return {
            pickerOptions1: {
              disabledDate(time) {
                // return time.getTime() <= Date.now();
              }
            },
            form:{
                pushType:1,
            },
            rules:{

            }
        }
    },
    computed: { 
        actionList(){
            return CONSTANT.config.actionList
        },
        groupList(){
            return [{name:"全部用户",id:0}].concat(CONSTANT.config.groupList);
        },
        recommendList(){
            return CONSTANT.config.recommendList;
        },
        isLongtermList(){
            return CONSTANT.config.isLongtermList;
        },
    },
    watch:{ 
    },
    methods: {
        submit(){

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
