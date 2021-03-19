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
      drawer: false
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  mounted () {
    this.Bus.$on('toggleDrawer', this.toggleDrawer)
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
<style scoped>
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


</style>