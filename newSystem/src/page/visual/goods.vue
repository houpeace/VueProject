<template>
    <div>
        <div class="innerPage">
            <goods-head></goods-head>
            <div v-show="dataInit">
                <visual-desc :descData="goodsData"></visual-desc>
                <sort-info  :sortData="goodsData"></sort-info>
            </div>
        </div>
    </div>
</template>
<script>
import goodsHead from './component/goodsHead.vue'
import visualDesc from './component/visualDesc.vue'
import sortInfo from './container/goodsSortInfo.vue'
export default {
    name: '',
    data() {
        return {
           
        }
    },
    computed:{ 
        dataInit(){
            return this.$store.state.goods.dataInit;
        },
        goodsData(){
            return this.$store.state.goods.data
        },

    },
    watch: {
       
    },
    components: {
      goodsHead,
      visualDesc,
      sortInfo
    },
    methods: {

    },
    mounted() {
        this.$store.commit(STORE_TYPE.SHOW_SORT_DETAIL,false);
        this.$store.commit(STORE_TYPE.GOODS_DATA_INIT,false);
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
</style>
