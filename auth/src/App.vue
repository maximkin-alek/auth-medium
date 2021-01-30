<template>
  <div id="app">
    <Header />

    <div class="container">
      <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :text="card.description"
        :created="card.createdAt"
        :claps="card.claps"
      />
      <p>{{ user.role }}</p>
      <button @click="login">Логин</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Card from "@/components/Card";

export default {
  name: "App",
  components: {
    Header,
    Card,
  },
  methods: {
    login() {
      this.$store.dispatch("login", { email: "reader@mail.com" });
    },
  },
  computed: {
    cards() {
      return this.$store.getters.getPosts;
    },
    user() {
      return this.$store.getters.getLoggedUser;
    },
  },
  beforeMount() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  display: grid;
  grid-auto-flow: column;
  padding: 50px;
}
</style>
