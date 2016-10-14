<template lang="html">
  <div id="login" class="page">
    <div class="left">
      <div class="logo">
        <!-- i need a logo -->
      </div>
      <div class="welcome">
        <h2>Welcome Come</h2>
        <h2>To the Message War</h2>
      </div>
      <div class="">
        copyright nothing at all
      </div>
    </div>
    <div class="right">
      <div class="">
        <!-- just nothing here-->
      </div>
      <div class="">
        <transition name="fade"
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOutDown" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
      <div class="">
        &nbsp;we dont need copy right
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
@import "../../assets/less/base.less";
#login{
  display: flex;
  .left,.right{
    flex:1;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    &>div{
      width: 100%;
    }
  }
  .left{
    justify-content: flex-end;
    background: @font-import;
    color:@font-h-color;
    text-align: right;
    .welcome{
      padding: 50px;
    }
  }
  .right{
    align-items: center;
    overflow: hidden;
  }
}
</style>
