<template>
  <div class="page">
    <transition name="fade"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>

    <toast-queen :list="$store.state.toastQueen" @close="closeToast"></toast-queen>
  </div>
</template>

<script>
import ToastQueen from 'ToastQueen'
export default {
  components: {ToastQueen},
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="less">
@import "./assets/css/animate.css";
@import "./assets/less/global.less";
</style>
