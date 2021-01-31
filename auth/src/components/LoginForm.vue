<template>
  <form @submit.prevent="login" class="login-form">
    <b-field label="Email">
      <b-input v-model="email" type="email" required > </b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="password" type="password" required password-reveal>
      </b-input>
    </b-field>
    <b-button tag="input" native-type="submit" value="Submit input" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
      login() {
      this.$store.dispatch("login", { email: this.email, password: this.password });
      this.email = '';
      this.password = '';
    },
  }
};
</script>

<style  scoped>
.login-form {
    padding-top: 200px;
  margin: 0 auto;
  width: 30%;
}</style>
