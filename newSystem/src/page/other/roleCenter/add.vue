<template>
    <div>
        <div class="panel panel-default cui-panel userCenter-add-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">角色添加</span>
            </div>
            <div class="panel-body">
                <role-detail :pageType="pageType"></role-detail>
            </div>
        </div> 
    </div>
</template>
<script> 
import roleDetail from "./component/detail.vue"
export default {
    name: 'addRole',
    components:{
        roleDetail
    },
    props: {},
    data() {
        return {
            pageType:"add",
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
<style rel="stylesheet/scss" lang="scss"> 
 @import '~scss/mixin.scss';
.userCenter-add-wrap{
    .el-select{
        width: 100%;
    }
}
</style>
