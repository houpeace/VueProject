<template>
    <div>
         <template v-for="(menu, index) in menus">
            
            <template v-if="menu.path">
                <template  v-if="menu.icon" >
                    <el-menu-item :index="path(menu.path)" :key="menu.title"><i class="fa" :class="menu.icon" aria-hidden="true"></i> {{menu.title}}</el-menu-item>
                </template>
            </template>
                  <template v-else>
                <el-submenu :index="path(index)" :key="menu.title">
                    <template slot="title"><i class="fa" :class="menu.icon" aria-hidden="true"></i> {{menu.title}}</template>
                    <router-nav-item :menus="menu.children"></router-nav-item>
                </el-submenu>
            </template>


<!-- 
            <template v-if="menu.children && menu.children.length > 0">
                <el-submenu :index="path(index)" :key="menu.title">
                    <template slot="title"><i class="fa" :class="menu.icon" aria-hidden="true"></i> {{menu.title}}</template>
                    <el-menu-item v-for="submenu in menu.children" :index="path(submenu.path)" :key="submenu.title"><i class="fa" :class="submenu.icon" aria-hidden="true"></i>{{submenu.title}}</el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="path(menu.path)" :key="menu.title"><i class="fa" :class="menu.icon" aria-hidden="true"></i> {{menu.title}}</el-menu-item>
            </template> -->
        </template>
    </div>
</template>
<script>  
export default {
    name: 'routerNavItem',
    props: {}, 
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
        path: (path = '') => path.toString()
    },
    created() { 
        console.log(this.menus)
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
