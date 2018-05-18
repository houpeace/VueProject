<template>

    <div class="widget_sort-half widget_sort-half-min sort-infor" :class="[{'widget_sort-half-max':!isDefault&&showDetail},sortType]">
        <div class="sort-main" v-if="sortType=='schedule'">
            <div class="sort-imgWrap sort-scheduleImgWrap">
                <img :src="sortData.picUrl" alt="" class="sort-img">
                <img :src="sortData.icon" alt="" class="sort-icon" v-if="sortData.icon">
                <span class="sort-actPin">{{sortData.actPin}}</span>
                <span class="sort-location" :title="sortData.location">{{sortData.location}}</span>
            </div>
            <div class="sort-bottom">
                <div class="sort-l">{{sortData.brandName}}</div>
                <div class="sort-r">{{sortData.brandId}}</div>
            </div>
        </div>


        <div class="sort-main" v-if="sortType=='goods'">
            <div class="sort-imgWrap sort-goodsImgWrap">
                <img :src="sortData.image" alt="" class="sort-img">
                <img :src="sortData.icon" alt="" class="sort-icon" v-if="sortData.icon">
                <span class="sort-actPin">{{sortData.tagPin}}</span>
                <span class="sort-location">{{sortData.position}}</span>
            </div>
            <div class="sort-price-wrap">
                    <span class="sort-price-grally">¥{{sortData.vipshopPrice}}</span>
                    <span class="sort-price-mark">¥{{sortData.marketPrice}}</span>
                    <span class="sort-price-discount">{{sortData.vipDiscount}}折 </span>

            </div>
            <div class="sort-goodsName">{{sortData.goodsName}}</div>

        </div>

        <a v-if="!isDefault" class="sort-hand" @click="changeShow(true)" v-show="!showDetail">展开推荐规则</a>
        <a v-if="!isDefault" class="sort-hand" @click="changeShow(false)" v-show="showDetail">收起推荐规则</a>
        
        <div v-if="!isDefault" class="sort-detail" v-show="showDetail">
            <p class="sort-detail-reason">推荐理由:{{sortData.recommendedReason}}</p>
            <div class="sort-detail-ruleWrap">
                <div class="sort-detail-rule" v-for="rule in sortData.rules" v-if="sortData.rules.length>0">
                    <p class="sort-bold">{{rule.ruleName}}</p>
                    <div class="sort-detail-ruleInfo" v-for="(info,index) in rule.ruleInfo" 
                        :title="index+1+'.'+info.name+':'+info.value">
                        {{index+1}}. {{info.name}}:{{info.value}}
                    </div>
                </div>
            </div>
            <div class="sort-detail-data" v-if="sortData.wholeData">
                <p class="sort-bold">全局数据</p>
             <!--    <p class="sort-detail-data-info">全局平均排名：{{sortData.wholeData.wholeAveRank}}</p>
                <p class="sort-detail-data-info">曝光UV：{{sortData.wholeData.exposureUV}}</p>
                <p class="sort-detail-data-info">点击UV：{{sortData.wholeData.clickUV}}</p>
                <p class="sort-detail-data-info">点击用户数：{{sortData.wholeData.clickUserNum}}</p>
                <p class="sort-detail-data-info">购买用户数：{{sortData.wholeData.purchaseUserNum}}</p>
                <p class="sort-detail-data-info">销售金额：{{sortData.wholeData.salesAmount}}</p>
                <p class="sort-detail-data-info">转化率：{{sortData.wholeData.conversionPer}}</p>
                <p class="sort-detail-data-info">客单价：{{sortData.wholeData.perCustomerTran}}</p>
                <p class="sort-detail-data-info">UV曝光价值：{{sortData.wholeData.uvexposureValue}}</p>
                <p class="sort-detail-data-info">VPM：{{sortData.wholeData.vpm}}</p> -->
                <p class="sort-detail-data-info">曝光用户数:{{sortData.wholeData.iv}}</p>
                <p class="sort-detail-data-info">点击用户数:{{sortData.wholeData.pv}}</p>
                <p class="sort-detail-data-info">点击率:{{sortData.wholeData.ckr}}</p>
                <p class="sort-detail-data-info">购买订单数:{{sortData.wholeData.ov}}</p>
                <p class="sort-detail-data-info">转化率:{{sortData.wholeData.cr}}</p>
                <p class="sort-detail-data-info">销售额:{{sortData.wholeData.om}}</p>
                <p class="sort-detail-data-info">件单价:{{sortData.wholeData.omv}}</p>
                <p class="sort-detail-data-info">UV曝光值:{{sortData.wholeData.imv}}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: '',
    props:{
        sortData:{},
        showDetail:false,
        sortType:'',
        isDefault:false,
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
      
    },
    methods: {
        changeShow(flag){
            this.$emit('changeShow',flag);
            // this.$store.commit(STORE_TYPE.SHOW_SORT_DETAIL,flag);
        },
    },
    mounted() {

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
@import '~scss/mixin.scss';
.widget_sort-half:nth-child(4){
    margin-right: 0;
}
.sort{
    &-infor{
        position: relative;
        vertical-align: top;
        display: inline-block;
    }
    &-imgWrap{
        position: relative;
        font-size: 12px;
        line-height: 20px;
        color: #333;
    }
    &-img{
        outline: #e2e2e2 solid 1px;
    }
    &-icon{
        @include abstl();
        @include wh(50px,50px);
    }
    &-actPin{
        @include abstr();
        @include toe;
        max-width: 50%;
        height: 20px;
        padding: 4px;
       background-color: rgba(255, 153, 153, 1);
    }
    &-location{
        @include absbl();
        @include toe;
        max-width: 50%;
        height: 20px;
        padding: 4px;
       background-color: rgba(255, 255, 0, 1);
    }
    &-bottom{
        overflow: hidden;
        line-height: 40px;
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
        cursor: pointer;
        width: 20px;
        font-size: 14px;
        color: #0072c5;
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
        min-height: 305px;
        background: rgba(242, 242, 242, 1);
        &-reason{
            @include toe;
            font-family: '微软雅黑 Bold', '微软雅黑';
            font-weight: 700;
            color:#FF6633;
            line-height: 32px;
            background: #fff;
        }
        &-ruleWrap{
            padding: 2px 0;
            vertical-align: top;
            width: 260px;
            display: inline-block;
        }
        &-rule{
            padding: 0 6px 8px;
        }
        &-ruleInfo{
            @include toe;
            display: inline-block;
        }
        &-data{
            vertical-align: top;
            display: inline-block;
            width: 140px;
            padding: 0 0 6px 8px;
            border-left: 4px solid #fff;
            &-info{
                @include toe;
                line-height: 28px;
            }
        }
    }
}
.schedule{
    .sort{

        &-hand{
            @include abstl(40px,305px);
        }
        &-main{
            width: 300px;
            display: inline-block;
            vertical-align: top;
        }
        &-imgWrap,&-img{
            @include wh(300px,170px);
        }
        &-bottom{
            width: 300px;            
        }
    }
}
.goods{
    .sort{
        &-hand{
            @include abstl(40px,205px);
        }
        &-main{
            width: 200px;
            display: inline-block;
            vertical-align: top;
        }
        &-price{
            &-wrap{
                padding: 8px 0 1px;
            }
            &-grally{
                color: #e80080;
                font-size: 18px;
            }
            &-mark{
                text-decoration: line-through;
                font-size:13px;
                color: #888;
                padding-left: 4px;
            }
            &-discount{
                font-size:13px;
                color: #888;
                padding-left: 4px;
            }
        }
        &-m{
            text-align: center;
            &-text{
                @include toe;
               display: inline-block;
                max-width: 30%;
                text-align: center;
            }
        }
        &-goodsName{
            @include toe;
            font-size: 16px;
        }
        &-imgWrap,&-img{
            @include wh(200px,252px);
        }
            
    }
}
</style>
