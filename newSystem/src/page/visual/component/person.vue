<template>
    <div class="innerPage">
       
        


            <div class="widget_sort">
                <div class="widget_sort_head">
                    <div class="widget_sort-half widget_sort-half-min">
                        <div class="widget_sort-title">默认排序</div>
                    </div>
                    <div class="widget_sort-half widget_sort-half-min">
                        <div class="widget_sort-title">个性化排序</div>
                    </div>                    
                </div>
                <div class="widget_sort_body " v-for="(defaultSort,index) in appData.defaultSort">
                    <div class="widget_sort-half widget_sort-half-min widget_sort-infor">
                        <div class="widget_sort-main">
                            <img :src="appData.defaultSort[index].picUrl" alt="" class="widget_sort-img">
                            <div class="widget_sort-bottom">
                                <div class="widget_sort-l">{{appData.defaultSort[index].brandName}}</div>
                                <div class="widget_sort-r">{{appData.defaultSort[index].brandId}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="widget_sort-half widget_sort-half-max widget_sort-infor">
                       <div class="widget_sort-main">
                            <img :src="appData.defaultSort[index].picUrl" alt="" class="widget_sort-img">
                            <div class="widget_sort-bottom">
                                <div class="widget_sort-l">{{appData.personalSort[index].brandName}}</div>
                                <div class="widget_sort-r">{{appData.personalSort[index].brandId}}</div>
                            </div>
                        </div>

                        <a class="widget_sort-hand" @click="changeShowDetail(index,true)" v-show="!UI.showDetail">展开推荐规则</a>
                        <a class="widget_sort-hand" @click="changeShowDetail(index,false)" v-show="UI.showDetail">收起推荐规则</a>
                        <div class="widget_sort-detail" v-show="UI.showDetail">
                            <p class="widget_sort-detail-reason">推荐理由:{{appData.personalSort[index].recommendedReason}}</p>
                            <div class="widget_sort-detail-rule" v-for="rule in appData.personalSort[index].rules">
                                <p class="widget_sort-bold">{{rule.ruleName}}</p>
                                <div class="widget_sort-detail-ruleInfo" v-for="(ruleInfo,index) in rule.ruleInfo">{{index+1}}. {{ruleInfo.name}}:{{ruleInfo.value}}</div>
                            </div>
                            <div class="widget_sort-detail-data">
                                <p class="widget_sort-bold">全局数据</p>
                                <p class="widget_sort-detail-data-info">全局平均排名：{{appData.personalSort[index].wholeData.wholeAveRank}}</p>
                                <p class="widget_sort-detail-data-info">曝光UV：{{appData.personalSort[index].wholeData.exposureUV}}</p>
                                <p class="widget_sort-detail-data-info">点击UV：{{appData.personalSort[index].wholeData.clickUV}}</p>
                                <p class="widget_sort-detail-data-info">点击用户数：{{appData.personalSort[index].wholeData.clickUserNum}}</p>
                                <p class="widget_sort-detail-data-info">购买用户数：{{appData.personalSort[index].wholeData.purchaseUserNum}}</p>
                                <p class="widget_sort-detail-data-info">销售金额：{{appData.personalSort[index].wholeData.salesAmount}}</p>
                                <p class="widget_sort-detail-data-info">转化率：{{appData.personalSort[index].wholeData.conversionPer}}</p>
                                <p class="widget_sort-detail-data-info">客单价：{{appData.personalSort[index].wholeData.perCustomerTran}}</p>
                                <p class="widget_sort-detail-data-info">UV曝光价值：{{appData.personalSort[index].wholeData.UVExposureValue}}</p>
                                <p class="widget_sort-detail-data-info">VPM：{{appData.personalSort[index].wholeData.VPM}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>


export default {
    name: '',
    data() {
        return {
           appData:{},
           UI:{
            showDetail:false,
           }
        }
    },
    computed:{
       
    },
    watch: {
       
    },
    components: {
      
    },
    methods: {
        
        changeShowDetail(index,flag){
            this.UI.showDetail = flag;
        },
    },
    mounted() {
       
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 

.widget_sort{
    &-half{
        display: inline-block;margin-right: 60px;
        &-min{
            width: 300px;
        }
        &-max{
            width:1000px;
        }
    }
    &_body{
        margin:20px 0 40px;
    }
    &-title{
        @include wh(300px,36px);
        line-height: 36px;
        border-radius: 4px;
        background: rgba(70, 168, 224, 1);
        color:#fff;
        text-align: center;
    }
    &-infor{
        position: relative;
        vertical-align: top;
        display: inline-block;
    }
    &-main{
        width: 300px;
        display: inline-block;
        vertical-align: top;
    }
    &-img{
        @include wh(300px,170px);
    }
    &-bottom{
        overflow: hidden;
        width: 300px;
    }
    &-l{
        float: left;
        max-width: 45%;
        @include toe;
    }
    &-r{
        float: right;
        max-width: 45%;
        @include toe;
    }
    &-hand{
        @include abstl(40px,305px);
        cursor: pointer;
        width: 20px;
        font-size: 14px;
        color: #46A8E0;
    }
    &-bold{
        font-weight: bold;
        line-height: 30px;
        padding: 5px 2px;
    }
    &-detail{
        display: inline-block;
        vertical-align: top;
        margin-left: 20px;
        width: 440px;
        font-size: 14px;
        background: rgba(242, 242, 242, 1);
        &-reason{
            @include toe;
            font-family: '微软雅黑 Bold', '微软雅黑';
            font-weight: 700;
            color:#FF6633;
            line-height: 32px;
            background: #fff;
        }
        &-rule{
            vertical-align: top;
            width: 260px;
            display: inline-block;
            padding: 0 6px;
        }
        &-ruleInfo{
            @include toe;
            display: inline-block;
            width: 50%;
        }
        &-data{
            vertical-align: top;
            display: inline-block;
            width: 140px;
            padding: 0 0 6px 8px;
            border-left: 4px solid #fff;
            &-info{
                @include toe;
                line-height: 30px;
            }
        }
    }

}
</style>
