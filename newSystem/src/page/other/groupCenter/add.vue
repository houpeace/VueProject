<template>
    <div>
        <div class="panel panel-default cui-panel groupCenter-add-wrap"> 
           <div class="panel-heading">
               <span class="heading-title">新建用户分组</span>
            </div>
            <div class="panel-body">
                <detail pageType="add"></detail>
            </div>
        </div> 
    </div>
</template>
<script> 
import detail from './component/detail.vue'
export default {
    name: 'groupCenterAdd',
    components:{
        detail
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
