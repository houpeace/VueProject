<template>
    <div class="widget_sort">
         <div class="widget_sort_head" v-if="sortData.defaultSort.length>0||sortData.personalSort.length>0" :class="{'widget_sort-head_maxWrap':showDetail}">
            <div class="widget_sort-half widget_sort-half-head_min"  v-if="sortData.defaultSort.length>0">
                <div class="widget_sort-title">默认排序</div>
            </div>
            <div class="widget_sort-half widget_sort-half-head_min" :class="{'widget_sort-half-head_max':showDetail}">
                <div class="widget_sort-title" :class="{'widget_sort-title_max':showDetail}">个性化排序</div>
            </div>                    
        </div>
         <div class="widget_sort_body " v-for="(personalSort,index) in sortData.personalSort" :class="{'widget_sort_body-max':showDetail}">
            <sort v-if="index*2<sortData.defaultSort.length" :sortData="sortData.defaultSort[index*2]" :showDetail="showDetail" @changeShow="changeShowDetail" sortType="goods" :isDefault="true"></sort>
            <sort v-if="(index*2+1)<sortData.defaultSort.length" :sortData="sortData.defaultSort[index*2+1]" :showDetail="showDetail" @changeShow="changeShowDetail" sortType="goods" :isDefault="true"></sort>
            <sort v-if="index*2<sortData.personalSort.length" :sortData="sortData.personalSort[index*2]" :showDetail="showDetail" @changeShow="changeShowDetail" sortType="goods" :isDefault="false"></sort>
            <sort v-if="(index*2+1)<sortData.personalSort.length" :sortData="sortData.personalSort[index*2+1]" :showDetail="showDetail" @changeShow="changeShowDetail" sortType="goods" :isDefault="false"></sort>
         </div>
         
    </div>
</template>
<script>
import sort from '../component/sort.vue';
import mixin from '../mixin/sortInfoMixin.js';
export default {
    name: '',
    props:{
        sortData:{
            defaultSort:[],
            personalSort:[],
        },
    },
    data() {
        return {
            
        }
    },
    computed:{ 
    },
    watch: {
       
    },
    components: {
      sort
    },
    methods: {
        changeShowDetail(flag){
            this.$store.commit(STORE_TYPE.SHOW_SORT_DETAIL,flag);
        },
        scrollLoad(){
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                let wrap = document.querySelector('.mainInfor');
                let srollTop = wrap.scrollTop,
                    scrollHeight = wrap.scrollHeight,
                    clientHeight  = wrap.clientHeight;
                if (srollTop+clientHeight+50>=scrollHeight) {
                    this.removeListen();
                    this.$store.commit(STORE_TYPE.GOODS_PARAM_START,10); 
                    this.$store.dispatch(STORE_TYPE.GOODS_APPENDDATA).then(()=>{
                        this.addListen();
                    })
                }
            },1000);
            
        }
    },
    mixins: [mixin],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 


.widget_sort{
    &-head_maxWrap{
        width:1952px;
    }
    &-half{
        display: inline-block;margin-right: 48px;
        &-head_min{
           width: 450px;
        }
        &-head_max{
          
        }
        &-min{
           width: 200px;
        }
        &-max{
            width:670px;
        }
    }
    &_body{
        margin:20px 0 40px;
        &-max{
            width: 1952px;
        }
    }
    &-title{
        @include wh(450px,36px);
        line-height: 36px;
        border-radius: 4px;
        background: #0072c5;
        color:#fff;
        text-align: center;
        &_max{
            width: 1375px;
        }
    }

}
</style>
