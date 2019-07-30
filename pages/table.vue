<template>
  <div class="table">
    <div class="newtouch">
      <button v-for="(item, index) in [`新闻`,`娱乐`,`体育`]"  :key="index" 
      @click="handleClick(index)" 
      :class="{active:current===index}">{{item}} </button>
    </div>
    <div class="concent" v-if="current===0">
      <p>香港拘捕49人</p>
      <p>香港拘捕49人</p>
      <p>香港拘捕49人</p>
    </div>
    <div class="concent1" v-if="current===1">
      <p>哪吒票房超7亿</p>
      <p>哪吒票房超7亿</p>
      <p>哪吒票房超7亿</p>
    </div>
    <div class="concent2" v-if="current===2">
      <p>孙杨拿金牌了</p>
      <p>孙杨拿金牌了</p>
      <p>孙杨拿金牌了</p>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
          current:0  
        }
    },
    methods: {
        handleClick(index){
            this.current = index;
        }
    }
};
</script>
<style lang="less" scoped>
.active{
    color:red;
    border-color: red;
}
.table{
 margin: 50px
}
.concent,.concent1,.concent2{
    margin-top:30px 
}
</style>
