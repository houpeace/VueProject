<template>
    <div> 
        <el-form ref="form" :inline="true" :model="form" label-width="110px" :rules="rules">
              <el-form-item label="频道" prop="channelId">
                <el-select v-model="form.channelId" placeholder="请选择频道">
                  <el-option v-for="channel in channelList" :key="channel.id" :label="channel.channelName" :value="channel.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="人群" prop="group">                
                <el-select v-model="form.group" placeholder="请选择人群" @change="resetId">
                  <el-option v-for="group in groupList" :key="group.name" :label="group.name" :value="group.name" ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="新老客" prop="groupType">    
                <el-select v-model="form.groupType" placeholder="请选择新老客">
                  <el-option v-for="groupType in groupTypeList" :key="groupType.id" :label="groupType.name" :value="groupType.id"></el-option>
                </el-select>
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
              <el-form-item label="">
                <el-checkbox-group v-model="form.isDefaultSort">
                  <el-checkbox :label="true" name="isDefaultSort">默认排序</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
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
          personalLink:CONSTANT.wikiLink.personal,
          cityList:[],
           groupTypeList:CONSTANT.config.groupTypeList,
          form:{
                channelId:'',
                uid:'',
                mid:'',
                province:'104104',
                cityId:'',
                groupType:1,
                group:'',
                isDefaultSort:false,
                offset:30,
                start:0,
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
      resetId(groupName){
        let group =this.groupList.filter((group)=>{
          return group.name === groupName;
        })[0];

        this.form.uid = group.uid;
        this.form.mid = group.mid;
      }
    },
    mounted() {
       
    },
    mixins: [mixin],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.el-form{
  margin-bottom: 20px;
}
</style>
