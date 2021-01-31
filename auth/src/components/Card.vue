<template>
  <div class="card">
    <h2 class="card__tatle">{{ title }}</h2>
    <p class="card__text">{{ text }}</p>
    <p class="card__created">{{ created }}</p>
    <b-button @click="slam" v-if="user.role === 'reader'" class="card__claps">
      {{ claps }}
    </b-button>
    <b-button v-if="user.role === 'writer'" class="card__delete"
      >Удалить</b-button
    >
    <b-button v-if="user.role === 'writer'" class="card__edit">
      Редактировать
    </b-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["title", "text", "created", "claps", "user", "id"],

  methods: {
    slam() {
      let claps = this.claps + 1;
      axios
        .patch(`http://localhost:3000/posts/${this.id}`, { claps: claps })
        .then(() => {
          this.$store.dispatch("fetchPosts");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  min-height: 300px;
  background-color: rgb(245, 243, 141);
  padding: 10px;
}
</style>
