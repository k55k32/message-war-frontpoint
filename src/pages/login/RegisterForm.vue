<template>
  <form class="login-form" @submit.prevent="formSubmit">
    <p class="title">
      {{'Register a new account'}}
    </p>
    <div class="input-wrapper">
      <input type="text" placeholder="Username" v-model="username" required>
      <input type="password" placeholder="Password" v-model="password" required>
      <input type="email" placeholder="Email" v-model="email" required>
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
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    switchRegister () {
      this.$router.replace({name: 'login'})
    },
    formSubmit () {
      this.$post(this.api.register, this.$data).then(({result}) => {
        console.log(result)
      })
      console.log('rgs')
    }
  }
}
</script>

<style lang="less">
@import "../../assets/less/loginform.less";
</style>
