<template>
  <form class="login-form" @submit.prevent="formSubmit">
    <p class="title">
      {{'Register a new account'}}
    </p>
    <div class="input-wrapper">
      <input type="text" placeholder="Username" required>
      <input type="password" placeholder="Password" required>
      <input type="email" placeholder="Email" required>
    </div>
    <div class="submit-group">
      <div>
        <button type="submit" class="login-button">
          {{'REGISTER'}}
        </button>
      </div>
      <div>
        <button type="button" class="login-button register" @click="switchRegister">
          {{'BACK'}}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    switchRegister () {
      this.$router.replace({name: 'login'})
    },
    formSubmit () {
      console.log('rgs')
    }
  }
}
</script>

<style lang="less">
@import "../../assets/less/loginform.less";
</style>
