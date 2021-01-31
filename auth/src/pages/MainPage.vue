<template>
  <div>
    <my-header />

    <div class="container">
      <card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :text="card.description"
        :created="card.createdAt"
        :claps="card.claps"
        :user="user"
        :id="card.id"
      />
    </div>
   
  </div>
</template>

<script>
import Header from "@/components/Header";
import Card from "@/components/Card";

export default {
    
  beforeMount() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchUsers");
  },

  components: {
    'my-header': Header,
    'card': Card,
  },
  computed: {
    cards() {
      return this.$store.getters.getPosts;
    },
    user() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 50px;
    gap: 10px;
}</style>
