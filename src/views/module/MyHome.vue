<template>
  <div id="myhome">
    <button class="btn1" @click="put">点击</button>
  </div>
</template>

<script>
export default {
  name: 'myhome',
  props: [''],
  data () {
    return {}
  },

  components: {},

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    put () {
      $.ajax({
        type: 'get',
        url: 'http://localhost:5555/index',
        // url: 'http://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        success: function (msg) {
          console.log(msg)
        }
      })
    }
  },

  watch: {}
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/MyHome.scss';
</style>
