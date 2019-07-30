<template>
  <header>
    <el-row class="main" type="flex" justify="space-between">
      <nuxt-link to="/" class="logo">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
      </nuxt-link>
      <el-row type="flex" class="nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">机票</nuxt-link>
      </el-row>
      <el-dropdown style="margin-right:10px;">
        <span class="el-dropdown-link">
          <i class="el-icon-bell el-icon--right"></i>
          消息
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>消息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <nuxt-link to="/user/login" class="login">登录&nbsp;/&nbsp;注册</nuxt-link>
    </el-row>
  </header>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
header {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  border: 1px solid #ccc;
  .main {
    width: 1000px;
    margin: 0 auto;
    .logo {
      display: block;
      height: 60px;
      width: 156px;
      padding-top: 8px;
      img {
        width: 100%;
      }
    }
    .nav {
      margin: 0 20px;
      flex: 1;
      a {
        padding: 0 20px;
        box-sizing: border-box;
        height: 60px;
        &:hover {
          border-bottom: 5px solid #409eff;
        }
      }
      /deep/ .nuxt-link-exact-active {
        background: #409eff;
        color: #fff !important;
      }
    }
    .login{
        font-size: 14px;
        &:hover{
            text-decoration: underline #409eff;
            color: #409eff;
        }
    }
  }
}
</style>
