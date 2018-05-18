<template>
    <div class="panel panel-default cui-panel overView-wrap"> 
        <div class="panel-body">
           <el-table class="el-table-center" :data="listData" border style="width: 100%">
                <el-table-column prop="type" label="" width="auto"></el-table-column>
                <el-table-column prop="total" label="总数" width="400"></el-table-column>
                <el-table-column prop="average" label="平均" width="200"></el-table-column>
                <el-table-column prop="max" label="最高" width="200"></el-table-column>
                <el-table-column prop="min" label="最低" width="200"></el-table-column>
           </el-table>
        </div>
      </div> 
</template>
<script> 
export default {
    name: 'overView',
    components:{

    },
    props: {
        dataList:{
            type:Array,
            default:[],
        },
        types:{
            type:Array,
            default:[],
        },
    },
    data() {
        return {
        }
    },
    computed: {        
        listData(){
            let listData = [];
            this.dataList.forEach((single,index)=>{
                let item = {
                    type:this.types[index],
                    total:0,
                    max:Math.max.apply(null,single),
                    min:Math.min.apply(null,single),
                    average:0
                }
                item.total = single.reduce((prev,curr)=>{
                    return prev + curr 
                })
                item.average = parseInt(item.total/single.length);
                listData.push(item);
            })
            return listData;
        }
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
