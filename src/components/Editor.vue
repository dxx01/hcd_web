<template>
    <div id="UE">
        <vue-ueditor-wrap v-model="value" :config="config"></vue-ueditor-wrap>
    </div>
</template>

<script>
export default {
  name: 'UE',
  data () {
    return {
      value: '这是我调用vue-ueditor-wrap的案例',
      config: {
        // 初始容器高度
        initialFrameHeight: '100%',
        // 初始容器宽度
        initialFrameWidth: '100%',
        serverUrl: 'http://35.201.165.105:8000/controller.php',
        UEDITOR_HOME_URL: '/UE/'
      }
    }
  }
}
</script>
