<template>
    <div>
        <div class="jq-pannel floor4" @click="toggleShowInfo('floor4Show')">
            <div class="panel-heading">
               <span class="heading-title" :class="[UI.floor4Show?'heading-title-open':'heading-title-close']">用户信息</span>
            </div>
            <div class="panel-body" v-show="UI.floor4Show">
                <dl class="floor4_list">
                    <dt class="floor4_type">基础信息</dt>
                    <div>
                        <dd class="floor4_infor">性别: {{descData.userInfo.basicInfo.sex}}</dd>
                        <dd class="floor4_infor">年龄: {{descData.userInfo.basicInfo.age}}</dd>
                        <dd class="floor4_infor">会员等级: {{descData.userInfo.basicInfo.level}}</dd>
                        <dd class="floor4_infor">家庭属性: {{descData.userInfo.basicInfo.familyProperty}}</dd>
                        <dd class="floor4_infor">地区: {{descData.userInfo.basicInfo.province}}</dd>
                        <dd class="floor4_infor">人群: {{descData.userInfo.basicInfo.group}}</dd>
                    </div>
                </dl>
                <dl class="floor4_list">
                    <dt class="floor4_type">品牌&品类偏好</dt>
                    <dd class="floor4_infor" v-for="item in descData.userInfo.brandAndClassPreference" v-if="descData.userInfo.brandAndClassPreference.length>0">{{item}}</dd>
                    <dd class="floor4_infor gray" v-if="descData.userInfo.brandAndClassPreference.length==0">无</dd>
                </dl>
                <dl class="floor4_list">
                    <dt class="floor4_type">商品偏好</dt>
                    <dd class="floor4_infor " v-for="item in descData.userInfo.goodsPreference">{{item}}</dd>
                    <dd class="floor4_infor gray" v-if="descData.userInfo.goodsPreference.length==0">无</dd>
                </dl>
            </div>
        </div>
        <div class="jq-pannel floor5" @click="toggleShowInfo('floor5Show')">
            <div class="panel-heading">
               <span class="heading-title">分流信息</span>
            </div>
            <div class="panel-body" v-show="UI.floor5Show">
                <div v-if="descData.flowInfo.configParams.length>0">
                    <div class="floor5_list">
                        <div class="floor5_type">分流pageId:</div>
                        <div class="floor5_infor">
                            <p>{{descData.flowInfo.pageId}}</p>
                        </div>
                    </div>
                    <div class="floor5_list">
                        <div class="floor5_type">配置参数:</div>
                        <div class="floor5_infor">
                            <p v-for="config in descData.flowInfo.configParams">
                                <span>{{config.name}}:</span>
                                {{config.value}}
                                <span v-for="(value,index) in config.values">
                                    <span v-if="index !=0">、</span>
                                    {{value}}
                                </span>
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div class="floor5_infor gray" v-if="descData.flowInfo.configParams.length == 0">无</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    props:{
        descData:{

        }
    },
    data() {
        return {
            UI:{
                floor4Show:false,
                floor5Show:false,
            }
        }
    },
    computed:{
    },
    watch: {
       
    },
    components: {
      
    },
    methods: {
        toggleShowInfo(key){
            this.UI[key] = !this.UI[key];
        }
    },
    mounted() {

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
.heading-title{
    cursor: pointer;
}
.floor4{
    &_list{
        padding: 10px 10px 0;
        overflow: hidden;
    }
    &_type{
        color:#0072c5;
        margin-right: 20px;
        display: block;
        line-height: 30px;
    }
    &_infor{
        margin-right:45px;
        line-height: 34px;
        font-size: 14px;
    }
}
.floor5{
    &_list:nth-child(1){
        margin-bottom: 10px;
    }
    &_type{
        display: inline-block;vertical-align: top;
        padding-left: 8px;     
    }
    &_infor{
        display: inline-block;    
        line-height: 22px;
        vertical-align: top;
    }
}
</style>
