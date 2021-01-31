<template>
  <form @submit.prevent="CreateCard" class="createCardForm">
    <b-field label="Title">
      <b-input v-model="title" maxlength="100" required=""></b-input>
    </b-field>

    <b-field label="Text">
      <b-input
        required
        maxlength="1000"
        v-model="text"
        type="textarea"
      ></b-input>
    </b-field>
    <b-button tag="input" native-type="submit" value="Создать карточку" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      text: "",
      date: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.getLoggedUser;
    },
  },
  methods: {
    CreateCard() {
      this.date = new Date();
      const id = Math.random()
        .toString(16)
        .slice(2);
      axios
        .post("http://localhost:3000/posts", {
          id: id,
          title: this.title,
          description: this.text,
          claps: 0,
          createdAt: this.date,
          updateAt: this.date,
          userId: this.user.id,
        })
        .then(() => {
          this.$store.dispatch("fetchPosts");
          this.title = '';
          this.text = '';
          alert('Карточка успешно создана.')
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.createCardForm {
  padding-top: 200px;
  margin: 0 auto;
  width: 50%;
}
</style>
