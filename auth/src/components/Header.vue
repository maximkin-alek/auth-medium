<template>
  <header class="header">
    <p @click="$router.push({ name: 'main' }).catch(() => {})" class="logo">
      Authorization Vue
    </p>
    <router-link class="link" v-if="user.role === 'writer'" to="/create">Создать пост</router-link>
    <router-link
      v-if="user.login == undefined"
      class="user-name link"
      :to="'/login'"
      >Войти</router-link
    >
    <b-button v-else class="user-name" @click="logout"
      >Выйти из системы</b-button
    >
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getLoggedUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: 'main' }).catch(() => {});
    },
    
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  min-height: 80px;
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(151, 150, 196);
}
.logo {
  font-size: 32px;
  cursor: pointer;
}
.user-name {
  width: fit-content;
  height: 30px;
  border-radius: 10px;
}
.link{
  font-size: 18px;
  color: white;
  transition: color 0.3s ease-in-out;
}
.link:hover {
  color: rgb(223, 238, 18);
}
</style>
