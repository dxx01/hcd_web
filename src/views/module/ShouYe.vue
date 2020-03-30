<template>
  <div id="shouye">
    <div class="sy-left">
      <div class="header">
        <el-link :underline="false" :class="{'active': activeInfo.active1 == '热门'}" @click.native="active1Check">热门</el-link>
        <el-link :underline="false" :class="{'active': activeInfo.active1 == '最新'}" @click.native="active1Check">最新</el-link>
        <el-link :underline="false" :class="{'active': activeInfo.active1 == '热榜'}" @click.native="active1Check">热榜</el-link>
      </div>
      <div class="middle">
        <div class="info-list">
          <a>酷炫猪猪</a>
          <span>·</span>
          <p>8小时前</p>
          <span>·</span>
          <div class="tags">
            <a v-for="(tag, index) in tags" :key="index">{{tag}}</a>
          </div>
        </div>
        <div class="info-title">
          <a>java最新面试技巧</a>
        </div>
        <div class="info-icons">
          <div class="info-icon">
              <div>
                <img :src="infoIcon.dianzan">
              </div>
              <p>{{userInfo.dianzanNum}}</p>
          </div>
          <div class="info-icon">
              <div>
                <img :src="infoIcon.pinglun" style="margin-top:6px;">
              </div>
              <p>{{userInfo.pinglunNum}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sy-right">
      <div class="ranking">
        <div class="title">
          <div>
            🎖️周排行榜
          </div>
          <div class="title-right">
            <a :class="{'active': activeInfo.active2 == '点赞'}" @click="active2Check">点赞</a>
            <span> · </span>
            <a :class="{'active': activeInfo.active2 == '浏览'}" @click="active2Check">浏览</a>
          </div>
        </div>
        <div class="user-list" v-for="(user, index) in userList" :key="index">
          <a>
            <div>
              <img :src="user.photo" alt="图片丢失了">
            </div>
            <div>
              <span>{{user.userName}}</span> <span class="dzNum">{{user.dzNum}}</span>
              <p>{{user.signature}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'shouye',
  props: [''],
  data () {
    return {
      activeInfo: { /* 默认选中的状态 */
        active1: '热门',
        active2: '点赞'
      },
      tags: ['java', 'javascript', 'db'],
      infoIcon: {
        dianzan: require('../../assets/img/info-icon/dianzan.svg'),
        dianzanActive: require('../../assets/img/info-icon/dianzan-active.svg'),
        pinglun: require('../../assets/img/info-icon/pinglun.svg')
      },
      srcStatus: {
        dianzanStatus: false
      },
      userInfo: {
        dianzanNum: '261',
        pinglunNum: '50'
      },
      userList: [
        {
          photo: require('../../assets/img/default-user.png'),
          userName: '张三',
          dzNum: '123',
          signature: '世间有一种温暖，叫做希望。———— 剑圣'
        },
        {
          photo: require('../../assets/img/default-user.png'),
          userName: '李四',
          dzNum: '105',
          signature: '谁知我知你，我知你知深。————锐雯'
        },
        {
          photo: require('../../assets/img/default-user.png'),
          userName: '李四',
          dzNum: '105',
          signature: '谁知我知你，我知你知深。————锐雯'
        },
        {
          photo: require('../../assets/img/default-user.png'),
          userName: '李四',
          dzNum: '105',
          signature: '谁知我知你，我知你知深。————锐雯'
        }
      ]
    }
  },
  methods: {
    /* 切换热门、最新、热榜的状态 */
    active1Check (event) {
      console.log(event)
      this.activeInfo.active1 = event.target.innerText
    },
    /* 切换点赞和浏览 */
    active2Check (event) {
      this.activeInfo.active2 = event.target.innerText
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../assets/scss/ShouYe.scss';
</style>
