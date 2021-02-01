<template>
  <div class="card">
    <h2 class="card__tatle">{{ title }}</h2>
    <p class="card__text">{{ text }}</p>
    <p class="card__created">{{ createdDate }}</p>
    <div class="card__button-container">
      <b-button
        @click="slam"
        :disabled="user.role !== 'reader'"
        class="card__button card__claps"
      >
        &#128079;
        {{ claps }}
      </b-button>
      <b-button
        @click="deleteCard"
        v-if="user.role === 'writer' && user.id === userID"
        class="card__button card__delete"
        type="is-danger is-light"
        >&#10008; Удалить</b-button
      >
      <b-button
        @click="$router.push({ name: 'edit-card', params: { id: id } })"
        v-if="user.role === 'writer' && user.id === userID"
        class="card__button card__edit"
      >
        &#9998; Редактировать
      </b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["title", "text", "created", "claps", "user", "id", "userID"],
  computed: {
    createdDate() {
      let dateCreated = new Date(this.created);
      const formatter = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      let dateStr = formatter.format(dateCreated);

      return dateStr;
    },
  },

  methods: {
    slam() {
      console.log(this);
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
    deleteCard() {
      axios
        .delete(`http://localhost:3000/posts/${this.id}`)
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
  min-width: 300px;
  min-height: 300px;
  background-color: rgb(245, 243, 141);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card__tatle {
  font-size: 24px;
}
.card__text {
  margin: 20px 0;
  font-size: 18px;
}
.card__button-container {
  display: flex;
  justify-content: flex-end;
}
.card__button {
  margin-left: 10px;
}
</style>
