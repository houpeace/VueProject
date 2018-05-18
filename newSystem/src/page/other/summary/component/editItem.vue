<template>
    <div class="editItem-wrap">
        <i class="editItem-icon">{{itemDesc}}</i>
        <img :src="imgSrc" alt="" class="editItem-img">
        <p class="editItem-title" :title="title">{{title}}</p>
        <div class="editItem-mask">
            <a @click="edit" class="editItem-ctrl">编辑</a>
            <a @click="send" class="editItem-ctrl">发送</a>
        </div>
    </div>
</template>
<script> 
export default {
    name: 'editItem',
    components:{

    },
    props: {
        id:{
            type:[Number,String],
            default:-1,
        },
        itemType:{
            type:Number,
            default:1,
        },
        imgSrc:{
            type:String,
            default:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=09a4b0094b90f60304b09b410129d426/91ef76c6a7efce1b1e30f4f2ae51f3deb48f65ea.jpg",
        },
        title:{
            type:String,
            default:"我是很长很长的标题我是很长很长的标题我是很长很长的标题我是很长很长的标题",
        },
    },
    data() {
        return {
            
        }
    },
    computed: { 
        itemDesc(){
            return ({
                1:'微信',
                2:'APP',
                3:'Email'
            })[this.itemType]
        }
    },
    watch:{ 
    },
    methods: {
        edit(){
            this.$router.push({
            name: '',
            params: {
              id: this.id
            }
          })
        },
        send(){
          this.$http.post('',{id:this.id}).then(response=>{
            this.successMsg('发送成功');
          })  
        }
    },
    created() { 
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
 @import '~scss/mixin.scss';
 $cellWidth:300px;
 $cellHeight:200px;
 $root:".editItem";
.editItem{
    &-wrap{
        @include wh($cellWidth,$cellHeight);
        margin:10px;
        display: inline-block;
        position: relative;
        &:hover{
            #{$root}-mask{
                display: block;
            }
        }
    }
    &-img{
        @include wh($cellWidth,$cellHeight);    
    }
    &-icon{
        @include abstl;
        padding: 5px 10px;
        background: rgba(35, 223, 188, 0.79);
        color: red;
        font-style: normal;
    }
    &-title{
        @include absbl;
        @include toe;
        width:94%;
        line-height: 30px;
        text-indent: 10px;
        color: #ccc;
    }
    &-mask{
        background:rgba(255,255,255,0.6);
        @include abstl;
        @include wh($cellWidth,$cellHeight);
        text-align: center;
        display: none;
    }
    &-ctrl{
        text-align: center;
        line-height: $cellHeight;
        margin: 10px;
    }
}
</style>
