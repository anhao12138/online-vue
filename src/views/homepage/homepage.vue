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

export default {
    name:'homepage',
    components:{
        Avator,
        Hamburger,
        MenuDrawer,
        MainArea,
        Navbar,
        BreadCrumb,   
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



</style>