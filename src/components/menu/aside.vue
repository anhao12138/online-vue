<template>
   <div class="Aside">
     <!-- 一级分类 -->
    <div slot="title"  v-for="item in asideList" :key="item.id" class="rec-type">
      <!-- 一级导航 -->
      <span slot="title" class="rec-type-title">{{item.name}}<i class="el-icon-caret-right"></i></span>
      <p class="rec-type-exa">{{getThree(item.child)}}</p>
      <!-- 二级导航 -->
      <div class="rec-type-child" >
        <span slot="title" >{{item.name}}</span>
        <div style="display: flex;flex-wrap: wrap">
          <span @click="$router.push({name:'Recruitment',params:{keyWords:typeChild}})" v-for="typeChild in item.child">{{typeChild}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {T1, T2, T3, T4, T5,T6,T7,T8} from "../../data/jobs";
export default {
    name:"Aside",
    data(){
        return{
            asideList:[
                T1,T2,T3,T4,T5,T6,T7,T8
            ]
        }
    },
  methods:{
    getThree(item){
      return `${item[0]}/${item[1]}/${item[2]}`
    }
  }
}
</script>

<style>
.Aside{
    width: 260px;
    height: 560px;
    background: white;
    box-shadow: 0 0 3px red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.rec-type{
    transition: all .2s;
  padding: 0 20px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction :column;
  justify-content: center;
  position: relative;
  cursor: pointer;
  line-height: 24px;
}
:hover{
    background: rgb(253, 248, 248);
}
:hover .rec-type-child{
    display: flex;
}
 :first-child .rec-type-child{
     top: 0;
 }
 :last-child .rec-type-child{
      top: -150%;
 }
 :hover.rec-type-title,.rec-type-exa{
     color: rgb(255,92,91) ;
 }
.rec-type-title{
    display: flex;
    font-weight: 100;
    justify-content: space-between;
} 
.rec-type-exa{
    letter-spacing: 3px;
    color: rosybrown;
    font-size: 15px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
}
.rec-type-child{
    transition: all .8s;
    display: none;
    padding: 20px;
    width: 500px;
    height: auto;
    min-width: 160px;
    background: white;
    top: -80%;
    position: absolute;
    left: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 0 0 3px rgb(255,236,236);
    z-index: 10;
}
span{
    display: block;
    font-size: 14px;
    margin-right: 15px;
    color: rgb(255,92,91);
    cursor: pointer;
}
span:hover{
    color: rgb(100, 98, 98);
}
.el-icon-caret-right{
    color: rgb(153,153,153);
}
   
</style>


