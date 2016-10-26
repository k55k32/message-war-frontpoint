<template lang="jade">
form.login-form(@submit.prevent="formSubmit")
  p.title Register a new account
  .input-wrapper
    input(type="text" placeholder="Username" v-model="username" required)
    input(type="password" placeholder="Password" v-model="password" required)
    input(type="email" placeholder="Email" v-model="password" required)
  .submit-group
    div
      button.login-button(type="submit") REGISTER
    div
      button.login-button.register(type="button" @click="switchRegister") BACK
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
