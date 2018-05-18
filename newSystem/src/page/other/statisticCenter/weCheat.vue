<template>
    <div>
        <div class="panel panel-default cui-panel login-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">数据统计</span>

                  <span class="heading-ctrl">
                        <el-form-item label="活动时间">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                        </el-form-item>
                  </span>
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
