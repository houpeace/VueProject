<template>
    <div class="sendSetting-wrap">
        <div class="panel panel-default cui-panel"> 
            <div class="panel-heading">
               <span class="heading-title">接入渠道管理</span>
            </div>
            <div class="panel-body">
                <el-form>
                    <el-form-item label="发送渠道选择">
                        <el-select v-model="connetType" placeholder="请填写">
                        <el-option v-for="item in connetTypeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </div> 
        <div class="panel panel-default cui-panel "> 
            <div class="panel-heading">基础信息</div>
            <div class="panel-body">
                <el-form :model="form" label-width="140px">
                    <el-form-item label="接入渠道名称">
                        <el-input v-model="form.type" placeholder="请填写">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div> 

        <div class="panel panel-default cui-panel "> 
            <div class="panel-heading">开发配置</div>

                <div class="panel-body">
                    <el-form :model="form" label-width="140px" v-show="connetType == 1">
                        <el-form-item label="渠道编码">
                            <div class="el-form-item__content">ZY00001</div>
                        </el-form-item>
                        <el-form-item label="授权回调地址类型">
                             <el-select v-model="form.alipayURLProtocol"  filterable placeholder="请授权回调地址类型">
                              <el-option v-for="item in protocolList" :key="item.id" :label="item.name" :value="item.id"></el-option> 
                              </el-select>
                        </el-form-item>
                        <el-form-item label="授权回调地址">
                            <el-input v-model="form.alipayURL" placeholder="请填写授权回调地址">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="接口加签方式">
                            <div class="el-form-item__content">RSA(SHA256)密钥(推荐)</div>
                        </el-form-item>
                        <el-form-item label="接口内容加签方式">
                            <div class="el-form-item__content">AES密钥</div>
                        </el-form-item>
                    </el-form>
                </div>
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
        return {
            connetType:1,
            connetTypeList:[
                {
                    id:1,name:"审批系统"
                },{
                    id:2,name:"营销中心"
                }
            ],
            protocolList:[
                {
                    id:1,name:"http"
                },{
                    id:2,name:"https"
                }
            ],
            form:{
                 alipayURLProtocol:1,
                 alipayURL:"https://open.alipay.com/platform/detailApp.htm",
            }
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        replaceBaseImg(res,file){
            this.form.fileList[0].url = file;
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
