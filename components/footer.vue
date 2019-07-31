<template>
  <footer>
    <div class="footer-content">
      <el-row :gutter="24" type="flex" align="millden" class="content1" justify="space-around">
        <el-col :span="6">
          <dl>
            <dt>闲云旅游旅游网</dt>
            <dd>上亿旅行者共同打造的"旅行神器"</dd>
            <dd>
              <span>60,000</span>多个全球旅游目的地
            </dd>
            <dd>
              <span>600,000</span>个细分目的地新玩法
            </dd>
            <dd>
              <span>760,000,000</span> 次攻略下载
            </dd>
            <dd>
              <span>38,000</span>家旅游产品供应商
            </dd>
          </dl>
        </el-col>
        <el-col :span="5">
          <dl>
            <dt>关于我们</dt>
            <dd>隐私政策 商标声明</dd>
            <dd>服务协议 游记协议</dd>
            <dd>商城平台服务协议</dd>
            <dd>网络信息侵权通知指引</dd>
            <dd>闲云旅游旅游网服务监督员</dd>
            <dd>网站地图加入闲云旅游</dd>
          </dl>
        </el-col>
        <el-col :span="5">
          <dl>
            <dt>旅行服务</dt>
            <dd>旅游攻略 酒店预订</dd>
            <dd>旅游特价 国际租车</dd>
            <dd>旅游问答 旅游保险</dd>
            <dd>旅游指南 订火车票</dd>
            <dd>旅游资讯 APP下载</dd>
          </dl>
        </el-col>
        <el-col :span="5">
          <p>
            <img src="http://157.122.54.189:9093/images/1556522965.png" alt />
          </p>
          <span class="our">关注我们</span>
        </el-col>
      </el-row>
      <div
        class="licence"
      >京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
footer {
  background-color: #333;
 
}
.footer-content {
  width: 1000px;
  margin: 0 auto;
  color: #cccccc;
  font-size: 12px;
  padding-top: 30px;
   height: 329px;
  dt {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
  }
  dd {
    height: 21px;
    span {
      color: orange;
    }
  }
  p {
    img {
      width: 140px;
    }
  }
  .our{
    margin-left: 40px;
  }
  .licence {
    margin-top: 20px;
    padding: 50px 0;
    border-top: 1px solid #ccc;
    text-align: center;
  }
  .content1 {
    height: 162px;
  }
}
</style>