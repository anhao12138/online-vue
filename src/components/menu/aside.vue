<template>
  <div id="Aside">
    <div  v-for="item in asideList" :key="item.id" class="rec-type">
      <p class="rec-type-title">{{item.name}}<i class="el-icon-caret-right"></i></p>
      <p class="rec-type-exa">{{getThree(item.child)}}</p>
      <div class="rec-type-child" >
        <p >{{item.name}}</p>
        <el-button style="display: flex;flex-wrap: wrap;float:rigth;">
          <span @click="$router.push({name:'Recruitment',params:{keyWords:typeChild}})" v-for="typeChild in item.child">{{typeChild}}</span>
        </el-button>

      </div>
    </div>


  </div>
</template>

<script>
// t7,t8未用
import {T1, T2, T3, T4, T5,T6} from "@/data/jobs";

export default {
  name: "Aside",
  data(){
    return{
      asideList:[
        T1, T2,T3,T4,T5,T6
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

<style lang="scss" scoped>

#Aside{
    width: 15%;
    height: auto;
    background: white;
    box-shadow: 0 0 3px red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 11%;
}
.rec-type{
  transition: all .2s;
  padding: 0 20px;
  height: auto;
  // width: 100%;
  display: flex;
  flex-direction :column;
  justify-content: center;
  position: relative;
  cursor: pointer;
  line-height: 17px;
}
rec-type:hover{
    background-color: rgb(253, 248, 248);
}
// :hover.rec-type-child{
//     display: flex;
// }
:hover:first-child .rec-type-child{
     top: 0;
 }
:last-child .rec-type-child{
      top: -150%;
 }
:hover{
    background: rgb(253,91,91);
  }
:hover{ 
    background: rgb(253,91,91)
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
span:span{
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
