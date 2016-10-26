<template lang="jade">
#login.page
  .left
    .login
    .welcome
      h2 Welcome Come
      h2 To the Message War
    div copyright nothing at all
  .right
    div
    div
      transition(name="fade" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown" mode="out-in")
        keep-alive
          router-view
    div &nbsp;we dont need copy right123
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
