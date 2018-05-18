<template>
    <div class="topbar">
       <span class="navToggle" @click="toggleNav"><i class="fa fa-bars fa-5"></i></span>
       <span class="user-info">
            <span class="username">
                <i class="fa fa-user"></i>
                <span >{{userInfo.username}}</span>
            </span> 
            
            <a @click="logout" class="logout"><i class="fa fa-share"></i>退出</a>
        </span>
    </div>
</template>
<script>

export default {
    name: '',
    data() {
        return {
           
        }
    },
    computed:{
        userInfo(){
            return this.$store.state.user.userInfo;
        }
    },
    watch: {
       
    },
    components: {
      
    },
    methods: {
        toggleNav(){
            let show = !this.$store.state.common.showNav;
            this.$store.commit(STORE_TYPE.SHOW_NAV,show);
        }
    },
    mounted() {
        this.$store.dispatch(STORE_TYPE.USER_INFO)
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
.green {
    color: #1ab394;
}   
.navToggle{
    cursor: pointer;
    font-size: 30px;
    color:#50BFFF;
}
.topbar{
    position: relative;
    height: 36px;
    padding: 10px 20px;
    background-color: #f3f3f4;
    border-bottom: 1px solid #e7eaec;
    .user-info {
        float: right;
        margin-top: 6px;
    }
    .username{
        color: #999;
        font-size: 14px;
        margin-right: 10px;
    }
    .useremail{
        margin: 16px;
    }
    .logout{
        cursor: pointer;
        color: #999;
    }
}
</style>
