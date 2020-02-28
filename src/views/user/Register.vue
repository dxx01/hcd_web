<template>
  <div id="lrf-user">
    <div id="lrf-box">
      <div class="lrf-title">注册
      </div>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm">
            <el-form-item label="" prop="nickName">
                <div class="lrf-lable" style="margin-top: 30px;">你的名字</div>
                <el-input type="text" v-model="registerForm.nickName" autocomplete="off" placeholder="真实姓名 或 昵称"></el-input>
            </el-form-item>
            <el-form-item label="" prop="phone">
                <div class="lrf-lable">手机号</div>
                <el-input type="text" v-model="registerForm.phone" autocomplete="off" placeholder="11位手机号"></el-input>
            </el-form-item>
            <el-form-item label="" prop="yzm">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12" style="text-align:center">
                    <el-input type="text" v-model="registerForm.yzm" autocomplete="off" placeholder="短信验证码"></el-input>
                    </el-col>
                    <el-col :span="10">
                    <el-button  class="lrf-button" @click="getYzm()" :disabled="obj.btnStatu == 1 ? false : true" style="padding:12px 0">{{obj.msg}}</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="" prop="pass">
                <div class="lrf-lable">密码</div>
                <el-input type="password" v-model="registerForm.pass" autocomplete="off" placeholder="不少于六位的密码，至少包含数字 和 英文" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-row type="flex" justify="center" style="margin-top:40px;">
                    <el-col :span="8" style="text-align:center">
                    <el-button type="primary" class="lrf-button">注册</el-button>
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
    // 名字处理
    var validatenickName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('名字不能为空'))
      } else if (!this.ze.nickNameZe.test(value)) {
        callback(new Error('只能含有中文、数字、英文、下划线'))
      }
      callback()
    }
    // 电话处理
    var validatephone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (!this.ze.phoneZe.test(value)) {
        callback(new Error('无效电话号码'))
      }
      // 只有电话邮箱这里有效时，改变发送短信按钮状态
      this.obj.btnStatu = 1
      callback()
    }
    // 密码处理
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        console.log(value.length)
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
    return {
      obj: {
        msg: '获取短信验证码',
        btnStatu: -1, // 警用获取验证码的状态
        startTime: 120 // 倒计时初始值
      },
      registerForm: {
        nickName: '', // 你的名字
        phone: '', // 手机号
        pass: '', // 密码
        yzm: '' // 验证码
      },
      ze: {
        nickNameZe: new RegExp('^[a-zA-Z0-9_\u4e00-\u9fa5]+$'), // 名字正则
        phoneZe: new RegExp('^1[3456789]\\d{9}$'), // 电话正则
        numberZe: new RegExp('^[\\d]+$'), // 纯数字正则
        passZe: new RegExp('(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^=/\\._\\-|\\*\\-&*()]{6,18}$') // 密码正则
      },
      rules: {
        nickName: [
          { validator: validatenickName, trigger: 'blur' }
        ],
        phone: [
          { validator: validatephone, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
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

<style lang="less" scoped>
.lrf-lable {
    line-height: 20px;
    font-family: "Hiragino Sans GB";
    margin-bottom: 5px;
}
.lrf-button {
    width: 100%;
    text-align: center;
}
.lrf-icon {
  color:#409eff;
  line-height: 1.42858
}
</style>
