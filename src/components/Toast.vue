<template lang="html">
  <div class="toast" :class="type">
    <div class="title">
      <i class="fa fa-remove" @click="close()"></i>
      {{title}}
    </div>
    <div class="content">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'type'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/base.less";
.toast{
  width: 300px;
  text-align: center;
  background-color: @bg-dark;
  color: @font-h-color;
  .title{
    border-bottom: 2px solid @font-import;
    padding: 10px;
    position: relative;
    &>i.fa{
      position: absolute;
      left: -5px;
      top: -5px;
      font-size: 15px;
      cursor: pointer;
    }
  }
  .content{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.import{
    background-color: @font-import;
    .title{
      border-color: @bg-dark;
    }
  }
}
</style>
