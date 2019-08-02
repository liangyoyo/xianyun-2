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
      <el-row class="userinfomation">
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
        <!-- 如果用户存在则展示用户信息，用户数据来自store -->
        <el-dropdown v-if="$store.state.user.userInfo.token">
          <el-row type="flex" align="middle" class="el-dropdown-link">
            <nuxt-link to="#">
             <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"/>
              {{$store.state.user.userInfo.user.nickname}}
            </nuxt-link>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-row>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link to="#">个人中心</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="handleLogout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--  不存在用户信息展示登录注册链接 -->

        <nuxt-link
          to="/user/login"
          class="login"
          v-if="!$store.state.user.userInfo.token"
        >登录 &nbsp;/&nbsp;注册</nuxt-link>
      </el-row>
    </el-row>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
   // 用户退出
        handleLogout(){
            const {commit} = this.$store;
            commit("user/cleanUserInfo");
            
            this.$message({
                message: "退出成功",
                type: "success"
            })
        },
    }
  }
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
    .userinfomation {
      img {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        border: 2px #fff solid;
        border-radius: 50px;
      }
    }
    .login {
      font-size: 14px;
      &:hover {
        text-decoration: underline #409eff;
        color: #409eff;
      }
    }
  }
}
</style>
