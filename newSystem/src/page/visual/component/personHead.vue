<template>
    <div>
        <a :href="personalLink" target="_blank" class="outerLink">点击查看完整个性化排序策略</a>
        <el-form :inline="true" ref="form" :model="form" label-width="100px" :rules="rules">
              <el-form-item label="频道" prop="channelId">
                <el-select v-model="form.channelId" placeholder="请选择频道">
                  <el-option v-for="channel in channelList" :key="channel.id" :label="channel.channelName" :value="channel.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="用户UID" prop="uid" class="el-form-item-min">
                <el-input v-model="form.uid" placeholder="请输入UID"></el-input>
              </el-form-item>
              <el-form-item label="用户MID" prop="mid">
                <el-input v-model="form.mid" placeholder="请输入MID"></el-input>
              </el-form-item>
              <el-form-item label="地区" prop="province">
                <el-select v-model="form.province" placeholder="请选择地区" @change="resetCityList">
                  <el-option v-for="province in provinceList" :key="province.id"  :label="province.provinceName" :value="province.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="城市" prop="cityId">
                <el-select v-model="form.cityId" placeholder="先选择地区">
                  <el-option v-for="city in cityList" :key="city.id"  :label="city.cityName" :value="city.id"></el-option>
                </el-select>
              </el-form-item>
              </el-form-item>
              <el-form-item label="">
                <el-checkbox-group v-model="form.isDefaultSort">
                  <el-checkbox :label="true" name="isDefaultSort">默认排序</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="querySchedule">确定</el-button>
              </el-form-item>
        </el-form>
    </div>
</template>
<script>
import mixin from '../mixin/headMixin.js'
export default {
    name: '',
    data() {
        return {
          cityList:[],
          form:{
              channelId:'',
              uid:'',
              mid:'',
              province:'104104',
              cityId:'',
              isDefaultSort:false,
              start:0,
              offset:30,
         },
        }
    },
    computed:{
    },
    watch: {
    },
    components: {
      
    },
    methods: {
    },
    mounted() {
    },
    mixins: [mixin],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped> 
.outerLink{  
    color:#108de9; 
    text-decoration: none;
    margin-bottom: 20px;
    display: block;
} 
</style>
