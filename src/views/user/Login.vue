<template>
  <div id="lrf-user">
    <div id="lrf-box">
      <div class="lrf-title">登录</div>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
            <el-form-item label="" prop="phoneOrEmail">
                <div class="lrf-lable" style="margin-top: 30px;">手机号 或 Email</div>
                <el-input type="text" v-model="loginForm.phoneOrEmail" autocomplete="off" placeholder="11位手机号 或 邮箱" clearable></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
                <div class="lrf-lable" style="float: left">密码</div>
                <div class="wjmm"  @click="goForget">忘记密码</div>
                <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="请输入密码" show-password clearable></el-input>
            </el-form-item>
            <el-form-item label="" prop="yzm">
                <div class="lrf-lable">验证码</div>
                <el-row type="flex" justify="space-between" style="height: 40px;">
                    <el-col :span="14">
                    <el-input v-model.number="loginForm.yzm" placeholder="右侧验证码" clearable></el-input>
                    </el-col>
                    <el-col :span="8">
                    <Yzm @setYzm = 'getYzm($event)' style="cursor: pointer;"></Yzm>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-row type="flex" justify="space-between" style="margin-top:40px;">
                    <el-col :span="8" style="text-align:center">
                    <el-button type="primary" class="lrf-button">登录</el-button>
                    </el-col>
                    <el-col :span="8" style="text-align:center">
                    <el-button @click="goRegister" class="lrf-button">注册</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 引入验证码组件
import Yzm from '../../components/Yzm'
// 引入用户模块公共样式
import '../../assets/css/Lrf.css'
export default {
  data () {
    // 电话邮箱处理
    var validatephoneOrEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号 或 邮箱不能为空'))
      } else {
        if (this.ze.numberZe.test(value)) {
          if (!this.ze.phoneZe.test(value)) {
            callback(new Error('无效电话号码'))
          }
        } else {
          if (!this.ze.emailZe.test(value)) {
            callback(new Error('无效邮箱'))
          }
        }
        callback()
      }
    }
    // 密码处理
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    // 邮箱处理
    var checkYzm = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      } else {
        if (value !== this.Yzm) {
          return callback(new Error('验证码填写错误'))
        }
        callback()
      }
    }
    return {
      loginForm: {
        phoneOrEmail: '', // 邮箱 或 手机号
        pass: '', // 密码
        yzm: '' // 验证码
      },
      ze: {
        phoneZe: new RegExp('^1[3456789]\\d{9}$'), // 电话正则
        numberZe: new RegExp('^[\\d]+$'), // 纯数字正则
        emailZe: new RegExp('^[A-Za-z0-9]+([_\\.]{0,1})([A-Za-z0-9]+)*@([A-Za-z0-9]+)([\\.]{1})+[A-Za-z]{2,6}$') // 邮箱正则
      },
      rules: {
        phoneOrEmail: [
          { validator: validatephoneOrEmail, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        yzm: [
          { validator: checkYzm, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    Yzm
  },
  methods: {
    // 指向注册模块
    goRegister () {
      this.$router.push('/user/register')
    },
    // 指向重置密码模块
    goForget () {
      this.$router.push('/user/forget')
    },
    // 获取验证码模块传过来的值
    getYzm: function (val) {
      this.yzm = val
    }
  }
}
</script>

<style lang="less" scoped>
.lrf-lable {
    line-height: 20px;
    font-family: "Hiragino Sans GB";
    margin-bottom: 5px;
}
.wjmm {
    line-height: 20px;
    font-family: "Hiragino Sans GB";
    margin-bottom: 5px;
    float: right;
    color: #67c23a;
    cursor: pointer;
}
.wjmm:hover {
    opacity:0.7;
    text-decoration:underline;
}
.lrf-button {
    width: 100%;
    text-align: center;
}
</style>
