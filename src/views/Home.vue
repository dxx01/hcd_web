<template>
  <div id="home">
      <!--  头部  -->
    <div class="headerBox">
      <div class="header">
            <div class="header-left">
                <div class="header-logo">
                    <router-link to="/home">HCD</router-link>
                </div>
                <div class="header-md-items">
                    <el-dropdown @command='activeFun' trigger="click">
                      <span class="el-dropdown-link">
                          {{onActive}}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item :class="{'active-class': onActive == '首页'}" command='首页'><router-link class="dropdown-list"  to="/home/shouye">首页</router-link></el-dropdown-item>
                          <el-dropdown-item :class="{'active-class': onActive == '问答'}" command='问答'><router-link class="dropdown-list"  to="/home">问答</router-link></el-dropdown-item>
                          <el-dropdown-item :class="{'active-class': onActive == '生活'}" command='生活'><router-link class="dropdown-list"  to="/home">生活</router-link></el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="header-items">
                    <ul>
                        <li><router-link :class="{'active-class': onActive == '首页'}" @click.native="toItem" to="/home/shouye">首页</router-link></li>
                        <li><router-link :class="{'active-class': onActive == '问答'}" @click.native="toItem" to="/home">问答</router-link></li>
                        <li><router-link :class="{'active-class': onActive == '生活'}" @click.native="toItem" to="/home">生活</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="header-right">
                <div class="header-lr">
                    <div class="login-off" @click="goLogin">
                      <el-menu  mode="horizontal" active-text-color='#909399'>
                        <el-submenu index="1" popper-class='tx'>
                            <template slot="title">
                                <el-avatar :src="userImg"  size="small"></el-avatar>
                            </template>
                            <el-menu-item index="1-1"><router-link to="/home/myhome">我的主页</router-link></el-menu-item>
                            <el-menu-item index="1-2">账号设置</el-menu-item>
                            <el-divider></el-divider>
                            <el-menu-item index="1-4">退出</el-menu-item>
                        </el-submenu>
                      </el-menu>
                    </div>
                </div>
                <div class="info-icon">
                    <i class="el-icon-bell"></i>
                </div>
                <div class="header-create">
                  <el-button type="primary" size="small">
                    <router-link to="/fabu">发布</router-link>
                  </el-button>
                </div>
                <div class="header-search">
                    <el-input placeholder="请输入内容" v-model="search" suffix-icon="el-icon-search" size="small" @focus="onFocus" @blur="onBlur"></el-input>
                </div>
            </div>
        </div>
    </div>
    <!--  中间  -->
    <div class="middleBox">
        <!-- 路由占位符-->
        <router-view />
    </div>
    <!--  足部  -->
    <div class="footBox"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: [''],
  data () {
    return {
      userImg: require('../assets/img/default-user.png'),
      search: '', // 搜索的内容
      onActive: '首页' // 选中的导航内容
    }
  },

  components: {},

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    // 指向登录模块
    goLogin () {
      // this.$router.push('/user/login')
    },
    onFocus () {
      $('.el-icon-search').css({ color: '#006cff' })
    },
    onBlur () {
      $('.el-icon-search').css({ color: '#c3ccd5' })
    },
    // 选中模块md
    activeFun (command) {
      this.onActive = command
    },
    // 选中模块
    toItem (event) {
      this.onActive = event.target.innerText
    }
  },

  watch: {}

}

</script>
<style lang='scss'>
@import '../assets/scss/Home.scss';
</style>
