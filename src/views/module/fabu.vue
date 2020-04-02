<template>
  <div id="fabu">
    <div class="header">
        <div class="input">
          <input type="text" id="title" placeholder="请输入文章标题...">
        </div>
        <div class="button">
          <el-button type="text" @click="DialogVisible = true">发布文章</el-button>
          <el-dialog
            title="发布文章"
            :visible.sync="DialogVisible"
            width="500px"
            center>
            <FL></FL>
            <span slot="footer" class="dialog-footer">
              <el-button @click="DialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="DialogVisible = false">确 定</el-button>
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
      DialogVisible: false
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

  methods: {},

  watch: {}

}

</script>
<style lang='scss'>
@import '../../assets/scss/FaBu.scss';
</style>
