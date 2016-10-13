<template lang="html">
  <div class="toast-queen">
    <transition-group name="fade"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut" tag="div">
      <toast v-for="t in list" :key="t.id" :title="t.title" :content="t.content" :type="t.type" @close="close(t.id)"></toast>
    </transition-group>
  </div>
</template>

<script>
import Toast from 'Toast'
export default {
  components: {Toast},
  props: ['list'],
  data () {
    return {}
  },
  methods: {
    close (id) {
      this.$emit('close', id)
    }
  }
}
</script>

<style lang="less">
.toast-queen{
  position: fixed;
  z-index: 5000;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  &>div{
    display: flex;
    &>div{
      margin-left: 10px;
    }
  }
}
</style>
