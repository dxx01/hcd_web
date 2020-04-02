<template>
  <div id="fenlei">
      <div class="type">
        <span>类型:</span>
        <el-radio v-model="type" label="1">文章</el-radio>
        <el-radio v-model="type" label="2">提问</el-radio>
        <el-radio v-model="type" label="3">生活</el-radio>
      </div>
      <div class="classify">
        <span>分类:</span>
        <div>
            <el-select v-model="classify" clearable placeholder="请选择" size="small">
            <el-option
              v-for="item in classifys"
              :key="item.classify"
              :label="item.name"
              :value="item.classify">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="tags">
        <span>标签:</span>
        <div>
          <el-select v-model="tag" multiple :multiple-limit="5" placeholder="请选择" size="small">
            <el-option
              v-for="item in tags"
              :key="item.tag"
              :label="item.name"
              :value="item.tag">
            </el-option>
          </el-select>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'fenlei',
  props: [''],
  data () {
    return {
      type: '1',
      classify: '',
      tag: '',
      classifys: [{
        classify: '1',
        name: '开发语言'
      }, {
        classify: '2',
        name: '平台语言'
      }, {
        classify: '3',
        name: '服务器'
      }, {
        classify: '4',
        name: '数据库'
      }, {
        classify: '5',
        name: '开发工具'
      }],
      tags: [{
        tag: '1',
        name: '开发语言'
      }, {
        tag: '2',
        name: '平台语言'
      }, {
        tag: '3',
        name: '服务器'
      }, {
        tag: '4',
        name: '数据库'
      }, {
        tag: '5',
        name: '开发工具'
      }, {
        tag: '6',
        name: '蛋黄派'
      }]
    }
  },

  components: {},

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {},

  watch: {}

}

</script>
<style lang='scss' scoped>
#fenlei {
    padding: 0;
    margin: 0;
    span {
      padding-right: 20px;
    }
    .type {
      padding: 10px 0 20px 0;
    }
    .classify {
      display: flex;
    }
    .tags {
      display: flex;
      padding: 10px 0;
    }
}
</style>
