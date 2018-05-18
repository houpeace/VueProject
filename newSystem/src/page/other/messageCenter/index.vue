<template>
    <div>
        <div class="panel panel-default cui-panel"> 
            <el-tabs v-model="activeName" @tab-click="handleToggle">
                <el-tab-pane label="用户管理" name="all">
                    <list :type="listType"></list>
                </el-tab-pane>
                <el-tab-pane label="已读消息" name="resolve">
                    <list :type="listType"></list>
                </el-tab-pane>
                <el-tab-pane label="未读消息" name="pedding">
                    <list :type="listType"></list>
                </el-tab-pane>
              </el-tabs>
        </div> 
    </div>
</template>
<script> 
import list from './component/list.vue'
export default {
    name: 'messageCenter',
    components:{
        list
    },
    props: {},
    data() {
        return {
            activeName:'all',
            listType:'all',
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
         handleToggle(tab){
            this.listType = tab.name;
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
