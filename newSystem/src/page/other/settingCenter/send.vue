<template>
    <div class="sendSetting-wrap">
        <div class="panel panel-default cui-panel"> 
            <div class="panel-heading">
               <span class="heading-title">发送配置项管理</span>
            </div>
            <div class="panel-body">
                <el-form>
                    <el-form-item label="发送渠道选择">
                        <el-select v-model="sendType" placeholder="请填写">
                        <el-option v-for="item in sendTypeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </div> 
        <div class="panel panel-default cui-panel "> 
            <div class="panel-heading">基础信息</div>
            <div class="panel-body">
                <el-form :model="form" label-width="140px">
                    <el-form-item label="应用名称">
                        <el-input v-model="form.appName" placeholder="请填写">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="应用图标">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :file-list="form.fileList"
                      :on-success="replaceBaseImg"
                      list-type="picture-card" :multiple="false">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    </el-form-item>
                </el-form>
            </div>
        </div> 

        <div class="panel panel-default cui-panel "> 
            <div class="panel-heading">开发配置</div>
            <div class="panel-body">
                <el-form :model="form" label-width="140px" v-show="sendType == 1">
                    <el-form-item label="AppID">
                        <el-input v-model="form.appID" placeholder="请填写AppID">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="AppSecret">
                        <el-input v-model="form.appSecret" placeholder="请填写AppSecret">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="AppKey">
                        <el-input v-model="form.appKey" placeholder="请填写AppKey">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="MasterSecret">
                        <el-input v-model="form.masterSecret" placeholder="请填写MasterSecret">
                        </el-input>
                    </el-form-item>
                </el-form>

                <el-form :model="form" label-width="140px" v-show="sendType == 2">
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
</template>
<script> 
export default {
    name: '',
    components:{

    },
    props: {},
    data() {
        return {
            sendType:2,
            sendTypeList:[
                {
                    id:1,name:"中邮钱包"
                },{
                    id:2,name:"支付宝"
                },{
                    id:3,name:"微信"
                },{
                    id:4,name:"短信"
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
                 fileList: [{url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                 appID:"",
                 appSecret:"",
                 appKey:"",
                 masterSecret:"",
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
