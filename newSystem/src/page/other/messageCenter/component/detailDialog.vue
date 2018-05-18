<template>
    <el-dialog class="" title="消息详情" top="50px" size="large" :show-close="false" :visible.sync="dialogVisible">
        <div v-html="desc"></div>
    </el-dialog>
</template>
<script> 
export default {
    name: 'detailDialog',
    props: {
        messageid:{
            type:Number,
            default:-1
        },
        desc:{
            type:String,
            default:'',
        }
    },
    data() {
        return {
            dialogVisible:false,
        }
    },
    computed: { 
    },
    watch:{ 
    },
    methods: {
         show(){
            this.dialogVisible = true;
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
