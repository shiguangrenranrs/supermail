<template>
  <div id="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <p>用户评价</p>
      <span>更多</span>
    </div>
    <div class="info-body">
      <div class="info-user">
        <div class="user-icon" :style="userIconComputed"></div>
        <p class="user-name">
          {{ commentInfo.user.uname }}
        </p>
      </div>
      <div class="info-detail">
        <div class="info-text">
          {{ commentInfo.content }}
        </div>
        <div class="info-other">
          <span class="info-time">{{ infoTime(commentInfo.created) }}</span>
          <span class="info-style">{{ commentInfo.style }}</span>
        </div>
      </div>
    </div>
    <!-- <pre style="width: 100%; overflow: hidden">{{ commentInfo }}</pre> -->
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    userIconComputed() {
      return `background-image:url(${this.commentInfo.user.avatar});`;
    },
    infoTime() {
      return (time_sec) => {
        const date = new Date(time_sec * 1000);
        return formatDate(date,"yyyy-MM-dd hh:mm");
      };
    },
  },
};
</script>

<style scoped>
#comment-info {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 10px 15px;
  width: 100%;
}
.info-header {
  overflow: hidden;
  height: 44px;
  border-bottom: 1px solid #ccc;
  line-height: 44px;
}
.info-header p {
  float: left;
}
.info-header span {
  float: right;
  font-size: 14px;
}
.info-user {
  display: flex;
  justify-content: flex-start;
  /* flex: start; */
  align-items: center;
  padding: 10px 0;
}
.info-user .user-icon {
  width: 42px;
  height: 42px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
  background-position: center center;
}
.info-user .user-name {
  padding-left: 10px;
}
.info-other {
  font-size: 12px;
  margin-top: 10px;
}
</style>