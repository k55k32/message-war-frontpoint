<template>
  <form class="login-form" @submit.prevent="formSubmit">
    <p class="title">
      {{'Login to your account'}}
    </p>
    <div class="input-wrapper">
      <input type="text" placeholder="Username" v-model="username" required>
      <input type="password" placeholder="Password" v-model="password" required>
    </div>
    <div class="submit-group">
      <div>
        <button type="submit" class="login-button">
          {{'LOGIN'}}
        </button>
        <a>forget password?</a>
      </div>
      <div>
        <button type="button" class="login-button register" @click="switchRegister">
          {{'REGISTER'}}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    switchRegister () {
      this.$router.replace({name: 'register'})
    },
    formSubmit () {
      this.$post(this.api.login, this.$data).then(r => {
        console.log('post success: ', r)
      })
      console.log('login')
    }
  }
}
</script>

<style lang="less">
@import "../../assets/less/loginform.less";
</style>
