<template>
  <div id="app">
  	<div id="loading" v-show="isLoading">
  		<i class="loading-icon fa fa-spinner fa-spin"></i>
  	</div>
    <transition name="bounceNav">
      <div class="navInfor" v-if="showNav">
        <page-nav :menus="menus"></page-nav>
      </div>
    </transition> 
    <div class="mainInfor" :class="[!showNav?'fullScreen':'normal']">
     <div class="mainInfor__header">
      <user-nav></user-nav>
      <bread></bread>
     </div>
      <router-view class="mainInfor__inner"></router-view>  
    </div>
  </div>
</template>

<script>
import pageNav from './common/routerNav.vue'
import userNav from './common/userNav.vue'
import bread from './common/bread.vue'
import structure from './router/structure.js'
export default {
  name: 'app',
  data() {
    return {
      menus: structure.structure
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.common.isLoading
    },
    showNav(){
      return this.$store.state.common.showNav
    }
  },
  mounted() {
    console.log(this.$route)
  },
  components:{
    pageNav,userNav,bread,
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bounceNav-enter-active {
  animation: bounce-in .5s;
}
.bounceNav-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  
  }
  100% {
    transform: scale(1);
  }
}
.bounceNav-bounceInfor-active {
  animation: bounce-in .5s;
}
.bounceNav-bounceInfor-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  
  }
  100% {
    transform: scale(1);
  }
}

#app {
  width: 100%;
  height: 100%;
}
#loading{ 
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10000;
  top: 0;
  left: 0;
  .loading-icon{
    height: 100px;
    width: 100px; 
    display: block;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    font-size: 80px;
    color: #0072c5;
    position: fixed;
  }
}
.inforWrap{
  position: relative;
}
.navInfor{
  background-color: rgb(50, 65, 87);
  position: absolute;
  height:100%;
  overflow-y: auto;
  width: 170px;
}
.mainInfor{
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  &.fullScreen{
    left: 0;
    transition:all 0.2s ease-in-out 0.8s;
  }
  &.normal{
    left: 170px;
  }
  &__inner{
    padding: 10px 20px;
  }
}
.el-loading-mask{
  background-color: rgba(255, 255, 255, .6)
}
</style>
