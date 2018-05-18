<template>
    <div>
        <div class="panel panel-default cui-panel settingCenter-retry-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">重试机制</span>
            </div>
            <div class="panel-body">
                <el-form>
                    <el-form-item label="重试机制">
                        <el-switch  v-model="isRetry" @change="changeHandler"  active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                    </el-form-item>
                </el-form>
                <div class="retry-tip">重试机制可以防止因网络抖动等原因造成的事件消息丢失，开启后系统将对发送失败的消息重试2次，每次间隔5秒，点此查看注意事项。</div>
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
            isRetry:true
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
        changeHandler(val){
            if (!val) {
                  this.$confirm('关闭重试机制后，无论接受方是否及时响应，系统服务器只向开发者网关投递一次消息，不作重试。', '确定要关闭重试机制？', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                    }).then(() => {
                      
                    }).catch(() => {
                      this.isRetry = true;        
                });    
   
            }
        }
    },
    created() { 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
.retry-tip{
    margin-left: 70px;
    padding-bottom: 40px;
    max-width: 500px;
}
</style>
