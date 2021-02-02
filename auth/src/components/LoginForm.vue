<template>
  <form @submit.prevent="login" class="login-form">
    <b-field label="Email">
      <b-input v-model="email" type="email" required> </b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="password" type="password" required password-reveal>
      </b-input>
    </b-field>
    <b-button tag="input" native-type="submit" value="Войти" />
  </form>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchUsers");
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.getLoggedUser;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      if (this.user.id) {
        this.email = "";
        this.password = "";
        this.$router.push({ name: "main" }).catch(() => {});
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  padding-top: 200px;
  margin: 0 auto;
  width: 30%;
}
</style>
