<template>
    <div class="nav">
        <div class="logo">个性化规则管理</div>
         <el-col >
            <el-menu mode="vertical" :default-active="defaultActive" class="el-menu-vertical-demo" theme="dark" :router="true"> 
                <meau-item :menus="menus">
                    
                </meau-item>
            
            </el-menu>
          </el-col>
        </div> 
    </div>
</template>
<script>
import meauItem from './routerNavItem.vue';
export default {
    name: 'routerNav',
    components: {
        meauItem
    }, 
    props: [
        'menus'
    ],
    computed: {
        defaultActive() {
            return '/' + this.$route.path.split('/')[1];
        }
    },
    watch:{ 
    },
    methods: {
       
    },
    created() { 
        console.log(this.$route.name)
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" > 
.el-menu{
    background: none!important;
}

.nav{
    .logo{
        color: #ec2b8c;
        font-size: 18px;
        line-height: 30px;
        padding-top: 10px;
        text-align: center;
    }
    .el-submenu .el-menu-item{
        padding: 0;
    }
        .el-menu-item{
            height: 40px;
            line-height: 40px;
            color:#fff;
            font-size: 14px;
            &.is-active{
                    background-color: rgba(16, 141, 233, 1);
            }
        }
        .el-submenu__title{
            color: rgb(191, 203, 217);
            font-size: 14px;
            padding-bottom: 15px;
        }
    .el-menu-item-group{
        ul{
            
        }
        &__title{
            padding: 0;
        }
    }
}
.fa{
    margin-right: 4px;
}

</style>
