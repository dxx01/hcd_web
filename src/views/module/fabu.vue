<template>
  <div id="fabu">
    <div class="header">
        <div class="input">
          <input type="text" id="title" placeholder="请输入文章标题...">
        </div>
        <div class="button">
          <el-button type="text" @click="DialogVisible = true">发布</el-button>
          <el-dialog
            title="发布文章"
            :visible.sync="DialogVisible"
            width="500px"
            center>
            <FL ref="fl"></FL>
            <span slot="footer" class="dialog-footer">
              <el-button @click="DialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="send()">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="txBox">
          <el-menu  mode="horizontal" active-text-color='#909399' >
            <el-submenu index="1" popper-class='tx'>
                <template slot="title">
                    <img src="~@/assets/img/default-user.png">
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-divider></el-divider>
                <el-menu-item index="1-4">选项4</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
    </div>
    <!-- ueditor编辑模板 -->
    <div class="ueditor">
      <ue></ue>
    </div>
  </div>
</template>

<script>
// 引入分类组件和富文本组件
import FL from '../../components/FenLei'
import ue from '../../components/Editor'
export default {
  name: 'fabu',
  props: [''],
  data () {
    return {
      DialogVisible: false,
      obj: {
        title: '', // 标题
        content: '', // 内容
        type: '', // 类型
        classify: '', // 分类
        tag: [] // 标签
      }
    }
  },

  components: {
    ue,
    FL
  },

  computed: {},

  beforeMount () {},

  mounted () {
    // 进入页面默认选中标题输入框
    $('#title').focus()
  },

  methods: {
    // 确认按钮
    send () {
      const pass = this.isPass()
      if (pass === true) {
        this.$refs.fl.empty() // 请空子组件选项
        this.DialogVisible = false
        console.log(JSON.parse(JSON.stringify(this.obj)))
      }
    },

    // 对类型、分类和标签进行半段
    isPass () {
      // 判断类型
      if (JSON.parse(JSON.stringify(this.$refs.fl.type)) === '') {
        this.$message('请选择一个类型')
        return false
      } else {
        this.obj.type = JSON.parse(JSON.stringify(this.$refs.fl.type))
      }
      // 判断分类
      if (JSON.parse(JSON.stringify(this.$refs.fl.classify)) === '') {
        this.$message('请选择一个分类')
        return false
      } else {
        this.obj.classify = JSON.parse(JSON.stringify(this.$refs.fl.classify))
      }
      // 判断标签
      if (JSON.parse(JSON.stringify(this.$refs.fl.tag)).length === 0) {
        this.$message('请至少选择一个标签')
        return false
      } else {
        this.obj.tag = JSON.parse(JSON.stringify(this.$refs.fl.tag))
      }
      return true
    }
  },

  watch: {}

}

</script>
<style lang='scss'>
@import '../../assets/scss/FaBu.scss';
</style>
