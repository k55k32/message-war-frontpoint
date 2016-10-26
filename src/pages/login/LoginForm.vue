<template lang="jade">
form.login-form(@submit.prevent="formSubmit")
  p.title Login to your account
  .input-wrapper
    input(type="text" placeholder="Username" v-model="username" required)
    input(type="password" placeholder="Password" v-model="password" required)
  .submit-group
    div
      button.login-button(type="submit") LOGIN
      a forget password?
    div
      button.login-button.register(type="button" @click="switchRegister") REGISTER
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
