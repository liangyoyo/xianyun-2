<template>
    <div class="table">
        <div class="newtouch">
            <button v-for="(item,index) in [`新闻`,`娱乐`,`体育`]" 
            :key="index" 
            :class="{native:current===index}"
            @click="handleClick(index)"
            >{{item}}</button>
        </div>
         <div class="content" v-if="current===0">
             <p>香港暴乱拘捕39人</p>
             <p>香港暴乱拘捕39人</p>
             <p>香港暴乱拘捕39人</p>
         </div>
         <div class="content1" v-if="current===1">
             <p>文章马伊琍离婚了</p>
             <p>文章马伊琍离婚了</p>
             <p>文章马伊琍离婚了</p>
         </div>
         <div class="content2" v-if="current===2">
             <p>叶诗文拿银牌了</p>
             <p>叶诗文拿银牌了</p>
             <p>叶诗文拿银牌了</p>
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
    methods:{
      handleClick(index){
          this.current=index
      }  
    }
}
</script>
<style lang="less" scoped>
.table{
    margin:50px
}
.native{
    color: red
}
</style>
