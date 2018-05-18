<template>
    <div>
        <div class="pageType__wrap">
            <el-button  class="pageType__item" @click="changePageType('person')" :class="{'pageType__item-gray':pageType=='group'}">个人排序结果</el-button>
            <el-button class="pageType__item" @click="changePageType('group')" :class="{'pageType__item-gray':pageType=='person'}">人群排序结果</el-button>
        </div>
        <div class="innerPage">
            <person-head v-if="pageType=='person'"></person-head>
            <group-head v-if="pageType=='group'"></group-head>
            <div v-show="dataInit">
                <visual-desc :descData="scheduleData" v-if="pageType=='person'"></visual-desc>
                <sort-info :sortData="scheduleData"></sort-info>
            </div>
        </div>
    </div>
</template>
<script>
import personHead from './component/personHead.vue'
import visualDesc from './component/visualDesc.vue'
import groupHead from './component/groupHead.vue'
import sortInfo from './container/scheduleSortInfo.vue'
import personSort from './component/person.vue'
import groupSort from './component/group.vue'
export default {
    name: '',
    data() {
        return {}
    },
    computed:{
        dataInit(){
            return this.$store.state.schedule.dataInit;
        },
        pageType(){
            return this.$store.state.schedule.dataType
        },
        scheduleData(){
            return this.$store.state.schedule.data
        },
    },
    watch: {
       pageType(){
        this.resetApp();
       },
    },
    components: {
      personHead,visualDesc,groupHead,sortInfo,
      personSort,groupSort
    },
    methods: {
        changePageType(type){
            this.$store.commit(STORE_TYPE.SCHEDULE_DATA_TYPE,type);
        },
        resetApp(){
            this.$store.commit(STORE_TYPE.SCHEDULE_DATA,{
                userInfo:{
                    basicInfo:{},
                    brandAndClassPreference:[],
                    goodsPreference:[],
               },
               flowInfo:{
                    configParams:[]
               },
               defaultSort:[],
               personalSort:[],
            });
            this.$store.commit(STORE_TYPE.SHOW_SORT_DETAIL,false);
        }
    },
    mounted() {
        this.$store.commit(STORE_TYPE.SHOW_SORT_DETAIL,false);
        this.$store.commit(STORE_TYPE.SCHEDULE_DATA_INIT,false);
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.pageType__wrap{
    margin-bottom: 20px;
}
.pageType__item{
    background: #0072c5;
    border-color: #0072c5;
    color:#fff;
}.pageType__item-gray{
    background: #c3c3c3!important;
    border-color: #c3c3c3;
}
.pageType{
    &__wrap{
        
        .bg1{
            background: rgba(109,183,115,1);
        }
        .bg2{
            background: rgba(70,168,224,1);
        }
    }
    &__item{
        font-size: 16px;
        height: 44px;
        width: 120px;
    }

}
.innerPage{
    max-width: 1600px;
}
</style>
