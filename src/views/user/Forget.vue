<template>
  <div id="lrf-user">
    <div id="lrf-box">
      <div class="lrf-title">重置密码</div>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :model="forgetForm" status-icon :rules="rules" ref="forgetForm">
            <el-form-item label="" prop="phoneOrEmail">
                <div class="lrf-lable" style="margin-top: 30px;">手机号 或 Email</div>
                <el-input type="text" v-model="forgetForm.phoneOrEmail" autocomplete="off" placeholder="11位手机号 或 邮箱" clearable></el-input>
            </el-form-item>
            <el-form-item label="" prop="yzm">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12" style="text-align:center">
                    <el-input type="text" v-model="forgetForm.yzm" autocomplete="off" placeholder="短信验证码"></el-input>
                    </el-col>
                    <el-col :span="10">
                    <el-button  class="lrf-button" @click="getYzm()" :disabled="obj.btnStatu == 1 ? false : true" style="padding:12px 0">{{obj.msg}}</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="" prop="pass">
                <div class="lrf-lable">新密码</div>
                <el-input type="password" v-model="forgetForm.pass" autocomplete="off" placeholder="新密码不少于六位，至少包含数字 和 英文" show-password clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-row type="flex" justify="center" style="margin-top:40px;">
                    <el-col :span="8" style="text-align:center">
                    <el-button type="primary" class="lrf-button">重置</el-button>
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
            return callback(new Error('无效电话号码'))
          }
        } else {
          if (!this.ze.emailZe.test(value)) {
            callback(new Error('无效邮箱'))
          }
        }
        // 只有电话邮箱这里有效时，改变发送短信按钮状态
        this.obj.btnStatu = 1
        callback()
      }
    }
    // 密码处理
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        if (value.length < 6) {
          callback(new Error('密码不能少于6位'))
        } else if (value.length > 18) {
          callback(new Error('密码不能超过18位'))
        } else if (!this.ze.passZe.test(value)) {
          callback(new Error('密码不符合要求 或 含有非法字符'))
        }
        callback()
      }
    }
    // 验证码处理
    var checkYzm = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('验证码不能为空'))
      } else {
        callback()
      }
    }
    return {
      obj: {
        msg: '获取短信验证码',
        btnStatu: -1, // 警用获取验证码的状态
        startTime: 120 // 倒计时初始值
      },
      forgetForm: {
        phoneOrEmail: '', // 邮箱 或 手机号
        pass: '', // 密码
        yzm: '' // 验证码
      },
      ze: {
        phoneZe: new RegExp('^1[3456789]\\d{9}$'), // 电话正则
        numberZe: new RegExp('^[\\d]+$'), // 纯数字正则
        emailZe: new RegExp('^[A-Za-z0-9]+([_\\.]{0,1})([A-Za-z0-9]+)*@([A-Za-z0-9]+)([\\.]{1})+[A-Za-z]{2,6}$'), // 邮箱正则
        passZe: new RegExp('(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^=/\\._\\-|\\*\\-&*()]{6,18}$') // 密码正则
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
  },
  methods: {
    // 获取短信验证码
    getYzm: function () {
      this.obj.btnStatu = -1
      const interval = setInterval(() => {
        this.obj.msg = this.obj.startTime
        this.obj.startTime--
        if (this.obj.startTime === 0) {
          this.obj.msg = '重新发送'
          this.obj.btnStatu = 1
          this.obj.startTime = 120
          clearInterval(interval)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
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
