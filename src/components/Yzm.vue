<template>
  <div id="yzm">
      <canvas id="canvas" @click="clickYzm" width="100%" height="38px"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Yzm',
  props: [],
  data () {
    return {
      registerYzm: ''
    }
  },

  components: {},

  computed: {},

  beforeMount () {
  },

  mounted () {
    const showNum = []
    this.draw(showNum)
    this.$emit('setYzm', this.registerYzm)
    this.registerYzm = ''
  },
  methods: {
    clickYzm: function () {
      const showNum = []
      this.draw(showNum)
      this.$emit('setYzm', this.registerYzm)
      this.registerYzm = ''
    },
    // 得到随机的颜色值
    randomColor: function () {
      var r = Math.floor(Math.random() * 256)
      var g = Math.floor(Math.random() * 256)
      var b = Math.floor(Math.random() * 256)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    // 生成并渲染出验证码图形
    draw: function (showNum) {
      var canvasWidth = $('#canvas').width()
      var canvasHeight = $('#canvas').height()
      var canvas = document.getElementById('canvas')// 获取到canvas的对象
      var context = canvas.getContext('2d')// 获取到canvas画图的环境
      canvas.width = canvasWidth
      canvas.height = canvasHeight
      var sCode = 'a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0'
      var aCode = sCode.split(',') // 把字符串分割成字符串数组。
      var aLength = aCode.length// 获取到数组的长度
      for (var i = 0; i < 4; i++) { // 这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
        var j = Math.floor(Math.random() * aLength)// 获取到随机的索引值,random() 方法可返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。
        // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var deg = Math.random() - 0.5 // 产生一个随机弧度
        var txt = aCode[j]// 得到随机的一个内容
        showNum[i] = txt.toLowerCase()
        var x = 10 + i * 20// 文字在canvas上的x坐标
        var y = 20 + Math.random() * 8// 文字在canvas上的y坐标
        context.font = 'bold 23px 微软雅黑'
        context.translate(x, y)
        context.rotate(deg)
        // eslint-disable-next-line no-undef
        context.fillStyle = this.randomColor()
        context.fillText(txt, 0, 0)
        context.rotate(-deg)
        context.translate(-x, -y)
        this.registerYzm += txt
      }
      // eslint-disable-next-line no-redeclare
      for (var i = 0; i <= 5; i++) { // 验证码上显示线条
        // eslint-disable-next-line no-undef
        context.strokeStyle = this.randomColor()
        context.beginPath()
        context.moveTo(Math.random() * canvasWidth, Math.random() * canvasHeight)
        context.lineTo(Math.random() * canvasWidth, Math.random() * canvasHeight)
        context.stroke()
      }
      // eslint-disable-next-line no-redeclare
      for (var i = 0; i <= 30; i++) { // 验证码上显示小点
        // eslint-disable-next-line no-undef
        context.strokeStyle = this.randomColor()
        context.beginPath()
        // eslint-disable-next-line no-redeclare
        var x = Math.random() * canvasWidth
        // eslint-disable-next-line no-redeclare
        var y = Math.random() * canvasHeight
        context.moveTo(x, y)
        context.lineTo(x + 1, y + 1)
        context.stroke()
      }
      return showNum + ''
    }

  },

  watch: {}
}
</script>
