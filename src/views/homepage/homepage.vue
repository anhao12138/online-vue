<template>
    <el-container>

  <el-header>
    <menu-drawer :is-visiable="drawer" />
    <div class="flex header-block mobile__fixed">
      <div class="media-show mt-2 ml-2">
        <hamburger class="hamburger-container" :toggleClick="toggleDrawer" :isActive="drawer"></hamburger>
      </div>
      <navbar class="nav media-hidden"/>
    </div>
    <bread-crumb class="media-show" />
  </el-header>
  <!-- 主体 -->
    <el-main>

       <div id="search">
          <el-autocomplete :fetch-suggestions="querySearchAsync"  @select="handleSelect" v-model="keyWords" placeholder="搜索职位、企业、人物" type="text" clearable></el-autocomplete>

          <el-button type="danger" icon="el-icon-search"></el-button>
          <div v-show="showSearch" class="re-search-tip">
            <div @click="workSearch" class="keywords-list">
              搜索职位:{{keyWords}}
            </div>
            <div @click="userSearch" class="keywords-list">
              搜索用户:{{keyWords}} 
            </div>
          </div>
        </div>
         <home-aside></home-aside>
  <!-- <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel> -->
    
    </el-main>
    </el-container>
</template>
<script>
import Avator from "../layout/avatar";
import MainArea from '../layout/main-area'
import Navbar from '../layout/navbar'
import BreadCrumb from '../layout/bread-crumb'
import MenuDrawer from '../layout/drawer'
import Hamburger from '../layout/hamburger'
import HomeAside from "../../components/menu/aside";

export default {
    name:'homepage',
    components:{
        Avator,
        MainArea,
        Navbar,
        BreadCrumb,
        MenuDrawer, 
        Hamburger,
        HomeAside
    },
    data () {
    return {
      drawer: false,
       restaurants: [],
       state:'',
       timeout:null,
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    },
    loadALL(){
      return[
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
      ]
    },

     querySearchAsync(queryString, cb){
       var restaurants = this.restaurants;
       var results = queryString? restaurants.filter(this.createStateFilter(queryString)):restaurants;

       clearTimeout(this,timeout);
       this.timeout = setTimeout(()=>{
         cd(results);
       }, 3000*Math.random());
     },
     createStateFilter(queryString){
       return (state)=>{
         return (state.value.toLowerCase().indexOf(queryString.toLowerCase())==0);
       };
     },
     handleSelect(item){
       console.log(item);
     }
  },
  mounted () {
    this.Bus.$on('toggleDrawer', this.toggleDrawer);
    this.restaurants = this.loadALL();
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestory () {
  },
  destroyed () {
  }

}
</script>
<style scoped lang="scss">
.el-header{
    /* background-color: rgb(185, 148, 148); */
    height: 66px;
    margin: 0px;
    position: relative; 
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #recommend-card{
      height: 100%;
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

#search{
  margin-left: 11%;
}
.el-autocomplete{
  width: 1100px;
}
</style>